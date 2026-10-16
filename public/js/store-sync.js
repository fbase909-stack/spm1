// Live catalog sync for the storefront.
// Listens to the Firestore "products" collection and hands every change to window.applyRemote(),
// so photos, prices, stock and details the admin saves appear on open pages within seconds, no reload needed.
import { FIREBASE_CONFIG, FIREBASE_SDK, isConfigured } from "./firebase-config.js";

const setStatus = (state, detail = "") => window.setLiveStatus && window.setLiveStatus(state, detail);

if (!isConfigured()) {
  setStatus("off", "Firebase is not configured yet. Showing the built-in sample catalog.");
} else {
  try {
    const { initializeApp } = await import(`${FIREBASE_SDK}/firebase-app.js`);
    const { getFirestore, collection, onSnapshot } = await import(`${FIREBASE_SDK}/firebase-firestore.js`);
    const app = initializeApp(FIREBASE_CONFIG);
    const db = getFirestore(app);
    onSnapshot(
      collection(db, "products"),
      (snap) => {
        const docs = {};
        snap.forEach((d) => (docs[d.id] = d.data()));
        window.applyRemote(docs, snap.metadata.fromCache);
        setStatus("live");
      },
      (err) => {
        console.error("Firestore listener failed", err);
        setStatus("error", err.code === "permission-denied"
          ? "Firestore rules are blocking reads. Deploy firestore.rules from this project."
          : "Could not reach Firebase. Showing the last loaded catalog.");
      }
    );
  } catch (err) {
    console.error("Firebase failed to load", err);
    setStatus("error", "Firebase scripts could not load. Open the site through a web server, not as a file.");
  }
}
