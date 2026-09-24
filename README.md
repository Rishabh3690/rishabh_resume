# 🖥️ Rishabh OS — Desktop Portfolio

A Windows 11 / macOS inspired desktop OS simulation built with **pure HTML, CSS, and vanilla JavaScript**. No frameworks, no build step, no backend.

## ✨ Features

- 🪟 **Windows 11-style desktop** with draggable, stackable, snap-able windows
- 🌌 **Astra Galaxy background** — particle formation + 3D camera + mouse scatter
- 🎨 **10 anime themes** — Jujutsu Kaisen, Bleach (10 Bankai), Death Note
- ♟️ **Full chess game** with 10 AI bots (400–2000 Elo) + neon lightning effects
- 💻 **CodeFlow** — Python step-by-step visualizer with call stack
- 📈 **Analytics dashboard** — 6-year skill journey with milestone markers
- ⌨️ **Terminal** — 15+ working commands (`help`, `open`, `bankai`, `neofetch`, etc.)
- 🐍 **Snake game** — neon arcade with high score persistence
- 🎵 **Music Player** — Spotify-style UI with visualizer
- 🔒 **Lock screen** (Ctrl+L), **Command Palette** (Ctrl+K)
- 🔔 **Notification Center** with archive
- 📊 **Widget Panel** — clock, weather, quotes, quick toggles
- 💾 **Persistent state** — window positions, theme, and open apps survive reloads
- 🖱️ **macOS-style dock magnification** on the taskbar
- ✍️ **Typing hero animation** cycling through taglines

## 🚀 Run Locally (VS Code)

1. Create a folder called `rishabh-os`
2. Add these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `sounds/` (folder — see below)
3. Install the **Live Server** extension in VS Code (by Ritwick Dey)
4. Right-click `index.html` → **Open with Live Server**

## 🔊 Sound Files (Optional)

The Bankai voice lines use a synth fallback if no `.mp3` files are found.

To add real voice lines, create a `sounds/` folder with these exact filenames:

Search on **myinstants.com** or **YouTube** and trim to 2–4 seconds each.

## 📄 Print to PDF

1. Open the site in your browser
2. Press `Ctrl+P` (or `Cmd+P`)
3. Destination → **Save as PDF**
4. Uncheck "Background graphics" for a clean A4 layout
5. Save

## 🌐 Deploy Online (Free)

### Vercel (Recommended)
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
3. Click **Add New Project** → Import your repo → **Deploy**
4. Get your live URL

### GitHub Pages
1. Push code to GitHub
2. Settings → Pages → Source: `main` branch
3. Link: `https://Rishabh3690.github.io/repo-name`

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+K` | Command Palette |
| `Ctrl+L` | Lock Screen |
| `Ctrl+Shift+L` | Toggle Dark/Light Theme |
| `Esc` | Close palette / menus |
| `↑ / ↓` (in palette/terminal) | Navigate |
| `Space` (in music) | Play/Pause |

---

Last updated: 2026-09-22