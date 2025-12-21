
# OutSpot

OutSpot is a modern social discovery platform that turns going out into an experience.  
It helps people explore restaurants, bars, rooftops, and nightlife through live activity, challenges, and real-world engagement rather than endless scrolling.

This repository contains the landing website for OutSpot, built to introduce the product, explain the concept, and collect early-access sign-ups via a waitlist.

---

## Tech Stack

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Hosting: Vercel
- Backend / Database: Supabase
- Animations: CSS and Intersection Observer
- Forms: Supabase-backed waitlist signup

---

## Features

- Full-screen animated hero section
- Scroll-based storytelling layout
- Feature sections revealed on scroll
- Floating ambient UI elements
- Full-width marquee ticker
- Supabase-powered waitlist form
- Responsive design (mobile-first)
- Automatic deployments via GitHub and Vercel

---

## Project Structure

```

app/
├── page.tsx               # Main landing page
├── about/                 # About page
├── contact/               # Contact page
├── components/
│   ├── Navbar.tsx
│   ├── WaitlistForm.tsx
│   ├── FloatingDots.tsx
│   └── HomeButtonLogo.tsx
├── globals.css            # Global styles and animations
lib/
├── supabase-server.ts     # Supabase server client
public/
├── outspot-bg.png
├── outspot-logo.png

````

---

## Getting Started (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/outspot-website.git
cd outspot-website
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

Do not commit this file to version control.

### 4. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## Supabase Setup (Waitlist)

1. Create a project on Supabase
2. Create a table named `waitlist` with the following fields:

   * `id` (uuid, primary key)
   * `email` (text)
   * `created_at` (timestamp, default: now)
3. Copy your project URL and service role key
4. Add them to `.env.local` and to Vercel environment variables

---

## Deployment

This project is deployed using Vercel.

### Automatic Deployments

* Every push to the main branch triggers a new deployment
* Preview deployments are created for every branch

### Environment Variables on Vercel

Add the following variables in Project Settings:

```
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
```

After adding or updating environment variables, redeploy the project.

---

## Security Notes

* The Supabase service role key is server-side only
* Do not expose it in client components
* Client-side Supabase access should use anon keys if added later

---

## Roadmap

* Public app launch (iOS and Android)
* User profiles and progression
* Live city map
* Venue dashboards
* Challenges and rewards
* Social leaderboards

---

## Vision

OutSpot is built for people who actually go out.
It turns cities into living maps, nights into stories, and real-world movement into progress.

---

## License

This project is currently private and proprietary.
All rights reserved.

---

## Contact

For questions, collaborations, or early access inquiries:
[hello@outspot.app](mailto:hello@outspot.app)

```


Just let me know.
```
