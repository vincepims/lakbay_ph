# Lakbay Philippines Marketplace

A responsive vacation-rental marketplace focused on destinations across the Philippines.

## Included

- Province and city/municipality destination search
- Category, guest, price, bedroom, amenity, and instant-book filters
- Interactive Leaflet/OpenStreetMap listing map
- Property detail pages with pricing and date selection
- Local demo reservation flow and saved trips
- Persistent favorites and host-created demo listings
- Responsive desktop and mobile navigation

## Run locally

```bash
npm install
npm run dev
```

Create a production bundle with `npm run build`.

## Production integration

The current project is a complete client-side marketplace demo. Reservations, listings, and favorites are stored in browser local storage. A production launch still requires authenticated accounts, a database, secure payment processing, availability synchronization, image storage, host verification, messaging, and transactional notifications.
