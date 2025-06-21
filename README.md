# 🚀 AI Video Ads Generator App

A full-stack web application that generates AI-based video ads in real-time using powerful AI services. Built with **Next.js**, **React**, **Convex**, and **Tailwind CSS**, the app enables users to create professional short videos by generating scripts, selecting avatars and voices, uploading assets, and rendering final videos — all through a smooth, responsive UI.

---
## 🔥 Features

- ✨ Real-time video ad generation using AI
- 🧠 Script writing and voice synthesis
- 🖼️ Image upload and cloud asset management
- 🎭 Avatar selection and character customization
- 🔊 Voice list display and audio generation
- 🏃‍♂️ Background task handling
- 💳 Payment gateway integration with user credits
- 🌐 Fully responsive UI with Tailwind CSS
- 🚀 Seamless deployment to production

---

## 💻 Tech Stack

| Frontend         | Backend         | AI Services | Styling        | State & DB     | Background Jobs |
|------------------|------------------|-------------|----------------|----------------|------------------|
| Next.js + React  | Node.js + Convex | Akool API   | Tailwind CSS   | Convex         | Inngest          |

---

## 📁 Project Structure

/pages → App routes (Next.js)
/components → Reusable UI components
/app → Core app logic and hooks
/lib → API & helper utilities
/convex → Database schema and server functions
/public → Static assets

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rakeshrakhi9392/ai-video-ads-generator.git
cd ai-video-ads-generator

2. Install Dependencies
npm install

3. Create Environment Variables
Create a .env.local file in the root directory and add your keys:

NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment
AKOOL_API_KEY=your_akool_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key

4. Start Development Server

npx convex dev  # Start Convex backend (in one terminal)
npm run dev     # Start Next.js frontend (in another terminal)



