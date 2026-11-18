# 🖋️ LipiFlow — Hindi Font Converter

> **Every Script, One Platform.**  
> A modern, simple, and reliable web application for converting Hindi text between Unicode and legacy font formats (Kruti Dev 010, DevLys 010, and more).

---

## 📂 Project Structure

```
LipiFlow/
├── frontend/             # React + Vite Client Application
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── components/   # Header, Footer, Hero, Converter, TextEditor, FontSelector, HistoryList
│       ├── pages/        # Home, About
│       ├── context/      # AppContext (Theme, Toast, History)
│       ├── utils/        # Conversion Engine & Mappings (Unicode ↔ Kruti Dev ↔ DevLys)
│       └── styles/       # Modern Typography Studio CSS
└── backend/              # Node.js + Express API Server
    ├── package.json
    ├── .env.example
    └── src/
        ├── server.js     # Express App entry point
        └── routes/       # API endpoints (/api/formats, /api/history)
```

---

## 🚀 Getting Started

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Backend Setup (Optional API & History)
```bash
cd backend
npm install
npm run dev
```
Server runs on [http://localhost:5001](http://localhost:5001).

---

## ✨ Features
- 🔄 **Bidirectional Conversion**: Unicode ↔ Kruti Dev 010, Unicode ↔ DevLys 010.
- ⚡ **100% Client-Side Ready**: Instant conversion directly in the browser with zero latency.
- 🎨 **Modern Typography Studio Design**: Light/Dark theme, responsive mobile-first UI.
- 📋 **One-Click Actions**: Copy to clipboard, download as `.txt`, swap source/destination formats.
