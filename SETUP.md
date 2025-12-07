# Setup Instructions

## Initial Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Generate database migrations:**
   ```bash
   pnpm run db:generate
   ```
   This creates the database schema based on `src/lib/db/schema.ts`

3. **Initialize and seed the database:**
   ```bash
   pnpm run db:seed
   ```
   This creates the database file and populates it with sample data.

4. **Start the development server:**
   ```bash
   pnpm run dev
   ```

## Adding Images

The project expects images in the following locations:

- `/public/images/hero/` - Hero section images (basketball.jpg, football.jpg, badminton.jpg, basketball-hoop.jpg)
- `/public/images/venues/` - Venue images
- `/public/images/sports/` - Sports category images
- `/public/images/spotlight/` - Spotlight section images
- `/public/images/blog/` - Blog post images
- `/public/images/team/` - Team member images

You can add placeholder images or use a service like Unsplash for development.

## White-Label Testing

To test the white-label functionality:

1. **Default tenant (Parkwood Play):**
   - Visit: `http://localhost:4321`

2. **Alternative tenant (Sports Hub):**
   - Visit: `http://localhost:4321?tenant=sportshub`

The theme colors, branding, and footer will change based on the tenant.

## Database Schema

The database includes:
- **users**: User accounts
- **venues**: Sports venues
- **games**: Organized games/activities
- **bookings**: Booking records

## Troubleshooting

### Database not found
If you get a database error, make sure you've run:
```bash
pnpm run db:generate
pnpm run db:seed
```

### Images not loading
Add placeholder images to the `/public/images/` directories or update the image paths in the components.

### Type errors
Run `pnpm run build` to check for TypeScript errors. Make sure all dependencies are installed.

