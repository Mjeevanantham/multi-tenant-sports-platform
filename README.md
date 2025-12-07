# Multi-Tenant Sports Platform

A modern, multi-tenant sports platform built with Astro, React, TypeScript, and Drizzle ORM. This platform allows users to find players, book venues, and discover sports activities in their area.

## Features

- 🎨 **White-Label Ready**: Multi-tenant architecture with dynamic theming
- 🏟️ **Venue Booking**: Browse and book sports venues
- 👥 **Find Players**: Discover games and connect with sports enthusiasts
- 📝 **Blog System**: MDX-based content management for sports articles
- 🔐 **Authentication**: User registration and login system
- 📱 **Responsive Design**: Mobile-first, modern UI with Tailwind CSS
- 🎯 **Type-Safe**: Full TypeScript support throughout

## Tech Stack

- **Framework**: Astro (Hybrid Rendering)
- **UI**: React + Tailwind CSS
- **Database**: SQLite with Drizzle ORM
- **Content**: MDX (Astro Content Collections)
- **State**: Nano Stores
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd parkwood-play
```

2. Install dependencies:
```bash
pnpm install
```

3. Initialize the database:
```bash
pnpm run db:generate
pnpm run db:seed
```

4. Start the development server:
```bash
pnpm run dev
```

The site will be available at `http://localhost:4321`

## Project Structure

```
/
├── src/
│   ├── components/      # React and Astro components
│   │   ├── ui/         # Base UI components (Button, Input, Card)
│   │   └── sections/   # Page sections (Hero, VenueList, etc.)
│   ├── config/         # Configuration files (tenants, themes)
│   ├── content/        # MDX blog posts
│   ├── layouts/        # Astro layouts
│   ├── lib/
│   │   ├── db/        # Database schema, client, and seed
│   │   └── utils/     # Utility functions
│   ├── middleware.ts   # Astro middleware for tenant detection
│   └── pages/         # Astro pages and API routes
├── public/            # Static assets
└── scripts/           # Database initialization scripts
```

## White-Labeling

The platform supports multi-tenant white-labeling through the tenant configuration system:

1. **Add a new tenant** in `src/config/tenants.ts`
2. **Access via query parameter**: `?tenant=your-tenant-id`
3. **Or set via cookie**: The middleware will detect and apply the tenant theme

Each tenant can have:
- Custom colors (primary, secondary, accent)
- Custom logo and branding
- Custom social links
- Custom footer text

## Database

The project uses SQLite with Drizzle ORM for easy development and deployment.

### Schema

- **users**: User accounts with karma system
- **venues**: Sports venues with ratings and reviews
- **games**: Organized games/activities
- **bookings**: Venue and game bookings

### Commands

- `pnpm run db:generate` - Generate database migrations
- `pnpm run db:migrate` - Run migrations
- `pnpm run db:seed` - Seed the database with sample data

## Development

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run db:generate` - Generate Drizzle migrations
- `pnpm run db:seed` - Seed database

### Adding Content

Blog posts are written in MDX and stored in `src/content/blog/`. They automatically appear on the blog listing page.

## Production Considerations

Before deploying to production:

1. **Database**: Switch from SQLite to PostgreSQL or similar
2. **Authentication**: Implement proper password hashing (bcrypt)
3. **Sessions**: Use secure session management
4. **Environment Variables**: Move sensitive config to `.env`
5. **Images**: Set up proper image hosting/CDN
6. **Security**: Add rate limiting, CSRF protection, etc.

## License

© 2025 Techmash Solutions Pvt. Ltd. All Rights Reserved.
