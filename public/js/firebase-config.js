// Paste your Firebase web app config here.
// Firebase console → Project settings (gear icon) → General → Your apps → Web app → "SDK setup and configuration" → Config.
// These values are safe to publish: access is controlled by firestore.rules and storage.rules, not by hiding this key.
export const FIREBASE_CONFIG = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.firebasestorage.app",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000"
};

export const FIREBASE_SDK = "https://www.gstatic.com/firebasejs/10.12.2";

export const isConfigured = () =>
  !!FIREBASE_CONFIG.apiKey && !FIREBASE_CONFIG.apiKey.startsWith("PASTE") && !FIREBASE_CONFIG.projectId.startsWith("your-");
