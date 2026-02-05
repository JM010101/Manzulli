# Manzulli Author Website

A clean, minimal author website built with Next.js, TypeScript, and Tailwind CSS. Designed for launching thoughtful non-fiction books with direct eBook sales via Stripe.

## Features

- Clean, typography-forward design
- Direct eBook sales via Stripe Checkout
- Links to distribution channels (Amazon KDP, Apple Books, etc.)
- Responsive, mobile-friendly layout
- Architecture prepared for future sections (Life Healing Foundation, TER)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env.local` and fill in your Stripe keys:
```bash
cp .env.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Create a Product and Price in Stripe Dashboard for your eBook
4. Update `lib/content.ts` with your Stripe Price ID
5. Add your keys to `.env.local`

## Content Management

Edit content in `lib/content.ts`:
- Author information
- Book details
- Contact email
- Distribution links

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy

## Project Structure

- `app/` - Next.js app router pages and layouts
- `components/` - Reusable React components
- `lib/` - Utilities and content management
- `public/` - Static assets (images, etc.)

## Notes

- No analytics or tracking included by default
- No social media integration
- Focus on content clarity and user experience
- Design emphasizes quiet professionalism
