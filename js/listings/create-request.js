import { auth, db } from '../auth/firebase-config.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js';
import { addDoc, collection, serverTimestamp } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';

const form = document.getElementById('receive-form');
const message = document.getElementById('request-message');
const submit = document.getElementById('request-submit');
let currentUser = null;
onAuthStateChanged(auth, user => {
  currentUser = user;
  if (!user) {
    message.textContent = 'リクエストを投稿するにはログインしてください。';
    submit.disabled = true;
    setTimeout(() => location.assign('auth/login.html?next=' + encodeURIComponent('../receive-item.html')), 1200);
  } else submit.disabled = false;
});
form.addEventListener('submit', async event => {
  event.preventDefault();
  message.classList.remove('success');
  if (!currentUser) { message.textContent = 'ログインしてください。'; return; }
  if (!form.reportValidity()) return;
  const min = Number(document.getElementById('budget-min').value);
  const max = Number(document.getElementById('budget-max').value);
  if (![min, max].every(n => Number.isSafeInteger(n) && n >= 0 && n <= 1000000) || min > max) {
    message.textContent = '予算の最小額は最大額以下にしてください。'; return;
  }
  submit.disabled = true;
  message.textContent = 'リクエストを保存しています…';
  try {
    await addDoc(collection(db, 'requests'), {
      userId: currentUser.uid,
      title: document.getElementById('request-title').value.trim(),
      category: document.getElementById('request-category').value,
      condition: document.getElementById('request-condition').value,
      location: document.getElementById('request-location').value.trim(),
      budgetMin: min,
      budgetMax: max,
      note: document.getElementById('request-note').value.trim(),
      status: 'open',
      createdAt: serverTimestamp()
    });
    form.reset();
    message.classList.add('success');
    message.textContent = 'リクエストを投稿しました！';
    setTimeout(() => location.assign('auth/profile.html'), 1400);
  } catch (error) {
    console.error('Request submission failed:', error);
    message.textContent = '保存できませんでした。Firestore の権限を確認してください。';
    submit.disabled = false;
  }
});
