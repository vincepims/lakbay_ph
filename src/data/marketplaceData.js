export const locationHierarchy = [
  { region: 'MIMAROPA', province: 'Palawan', localities: ['El Nido', 'Coron', 'Puerto Princesa', 'San Vicente'] },
  { region: 'Central Visayas', province: 'Cebu', localities: ['Cebu City', 'Lapu-Lapu City', 'Moalboal', 'Oslob'] },
  { region: 'Central Visayas', province: 'Bohol', localities: ['Panglao', 'Tagbilaran City', 'Anda'] },
  { region: 'Western Visayas', province: 'Aklan', localities: ['Malay (Boracay)', 'Kalibo'] },
  { region: 'Caraga', province: 'Surigao del Norte', localities: ['General Luna', 'Dapa', 'Del Carmen'] },
  { region: 'CALABARZON', province: 'Batangas', localities: ['Nasugbu', 'Lian', 'Mabini', 'San Juan'] },
  { region: 'CALABARZON', province: 'Laguna', localities: ['Calamba City', 'Santa Rosa City', 'Los Baños'] },
  { region: 'Cordillera', province: 'Benguet', localities: ['Baguio City', 'Itogon'] },
  { region: 'Ilocos Region', province: 'Ilocos Norte', localities: ['Laoag City', 'Pagudpud'] },
  { region: 'National Capital Region', province: 'Metro Manila', localities: ['Makati City', 'Taguig City', 'Pasay City', 'Manila City'] },
];

export const categories = [
  { id: 'all', label: 'All stays', icon: 'Sparkles' },
  { id: 'beach', label: 'Beachfront', icon: 'Waves' },
  { id: 'island', label: 'Island life', icon: 'Palmtree' },
  { id: 'pool', label: 'Amazing pools', icon: 'Pool' },
  { id: 'mountain', label: 'Mountain', icon: 'Mountain' },
  { id: 'city', label: 'City escapes', icon: 'Building2' },
  { id: 'heritage', label: 'Heritage', icon: 'Landmark' },
];

export const amenities = ['Wi-Fi', 'Air conditioning', 'Pool', 'Kitchen', 'Workspace', 'Beach access', 'Parking', 'Pet friendly'];

export const destinationCards = [
  { province: 'Palawan', caption: 'Lagoons, islands, and unforgettable sunsets', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=85' },
  { province: 'Cebu', caption: 'City energy and clear-water escapes', image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1000&q=85' },
  { province: 'Surigao del Norte', caption: 'Surf, slow mornings, and island community', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85' },
  { province: 'Benguet', caption: 'Cool mountain air and pine-covered views', image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=85' },
];

export const listings = [
  {
    id: 'stay-elnido-01', slug: 'glass-villa-el-nido', title: 'Glass Villa above Bacuit Bay', category: 'island',
    region: 'MIMAROPA', province: 'Palawan', locality: 'El Nido', localityType: 'Municipality', lat: 11.1854, lng: 119.3958,
    price: 7850, rating: 4.94, reviews: 128, guests: 4, bedrooms: 2, beds: 2, baths: 2,
    badge: 'Guest favorite', host: 'Mara', instantBook: true,
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=88',
    gallery: ['https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=88','https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85'],
    amenities: ['Wi-Fi', 'Air conditioning', 'Pool', 'Kitchen', 'Beach access', 'Parking'], description: 'A private tropical retreat with sweeping island views, a quiet plunge pool, and a short ride to El Nido town.'
  },
  {
    id: 'stay-coron-01', slug: 'coron-cove-casita', title: 'Coron Cove Casita with Private Deck', category: 'beach',
    region: 'MIMAROPA', province: 'Palawan', locality: 'Coron', localityType: 'Municipality', lat: 12.0075, lng: 120.2043,
    price: 5200, rating: 4.89, reviews: 94, guests: 3, bedrooms: 1, beds: 2, baths: 1, host: 'Luis', instantBook: true,
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=88', amenities: ['Wi-Fi', 'Air conditioning', 'Beach access', 'Workspace'], description: 'A calm waterfront casita designed for slow island mornings and easy access to Coron’s lakes and reefs.'
  },
  {
    id: 'stay-siargao-01', slug: 'general-luna-surf-house', title: 'General Luna Surf House', category: 'island',
    region: 'Caraga', province: 'Surigao del Norte', locality: 'General Luna', localityType: 'Municipality', lat: 9.7842, lng: 126.1589,
    price: 4650, rating: 4.97, reviews: 211, guests: 5, bedrooms: 2, beds: 3, baths: 2, badge: 'Top rated', host: 'Aya', instantBook: false,
    image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1200&q=88', amenities: ['Wi-Fi', 'Air conditioning', 'Kitchen', 'Workspace', 'Pet friendly'], description: 'A breezy local-style home near Cloud 9 with outdoor living, board storage, and space for remote work.'
  },
  {
    id: 'stay-cebu-01', slug: 'mactan-pool-villa', title: 'Mactan Pool Villa near the Beach', category: 'pool',
    region: 'Central Visayas', province: 'Cebu', locality: 'Lapu-Lapu City', localityType: 'City', lat: 10.2890, lng: 123.9970,
    price: 6900, rating: 4.86, reviews: 76, guests: 6, bedrooms: 3, beds: 4, baths: 2, host: 'Paolo', instantBook: true,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=88', amenities: ['Wi-Fi', 'Air conditioning', 'Pool', 'Kitchen', 'Parking'], description: 'A bright family villa with a private pool, generous common spaces, and quick airport and beach access.'
  },
  {
    id: 'stay-moalboal-01', slug: 'moalboal-ocean-loft', title: 'Ocean Loft near the Sardine Run', category: 'beach',
    region: 'Central Visayas', province: 'Cebu', locality: 'Moalboal', localityType: 'Municipality', lat: 9.9437, lng: 123.3924,
    price: 3800, rating: 4.91, reviews: 157, guests: 2, bedrooms: 1, beds: 1, baths: 1, badge: 'Guest favorite', host: 'Nica', instantBook: true,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=88', amenities: ['Wi-Fi', 'Air conditioning', 'Beach access', 'Parking'], description: 'A polished ocean-view loft within walking distance of Panagsama Beach, cafés, and diving.'
  },
  {
    id: 'stay-panglao-01', slug: 'panglao-garden-bungalow', title: 'Panglao Garden Bungalow', category: 'pool',
    region: 'Central Visayas', province: 'Bohol', locality: 'Panglao', localityType: 'Municipality', lat: 9.5781, lng: 123.7458,
    price: 4450, rating: 4.88, reviews: 83, guests: 4, bedrooms: 2, beds: 2, baths: 1, host: 'Bea', instantBook: false,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=88', amenities: ['Wi-Fi', 'Air conditioning', 'Pool', 'Kitchen'], description: 'A quiet bungalow tucked into a lush garden, minutes from Panglao’s beaches and local restaurants.'
  },
  {
    id: 'stay-boracay-01', slug: 'boracay-white-beach-suite', title: 'White Beach Sunset Suite', category: 'beach',
    region: 'Western Visayas', province: 'Aklan', locality: 'Malay (Boracay)', localityType: 'Municipality', lat: 11.9674, lng: 121.9248,
    price: 6100, rating: 4.92, reviews: 304, guests: 3, bedrooms: 1, beds: 2, baths: 1, badge: 'Guest favorite', host: 'Carlo', instantBook: true,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=88', amenities: ['Wi-Fi', 'Air conditioning', 'Pool', 'Beach access'], description: 'A modern suite close to White Beach with a resort pool and a balcony made for sunset views.'
  },
  {
    id: 'stay-batangas-01', slug: 'anilao-dive-house', title: 'Anilao Cliffside Dive House', category: 'beach',
    region: 'CALABARZON', province: 'Batangas', locality: 'Mabini', localityType: 'Municipality', lat: 13.7074, lng: 120.8811,
    price: 5600, rating: 4.85, reviews: 69, guests: 8, bedrooms: 3, beds: 6, baths: 3, host: 'Iris', instantBook: false,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=88', amenities: ['Wi-Fi', 'Air conditioning', 'Kitchen', 'Beach access', 'Parking', 'Pet friendly'], description: 'A relaxed group stay with direct water access and gear space for diving weekends near Metro Manila.'
  },
  {
    id: 'stay-baguio-01', slug: 'baguio-pine-cabin', title: 'Pine Cabin with Fireplace', category: 'mountain',
    region: 'Cordillera', province: 'Benguet', locality: 'Baguio City', localityType: 'City', lat: 16.4023, lng: 120.5960,
    price: 4950, rating: 4.96, reviews: 142, guests: 6, bedrooms: 3, beds: 4, baths: 2, badge: 'Top rated', host: 'Miguel', instantBook: true,
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=88', amenities: ['Wi-Fi', 'Kitchen', 'Workspace', 'Parking', 'Pet friendly'], description: 'A warm, design-led cabin among the pines with a fireplace, terrace, and easy access to central Baguio.'
  },
  {
    id: 'stay-makati-01', slug: 'makati-skyline-loft', title: 'Makati Skyline Loft', category: 'city',
    region: 'National Capital Region', province: 'Metro Manila', locality: 'Makati City', localityType: 'City', lat: 14.5547, lng: 121.0244,
    price: 3200, rating: 4.84, reviews: 198, guests: 2, bedrooms: 1, beds: 1, baths: 1, host: 'Sam', instantBook: true,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=88', amenities: ['Wi-Fi', 'Air conditioning', 'Pool', 'Workspace'], description: 'A compact city loft with skyline views, a lap pool, and walkable access to dining and offices.'
  },
  {
    id: 'stay-vigan-01', slug: 'ilocos-heritage-home', title: 'Restored Ilocos Heritage Home', category: 'heritage',
    region: 'Ilocos Region', province: 'Ilocos Norte', locality: 'Laoag City', localityType: 'City', lat: 18.1960, lng: 120.5927,
    price: 4300, rating: 4.90, reviews: 61, guests: 5, bedrooms: 2, beds: 3, baths: 2, host: 'Tala', instantBook: false,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=88', amenities: ['Wi-Fi', 'Air conditioning', 'Kitchen', 'Parking'], description: 'A carefully restored home blending traditional details with modern comfort in the heart of Ilocos.'
  },
  {
    id: 'stay-laguna-01', slug: 'laguna-lakehouse', title: 'Private Lakehouse near Los Baños', category: 'mountain',
    region: 'CALABARZON', province: 'Laguna', locality: 'Los Baños', localityType: 'Municipality', lat: 14.1667, lng: 121.2417,
    price: 5850, rating: 4.87, reviews: 54, guests: 8, bedrooms: 3, beds: 5, baths: 2, host: 'Rina', instantBook: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=88', amenities: ['Wi-Fi', 'Air conditioning', 'Pool', 'Kitchen', 'Parking', 'Pet friendly'], description: 'A tranquil lakehouse for family gatherings, with mountain views, a pool, and generous outdoor space.'
  },
];

export const defaultFilters = {
  query: '', province: '', locality: '', category: 'all', guests: 1,
  minPrice: 0, maxPrice: 15000, bedrooms: 0, amenities: [], instantBook: false, sort: 'recommended',
};
