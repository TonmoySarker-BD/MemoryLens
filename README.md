# 📸 Sritir Patay – Bangladeshi Event Photography & Videography Platform

**Sritir Patay** is a modern and culturally-rich web platform that connects clients with top-rated Bangladeshi photographers and videographers for weddings, birthdays, corporate events, and more. Built with Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and MongoDB, it offers a seamless and elegant experience for both clients and professionals.

## 🌐 Live Demo

🔗 [Coming Soon]

---

## 🚀 Features

### 🌟 General
- Dynamic homepage with search and featured professionals
- Explore page with filters (location, event type, rating, etc.)
- Beautiful professional profiles with galleries and reviews
- SEO-optimized blogs & photo galleries

### 🧑‍💼 Clients
- Register, browse, and book professionals
- Leave ratings and reviews after booking
- Manage bookings and favorites from dashboard

### 📷 Professionals
- Sign up and list services
- Upload portfolio photos
- Accept or decline bookings
- Manage availability calendar

### 👑 Admin
- Approve professional profiles
- Monitor bookings, users, and feedback
- Moderate reviews and portfolios

### 🔒 Authentication
- Email/password login (Firebase/NextAuth)
- Role-based access: Client, Pro, Admin

### 💰 (Optional)
- Stripe integration for service payments
- Booking QR codes and invoices

---

## 💻 Tech Stack

| Technology | Description |
|------------|-------------|
| Next.js | React-based full-stack framework |
| TypeScript | Static typing for better dev experience |
| Tailwind CSS | Utility-first CSS for fast UI styling |
| Redux Toolkit | State management |
| MongoDB | NoSQL database for scalable data |
| Cloudinary | Image storage and optimization |
| Framer Motion | UI animations |
| Firebase / NextAuth | Authentication |
| SweetAlert2 | Elegant alert popups |
| Stripe | (Optional) Payment integration |

---

## 🗂 Folder Structure
```
/app
  /explore
  /dashboard
  /profile/[id]
  /book/[id]
  /api
/components
/constants
/lib
/hooks
/store
/public
/styles
```

---

## 📸 Screenshots

Coming soon…

---

## 🧪 Development

### Requirements

- Node.js ≥ 18
- MongoDB Atlas 
- Vercel CLI (optional)

### Getting Started

```bash
git clone 
cd sritir-patay
npm install
npm run dev
```

Create a `.env.local` file with:

```env
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_secret
CLOUDINARY_URL=your_cloudinary_url
```

---

## 📍 Roadmap

- [x] Booking system
- [x] Professional dashboard
- [ ] Live chat
- [ ] Mobile app version
- [ ] AI-based photographer recommendations

---

## 🤝 Contributing

PRs are welcome! If you're a Bangladeshi designer or developer, feel free to reach out!

---

## 📃 License

MIT License