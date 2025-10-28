# AirQuality.co Deployment Guide

## Deploying to Vercel with Custom Domain

### Prerequisites
- GitHub account
- Vercel account
- Domain: airquality.co (already owned)
- Database: TiDB/MySQL (you'll need to set this up)

### Step 1: Push to GitHub

1. Create a new repository on GitHub named `airquality-co`
2. Initialize git in your local project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/airquality-co.git
   git push -u origin main
   ```

### Step 2: Set Up Database

You'll need a MySQL/TiDB database. Options:
- **TiDB Cloud** (recommended, free tier available): https://tidbcloud.com
- **PlanetScale**: https://planetscale.com
- **Railway**: https://railway.app

After creating your database, save the connection string (format: `mysql://user:password@host:port/database`)

### Step 3: Deploy to Vercel

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository `airquality-co`
4. Configure the project:
   - **Framework Preset**: Other
   - **Build Command**: `pnpm install && pnpm build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `pnpm install`

### Step 4: Configure Environment Variables

In Vercel project settings, add these environment variables:

#### Required Variables:
```
DATABASE_URL=mysql://your-connection-string
JWT_SECRET=your-random-secret-key-here
VITE_APP_TITLE=AirQuality.co
VITE_APP_LOGO=/logo.png
```

#### OAuth Variables (if you want login functionality):
```
VITE_APP_ID=your-manus-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
OWNER_OPEN_ID=your-owner-openid
OWNER_NAME=Dr Cameron Jones
```

#### Optional (for notifications):
```
BUILT_IN_FORGE_API_URL=your-api-url
BUILT_IN_FORGE_API_KEY=your-api-key
```

**Generate JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 5: Set Up Database Schema

After deployment, run the database migration:

1. Install Drizzle Kit locally:
   ```bash
   npm install -g drizzle-kit
   ```

2. Set your DATABASE_URL environment variable locally:
   ```bash
   export DATABASE_URL="your-connection-string"
   ```

3. Push the schema:
   ```bash
   cd airquality-co
   pnpm db:push
   ```

### Step 6: Configure Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add your domain: `airquality.co`
3. Vercel will provide DNS records to add
4. Go to your domain registrar and add the DNS records:
   - **A Record**: `@` → Vercel IP (provided by Vercel)
   - **CNAME**: `www` → `cname.vercel-dns.com`

DNS propagation can take up to 48 hours, but usually completes within a few hours.

### Step 7: Verify Deployment

1. Visit https://airquality.co
2. Test the contact forms
3. Check that the database is saving leads at `/admin/leads`

## Important Notes

### Authentication
- The current OAuth setup uses Manus authentication
- If you want to keep admin functionality, you'll need to either:
  - Keep using Manus OAuth (requires keeping those env vars)
  - Implement a different auth system (Auth0, NextAuth, etc.)
  - Remove authentication and make admin pages password-protected

### Lead Notifications
- The `notifyOwner` function currently uses Manus notification service
- Without Manus, email notifications won't work
- Consider integrating a service like:
  - **Resend**: https://resend.com (recommended, simple API)
  - **SendGrid**: https://sendgrid.com
  - **Mailgun**: https://mailgun.com

### File Uploads
- The current setup uses S3 storage
- For Vercel deployment, you'll need to configure your own S3 bucket or use Vercel Blob Storage

## Troubleshooting

### Build Fails
- Check that all environment variables are set
- Verify DATABASE_URL is correct
- Check build logs in Vercel dashboard

### Database Connection Issues
- Ensure your database allows connections from Vercel IPs
- Check that SSL is properly configured
- Verify connection string format

### Domain Not Working
- Check DNS propagation: https://dnschecker.org
- Verify DNS records are correct in your registrar
- Wait up to 48 hours for full propagation

## Contact

For issues, contact: cameron@drcameronjones.com

