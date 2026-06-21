# VoxHub - Premium Communication Platform

VoxHub is a modern, Discord-inspired communication platform built with Next.js 15, Supabase, and Tailwind CSS.

## Features

- ✅ Real-time chat with typing indicators
- ✅ Image and file sharing
- ✅ Group creation with invite links
- ✅ Message reactions and replies
- ✅ Edit and delete messages
- ✅ Online/offline status
- ✅ Modern glass-morphism UI
- ✅ Mobile responsive
- ✅ Dark theme
- ✅ Authentication (Email, Google, GitHub)

## Tech Stack

- **Frontend:** Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Supabase (PostgreSQL, Realtime, Storage)
- **Auth:** Supabase Auth
- **Deployment:** Vercel

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials
4. Run the development server: `npm run dev`
5. Open http://localhost:3000

## Supabase Setup

1. Create a new Supabase project
2. Run the migration SQL in `supabase/migrations/`
3. Set up storage bucket for chat files
4. Configure authentication providers

## Deployment

Deploy to Vercel with:
- Connected GitHub repository
- Environment variables set in Vercel dashboard
- Auto-deploy on push to main branch

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `NEXT_PUBLIC_APP_URL`: Your application URL

## License

MIT
