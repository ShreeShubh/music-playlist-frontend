## Music Playlist Frontend

````md
# Music Playlist Frontend

This is the frontend for the **Music Playlist Management System**, built with **React + Vite + Tailwind CSS**, allowing users to:

- Register and log in
- Create and manage custom playlists
- Search for songs via Spotify
- Add songs to selected playlists

> 🔗 Deployed on: [https://music-playlist-frontend-liart.vercel.app/](https://music-playlist-frontend-liart.vercel.app/)

---

## 🚀 Tech Stack

- React (Vite)
- Tailwind CSS
- Material UI
- Axios (with token interceptors)
- React Select
- JWT-based authentication
- Connected to a Node.js + MongoDB backend

---

## 📦 Installation

```bash
git clone https://github.com/ShreeShubh/music-playlist-frontend.git
cd music-playlist-frontend
npm install
```
````

---

## ⚙️ Environment Setup

Create a `.env` file at the root:

```env
VITE_API_BASE_URL=https://music-playlist-backend.onrender.com
```

Make sure this points to your deployed backend.

---

## 🧪 Run Locally

```bash
npm run dev
```

Then visit: `http://localhost:5173`

---

## 🧭 Features

- JWT-based login & registration
- Create, edit, delete playlists
- Add Spotify songs to playlists
- Fully responsive, mobile-first UI
- Spotify-inspired theme

---

| Home                                         | Login                                          |
| -------------------------------------------- | ---------------------------------------------- |
| ![Home](/client/public/screenshots/home.png) | ![Login](/client/public/screenshots/login.png) |

| Register                                             | Dashboard                                              |
| ---------------------------------------------------- | ------------------------------------------------------ |
| ![Register](/client/public/screenshots/register.png) | ![Dashboard](/client/public/screenshots/dashboard.png) |

---

## 🌍 Deployment

The app is deployed using **Vercel**:

1. Connect GitHub repo to Vercel
2. Set `VITE_API_BASE_URL` in **Project Settings → Environment Variables**
3. Use default Vite settings:

   - Build Command: `npm run build`
   - Output Directory: `dist`

### 🔁 Routing Fix for Refresh (SPA)

Create a `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
