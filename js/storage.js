/* ============================================================
   Local data layer (temporary frontend storage)
   ------------------------------------------------------------
   Backendをまだ作っていない段階でも画面を動かせるように、
   ブラウザの localStorage を使います。
   将来 Firebase / PHP / Django / Node.js 等へ移行するときは
   api.js の処理だけ差し替える設計です。
   ============================================================ */
window.MottainaiStore = {
  get(key, fallback = null) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  getUsers() {
    return this.get("mottainai_users", []);
  },
  saveUser(user) {
    const users = this.getUsers();
    users.push(user);
    this.set("mottainai_users", users);
  },
  findUser(account) {
    const normalized = String(account).trim().toLowerCase();
    return this.getUsers().find(
      (u) => u.email?.toLowerCase() === normalized || u.phone === normalized,
    );
  },
  setSession(user) {
    this.set("mottainai_session", {
      id: user.id,
      name: user.name,
      email: user.email || "",
      phone: user.phone || "",
    });
  },
  getSession() {
    return this.get("mottainai_session");
  },
  clearSession() {
    this.remove("mottainai_session");
  },
  addListing(listing) {
    const items = this.get("mottainai_listings", []);
    items.unshift(listing);
    this.set("mottainai_listings", items);
  },
  addRequest(request) {
    const items = this.get("mottainai_requests", []);
    items.unshift(request);
    this.set("mottainai_requests", items);
  },
};
