# MASTER PROMPT: BUILD A COMPLETE PROFESSIONAL SMART E-COMMERCE WEBSITE

## 1. Project Overview

Build a complete, production-quality, modern e-commerce website with advanced shopping features, smooth animations, intelligent product recommendations, smart product comparison, historical price tracking, price prediction, and automated price alerts.

The website must be a **complete multi-page, fully functional e-commerce application**, not a landing page, single page, static prototype, slide, UI mockup, or collection of non-functional buttons.

Create an end-to-end shopping platform where customers can discover products, explore brands and categories, compare products, track prices, receive price-drop notifications, purchase products securely, and manage their orders.

The website should combine the shopping experience of leading e-commerce platforms with intelligent decision-making tools.

Project name: Use a professional temporary brand name, such as **SmartCart AI**, that can be changed easily later.

Target market: India.

Currency: Indian Rupees (₹).

Design style: Premium, modern, trustworthy, interactive, responsive, and technology-driven.

---

## 2. Complete Website Architecture

Create all necessary pages with working navigation, persistent application state, database integration, proper loading states, error handling, and responsive layouts.

### Main public pages

1. Home page
2. Shop all products
3. Individual category pages
4. Brand-specific product pages
5. Product search results
6. Individual product detail pages
7. Smart product comparison
8. Price history and price prediction
9. Price alerts and watchlist
10. Shopping cart
11. Checkout
12. Payment status and order confirmation
13. Customer registration
14. Customer login
15. Forgot password and password reset
16. Customer account dashboard
17. My orders
18. Individual order details
19. Saved addresses
20. Wishlist
21. Notification center
22. Customer support and FAQ
23. About us
24. Contact us
25. Privacy policy, terms and conditions, shipping, returns, and refund policy

Create separate protected administrative dashboards for managing products, orders, customers, inventory, prices, analytics, and website settings.

All pages must be connected through working navigation. Do not put the entire website inside a single page with hidden or non-functional sections.

---

## 3. Premium Homepage Design

Create a visually impressive homepage with a professional retail design.

### Header and navigation

Include:
- Professional logo and brand name
- Search bar with autocomplete
- Category navigation menu
- Brand navigation
- Compare products shortcut
- Price alerts shortcut
- Wishlist icon
- Account and login menu
- Shopping cart with live item count
- Mobile-friendly navigation menu

Keep the header sticky when scrolling, with a subtle background transition and shadow.

### Hero section

Create a wide, premium hero section with animated product imagery, smooth transitions, and clear calls to action.

Suggested headline:

**Shop Smarter. Compare Better. Save More.**

Supporting text:

“Discover the right products, compare features, predict price drops, and buy at the right time.”

Buttons:
- Shop Now
- Compare Products
- Explore Price Trends

Use polished motion effects, subtle gradients, floating product cards, animated price tags, and high-quality product photography.

### Homepage sections

Include these sections in order:

1. Hero banner
2. Popular product categories
3. Trending products
4. Best deals today
5. Recently added products
6. Top smartphone brands
7. Smart comparison showcase
8. Products with major price drops
9. Price prediction and buying-time insights
10. Popular products with historical price charts
11. Recommended products
12. Best-value products
13. Recently viewed products
14. Customer benefits and shopping guarantees
15. Newsletter and price-alert subscription
16. Complete footer with support and policy links

Every product card must contain real product data from the application database, not repeated hardcoded placeholder cards.

---

## 4. Product Categories and Intelligent Brand Navigation

Build a scalable product catalog with category, brand, model, and product relationships.

Initial categories should include:

- Smartphones
- Laptops and computers
- Tablets
- Smartwatches
- Headphones and audio
- Televisions
- Cameras
- Home appliances
- Gaming products
- Accessories

Allow administrators to add, edit, reorder, and remove categories and brands.

### Required category behavior

When a customer selects **Smartphones**, display all smartphones.

When the customer selects **Apple**, display Apple products.

When the customer selects **iPhone**, display the relevant iPhone models and variants.

When the customer selects **Samsung**, display Samsung products and their relevant models.

For example:

Apple → iPhone → iPhone 17 → available storage and colour variants.

Samsung → Galaxy → Galaxy S series → available storage and colour variants.

These are examples of catalog relationships, not fixed product limitations. The catalog must support new brands, models, and future releases.

Selecting a brand must never incorrectly display unrelated brands.

### Product filters

Implement fully functional filters for:

- Category
- Brand
- Price range
- Minimum and maximum price
- Customer rating
- Availability
- Storage capacity
- RAM
- Processor
- Screen size
- Colour
- Operating system
- Discount percentage
- Price-drop amount
- Predicted future price
- Expected price-drop period

Only show relevant technical filters for each category.

Include sorting options:
- Relevance
- Price: low to high
- Price: high to low
- Highest rated
- Most popular
- Newest arrivals
- Biggest discounts
- Largest recent price drops
- Best predicted value

Filters must work together, update the product list correctly, and be reflected in the URL when appropriate.

---

## 5. Product Cards and Product Detail Pages

Design attractive, consistent product cards with:

- Product image
- Brand and model
- Product title
- Current selling price
- Original or reference price when verified
- Discount percentage where applicable
- Customer rating and review count when available
- Stock availability
- Price-drop indicator
- Predicted price trend
- Compare checkbox
- Wishlist button
- Add to Cart button
- View Details button

Avoid fake ratings, fake discounts, or invented original prices.

### Individual product detail page

Each product must have its own unique, shareable URL.

Display:
- Product image gallery
- Zoomable product images
- Product name and model
- Brand
- Current price
- Verified reference price and discount
- Available variants
- Technical specifications
- Key features
- Product description
- Stock availability
- Delivery estimate based on actual delivery rules
- Seller information where applicable
- Customer reviews
- Similar products
- Alternative products from competing brands
- Smart comparison shortcut
- Historical price chart
- Price prediction
- Price-alert subscription
- Add to Cart
- Buy Now
- Wishlist

When a customer changes a product variant, update the price, availability, specifications, and product identifier accordingly.

---

## 6. User Registration, Login, and Account Management

Create a complete customer authentication system.

### Registration

Allow users to create an account using:
- Full name
- Email address
- Mobile number
- Password
- Password confirmation

Include proper validation, duplicate-account prevention, email or mobile verification where configured, and secure password storage.

### Login

Support secure email or mobile login, password recovery, logout, session management, and optional social login if configured.

Do not display private account information to other customers.

### Customer dashboard

Create a personalized account area containing:
- Profile information
- Order history
- Current order status
- Saved addresses
- Wishlist
- Product comparison history
- Price watchlist
- Price alerts
- Notification preferences
- Recently viewed products
- Return and refund requests
- Account security settings

All customer information must be associated with the authenticated account and protected by server-side authorization.

---

## 7. Shopping Cart and Checkout

Implement a fully functional shopping cart that persists across page navigation and, for signed-in users, across sessions.

### Shopping cart

Include:
- Product image and title
- Selected variant
- Unit price
- Quantity controls
- Stock validation
- Remove item
- Save for later
- Subtotal
- Applicable discounts
- Delivery fee
- Taxes where applicable
- Final payable total

Recalculate totals whenever quantities, products, discounts, or delivery options change.

Prevent checkout for unavailable quantities and validate the final price again on the server.

### Checkout flow

Create a clear multi-step checkout experience:

1. Sign in or continue through an explicitly supported guest checkout.
2. Enter or select a delivery address.
3. Select shipping or delivery options.
4. Review products and quantities.
5. Apply valid coupons if supported.
6. Review taxes and the final total.
7. Choose a payment method.
8. Confirm the order.

### Payment methods

Support integration-ready options appropriate for India:

- UPI
- Credit cards
- Debit cards
- Net banking
- Supported digital wallets
- Cash on delivery, if enabled by the administrator

Integrate a supported payment gateway such as Razorpay or another configured provider.

Use test mode for development and require valid gateway credentials for live payments.

Never store raw card details, CVV values, UPI PINs, or payment credentials in the application database.

Verify payment status using trusted server-side gateway verification and webhooks. Do not mark an order as paid merely because the browser displays a success message.

Handle payment failures, pending payments, duplicate callbacks, cancellations, and retries safely.

---

## 8. Order Placement and Order Tracking

After a successful order placement, show a dedicated order confirmation page.

Display:
- Order number
- Order date and time
- Products ordered
- Selected variants
- Quantity
- Item prices
- Shipping address
- Payment method
- Payment status
- Order subtotal
- Taxes and delivery fees
- Total paid or payable
- Estimated delivery, when available
- Invoice download, when generated
- Customer support contact

### Order status timeline

Support these statuses:

Order Placed → Payment Confirmed → Processing → Packed → Shipped → Out for Delivery → Delivered.

Also support appropriate cancellation, payment failure, refund, and return states.

Customers must be able to open My Orders and view complete details for each order.

Order status updates must be persisted in the database and visible to the relevant customer.

Provide cancellation and return actions only when allowed by the configured order and return policies.

---

## 9. Main Feature One: Smart Product Comparison Engine

Build a dedicated smart comparison system that helps customers identify the best product for their requirements.

This must be a real comparison feature, not just a list of product names and prices.

### Comparison workflow

1. Customers select products from product cards or detail pages.
2. Products are added to a comparison tray.
3. Customers open the Compare Products page.
4. Display products side by side.
5. Compare prices, specifications, features, ratings, warranties, availability, and value.
6. Automatically calculate and highlight the best match according to the customer's priorities.

Support comparisons across similar products and, where meaningful, different brands within the same category.

For example, compare several iPhones or compare an iPhone against a Samsung Galaxy model.

### Comparison attributes

For smartphones, compare:
- Current price
- Verified discount
- Display size and type
- Processor
- RAM
- Storage
- Rear and front cameras
- Battery capacity
- Charging
- Operating system
- Software update policy when verified
- Build quality and water resistance when specified
- Warranty
- Weight
- Customer rating
- Availability
- Historical price trend
- Predicted price trend

For laptops, compare processor, RAM, storage, display, graphics, battery, weight, warranty, and price.

For other categories, dynamically select suitable specifications from the category schema.

### Automatic best-product recommendation

Create a transparent scoring engine that evaluates:

- Price and budget fit
- Technical specifications
- Customer requirements
- Product quality indicators supported by reliable data
- Customer rating, where trustworthy data exists
- Warranty and availability
- Value for money

Allow customers to choose priorities such as:
- Lowest price
- Best performance
- Best camera
- Best battery
- Best value for money
- Best overall
- Best for gaming
- Best for everyday use

Display a highlighted recommendation with a clear explanation, for example:

“Best Overall Match: Product A — offers the strongest balance of performance, storage, warranty, and price for your selected priorities.”

Also identify:
- Lowest-price option
- Best performance option
- Best value option

Use a weighted scoring model with configurable weights and normalized category-specific attributes.

Do not declare a product universally best without context. Explain why it ranks first, show the comparison criteria, and let customers change their priorities.

Every recommendation must be based on actual available product data. Do not fabricate benchmarks, ratings, specifications, or reviews.

---

## 10. Main Feature Two: Price Prediction Engine

Build a dedicated price intelligence system that estimates how a product's price may change in the future.

### Price prediction page

For every supported product, show:
- Current verified price
- Previous recorded prices
- Price one week ago, if recorded
- Price one month ago, if recorded
- Lowest recorded historical price
- Highest recorded historical price
- Average recorded price over the selected period
- Recent price movement
- Predicted price range
- Expected direction: rising, falling, or stable
- Recommended buying window
- Prediction confidence or uncertainty
- Last data update timestamp

Support 7-day, 30-day, 90-day, 6-month, and 1-year history views when enough data exists.

### Historical price chart

Create interactive line charts with:
- Date on the horizontal axis
- Price in ₹ on the vertical axis
- Hoverable data points
- Current price marker
- Historical minimum and maximum
- Selected time-period filters
- Predicted future range displayed separately from actual historical prices

Use different visual treatments for actual recorded data and future estimates.

Never display a predicted value as a real historical price.

### Price prediction logic

Build a modular forecasting service using Python and machine learning where appropriate.

Possible approaches:
- Historical trend analysis
- Moving averages
- Exponential smoothing
- Regression models
- Time-series forecasting
- Gradient-boosted models when sufficient data exists
- Model comparison and validation

Use suitable algorithms based on the quantity and quality of available data. Do not force complex models onto small datasets.

Potential input variables:
- Historical selling prices
- Date and seasonal patterns
- Festival sales
- Verified promotional events
- Seller price changes
- Product age
- Product availability
- Demand indicators, if legitimately available
- Comparable product trends, where appropriate

Train and evaluate forecasting models using chronological train/validation/test splits to prevent future-data leakage.

Track forecast errors and provide uncertainty ranges. If the product lacks enough reliable historical data, display “Insufficient price history for a reliable prediction” instead of generating misleading estimates.

Make it possible to replace the forecasting model later without rebuilding the website.

### Buying recommendation examples

Use data-backed messages such as:

- “The current price is ₹2,000 lower than the recorded price last month.”
- “The price has fallen by 8.5% over the past 30 days.”
- “The product is currently near its lowest recorded price in the last 90 days.”
- “The estimated price may fall within ₹X–₹Y over the next 30 days.”

Only display these messages when supported by actual recorded data or model output.

For each statement, show the comparison period and date range.

Do not promise that a product will become cheaper. Explain that future prices are uncertain and that the prediction is an estimate, not a guarantee.

---

## 11. Main Feature Three: Price Alerts and Notifications

Allow customers to follow products and receive notifications when their prices meet their chosen conditions.

### Create price alert

On each product page, provide a “Set Price Alert” button.

Allow users to configure:
- Target price in ₹
- Desired percentage price drop
- Notification preference
- Alert frequency
- Optional end date for the alert

Examples:
- Notify me when this phone falls below ₹25,000.
- Notify me when the price drops by 10%.
- Notify me when it becomes ₹2,000 cheaper than last month, using the same product variant and a clearly defined comparison date.
- Notify me when the price reaches its lowest recorded level over the last 90 days.

### Alert dashboard

Create a dedicated page showing:
- Watched products
- Current price
- Price when the alert was created, if recorded
- Target price
- Latest price change
- Distance from target
- Price history shortcut
- Edit alert
- Pause alert
- Delete alert

### Notification channels

Support in-app notifications and email notifications.

Enable SMS, WhatsApp, or push notifications only when the appropriate provider is configured and the user has granted the necessary consent.

Create a background scheduled job that checks new prices and evaluates active alerts. Do not rely on the customer keeping the browser open.

Prevent repeated notifications for the same price event unless the alert configuration allows them.

Provide unsubscribe controls and user notification preferences.

---

## 12. Price Data Collection and Historical Storage

Build a reliable price-data architecture.

Each price record should include:
- Product identifier
- Variant identifier, where relevant
- Seller identifier
- Price in ₹
- Currency
- Timestamp
- Availability
- Source
- Data collection method
- Verification status

Maintain price histories for individual product variants and sellers. Do not combine prices from unrelated models, capacities, or sellers without explicitly explaining the difference.

Use authorized APIs, approved feeds, seller integrations, or administrator-managed price updates.

Do not assume access to live prices from other e-commerce websites. Do not bypass CAPTCHAs, authentication, access restrictions, or anti-bot protections.

Where external sources are unavailable, allow authorized administrators to import verified product and price data using CSV or supported APIs.

Display the data source and last-updated timestamp where appropriate.

Provide scheduled price ingestion, duplicate detection, validation, error logging, and retry handling.

A product must not appear to have live price monitoring unless its data source is genuinely connected and updating.

---

## 13. Product Recommendation System

Build a recommendation engine that can use:

- Selected categories
- Brand preferences
- Budget
- Previously viewed products
- Wishlist
- Shopping cart
- Comparison preferences
- Verified product attributes
- Explicit customer-selected interests

Provide useful sections such as:
- Recommended for You
- Similar Products
- Better Alternatives
- Best Products Under ₹10,000
- Best Value for Money
- Recently Reduced Prices

Respect privacy and allow customers to manage personalization preferences.

For new users, use product attributes, popularity supported by actual data, and selected preferences instead of pretending to know their purchase history.

---

## 14. Admin Dashboard and Product Management

Create a secure administrative dashboard protected by authentication and server-side role-based authorization.

### Product management

Authorized administrators can:
- Add new products
- Edit product descriptions
- Upload product images
- Manage categories and brands
- Add variants
- Update specifications
- Update stock
- Manage product status
- Import and export catalog data
- Update verified prices
- Review price history
- View data quality warnings

### Order management

Provide:
- Order list
- Order details
- Payment status
- Fulfillment status
- Customer shipping details restricted to authorized staff
- Shipment tracking fields
- Cancellation and return management
- Refund tracking
- Invoice management

### Price intelligence administration

Provide:
- Historical price ingestion status
- Latest recorded prices
- Missing-data alerts
- Failed data imports
- Forecasting job status
- Model performance metrics
- Active price alerts
- Notification delivery status

### Analytics

Display:
- Total orders
- Sales revenue
- Average order value
- Best-selling products
- Top categories
- Cart abandonment indicators where available
- Stock levels
- Price-drop activity
- Most-compared products
- Price-alert conversion activity

Use real database data. Clearly distinguish real analytics from development sample data.

Keep customer payment credentials inaccessible to administrative interfaces.

---

## 15. Database and Backend Architecture

Use a reliable database and a maintainable backend architecture.

Recommended stack:

Frontend:
- React
- TypeScript
- Next.js or an equivalent structured framework
- Tailwind CSS
- Framer Motion or an equivalent animation library
- A professional charting library

Backend:
- Python with FastAPI, or a well-structured server-side framework
- REST APIs with validation and documented endpoints
- Background jobs for price collection, predictions, and notifications

Database:
- PostgreSQL
- Proper indexes, foreign keys, constraints, and migrations

Authentication:
- Secure session-based authentication or appropriately implemented token authentication
- Password hashing
- Protected server-side routes
- Role-based authorization

File storage:
- Secure object storage for product images and other assets

Integrations:
- Payment gateway
- Email provider
- Optional SMS, WhatsApp, and push notification providers
- Authorized product-price data sources

### Suggested database entities

Create appropriate relational tables for:
- Users
- User roles
- Addresses
- Categories
- Brands
- Products
- Product variants
- Product specifications
- Sellers
- Inventory
- Price history
- Price forecasts
- Comparison sessions
- Comparison preferences
- Wishlists
- Shopping carts
- Cart items
- Orders
- Order items
- Payment transactions
- Shipments
- Returns and refunds
- Price alerts
- Notifications
- Product reviews
- Coupons
- Audit logs
- Scheduled job records

Use appropriate relationships and indexes. Store money in a safe decimal or integer-minor-unit representation, not floating-point values.

Persist all essential data in the database. Do not rely solely on browser local storage for orders, payments, price history, or customer account records.

---

## 16. Professional UI/UX and Animations

Create a premium, modern shopping interface inspired by the usability of leading global retail platforms while maintaining original branding and layouts.

### Visual design

Use:
- Clean white or soft-neutral backgrounds
- Deep navy or charcoal typography
- Refined blue, violet, or teal accents
- Consistent spacing
- Rounded cards
- Subtle shadows
- High-quality product imagery
- Strong typography hierarchy
- Consistent iconography
- Clear pricing and calls to action

Make the design configurable so the brand palette can be changed globally.

### Animations

Implement polished, performance-conscious animations:

- Smooth page transitions
- Animated hero section
- Staggered product-card reveals
- Subtle hover elevation
- Image zoom on product cards
- Smooth category navigation
- Animated cart confirmation
- Cart drawer transitions
- Comparison selection animations
- Smooth chart rendering
- Animated price-change indicators
- Skeleton loading states
- Button press feedback
- Notification toast animations
- Sticky-header transitions
- Smooth scrolling
- Modal and drawer transitions

Keep animations subtle and professional. Avoid excessive bouncing, distracting particle effects, or long animations that slow shopping.

Respect reduced-motion accessibility settings.

Use responsive image sizes, lazy loading, code splitting, and efficient rendering to maintain strong performance.

---

## 17. Responsive Design and Accessibility

The complete website must work correctly on:
- Desktop computers
- Laptops
- Tablets
- Android phones
- iPhones

Create mobile-specific layouts for product comparison tables, filters, navigation, cart, checkout, and charts.

For comparison tables on mobile, provide a horizontal comparison view or stacked attribute cards with clearly identifiable products.

Support keyboard navigation, visible focus states, accessible labels, sufficient contrast, and screen-reader-friendly controls.

Do not let animations or overlays block essential actions.

---

## 18. Security, Privacy, and Reliability

Implement:
- Server-side authorization for protected actions
- Input validation
- Output escaping
- Protection against common injection and cross-site scripting attacks
- CSRF protection where applicable
- Rate limiting on sensitive endpoints
- Secure session and cookie settings
- Safe image uploads
- Secrets stored in environment variables
- Payment webhook verification
- Idempotent order and payment processing
- Audit logs for sensitive administrative actions
- Backup and recovery procedures
- Privacy-conscious analytics
- Customer data access restrictions

Never expose database credentials, payment secrets, private API keys, or administrative secrets in frontend code.

Use realistic error messages and safe recovery flows.

---

## 19. Development Data and Demo Mode

Populate the development environment with clearly labelled sample products so that the entire shopping workflow can be tested immediately.

Include representative products across multiple categories, including several Apple iPhones, Samsung Galaxy phones, laptops, headphones, smartwatches, and accessories.

Use consistent product identifiers, model variants, specifications, and realistic sample price-history records.

Clearly label synthetic prices and historical records as sample data in development mode. Never present invented records as actual market prices.

Provide enough sample historical data to demonstrate the charts, comparison engine, prediction pipeline, and price-alert logic.

Allow the development environment to demonstrate:
- Registration and login
- Search and filters
- Product navigation
- Cart and checkout
- Payment gateway test mode
- Order placement and order details
- Product comparisons
- Price history
- Price predictions
- Price-alert triggers
- Admin product updates

Make sample scenarios reproducible so the complete workflow can be tested reliably.

---

## 20. Testing and Quality Assurance

Implement automated tests for critical user journeys.

Test:
- Registration and authentication
- Product search and filters
- Brand and category navigation
- Product variants
- Cart persistence
- Price and tax calculations
- Stock validation
- Payment success and failure
- Duplicate payment callbacks
- Order placement and status changes
- Comparison scoring
- Historical price calculations
- Forecast generation
- Price-alert triggering
- Notification delivery
- Role-based access
- Responsive layouts
- Accessibility basics

Include API tests, database tests, and end-to-end browser tests.

Fix errors rather than hiding them. Include useful logging and clear error handling.

---

## 21. Deployment and Final Deliverables

Prepare the project for deployment with:
- Organized source code
- Reusable components
- Database schema and migrations
- Environment variable example file
- Setup instructions
- API documentation
- Seed-data scripts
- Background job configuration
- Payment gateway test-mode instructions
- Automated test commands
- Production build configuration
- Deployment instructions
- Backup and recovery guidance

Use a development environment first. Live payments, external price feeds, and real notification channels must remain disabled until their credentials and integrations have been configured and tested.

---

## 22. Mandatory Final Instructions

Build the complete website, not merely its visual appearance.

Do not deliver only a homepage, single screen, landing page, slide, static HTML mockup, or frontend-only prototype.

Do not leave buttons that appear functional but do nothing.

Do not simulate a successful real payment without payment-gateway verification.

Do not generate fake live prices, historical prices, customer reviews, or guaranteed future prices.

Do not display predicted prices as actual market prices.

Every important feature must have a complete user workflow, backend logic, persistent storage, appropriate validation, and error handling.

If an external service requires credentials, build its integration interface and configuration process, explain the missing dependency, and provide a working development or test-mode alternative where possible.

Build the application incrementally in logical modules while preserving one unified design system and database architecture.

First establish the application structure and database. Then implement authentication, catalog, search, cart, checkout, orders, smart comparison, price history, prediction, alerts, admin tools, animations, testing, and deployment.

At the end, verify that the complete customer journey works:

**Register → Login → Browse Products → Filter by Category → Open Brand Products → View Product → Compare Products → Review Price History → Set Price Alert → Add to Cart → Checkout → Complete Test Payment → Place Order → View Order Details → Receive Price Notifications.**

The final result must be a polished, responsive, secure, scalable, professional e-commerce platform with genuinely functional smart shopping features.