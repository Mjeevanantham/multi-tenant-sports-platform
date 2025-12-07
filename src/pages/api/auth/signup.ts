import type { APIRoute } from 'astro';
import { db } from '../../../lib/db/client';
import { users } from '../../../lib/db/schema';
import { eq } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, phone, password } = await request.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and password are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if user already exists
    const existingUser = db.select().from(users).where(eq(users.email, email)).get();

    if (existingUser) {
      return new Response(
        JSON.stringify({ error: 'User with this email already exists' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // In production, hash the password (bcrypt, etc.)
    const user = db.insert(users).values({
      name,
      email,
      phone: phone || null,
      password, // In production, hash this
      karma: 0,
    }).returning().get();

    return new Response(
      JSON.stringify({ success: true, user: { id: user.id, name: user.name, email: user.email } }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create account' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

