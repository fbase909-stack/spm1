# ShoppingMart: store + Firebase admin

- **Store:** `public/index.html`
- **Admin panel:** `public/admin.html`

Products, photos, prices and stock live in Firebase. When an admin uploads a photo or changes a price, every open copy of the store updates within a few seconds without a reload.

## What's in this zip

| Folder | What it is |
|---|---|
| `public/` | The live store (`index.html`) and admin panel (`admin.html`), connected to Firebase |
| `firebase.json`, `.firebaserc`, `*.rules` | Firebase Hosting config and security rules |
| `standalone/shoppingmart.html` | Single-file demo of the store. Double-click to open; no setup, no Firebase, sample catalog only |
| `docs/master-prompt.md` | The original specification |

## What's connected to Firebase

| Feature | Where it lives |
|---|---|
| Admin sign-in | Firebase Authentication (email + password) |
| Who counts as admin | Firestore `admins/{uid}` documents |
| Product details, specs, variants, colours, hide/show | Firestore `products/{id}` |
| Product photos | Cloud Storage `products/{id}/…`, URLs saved on the product |
| Recorded prices (price history) | Firestore `products/{id}.priceLog` |
| Stock per variant and colour | Firestore `products/{id}.stock` |

**Still demo-only (saved in each shopper's browser):** customer accounts, carts, wishlists, price alerts, orders and payments. Moving these to Firebase is the next step.

---

## Setup (about 20 minutes)

You need a Google account and [Node.js](https://nodejs.org) 18 or newer.

### 1. Create the Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project**. Name it (for example `shoppingmart`). Google Analytics is optional.
2. **Upgrade to the Blaze plan** (bottom-left, "Upgrade"). Cloud Storage for Firebase now requires a billing account. Usage inside the free allowance costs nothing.
   - Set a budget alert of ₹100 under **Usage and billing → Details & settings** so you're warned early.

### 2. Turn on the three services

1. **Authentication** → Get started → **Sign-in method** → enable **Email/Password**.
2. **Authentication → Users → Add user**: enter your admin email and a strong password.
3. **Firestore Database** → Create database → **Production mode** → pick a location (for India, `asia-south1` Mumbai).
4. **Storage** → Get started → Production mode.
   - The free storage allowance applies to US bucket locations such as `us-central1`. A Mumbai bucket is faster for Indian shoppers but every GB is billed. Small catalogs cost a few rupees a month either way.

### 3. Connect the website to your project

1. In **Project settings** (gear icon) → **General** → **Your apps**, click the web icon `</>`. Register the app (no need to tick Hosting here).
2. Copy the `firebaseConfig` values into **`public/js/firebase-config.js`**.
3. Open **`.firebaserc`** and replace `your-project-id` with your project ID.

### 4. Make yourself an admin

1. In **Authentication → Users**, copy the **User UID** of the account you created.
2. In **Firestore Database** → **Start collection** → Collection ID `admins`.
3. Document ID: paste the UID. Add a field `email` (string) with your email. Save.

Repeat this for every person who should manage products. Remove their document to take admin access away.

### 5. Deploy

```bash
npm install -g firebase-tools
firebase login
cd shoppingmart
firebase deploy
```

This uploads the website to Firebase Hosting and deploys `firestore.rules` and `storage.rules`.

The first time, the CLI may ask to let Storage rules read Firestore, because the admin check needs it. Answer **Yes**.

When it finishes it prints your live URL, for example `https://your-project-id.web.app`.

- Store: `https://your-project-id.web.app`
- Admin: `https://your-project-id.web.app/admin.html`

### 6. Upload your first photo

1. Open `/admin.html` and sign in.
2. Pick a product, then drag photos onto **Photos**.
3. Open the store in another tab. The photo appears within seconds.

---

## Brand and colours

- The name appears in the page titles, header logo, footer and admin bar. Search the files for `ShoppingMart` to change it.
- The store uses a light palette only. The colours are the CSS variables at the top of the `<style>` block in `public/index.html` (and `public/admin.html`). For example, `--accent` is the main button colour and `--bg` is the page background.

## Using the admin panel

- **Photos:** drop several at once. They're resized to 1600 px and compressed to WebP (JPEG on older Safari) before upload.
  - The first photo is the main one. Use ← → and **Main** to reorder.
  - When a product has several colours, tag a photo with a colour. Shoppers then see that photo when they pick that colour; untagged photos show for every colour.
- **Details:** name, brand, product line, description, key features and specifications. Leave a spec empty if the brand doesn't publish it. The comparison tool skips empty specs instead of guessing.
- **Show on store:** untick to hide a product without deleting it.
- **Price:** **Record price** adds an entry to the price history, changes the live price, and fires any customer price alerts it meets.
- **Stock:** units per variant and colour. Products without stock set use sample stock.
- **Add:** create a brand-new product. New products start with no price history, so the store shows "Insufficient price history" until enough prices are recorded.
- **Reset to starter data / Delete product:** removes your changes and photos for that product.

## Running it on your computer

The Firebase scripts need a web server; double-clicking `index.html` won't load them. Use either of these:

```bash
npx serve public          # then open http://localhost:3000
# or
firebase serve            # then open http://localhost:5000
```

If `firebase-config.js` still has the placeholder values, the store runs in demo mode with the built-in sample catalog, and the admin panel shows the setup steps.

## Security notes

- The values in `firebase-config.js` are meant to be public. Security comes from the rules files:
  - anyone can **read** products and photos;
  - only users listed in `admins` can **write**;
  - photo uploads must be JPG/PNG/WebP under 5 MB.
- Nobody can make themselves an admin from the website. The `admins` collection can only be edited in the Firebase console.
- Turn on **App Check** in the Firebase console once you go live, to stop other sites from using your project's quota.

## Files

```
shoppingmart/
├── firebase.json            Hosting + rules config
├── .firebaserc              Your project ID
├── firestore.rules          Database security rules
├── firestore.indexes.json
├── storage.rules            Photo upload rules
├── docs/master-prompt.md    Original specification
└── public/
    ├── index.html           Store
    ├── admin.html           Admin panel
    └── js/
        ├── firebase-config.js   ← paste your config here
        ├── catalog.js           Starter catalog and category specs (shared)
        └── store-sync.js        Live Firestore listener for the store
```

## Next steps

1. Move customer accounts to Firebase Authentication.
2. Move orders to Firestore.
3. Add Razorpay with a Cloud Function that verifies payments on the server.
4. Run a scheduled function that checks price alerts and sends emails.
