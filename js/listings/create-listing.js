import { auth, db } from '../auth/firebase-config.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js';
import { addDoc, collection, serverTimestamp } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js';

const form = document.getElementById('give-form');
const message = document.getElementById('form-message');
const submit = document.getElementById('submit-button');
const photoInput = document.getElementById('photos');
const preview = document.getElementById('photo-preview');
const description = document.getElementById('description');
const price = document.getElementById('price');
const storage = getStorage(auth.app);
let currentUser = null;
let previewURLs = [];

onAuthStateChanged(auth, user => {
  currentUser = user;
  if (!user) {
    message.textContent = '出品するにはログインしてください。ログインページに移動します。';
    submit.disabled = true;
    setTimeout(() => location.assign('auth/login.html?next=' + encodeURIComponent('../give-item.html')), 1200);
  } else {
    submit.disabled = false;
  }
});

description.addEventListener('input', () => {
  document.getElementById('description-count').textContent = description.value.length;
});
price.addEventListener('input', () => {
  document.getElementById('price-hint').textContent = Number(price.value) === 0 ? '無料で出品します。' : `出品価格：¥${Number(price.value || 0).toLocaleString('ja-JP')}`;
});
photoInput.addEventListener('change', () => {
  previewURLs.forEach(URL.revokeObjectURL);
  previewURLs = [];
  preview.replaceChildren();
  for (const file of photoInput.files) {
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      previewURLs.push(url);
      const img = document.createElement('img');
      img.src = url;
      img.alt = '選択した商品写真';
      preview.append(img);
    }
  }
});

form.addEventListener('submit', async event => {
  event.preventDefault();
  message.classList.remove('success');
  if (!currentUser) { message.textContent = 'ログインしてください。'; return; }
  if (!form.reportValidity()) return;
  const files = [...photoInput.files];
  if (files.length < 1 || files.length > 5) { message.textContent = '写真を1〜5枚選択してください。'; return; }
  if (files.some(file => !['image/jpeg','image/png','image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024)) {
    message.textContent = '写真は JPEG / PNG / WebP、各5MB以下にしてください。'; return;
  }
  const amount = Number(price.value);
  if (!Number.isSafeInteger(amount) || amount < 0 || amount > 1000000) { message.textContent = '価格は0〜1,000,000円の整数で入力してください。'; return; }
  submit.disabled = true;
  message.textContent = '写真をアップロードしています…';
  const uploadedRefs = [];
  try {
    const photoURLs = [];
    for (const file of files) {
      const safeExt = file.type === 'image/png' ? 'png' : file.type === 'image/webp' ? 'webp' : 'jpg';
      const objectPath = `listing-images/${currentUser.uid}/${crypto.randomUUID()}.${safeExt}`;
      const objectRef = ref(storage, objectPath);
      await uploadBytes(objectRef, file, { contentType: file.type });
      uploadedRefs.push(objectRef);
      photoURLs.push(await getDownloadURL(objectRef));
    }
    message.textContent = '商品を保存しています…';
    await addDoc(collection(db, 'products'), {
      userId: currentUser.uid,
      title: form.elements.title.value.trim(),
      category: form.elements.category.value,
      condition: form.elements.condition.value,
      price: amount,
      location: form.elements.location.value.trim(),
      description: form.elements.description.value.trim(),
      photoURLs,
      status: 'available',
      createdAt: serverTimestamp()
    });
    message.classList.add('success');
    message.textContent = '出品が完了しました！ マイページに移動します。';
    form.reset(); preview.replaceChildren();
    setTimeout(() => location.assign('auth/profile.html'), 1300);
  } catch (error) {
    console.error('Listing submission failed:', error);
    message.textContent = '保存に失敗しました。Firestore / Storage の設定・権限を確認してください。';
    // Best-effort cleanup if a document was not created.
    await Promise.allSettled(uploadedRefs.map(item => deleteObject(item)));
    submit.disabled = false;
  }
});
