# AirQuality.co

AI-Enabled Respiratory Risk Forecasting Platform

## Overview

AirQuality.co combines bioaerosol monitoring, weather data, and social media trends to forecast respiratory health risks including asthma and influenza-like illnesses (ILI) in real-time.

## Features

- **Real-Time Forecasting**: AI-powered predictions combining multiple data sources
- **No New Sensors**: Leverages existing air quality infrastructure and public APIs
- **Science-Backed**: Grounded in peer-reviewed research on the hygiene hypothesis
- **Infodemiology**: Cross-references with Google Trends and social media signals
- **Lead Capture**: Database-backed contact forms for collaboration and investment inquiries
- **Admin Dashboard**: Secure admin panel to view all lead submissions

## Technology Stack

- **Frontend**: React 19 + TypeScript + Tailwind CSS 4
- **Backend**: Express + tRPC 11
- **Database**: MySQL/TiDB with Drizzle ORM
- **Authentication**: OAuth 2.0
- **Deployment**: Vercel-ready

## Project Structure

```
airquality-co/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   └── lib/           # Utilities and tRPC client
│   └── public/            # Static assets
├── server/                # Backend Express + tRPC
│   ├── routers.ts         # API routes
│   ├── db.ts              # Database queries
│   └── _core/             # Core utilities
├── drizzle/               # Database schema and migrations
│   └── schema.ts
└── shared/                # Shared types and constants
```

## Local Development

### Prerequisites
- Node.js 22+
- pnpm
- MySQL/TiDB database

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/airquality-co.git
   cd airquality-co
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables (create `.env` file):
   ```
   DATABASE_URL=mysql://user:password@host:port/database
   JWT_SECRET=your-secret-key
   VITE_APP_TITLE=AirQuality.co
   VITE_APP_LOGO=/logo.png
   ```

4. Push database schema:
   ```bash
   pnpm db:push
   ```

5. Start development server:
   ```bash
   pnpm dev
   ```

6. Open http://localhost:3000

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to Vercel with custom domain.

## Database Schema

### Leads Table
Stores all contact form submissions:
- `id`: Auto-increment primary key
- `name`: Contact name
- `email`: Contact email
- `organization`: Optional organization name
- `interestArea`: Enum (collaboration, investment, commercialization, general)
- `message`: Optional message content
- `createdAt`: Timestamp

### Users Table
Stores authenticated users for admin access:
- `id`: Auto-increment primary key
- `openId`: OAuth identifier
- `name`: User name
- `email`: User email
- `role`: Enum (admin, user)
- `createdAt`, `updatedAt`, `lastSignedIn`: Timestamps

## Admin Access

Access the admin dashboard at `/admin/leads` (requires authentication and admin role).

## Team

- **Founder**: Dr Cameron Jones
- **Research Associate**: Bhavya Raj
- **Business Development**: Meow Meow Ludo
- **Environmental Consultant**: (Role)

### Scientific Committee
- Dr Heike Neumeister-Kemp (Scientific Advisor)
- Mr Aron Gingis (Scientific Advisor)
- Peter Eng (Blockchain Consultant)

## Research

Our platform is grounded in peer-reviewed research on the hygiene hypothesis and bioaerosol-virus interactions. Key publications include:

- Shah et al. (2021) - Chicago Emergency Department Study
- Hoogeveen et al. (2021) - Netherlands Pollen Threshold Research
- Ladau et al. (2021) - Global Bioaerosol Analysis

## DeSci Integration

We're pioneering the use of Decentralized Science (DeSci) and token-based funding mechanisms on the Solana blockchain to democratize respiratory health research.

## License

Copyright © 2025 AirQuality.co. All rights reserved.

## Contact

Dr Cameron Jones  
Email: cameron@drcameronjones.com  
Website: https://airquality.co

