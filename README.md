<div align="center">

<!-- Animated Title Banner -->
<img src="./screenshots/banner.png" alt="Pulse Banner" width="100%" style="border-radius: 16px;" />

<br/>
<br/>

<!-- Animated Title -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./screenshots/logo.png">
  <img src="./screenshots/logo.png.png" alt="Pulse Logo" height="80" />
</picture>

#  Pulse

### ⚡ Chat instantly. Share effortlessly. Stay connected.

<br/>

<!-- Animated typing effect via SVG -->
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=A855F7&center=true&vCenter=true&width=600&lines=Real-time+messaging+%E2%9A%A1;Image+sharing+%F0%9F%96%BC%EF%B8%8F;JWT+Auth+%F0%9F%94%92;Socket.IO+powered+%F0%9F%94%8C;Built+with+MERN+Stack+%F0%9F%9A%80)](https://git.io/typing-svg)

<br/>

<!-- Tech Badges -->
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Zustand](https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge&logoColor=white)](https://zustand-demo.pmnd.rs)

<br/>

<!-- Stats row -->
![GitHub Issues](https://img.shields.io/github/issues/LovelySharma-dev/pulse?color=purple)
![License](https://img.shields.io/badge/license-MIT-purple)

<br/>

---

### 🔗 [Live Demo](https://pulse-1-r68b.onrender.com/) &nbsp;·&nbsp; [Report Bug](https://github.com/LovelySharma-dev/pulse/issues) &nbsp;·&nbsp; [Request Feature](https://github.com/LovelySharma-dev/pulse/issues)

---

</div>

<br/>

## 📋 Table of Contents

- [✨ Overview](#-overview)
- [🎥 Demo](#-demo)
- [🌟 Features](#-features)
- [🖥️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚡ Real-Time Architecture](#-real-time-architecture)
- [🔒 Auth Flow](#-auth-flow)
- [⚙️ Environment Variables](#️-environment-variables)
- [🚀 Getting Started](#-getting-started)
- [🎯 Roadmap](#-roadmap)
- [💡 Lessons Learned](#-lessons-learned)
- [🤝 Contributing](#-contributing)

<br/>

---

## ✨ Overview

> **Pulse** is a production-grade full-stack real-time chat app built on the MERN stack — crafted to deliver *fast*, *beautiful*, and *secure* messaging experiences.

Unlike barebones chat demos, Pulse is built with a real architecture:
- **Optimistic UI** so messages feel instant
- **Socket.IO** for true bi-directional, event-driven communication
- **Cloudinary** for image hosting
- **Arcjet** for security middleware
- **JWT + HTTP-only cookies** for bulletproof auth

Whether you're learning full-stack dev or want a solid chat foundation to build on — **Pulse** has you covered.

<br/>

---

## 🎥 Demo
<div align="center">

<img src="./screenshots/Gif.gif" alt="Pulse Demo" width="900"/>

</div>

<div align="center">

## 📸 Application Preview

| 📝 Sign Up | 🔐 Login |
|:----------:|:--------:|
| ![Sign Up](./screenshots/signup.png) | ![Login](./screenshots/login.png) |

<br>

| 💬 Chat Page | 🖼️ Image Sharing |
|:------------:|:----------------:|
| ![Chat Page](./screenshots/Chatpage.png) | ![Image Sharing](./screenshots/imageShar.png) |

</div>

<br/>

---

## 🌟 Features

<br/>

### 💬 Core Messaging

| Feature | Description |
|--------|-------------|
| ⚡ Real-time messaging | Powered by Socket.IO — no refresh needed |
| 🚀 Optimistic UI | Messages appear instantly before server confirms |
| 🖼️ Image sharing | Send images with preview before you hit send |
| 📜 Auto-scroll | Chat always anchors to the latest message |
| 🕒 Timestamps | Every message has human-readable time |

<br/>

### 👥 User Experience

| Feature | Description |
|--------|-------------|
| 🔐 Secure Auth | JWT tokens stored in HTTP-only cookies |
| 🟢 Online Presence | See who's online in real-time |
| 👤 Profile Picture | Upload and update your avatar via Cloudinary |
| 📋 Contacts List | Browse and start conversations easily |
| 🕓 Recent Chats | Quick access to your active conversations |

<br/>

### 🎵 The Fun Stuff

| Feature | Description |
|--------|-------------|
| ⌨️ Typing sounds | Satisfying keyboard clicks as you type |
| 🔔 Notification sounds | Hear incoming messages |
| 🔇 Toggle sounds | Turn effects on/off anytime |
| 🎞️ Smooth animations | Polished transitions throughout |

<br/>

### ⚙️ Backend Power

| Feature | Description |
|--------|-------------|
| 📡 Express REST API | Clean, modular route structure |
| 🍃 MongoDB Atlas | Cloud-hosted database |
| ☁️ Cloudinary | Optimized image uploads & hosting |
| 📧 Resend Emails | Welcome emails on signup |
| 🛡️ Arcjet | Rate limiting & security layer |
| 🔌 Socket.IO | Full-duplex real-time events |

<br/>

---

## 🖥️ Tech Stack

<div align="center">

### Frontend

| Technology | Purpose |
|-----------|---------|
| ![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB) | UI Library |
| ![Zustand](https://img.shields.io/badge/Zustand-764ABC?style=flat-square) | Global State Management |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white) | Utility-first Styling |
| ![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat-square) | Component Library |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) | HTTP Client |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white) | Client-side Routing |
| ![Lucide](https://img.shields.io/badge/Lucide_React-f56565?style=flat-square) | Icon Library |

<br/>

### Backend

| Technology | Purpose |
|-----------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) | Server Runtime |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) | Web Framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | Database |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square) | ODM |
| ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socketdotio&logoColor=white) | Real-time Engine |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) | Authentication |
| ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white) | Image Hosting |
| ![Arcjet](https://img.shields.io/badge/Arcjet-Security-purple?style=flat-square) | API Security |

</div>

<br/>

---

## 📁 Project Structure

```
💜 Pulse/
│
├── 🖥️  frontend/
│   ├── 🧩  components/          # Reusable UI components
│   ├── 🪝  hooks/               # Custom React hooks
│   ├── 📄  pages/               # Route-level page components
│   ├── 🗃️  store/               # Zustand global state stores
│   ├── 🛠️  lib/                 # Utility functions & config
│   └── 🎨  assets/             # Images, sounds, static files
│
├── ⚙️  backend/
│   ├── 🎮  controllers/         # Route handler logic
│   ├── 🔒  middleware/          # Auth, error, Arcjet middleware
│   ├── 📐  models/             # Mongoose data schemas
│   ├── 🛣️  routes/             # Express API routes
│   ├── 🛠️  lib/                # DB connection, Cloudinary, utils
│   ├── 📧  emails/             # Resend email templates
│   └── 🔌  socket/             # Socket.IO setup & events
│
└── 📖  README.md
```

<br/>

---

## ⚡ Real-Time Architecture


<div align="center">

<img src="./screenshots/pulse_architecture.png" alt="Pulse Real-Time Architecture" width="900"/>

</div>


<br/>

---

## 🔒 Auth Flow

```mermaid
flowchart TD
    A(["Signup / Login"])
    B["JWT Generated — HS256 Signed"]
    C["HTTP-Only Cookie — Sent to browser"]
    D{"Protected Route request?"}
    E["Auth Middleware — Verify JWT from cookie"]
    F["401 Unauthorized"]
    G["Socket Handshake — Token verified on connect"]
    H(["Connected & Online"])

    A --> B --> C --> D
    D -- Yes --> E
    D -- No --> H
    E -- Valid --> G --> H
    E -- Invalid --> F
```
<br/>

---

## ⚙️ Environment Variables

Create a `.env` file in `/backend`:

```env
# ── Server ──────────────────────────────────────
PORT=3000
CLIENT_URL=http://localhost:5173

# ── Database ─────────────────────────────────────
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/pulse

# ── Auth ─────────────────────────────────────────
JWT_SECRET=your_super_secret_jwt_key_here

# ── Cloudinary ───────────────────────────────────
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# ── Email (Resend) ────────────────────────────────
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
EMAIL_FROM=hello@yourdomain.com
EMAIL_FROM_NAME=Pulse

# ── Security (Arcjet) ─────────────────────────────
ARCJET_KEY=ajkey_xxxxxxxxxxxxxxxxxxxx
```

> 💡 **Tip:** Never commit your `.env` file. Add it to `.gitignore` immediately!

<br/>

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

```bash
node --version   # v18+
npm --version    # v9+
```

You'll also need accounts for:
- [MongoDB Atlas](https://mongodb.com/atlas) — free tier works great
- [Cloudinary](https://cloudinary.com) — free tier works great
- [Resend](https://resend.com) — for welcome emails
- [Arcjet](https://arcjet.com) — for security

<br/>

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/LovelySharma-dev/Pulse.git
cd Pulse
```

### 2️⃣ Set Up the Backend

```bash
cd backend
npm install
```

Create your `.env` file (see [Environment Variables](#️-environment-variables) above), then:

```bash
npm run dev
# ✅ Server running at http://localhost:3000
```

### 3️⃣ Set Up the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
# ✅ App running at http://localhost:5173
```

### 4️⃣ Open the App

Navigate to **[http://localhost:5173](http://localhost:5173)** and start chatting! 🎉

<br/>

---

## 📸 Screenshots

<div align="center">

### 🔐 Login Screen
![Login](./screenshots/login.png)

---

### 💬 Chat Screen
![Chat](./screenshots/chats.png)

---

### 📋 Contacts
![Contacts](./screenshots/Contacts.png)

---

### 📱 Mobile View
<table>
<tr>
<td align="center">
<img src="./screenshots/MobileView1.png" alt="Mobile View 1" width="250"/>
</td>

<td align="center">
<img src="./screenshots/mobileView2.png" alt="Mobile View 2" width="250"/>
</td>
</tr>
</table>

</div>

<br/>

---

## 🎯 Roadmap

What's coming next for Pulse 👀

- [ ] ⌨️ **Typing Indicator** — See when someone is typing
- [ ] ✅ **Read Receipts** — Know when your message is seen
- [ ] 😊 **Emoji Picker** — React and express yourself
- [ ] 🎙️ **Voice Messages** — Record and send audio
- [ ] 📹 **Video Calling** — Face-to-face in the browser
- [ ] 🔔 **Push Notifications** — Never miss a message
- [ ] 👥 **Group Chats** — Bring everyone together
- [ ] 🔍 **Message Search** — Find any conversation instantly
- [ ] ↩️ **Reply to Messages** — Thread-style replies
- [ ] ✏️ **Edit / Delete Messages** — Because typos happen
- [ ] 🌙 **Dark & Light Themes** — Choose your vibe

> 💜 Want to help build any of these? [Open a PR!](#-contributing)

<br/>

---

## 💡 Lessons Learned

Building Pulse was a deep dive into real-world full-stack challenges. Here's what made it interesting:

<br/>

**⚡ Optimistic UI Updates**
Making messages appear instantly while the server processes them — and gracefully rolling back on failure — required careful state management with Zustand.

**🔄 Real-Time Synchronization**
Keeping socket events, REST state, and UI in sync without stale data or race conditions taught the importance of a single source of truth.

**🔌 Socket Lifecycle Management**
Connecting, disconnecting, and reconnecting sockets cleanly — especially across auth boundaries — is more nuanced than the docs suggest.

**🖼️ Image Upload Pipeline**
Handling file selection → preview → base64 encoding → Cloudinary upload → URL storage in MongoDB without blocking the UI.

**🔒 JWT + Cookie Auth**
Understanding why HTTP-only cookies beat localStorage for token storage, and how to propagate auth context to Socket.IO handshakes.

**🗃️ Zustand State Design**
Structuring stores so that chat state, auth state, and socket state stay decoupled but reactive to each other.

**🔗 REST + WebSockets Together**
Knowing when to use a REST call vs. a socket event — and why you often need both for the same action.

<br/>

---

## 🤝 Contributing

Contributions are what make open source awesome. Any contributions you make are **genuinely appreciated**.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

Found a bug? [Open an issue](https://github.com/LovelySharma-dev/Pulse/issues)
Have an idea? [Start a discussion](https://github.com/LovelySharma-dev/pulse/discussions)

<br/>

---

<div align="center">

## ⭐ Support

If Pulse helped you learn something or saved you hours of boilerplate...

**Give it a star!** ⭐ It genuinely helps.

[![Star on GitHub](https://img.shields.io/github/stars/LovelySharma-dev/pulse?style=social)](https://github.com/LovelySharma-dev/pulse)
[![Fork on GitHub](https://img.shields.io/github/forks/LovelySharma-dev/pulse?style=social)](https://github.com/LovelySharma-dev/pulse/fork)

<br/>

---

<br/>

**Made with ☕ & 💜.**

*Happy Building 🚀*

<br/>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)

</div>