import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone'),
  password: text('password').notNull(),
  karma: integer('karma').default(0),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const venues = sqliteTable('venues', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description'),
  address: text('address').notNull(),
  latitude: real('latitude'),
  longitude: real('longitude'),
  image: text('image').notNull(),
  rating: real('rating').default(0),
  reviewCount: integer('review_count').default(0),
  isFeatured: integer('is_featured', { mode: 'boolean' }).default(false),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const games = sqliteTable('games', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  type: text('type').notNull(), // e.g., "Doubles - Regular", "Regular"
  organizerId: integer('organizer_id').references(() => users.id).notNull(),
  venueId: integer('venue_id').references(() => venues.id).notNull(),
  date: text('date').notNull(), // ISO date string
  startTime: text('start_time').notNull(),
  endTime: text('end_time').notNull(),
  skillLevel: text('skill_level').notNull(), // e.g., "Intermediate - Advance"
  maxSlots: integer('max_slots').notNull(),
  bookedSlots: integer('booked_slots').default(0),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const bookings = sqliteTable('bookings', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id),
  venueId: integer('venue_id').references(() => venues.id).notNull(),
  gameId: integer('game_id').references(() => games.id),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  address: text('address'),
  date: text('date').notNull(),
  time: text('time').notNull(),
  status: text('status').default('pending'), // pending, confirmed, cancelled
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Venue = typeof venues.$inferSelect;
export type NewVenue = typeof venues.$inferInsert;
export type Game = typeof games.$inferSelect;
export type NewGame = typeof games.$inferInsert;
export type Booking = typeof bookings.$inferSelect;
export type NewBooking = typeof bookings.$inferInsert;

