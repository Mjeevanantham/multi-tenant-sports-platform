import { db } from './client';
import { users, venues, games } from './schema';
import { sql } from 'drizzle-orm';

export function seed() {
  // Clear existing data
  db.run(sql`DELETE FROM bookings`);
  db.run(sql`DELETE FROM games`);
  db.run(sql`DELETE FROM venues`);
  db.run(sql`DELETE FROM users`);

  // Insert sample users
  const user1 = db.insert(users).values({
    name: 'Pritesh',
    email: 'pritesh@example.com',
    phone: '+1234567890',
    password: 'hashed_password_here', // In production, use proper hashing
    karma: 294,
  }).returning().get();
  
  const user2 = db.insert(users).values({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567891',
    password: 'hashed_password_here',
    karma: 150,
  }).returning().get();
  
  const user3 = db.insert(users).values({
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1234567892',
    password: 'hashed_password_here',
    karma: 200,
  }).returning().get();

  // Insert sample venues
  const venue1 = db.insert(venues).values({
    name: 'Niha Millets Swimming Pool',
    description: 'Premium swimming facility with modern amenities',
    address: 'Sports Block behind F, Coimbatore',
    latitude: 11.0168,
    longitude: 76.9558,
    image: '/images/venues/swimming-pool.jpg',
    rating: 3.43,
    reviewCount: 30,
    isFeatured: true,
  }).returning().get();
  
  const venue2 = db.insert(venues).values({
    name: 'Pickl - The Social Club',
    description: 'Multi-sport facility with tennis courts',
    address: 'Main Street, Coimbatore',
    latitude: 11.0170,
    longitude: 76.9560,
    image: '/images/venues/tennis-court.jpg',
    rating: 4.75,
    reviewCount: 51,
    isFeatured: true,
  }).returning().get();
  
  const venue3 = db.insert(venues).values({
    name: 'RSA Ravi\'s Turf',
    description: 'Professional football turf with floodlights',
    address: 'Industrial Area, Coimbatore',
    latitude: 11.0180,
    longitude: 76.9570,
    image: '/images/venues/football-turf.jpg',
    rating: 2.57,
    reviewCount: 7,
    isFeatured: true,
  }).returning().get();
  
  const venue4 = db.insert(venues).values({
    name: 'Racketion Sports Academy',
    description: 'Badminton and table tennis academy',
    address: 'Sports Complex, Coimbatore',
    latitude: 11.0190,
    longitude: 76.9580,
    image: '/images/venues/badminton-court.jpg',
    rating: 4.2,
    reviewCount: 25,
    isFeatured: false,
  }).returning().get();

  // Insert sample games
  const gameDate1 = new Date('2025-09-24');
  const gameDate2 = new Date('2025-09-25');
  
  db.insert(games).values({
    type: 'Doubles - Regular',
    organizerId: user1.id,
    venueId: venue4.id,
    date: gameDate1.toISOString().split('T')[0],
    startTime: '16:00',
    endTime: '17:30',
    skillLevel: 'Intermediate - Advance',
    maxSlots: 4,
    bookedSlots: 3,
  }).run();
  
  db.insert(games).values({
    type: 'Regular',
    organizerId: user2.id,
    venueId: venue3.id,
    date: gameDate1.toISOString().split('T')[0],
    startTime: '18:00',
    endTime: '19:30',
    skillLevel: 'Amateur - Intermediate',
    maxSlots: 10,
    bookedSlots: 8,
  }).run();
  
  db.insert(games).values({
    type: 'Regular',
    organizerId: user3.id,
    venueId: venue2.id,
    date: gameDate2.toISOString().split('T')[0],
    startTime: '10:00',
    endTime: '11:30',
    skillLevel: 'Beginner - Professional',
    maxSlots: 8,
    bookedSlots: 6,
  }).run();

  console.log('Database seeded successfully!');
}

