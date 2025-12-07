import type { APIRoute } from 'astro';
import { db } from '../../lib/db/client';
import { bookings } from '../../lib/db/schema';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const phone = formData.get('phone')?.toString();
    const address = formData.get('address')?.toString();
    const dateTime = formData.get('dateTime')?.toString();

    if (!name || !email || !phone || !dateTime) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const [date, time] = dateTime.split('T');
    const venueId = formData.get('venueId')?.toString();

    const booking = db.insert(bookings).values({
      name,
      email,
      phone,
      address: address || null,
      date,
      time: time || '',
      status: 'pending',
      venueId: venueId ? parseInt(venueId) : null,
    }).returning().get();

    return new Response(
      JSON.stringify({ success: true, booking }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create booking' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

