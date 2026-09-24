/* ═══════════════════════════════════════════════════════════════
   RISHABH OS — Master Script (Final Consolidated)
   All 10 modules integrated · Bug-fixed · Production ready
   ═══════════════════════════════════════════════════════════════ */

console.log('%c🖥️ Rishabh OS Booting...', 'color:#00d8ff;font-weight:bold;font-size:14px;');

/* ═══ GLOBAL STATE ═══ */
const state = {
    openWindows: [], zIndex: 100, currentBg: 'astra',
    bankai: null, dnStage: 'idle'
};

/* ═══ APP DEFINITIONS ═══ */
const APPS = [
    { id: 'about',      name: 'About',      icon: '👤', pinned: true },
    { id: 'skills',     name: 'Skills',     icon: '📊', pinned: true },
    { id: 'experience', name: 'Experience', icon: '💼', pinned: true },
    { id: 'projects',   name: 'Projects',   icon: '🚀', pinned: true },
    { id: 'gallery',    name: 'Gallery',    icon: '🖼️', pinned: true },
    { id: 'chess',      name: 'Chess',      icon: '♟️', pinned: true },
    { id: 'codeflow',   name: 'CodeFlow',   icon: '💻', pinned: false },
    { id: 'analytics',  name: 'Analytics',  icon: '📈', pinned: false },
    { id: 'terminal',   name: 'Terminal',   icon: '⌨️', pinned: false },
    { id: 'snake',      name: 'Snake',      icon: '🐍', pinned: false },
    { id: 'music',      name: 'Music',      icon: '🎵', pinned: false },
    { id: 'settings',   name: 'Settings',   icon: '⚙️', pinned: false }
];

/* ═══ WALLPAPERS ═══ */
const WALLPAPERS = [
    { id: 'astra',      name: 'Astra Galaxy',  css: 'radial-gradient(circle at 50% 50%, #1e1b4b 0%, #020617 70%)' },
    { id: 'tokyo',      name: 'Tokyo Black Hole', css: 'radial-gradient(circle at 50% 50%, #1a0a0a 0%, #000 70%)' },
    { id: 'cyberpunk',  name: 'Binary Stars',  css: 'radial-gradient(circle at 30% 40%, #1e1b4b 0%, #050008 70%)' },
    { id: 'forest',     name: 'Green Comet',   css: 'radial-gradient(circle at 50% 40%, #052e16 0%, #010503 70%)' },
    { id: 'lake',       name: 'Twin Moons',    css: 'radial-gradient(circle at 50% 50%, #0c1429 0%, #02050e 70%)' },
    { id: 'mountain',   name: 'Ringed Planet', css: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #020617 70%)' },
    { id: 'desert',     name: 'Red Dwarf',     css: 'radial-gradient(circle at 50% 50%, #431407 0%, #0c0404 70%)' },
    { id: 'underwater', name: 'Blue Sun',      css: 'radial-gradient(circle at 50% 50%, #082f49 0%, #010409 70%)' },
    { id: 'paris',      name: 'Constellation', css: 'radial-gradient(circle at 50% 50%, #0a0a1f 0%, #000 70%)' },
    { id: 'synthwave',  name: 'Retro Sun',     css: 'linear-gradient(180deg, #2d1b69 0%, #0f0519 60%)' }
];

/* ═══ BANKAI DATA ═══ */
const BANKAI = {
    tensa:    { name:'Tensa Zangetsu', jp:'天鎖斬月', romaji:'TENSA ZANGETSU', color:'#ffffff', theme:'tensa', sound:'sounds/tensa-zangetsu.mp3', cursor:`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="10" fill="#fff"/><circle cx="20" cy="20" r="10" fill="none" stroke="#000" stroke-width="2"/><path d="M8 32 L32 8" stroke="#fff" stroke-width="2"/></svg>`, trailColor:'#ffffff', effect:'reiatsu', ambient:'tensa' },
    hakka:    { name:'Hakka no Togame', jp:'白霞罸', romaji:'HAKKA NO TOGAME', color:'#00d8ff', theme:'hakka', sound:'sounds/hakka-no-togame.mp3', cursor:`<svg viewBox="0 0 40 40"><g stroke="#a5f3fc" stroke-width="2" fill="none"><line x1="20" y1="5" x2="20" y2="35"/><line x1="5" y1="20" x2="35" y2="20"/><line x1="9" y1="9" x2="31" y2="31"/><line x1="31" y1="9" x2="9" y2="31"/></g><circle cx="20" cy="20" r="3" fill="#fff"/></svg>`, trailColor:'#a5f3fc', effect:'ice', ambient:'hakka' },
    daiguren: { name:'Daiguren Hyorinmaru', jp:'大紅蓮氷輪丸', romaji:'DAIGUREN HYORINMARU', color:'#67e8f9', theme:'daiguren', sound:'sounds/daiguren.mp3', cursor:`<svg viewBox="0 0 40 40"><polygon points="20,3 24,15 36,15 26,23 30,35 20,28 10,35 14,23 4,15 16,15" fill="#a5f3fc" stroke="#06b6d4" stroke-width="1.5"/></svg>`, trailColor:'#a5f3fc', effect:'dragon', ambient:'daiguren' },
    zanka:    { name:'Zanka no Tachi', jp:'残火の太刀', romaji:'ZANKA NO TACHI', color:'#ef4444', theme:'zanka', sound:'sounds/zanka-no-tachi.mp3', cursor:`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="9" fill="url(#fg)"/><defs><radialGradient id="fg"><stop offset="0%" stop-color="#fff"/><stop offset="50%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#ef4444"/></radialGradient></defs><path d="M14 26 L20 36 L26 26" fill="none" stroke="#fbbf24" stroke-width="2"/></svg>`, trailColor:'#ef4444', effect:'fire', ambient:'zanka' },
    katen:    { name:'Katen Kyokotsu', jp:'花天狂骨枯松心中', romaji:'KATEN KYOKOTSU', color:'#dc2626', theme:'katen', sound:'sounds/katen-kyokotsu.mp3', cursor:`<svg viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="12" ry="15" fill="#1c1917" stroke="#dc2626" stroke-width="1.5"/><circle cx="15" cy="17" r="2" fill="#dc2626"/><circle cx="25" cy="17" r="2" fill="#dc2626"/><path d="M14 27 Q20 31 26 27" stroke="#dc2626" stroke-width="1.5" fill="none"/></svg>`, trailColor:'#dc2626', effect:'threads', ambient:'katen' },
    benihime: { name:'Benihime Aratame', jp:'観音開紅姫改メ', romaji:'BENIHIME ARATAME', color:'#dc2626', theme:'benihime', sound:'sounds/benihime.mp3', cursor:`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="10" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="20" y1="10" x2="20" y2="4" stroke="#dc2626" stroke-width="2"/><circle cx="20" cy="4" r="2" fill="#dc2626"/></svg>`, trailColor:'#fca5a5', effect:'stitch', ambient:'benihime' },
    konjiki:  { name:'Konjiki Ashisogi Jizo', jp:'金色疋殺地蔵', romaji:'KONJIKI ASHISOGI JIZO', color:'#84cc16', theme:'konjiki', sound:'sounds/konjiki.mp3', cursor:`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="11" fill="url(#poison)"/><defs><radialGradient id="poison"><stop offset="0%" stop-color="#bef264"/><stop offset="60%" stop-color="#84cc16"/><stop offset="100%" stop-color="#65a30d"/></radialGradient></defs><circle cx="16" cy="17" r="1.5" fill="#1a2e05"/><circle cx="24" cy="17" r="1.5" fill="#1a2e05"/></svg>`, trailColor:'#84cc16', effect:'poison', ambient:'konjiki' },
    shatatsu: { name:'Shatatsu Karagara', jp:'娑闥迦羅骸刺絡辻', romaji:'SHATATSU KARAGARA', color:'#fbbf24', theme:'shatatsu', sound:'sounds/shatatsu.mp3', cursor:`<svg viewBox="0 0 40 40"><line x1="8" y1="32" x2="30" y2="10" stroke="#fbbf24" stroke-width="2.5"/><circle cx="30" cy="10" r="3" fill="none" stroke="#fbbf24" stroke-width="2"/></svg>`, trailColor:'#fbbf24', effect:'weave', ambient:'shatatsu' },
    kokujo:   { name:'Kokujo Tengen Myoo', jp:'黒縄天譴明王', romaji:'KOKUJO TENGEN MYOO', color:'#a16207', theme:'kokujo', sound:'sounds/kokujo.mp3', cursor:`<svg viewBox="0 0 40 40"><path d="M8 32 L12 18 L20 12 L28 18 L32 32 Z" fill="#78350f" stroke="#fbbf24" stroke-width="1.5"/><circle cx="16" cy="20" r="2" fill="#fbbf24"/><circle cx="24" cy="20" r="2" fill="#fbbf24"/></svg>`, trailColor:'#a16207', effect:'armor', ambient:'kokujo' },
    minazuki: { name:'Minazuki', jp:'皆尽', romaji:'MINAZUKI', color:'#dc2626', theme:'minazuki', sound:'sounds/minazuki.mp3', cursor:`<svg viewBox="0 0 40 40"><path d="M20 5 Q24 20 20 35 Q16 20 20 5 Z" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/><circle cx="20" cy="20" r="2" fill="#fca5a5"/></svg>`, trailColor:'#dc2626', effect:'blood', ambient:'minazuki' }
};

window.APPS = APPS;
window.BANKAI = BANKAI;
window.WALLPAPERS = WALLPAPERS;
window.state = state;

/* ═══ UTILITIES ═══ */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const escHTML = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function playBeep(freq, dur, type = 'sine', vol = 0.06) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.value = freq; osc.type = type;
        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
        osc.start(); osc.stop(ctx.currentTime + dur);
    } catch (e) {}
}

function playSound(src, fallback) {
    try {
        const audio = new Audio(src);
        audio.volume = 0.85;
        audio.play().catch(() => fallback && fallback());
    } catch (e) { fallback && fallback(); }
}

/* ═══════════════════════════════════════════════════════════════
   PERSISTENCE
   ═══════════════════════════════════════════════════════════════ */
const Persist = (() => {
    const PREFIX = 'rishabh-os:';
    const get = (k, fb = null) => { try { const r = localStorage.getItem(PREFIX + k); return r ? JSON.parse(r) : fb; } catch (e) { return fb; } };
    const set = (k, v) => { try { localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) {} };
    const remove = (k) => localStorage.removeItem(PREFIX + k);
    return {
        get, set, remove,
        saveWinPos: (id, w) => set('win-pos:' + id, { left: w.offsetLeft, top: w.offsetTop }),
        loadWinPos: (id) => get('win-pos:' + id, null),
        saveOpenApps: () => set('open-apps', state.openWindows),
        loadOpenApps: () => get('open-apps', []),
        saveActiveTheme: () => {
            const t = document.body.className.split(' ').filter(c => c.startsWith('theme-'));
            set('active-themes', t);
            set('bankai', state.bankai);
        },
        loadActiveThemes: () => get('active-themes', [])
    };
})();
window.Persist = Persist;

/* ═══════════════════════════════════════════════════════════════
   NOTIFICATION SYSTEM (with queue + fallback)
   ═══════════════════════════════════════════════════════════════ */
const _notificationQueue = [];
let _notifCenterReady = false;

function showNotification(msg, opts = {}) {
    if (!msg) return;
    opts = opts || {};
    _showToastOnly(msg, opts);
    if (_notifCenterReady && typeof NotifCenter !== 'undefined' && NotifCenter.push) {
        try {
            let icon = opts.icon || '✨', title = opts.title || 'Notification', body = msg;
            if (!opts.icon) {
                if (/bankai/i.test(msg)) { icon = '⚔️'; title = 'Bankai Released'; }
                else if (/jjk/i.test(msg)) { icon = '🔮'; title = 'JJK'; }
                else if (/death note/i.test(msg)) { icon = '🍎'; title = 'Death Note'; }
                else if (/astra/i.test(msg)) { icon = '🌌'; title = 'Astra Galaxy'; }
                else if (/copied/i.test(msg)) { icon = '📧'; title = 'Copied'; }
                else if (/gallery/i.test(msg)) { icon = '🖼️'; title = 'Gallery'; }
            }
            body = body.replace(/^[\p{Emoji}\s]+/u, '').trim();
            NotifCenter.push(icon, title, body);
        } catch (e) {}
    } else {
        _notificationQueue.push({ msg, opts });
    }
}

function _showToastOnly(msg, opts = {}) {
    let icon = opts.icon || '✨', title = opts.title || 'Notification', body = msg;
    if (!opts.icon) {
        if (/bankai/i.test(msg)) { icon = '⚔️'; title = 'Bankai Released'; }
        else if (/jjk/i.test(msg)) { icon = '🔮'; title = 'JJK'; }
        else if (/death note/i.test(msg)) { icon = '🍎'; title = 'Death Note'; }
        else if (/copied/i.test(msg)) { icon = '📧'; title = 'Copied'; }
    }
    body = body.replace(/^[\p{Emoji}\s]+/u, '').trim();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-content">
            <div class="toast-title">${escHTML(title)}</div>
            <div class="toast-msg">${escHTML(body)}</div>
        </div>
        <div class="toast-progress"></div>`;
    document.body.appendChild(toast);
    setTimeout(() => { toast.classList.add('leaving'); setTimeout(() => toast.remove(), 300); }, 3200);
}
window.showNotification = showNotification;
window._markNotifCenterReady = function () {
    _notifCenterReady = true;
    while (_notificationQueue.length > 0) {
        const { msg, opts } = _notificationQueue.shift();
        try { showNotification(msg, opts); } catch (e) {}
    }
};

/* ═══════════════════════════════════════════════════════════════
   CELESTIAL BODIES — 10 unique background renderers
   ═══════════════════════════════════════════════════════════════ */
const CelestialBodies = (() => {
    let canvas, ctx, W, H;
    let currentMode = 'astra';
    let rafId = null, running = false;
    let mouse = { x: 0, y: 0, px: 0, py: 0 };
    let camera = { x: 0, y: 0, tx: 0, ty: 0 };
    let time = 0;
    const renderers = {};
    const rand = (a, b) => a + Math.random() * (b - a);
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];

    renderers.astra = (() => {
        let stars = [], startTime = 0;
        function init() {
            stars = [];
            const STAR_COUNT = 600, ARMS = 3;
            const R = Math.min(W, H) * 0.38, THICK = 12;
            const palette = [{ c: '#ffffff', w: 0.4 }, { c: '#00d8ff', w: 0.2 }, { c: '#a855f7', w: 0.15 }, { c: '#f59e0b', w: 0.15 }, { c: '#ec4899', w: 0.1 }];
            const pickColor = () => { let r = Math.random(), a = 0; for (const p of palette) { a += p.w; if (r < a) return p.c; } return '#fff'; };
            for (let i = 0; i < STAR_COUNT; i++) {
                const arm = i % ARMS;
                const armAngle = (Math.PI * 2 / ARMS) * arm;
                const t = Math.pow(Math.random(), 0.75);
                const radius = t * R * 1.15;
                const spiralAngle = radius * 0.028 + armAngle;
                const spread = 4 + radius * 0.12;
                const hx = Math.cos(spiralAngle) * radius + rand(-spread / 2, spread / 2);
                const hz = Math.sin(spiralAngle) * radius + rand(-spread / 2, spread / 2);
                const hy = rand(-THICK / 2, THICK / 2) * (1 - t);
                stars.push({
                    x: rand(-1400, 1400), y: rand(-1400, 1400), z: rand(-1400, 1400),
                    hx, hy, hz, vx: 0, vy: 0, vz: 0,
                    size: rand(0.4, 1.8), color: pickColor(),
                    twinkle: Math.random() * Math.PI * 2, twinkleSpeed: rand(0.02, 0.06),
                    formDelay: 800 + Math.random() * 4500, opacity: rand(0.2, 0.5)
                });
            }
            startTime = performance.now();
        }
        function update() {
            const elapsed = performance.now() - startTime;
            for (const s of stars) {
                const formed = elapsed > s.formDelay;
                if (formed) {
                    s.opacity += (1 - s.opacity) * 0.02;
                    s.vx += (s.hx - s.x) * 0.008; s.vy += (s.hy - s.y) * 0.008; s.vz += (s.hz - s.z) * 0.008;
                    s.vx *= 0.94; s.vy *= 0.94; s.vz *= 0.94;
                } else { s.vx *= 0.98; s.vy *= 0.98; s.vz *= 0.98; }
                s.x += s.vx; s.y += s.vy; s.z += s.vz;
                s.twinkle += s.twinkleSpeed;
            }
        }
        function draw() {
            ctx.fillStyle = 'rgba(8, 8, 22, 0.28)';
            ctx.fillRect(0, 0, W, H);
            const autoRotate = time * 0.0006;
            const camY = camera.x + autoRotate, camX = camera.y;
            const projected = [];
            for (const s of stars) {
                const cosY = Math.cos(camY), sinY = Math.sin(camY);
                const x1 = s.x * cosY - s.z * sinY, z1 = s.x * sinY + s.z * cosY;
                const cosX = Math.cos(camX), sinX = Math.sin(camX);
                const y1 = s.y * cosX - z1 * sinX, z2 = s.y * sinX + z1 * cosX;
                const denom = 900 + z2 + 700; if (denom < 50) continue;
                const scale = 900 / denom;
                projected.push({ x: W / 2 + x1 * scale, y: H / 2 + y1 * scale, scale, z: z2, s });
            }
            projected.sort((a, b) => b.z - a.z);
            for (const { x, y, scale, s } of projected) {
                const tw = 0.7 + Math.sin(s.twinkle) * 0.3, sz = s.size * scale * 12;
                const a = s.opacity * tw * Math.min(1, scale * 2);
                if (sz > 0.2 && a > 0.05) {
                    ctx.globalAlpha = a; ctx.fillStyle = s.color;
                    ctx.shadowBlur = sz > 1.5 ? 12 : 5; ctx.shadowColor = s.color;
                    ctx.beginPath(); ctx.arc(x, y, Math.max(0.4, sz), 0, Math.PI * 2); ctx.fill();
                }
            }
        }
        return { init, update, draw };
    })();

    renderers.tokyo = (() => {
        let particles = [];
        function init() {
            particles = [];
            for (let i = 0; i < 500; i++) {
                const angle = Math.random() * Math.PI * 2, radius = 60 + Math.random() * 400;
                particles.push({ angle, radius, angleSpeed: (0.004 + Math.random() * 0.006) * (radius < 200 ? 1.5 : 1), size: 0.5 + Math.random() * 2, color: Math.random() > 0.7 ? '#fbbf24' : (Math.random() > 0.5 ? '#f97316' : '#fbbf24'), opacity: 0.3 + Math.random() * 0.6 });
            }
        }
        function update() {
            for (const p of particles) {
                p.angle += p.angleSpeed * (1 + 200 / Math.max(p.radius, 50));
                p.radius -= 0.15;
                if (p.radius < 40) { p.radius = 60 + Math.random() * 400; p.angle = Math.random() * Math.PI * 2; }
            }
        }
        function draw() {
            ctx.fillStyle = 'rgba(8, 4, 4, 0.35)'; ctx.fillRect(0, 0, W, H);
            const cx = W / 2 + camera.x * 30, cy = H / 2 + camera.y * 30;
            const halo = ctx.createRadialGradient(cx, cy, 30, cx, cy, 250);
            halo.addColorStop(0, 'rgba(255, 200, 100, 0.15)'); halo.addColorStop(0.5, 'rgba(255, 100, 50, 0.05)'); halo.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(cx, cy, 250, 0, Math.PI * 2); ctx.fill();
            for (const p of particles) {
                const x = cx + Math.cos(p.angle) * p.radius, y = cy + Math.sin(p.angle) * p.radius * 0.4;
                ctx.globalAlpha = p.opacity; ctx.fillStyle = p.color;
                ctx.shadowBlur = 8; ctx.shadowColor = p.color;
                ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill();
            }
            ctx.globalAlpha = 1; ctx.shadowBlur = 0;
            ctx.fillStyle = '#000'; ctx.beginPath(); ctx.arc(cx, cy, 45, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = 'rgba(255, 220, 150, 0.6)'; ctx.lineWidth = 2;
            ctx.shadowBlur = 20; ctx.shadowColor = '#fbbf24';
            ctx.beginPath(); ctx.arc(cx, cy, 47, 0, Math.PI * 2); ctx.stroke();
        }
        return { init, update, draw };
    })();

    renderers.cyberpunk = (() => {
        let stars = [], plasma = [], angle = 0;
        function init() {
            stars = []; plasma = [];
            for (let i = 0; i < 200; i++) plasma.push({ angle: Math.random() * Math.PI * 2, dist: 200 + Math.random() * 100, speed: 0.02 + Math.random() * 0.02, phase: Math.random() * Math.PI * 2, size: 0.5 + Math.random() * 1.5 });
            for (let i = 0; i < 80; i++) stars.push({ x: Math.random() * W, y: Math.random() * H, size: 0.5 + Math.random(), twinkle: Math.random() * Math.PI * 2 });
        }
        function update() { angle += 0.008; for (const p of plasma) p.angle += p.speed; for (const s of stars) s.twinkle += 0.03; }
        function draw() {
            ctx.fillStyle = 'rgba(20, 4, 40, 0.3)'; ctx.fillRect(0, 0, W, H);
            for (const s of stars) { ctx.globalAlpha = 0.4 + Math.sin(s.twinkle) * 0.4; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill(); }
            const cx = W / 2 + camera.x * 40, cy = H / 2 + camera.y * 40, orbitRadius = 130;
            const s1x = cx + Math.cos(angle) * orbitRadius, s1y = cy + Math.sin(angle) * orbitRadius;
            const s2x = cx + Math.cos(angle + Math.PI) * orbitRadius, s2y = cy + Math.sin(angle + Math.PI) * orbitRadius;
            for (const p of plasma) {
                const px = cx + Math.cos(p.angle) * p.dist, py = cy + Math.sin(p.angle) * p.dist;
                ctx.globalAlpha = 0.3 + Math.sin(p.phase + time * 0.003) * 0.3;
                ctx.fillStyle = p.angle % (Math.PI * 2) > Math.PI ? '#ec4899' : '#06b6d4';
                ctx.shadowBlur = 10; ctx.shadowColor = ctx.fillStyle;
                ctx.beginPath(); ctx.arc(px, py, p.size, 0, Math.PI * 2); ctx.fill();
            }
            ctx.globalAlpha = 1; ctx.shadowBlur = 60;
            ctx.shadowColor = '#06b6d4'; ctx.fillStyle = '#a5f3fc';
            ctx.beginPath(); ctx.arc(s1x, s1y, 15, 0, Math.PI * 2); ctx.fill();
            ctx.shadowColor = '#ec4899'; ctx.fillStyle = '#fbcfe8';
            ctx.beginPath(); ctx.arc(s2x, s2y, 15, 0, Math.PI * 2); ctx.fill();
            ctx.globalAlpha = 0.4; ctx.strokeStyle = '#fff'; ctx.lineWidth = 1;
            ctx.shadowBlur = 15; ctx.shadowColor = '#fff';
            ctx.beginPath(); ctx.moveTo(s1x, s1y); ctx.lineTo(s2x, s2y); ctx.stroke();
        }
        return { init, update, draw };
    })();

    renderers.forest = (() => {
        let cometTrail = [], aurora = [], stars = [], comet = { x: 0, y: 0, vx: 0, vy: 0 };
        function init() {
            comet = { x: -100, y: H * 0.3, vx: 1.5, vy: 0.5 };
            cometTrail = []; stars = [];
            for (let i = 0; i < 100; i++) stars.push({ x: Math.random() * W, y: Math.random() * H, size: 0.5 + Math.random(), twinkle: Math.random() * Math.PI * 2 });
            aurora = [];
            for (let i = 0; i < 3; i++) aurora.push({ phase: Math.random() * Math.PI * 2, speed: 0.0008 + Math.random() * 0.0008 });
        }
        function update() {
            comet.x += comet.vx; comet.y += comet.vy;
            if (comet.x > W + 100) { comet.x = -100; comet.y = rand(0, H); comet.vy = rand(-0.5, 0.8); }
            cometTrail.unshift({ x: comet.x, y: comet.y, life: 1 });
            if (cometTrail.length > 80) cometTrail.pop();
            for (const t of cometTrail) t.life -= 0.012;
            cometTrail = cometTrail.filter(t => t.life > 0);
            for (const s of stars) s.twinkle += 0.02;
        }
        function draw() {
            ctx.fillStyle = 'rgba(2, 10, 5, 0.3)'; ctx.fillRect(0, 0, W, H);
            for (const a of aurora) {
                a.phase += a.speed;
                const grad = ctx.createLinearGradient(0, H * 0.2, 0, H * 0.5);
                grad.addColorStop(0, 'rgba(74, 222, 128, 0)');
                grad.addColorStop(0.5, `rgba(74, 222, 128, ${0.08 + Math.sin(a.phase) * 0.05})`);
                grad.addColorStop(1, 'rgba(74, 222, 128, 0)');
                ctx.fillStyle = grad;
                const yOff = Math.sin(a.phase * 2) * 30;
                ctx.beginPath(); ctx.moveTo(0, H * 0.2 + yOff);
                for (let x = 0; x <= W; x += 40) ctx.lineTo(x, H * 0.3 + Math.sin(x * 0.005 + a.phase) * 50 + yOff);
                ctx.lineTo(W, H * 0.5); ctx.lineTo(0, H * 0.5); ctx.closePath(); ctx.fill();
            }
            for (const s of stars) { ctx.globalAlpha = 0.5 + Math.sin(s.twinkle) * 0.5; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill(); }
            for (let i = 0; i < cometTrail.length; i++) {
                const t = cometTrail[i];
                ctx.globalAlpha = t.life * (1 - i / cometTrail.length) * 0.8;
                ctx.fillStyle = '#4ade80'; ctx.shadowBlur = 15; ctx.shadowColor = '#22c55e';
                ctx.beginPath(); ctx.arc(t.x, t.y, 3 * (1 - i / cometTrail.length), 0, Math.PI * 2); ctx.fill();
            }
            ctx.globalAlpha = 1; ctx.fillStyle = '#d9f99d';
            ctx.shadowBlur = 40; ctx.shadowColor = '#4ade80';
            ctx.beginPath(); ctx.arc(comet.x, comet.y, 8, 0, Math.PI * 2); ctx.fill();
        }
        return { init, update, draw };
    })();

    renderers.lake = (() => {
        let ripples = [];
        function init() {
            ripples = [];
            for (let i = 0; i < 15; i++) ripples.push({ x: rand(0, W), y: H * 0.6 + rand(0, H * 0.4), r: rand(20, 80), maxR: rand(100, 200), life: Math.random() });
        }
        function update() {
            for (const r of ripples) {
                r.r += 0.5; r.life -= 0.005;
                if (r.life <= 0 || r.r > r.maxR) { r.x = rand(0, W); r.y = H * 0.6 + rand(0, H * 0.4); r.r = rand(20, 80); r.maxR = rand(100, 200); r.life = 1; }
            }
        }
        function draw() {
            ctx.fillStyle = 'rgba(5, 15, 30, 0.3)'; ctx.fillRect(0, 0, W, H);
            const horizon = H * 0.6;
            const waterGrad = ctx.createLinearGradient(0, horizon, 0, H);
            waterGrad.addColorStop(0, 'rgba(10, 30, 60, 0.6)'); waterGrad.addColorStop(1, 'rgba(5, 15, 30, 0.9)');
            ctx.fillStyle = waterGrad; ctx.fillRect(0, horizon, W, H - horizon);
            const m1x = W * 0.7 + camera.x * 30, m1y = horizon - 150 + camera.y * 20;
            ctx.globalAlpha = 1; ctx.shadowBlur = 60; ctx.shadowColor = '#cbd5e1'; ctx.fillStyle = '#e2e8f0';
            ctx.beginPath(); ctx.arc(m1x, m1y, 50, 0, Math.PI * 2); ctx.fill();
            const m2x = W * 0.3 + camera.x * 20, m2y = horizon - 100 + camera.y * 15;
            ctx.shadowBlur = 50; ctx.shadowColor = '#93c5fd'; ctx.fillStyle = '#bfdbfe';
            ctx.beginPath(); ctx.arc(m2x, m2y, 30, 0, Math.PI * 2); ctx.fill();
            ctx.shadowBlur = 0;
            for (const r of ripples) {
                ctx.globalAlpha = r.life * 0.3; ctx.strokeStyle = 'rgba(191, 219, 254, 0.5)'; ctx.lineWidth = 1;
                ctx.beginPath(); ctx.ellipse(r.x, r.y, r.r, r.r * 0.3, 0, 0, Math.PI * 2); ctx.stroke();
            }
        }
        return { init, update, draw };
    })();

    renderers.mountain = (() => {
        let ringParticles = [], stars = [];
        function init() {
            ringParticles = [];
            for (let i = 0; i < 400; i++) {
                const band = Math.random();
                let r;
                if (band < 0.4) r = 180 + Math.random() * 40;
                else if (band < 0.7) r = 240 + Math.random() * 30;
                else r = 290 + Math.random() * 60;
                ringParticles.push({ angle: Math.random() * Math.PI * 2, radius: r, size: 0.5 + Math.random() * 1.5, opacity: 0.3 + Math.random() * 0.5, color: Math.random() > 0.7 ? '#fbbf24' : '#cbd5e1' });
            }
            stars = [];
            for (let i = 0; i < 80; i++) stars.push({ x: Math.random() * W, y: Math.random() * H, size: 0.3 + Math.random(), twinkle: Math.random() * Math.PI * 2 });
        }
        function update() { for (const p of ringParticles) p.angle += 0.002; for (const s of stars) s.twinkle += 0.025; }
        function draw() {
            ctx.fillStyle = 'rgba(5, 10, 20, 0.3)'; ctx.fillRect(0, 0, W, H);
            for (const s of stars) { ctx.globalAlpha = 0.4 + Math.sin(s.twinkle) * 0.5; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill(); }
            const cx = W / 2 + camera.x * 40, cy = H / 2 + camera.y * 30, tilt = 0.4;
            ctx.save(); ctx.translate(cx, cy); ctx.rotate(tilt);
            for (const p of ringParticles) { if (Math.sin(p.angle) < 0) continue; const x = Math.cos(p.angle) * p.radius, y = Math.sin(p.angle) * p.radius * 0.3; ctx.globalAlpha = p.opacity * 0.7; ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill(); }
            ctx.restore();
            const planetGrad = ctx.createRadialGradient(cx - 30, cy - 30, 10, cx, cy, 120);
            planetGrad.addColorStop(0, '#f8fafc'); planetGrad.addColorStop(0.5, '#94a3b8'); planetGrad.addColorStop(1, '#334155');
            ctx.globalAlpha = 1; ctx.shadowBlur = 40; ctx.shadowColor = 'rgba(148, 163, 184, 0.6)';
            ctx.fillStyle = planetGrad; ctx.beginPath(); ctx.arc(cx, cy, 120, 0, Math.PI * 2); ctx.fill();
            ctx.shadowBlur = 0; ctx.globalAlpha = 0.15; ctx.fillStyle = '#475569';
            for (let i = -3; i <= 3; i++) { const y = cy + i * 25; ctx.beginPath(); ctx.ellipse(cx, y, 115, 8, 0, 0, Math.PI * 2); ctx.fill(); }
            ctx.save(); ctx.translate(cx, cy); ctx.rotate(tilt);
            for (const p of ringParticles) { if (Math.sin(p.angle) >= 0) continue; const x = Math.cos(p.angle) * p.radius, y = Math.sin(p.angle) * p.radius * 0.3; ctx.globalAlpha = p.opacity; ctx.fillStyle = p.color; ctx.shadowBlur = 5; ctx.shadowColor = p.color; ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill(); }
            ctx.restore();
        }
        return { init, update, draw };
    })();

    renderers.desert = (() => {
        let dust = [], pulse = 0;
        function init() {
            dust = [];
            for (let i = 0; i < 300; i++) {
                const angle = Math.random() * Math.PI * 2, radius = 100 + Math.random() * 400;
                dust.push({ angle, radius, angleSpeed: 0.003 + Math.random() * 0.005, size: 0.5 + Math.random() * 2, color: Math.random() > 0.5 ? '#fbbf24' : '#dc2626', opacity: 0.2 + Math.random() * 0.5 });
            }
        }
        function update() { pulse += 0.02; for (const d of dust) { d.angle += d.angleSpeed; d.radius -= 0.1; if (d.radius < 80) d.radius = 500; } }
        function draw() {
            ctx.fillStyle = 'rgba(15, 5, 3, 0.3)'; ctx.fillRect(0, 0, W, H);
            const cx = W / 2 + camera.x * 30, cy = H / 2 + camera.y * 30;
            const pulseFactor = 1 + Math.sin(pulse) * 0.05;
            for (const d of dust) {
                const x = cx + Math.cos(d.angle) * d.radius, y = cy + Math.sin(d.angle) * d.radius * 0.7;
                ctx.globalAlpha = d.opacity; ctx.fillStyle = d.color; ctx.shadowBlur = 8; ctx.shadowColor = d.color;
                ctx.beginPath(); ctx.arc(x, y, d.size, 0, Math.PI * 2); ctx.fill();
            }
            ctx.globalAlpha = 0.4;
            const glowGrad = ctx.createRadialGradient(cx, cy, 30, cx, cy, 200 * pulseFactor);
            glowGrad.addColorStop(0, 'rgba(251, 146, 60, 0.6)'); glowGrad.addColorStop(0.5, 'rgba(220, 38, 38, 0.3)'); glowGrad.addColorStop(1, 'transparent');
            ctx.fillStyle = glowGrad; ctx.beginPath(); ctx.arc(cx, cy, 200 * pulseFactor, 0, Math.PI * 2); ctx.fill();
            ctx.globalAlpha = 1;
            const sunGrad = ctx.createRadialGradient(cx - 15, cy - 15, 5, cx, cy, 70);
            sunGrad.addColorStop(0, '#fef3c7'); sunGrad.addColorStop(0.4, '#f97316'); sunGrad.addColorStop(1, '#991b1b');
            ctx.fillStyle = sunGrad; ctx.shadowBlur = 80; ctx.shadowColor = '#ea580c';
            ctx.beginPath(); ctx.arc(cx, cy, 70 * pulseFactor, 0, Math.PI * 2); ctx.fill();
        }
        return { init, update, draw };
    })();

    renderers.underwater = (() => {
        let corals = [], bubbles = [];
        function init() {
            corals = [];
            for (let i = 0; i < 40; i++) corals.push({ angle: (Math.PI * 2 / 40) * i + rand(-0.1, 0.1), length: 100 + Math.random() * 250, phase: Math.random() * Math.PI * 2, width: 1 + Math.random() * 2, color: pick(['#22d3ee', '#0ea5e9', '#67e8f9', '#06b6d4']) });
            bubbles = [];
            for (let i = 0; i < 40; i++) bubbles.push({ x: Math.random() * W, y: Math.random() * H, size: 2 + Math.random() * 5, speed: 0.5 + Math.random() * 1.5, wobble: Math.random() * Math.PI * 2 });
        }
        function update() {
            for (const c of corals) c.phase += 0.02;
            for (const b of bubbles) { b.y -= b.speed; b.wobble += 0.05; if (b.y < -20) { b.y = H + 20; b.x = Math.random() * W; } }
        }
        function draw() {
            ctx.fillStyle = 'rgba(2, 12, 20, 0.3)'; ctx.fillRect(0, 0, W, H);
            const cx = W / 2 + camera.x * 30, cy = H / 2 + camera.y * 30;
            for (const c of corals) {
                const waveLen = c.length * (0.9 + Math.sin(c.phase) * 0.1);
                const ex = cx + Math.cos(c.angle) * waveLen, ey = cy + Math.sin(c.angle) * waveLen;
                ctx.globalAlpha = 0.35 + Math.sin(c.phase) * 0.15; ctx.strokeStyle = c.color;
                ctx.lineWidth = c.width; ctx.shadowBlur = 15; ctx.shadowColor = c.color;
                ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ex, ey); ctx.stroke();
            }
            ctx.globalAlpha = 1;
            const sunGrad = ctx.createRadialGradient(cx - 20, cy - 20, 5, cx, cy, 90);
            sunGrad.addColorStop(0, '#ecfeff'); sunGrad.addColorStop(0.4, '#22d3ee'); sunGrad.addColorStop(1, '#0c4a6e');
            ctx.fillStyle = sunGrad; ctx.shadowBlur = 100; ctx.shadowColor = '#22d3ee';
            ctx.beginPath(); ctx.arc(cx, cy, 90, 0, Math.PI * 2); ctx.fill();
            ctx.shadowBlur = 10; ctx.shadowColor = '#a5f3fc';
            for (const b of bubbles) { const bx = b.x + Math.sin(b.wobble) * 5; ctx.globalAlpha = 0.5; ctx.strokeStyle = '#a5f3fc'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(bx, b.y, b.size, 0, Math.PI * 2); ctx.stroke(); }
        }
        return { init, update, draw };
    })();

    renderers.paris = (() => {
        let nodes = [], lines = [], shootingStars = [];
        function init() {
            nodes = []; lines = [];
            for (let i = 0; i < 30; i++) nodes.push({ x: rand(W * 0.1, W * 0.9), y: rand(H * 0.1, H * 0.9), size: 1 + Math.random() * 3, twinkle: Math.random() * Math.PI * 2 });
            for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) { const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y); if (dist < 150) lines.push({ a: i, b: j, dist }); }
            shootingStars = [];
        }
        function update() {
            for (const n of nodes) n.twinkle += 0.03;
            if (Math.random() < 0.005) shootingStars.push({ x: rand(0, W), y: rand(0, H * 0.5), vx: 6 + Math.random() * 4, vy: 3 + Math.random() * 3, life: 1 });
            for (let i = shootingStars.length - 1; i >= 0; i--) { const s = shootingStars[i]; s.x += s.vx; s.y += s.vy; s.life -= 0.02; if (s.life <= 0) shootingStars.splice(i, 1); }
        }
        function draw() {
            ctx.fillStyle = 'rgba(5, 5, 15, 0.3)'; ctx.fillRect(0, 0, W, H);
            const offX = camera.x * 20, offY = camera.y * 20;
            ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)'; ctx.lineWidth = 1; ctx.shadowBlur = 10; ctx.shadowColor = '#fbbf24';
            for (const l of lines) {
                const a = nodes[l.a], b = nodes[l.b];
                ctx.globalAlpha = 0.3 * Math.min(Math.abs(Math.sin(a.twinkle)), Math.abs(Math.sin(b.twinkle)));
                ctx.beginPath(); ctx.moveTo(a.x + offX, a.y + offY); ctx.lineTo(b.x + offX, b.y + offY); ctx.stroke();
            }
            for (const n of nodes) {
                const size = n.size * (0.7 + Math.sin(n.twinkle) * 0.5);
                ctx.globalAlpha = 0.7 + Math.sin(n.twinkle) * 0.3; ctx.fillStyle = '#fef3c7'; ctx.shadowBlur = 15; ctx.shadowColor = '#fbbf24';
                ctx.beginPath(); ctx.arc(n.x + offX, n.y + offY, size, 0, Math.PI * 2); ctx.fill();
            }
            for (const s of shootingStars) { ctx.globalAlpha = s.life; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.shadowBlur = 20; ctx.shadowColor = '#fff'; ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 8, s.y - s.vy * 8); ctx.stroke(); }
        }
        return { init, update, draw };
    })();

    renderers.synthwave = (() => {
        let gridOffset = 0;
        function init() { gridOffset = 0; }
        function update() { gridOffset += 0.8; if (gridOffset > 60) gridOffset = 0; }
        function draw() {
            ctx.fillStyle = 'rgba(15, 5, 25, 0.3)'; ctx.fillRect(0, 0, W, H);
            const horizon = H * 0.55, cx = W / 2 + camera.x * 20, cy = horizon - 80 + camera.y * 15, sunRadius = 130;
            const sunGrad = ctx.createLinearGradient(0, cy - sunRadius, 0, cy + sunRadius);
            sunGrad.addColorStop(0, '#fbbf24'); sunGrad.addColorStop(0.5, '#f472b6'); sunGrad.addColorStop(1, '#a855f7');
            ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, sunRadius, 0, Math.PI * 2); ctx.clip();
            ctx.fillStyle = sunGrad; ctx.fillRect(cx - sunRadius, cy - sunRadius, sunRadius * 2, sunRadius * 2);
            ctx.fillStyle = 'rgba(20, 5, 25, 0.9)';
            const stripeCount = 8;
            for (let i = 0; i < stripeCount; i++) { const t = i / stripeCount; const y = cy + t * sunRadius * 0.7; const h = 3 + t * 8; ctx.fillRect(cx - sunRadius, y, sunRadius * 2, h); }
            ctx.restore();
            ctx.globalAlpha = 0.4;
            const glow = ctx.createRadialGradient(cx, cy, sunRadius * 0.8, cx, cy, sunRadius * 2);
            glow.addColorStop(0, 'rgba(251, 113, 133, 0.6)'); glow.addColorStop(1, 'transparent');
            ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(cx, cy, sunRadius * 2, 0, Math.PI * 2); ctx.fill();
            ctx.globalAlpha = 0.6; ctx.strokeStyle = '#ec4899'; ctx.lineWidth = 1; ctx.shadowBlur = 10; ctx.shadowColor = '#ec4899';
            const vpX = W / 2 + camera.x * 10, vpY = horizon;
            for (let i = -10; i <= 10; i++) { const bx = W / 2 + i * 100; ctx.beginPath(); ctx.moveTo(vpX, vpY); ctx.lineTo(bx, H); ctx.stroke(); }
            const gridLines = 12;
            for (let i = 0; i < gridLines; i++) { const t = (i + gridOffset / 60) / gridLines; const y = horizon + Math.pow(t, 2) * (H - horizon); ctx.globalAlpha = 0.6 * (1 - t * 0.5); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        }
        return { init, update, draw };
    })();

    function resize() {
        if (!canvas) return;
        const dpr = window.devicePixelRatio || 1;
        W = window.innerWidth; H = window.innerHeight;
        canvas.width = W * dpr; canvas.height = H * dpr;
        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function switchTo(mode) {
        if (!renderers[mode]) mode = 'astra';
        if (ctx && W && H) { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); const dpr = window.devicePixelRatio || 1; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.globalAlpha = 1; ctx.shadowBlur = 0; }
        currentMode = mode;
        document.body.dataset.bg = mode;
        try { if (renderers[mode].init) renderers[mode].init(); } catch (e) { console.warn('[CelestialBodies] Init failed for', mode, e); }
        localStorage.setItem('background', mode);
        state.currentBg = mode;
    }

    function loop(now) {
        if (!running) return;
        time = now;
        if (!state.bankai && !document.body.classList.contains('theme-deathnote')) {
            camera.tx = (mouse.x / W - 0.5) * 1.2; camera.ty = (mouse.y / H - 0.5) * 0.8;
        }
        camera.x += (camera.tx - camera.x) * 0.04; camera.y += (camera.ty - camera.y) * 0.04;
        const r = renderers[currentMode];
        if (r) { if (r.update) r.update(); if (r.draw) r.draw(); }
        ctx.globalAlpha = 1; ctx.shadowBlur = 0;
        rafId = requestAnimationFrame(loop);
    }

    function init() {
        canvas = document.getElementById('astra-canvas'); if (!canvas) return;
        ctx = canvas.getContext('2d');
        resize();
        window.addEventListener('resize', () => { resize(); if (renderers[currentMode] && renderers[currentMode].init) { try { renderers[currentMode].init(); } catch (e) {} } });
        document.addEventListener('mousemove', e => { mouse.px = mouse.x; mouse.py = mouse.y; mouse.x = e.clientX; mouse.y = e.clientY; });
        const saved = localStorage.getItem('background') || 'astra';
        currentMode = renderers[saved] ? saved : 'astra';
        if (renderers[currentMode].init) { try { renderers[currentMode].init(); } catch (e) {} }
        running = true; rafId = requestAnimationFrame(loop);
    }

    return { init, switchTo, getCurrent: () => currentMode };
})();
window.CelestialBodies = CelestialBodies;

/* ═══════════════════════════════════════════════════════════════
   EFFECT CANVAS — Bankai particle effects
   ═══════════════════════════════════════════════════════════════ */
let effectCtx, effectW, effectH;
let effectParticles = [], effectType = null;

function initEffectCanvas() {
    const c = document.getElementById('effect-canvas'); if (!c) return;
    effectCtx = c.getContext('2d');
    const resize = () => { effectW = c.width = window.innerWidth; effectH = c.height = window.innerHeight; };
    resize(); window.addEventListener('resize', resize);
    loopEffect();
    document.addEventListener('click', handleClick);
}

function handleClick(e) {
    if (!state.bankai) return;
    const b = BANKAI[state.bankai];
    const burst = document.createElement('div');
    burst.className = 'click-burst';
    burst.style.left = e.clientX + 'px'; burst.style.top = e.clientY + 'px';
    burst.style.width = burst.style.height = '20px';
    burst.style.background = `radial-gradient(circle, ${b.color} 0%, transparent 70%)`;
    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 900);
}

function loopEffect() {
    if (!effectCtx) return;
    effectCtx.clearRect(0, 0, effectW, effectH);
    if (effectType) updateEffect();
    requestAnimationFrame(loopEffect);
}

function setEffect(type) {
    effectType = type;
    effectParticles = [];
    const spawners = { fire: spawnFire, ice: spawnIce, reiatsu: spawnReiatsu, dragon: spawnDragon, threads: spawnThreads, stitch: spawnStitch, poison: spawnPoison, weave: spawnWeave, armor: spawnArmor, blood: spawnBlood };
    if (spawners[type]) spawners[type]();
}

function spawnFire() {
    for (let i = 0; i < 120; i++) effectParticles.push({ kind: 'fire', x: Math.random() * effectW, y: effectH + Math.random() * 200, vx: (Math.random() - 0.5) * 0.8, vy: -1.5 - Math.random() * 2.5, size: 2 + Math.random() * 4, life: 1, flicker: Math.random() * Math.PI * 2, hue: 15 + Math.random() * 30 });
    for (let i = 0; i < 30; i++) effectParticles.push({ kind: 'haze', x: Math.random() * effectW, y: effectH - Math.random() * 300, vx: (Math.random() - 0.5) * 0.4, vy: -0.3 - Math.random() * 0.5, size: 60 + Math.random() * 120, life: 1 });
    for (let i = 0; i < 40; i++) effectParticles.push({ kind: 'spark', x: Math.random() * effectW, y: effectH, vx: (Math.random() - 0.5) * 2, vy: -3 - Math.random() * 4, size: 1 + Math.random() * 1.5, life: 1 });
}
function spawnIce() {
    for (let i = 0; i < 40; i++) {
        const side = Math.floor(Math.random() * 4);
        let sx, sy, vx, vy;
        if (side === 0) { sx = Math.random() * effectW; sy = -20; vx = (Math.random() - 0.5) * 0.6; vy = 0.5 + Math.random(); }
        else if (side === 1) { sx = effectW + 20; sy = Math.random() * effectH; vx = -0.5 - Math.random(); vy = (Math.random() - 0.5) * 0.6; }
        else if (side === 2) { sx = Math.random() * effectW; sy = effectH + 20; vx = (Math.random() - 0.5) * 0.6; vy = -0.5 - Math.random(); }
        else { sx = -20; sy = Math.random() * effectH; vx = 0.5 + Math.random(); vy = (Math.random() - 0.5) * 0.6; }
        effectParticles.push({ kind: 'crystal', x: sx, y: sy, vx, vy, size: 8 + Math.random() * 20, rot: Math.random() * Math.PI * 2, rotSpeed: (Math.random() - 0.5) * 0.02, life: 1, arms: 3 + Math.floor(Math.random() * 3) });
    }
    for (let i = 0; i < 50; i++) effectParticles.push({ kind: 'snowflake', x: Math.random() * effectW, y: Math.random() * effectH, vx: (Math.random() - 0.5) * 0.4, vy: 0.3 + Math.random() * 0.6, size: 2 + Math.random() * 3, rot: Math.random() * Math.PI * 2, rotSpeed: (Math.random() - 0.5) * 0.03, life: 1 });
    for (let i = 0; i < 30; i++) effectParticles.push({ kind: 'frost', x: Math.random() * effectW, y: Math.random() * effectH, size: 1 + Math.random() * 2, life: 1, phase: Math.random() * Math.PI * 2 });
}
function spawnReiatsu() {
    for (let i = 0; i < 60; i++) effectParticles.push({ kind: 'reiatsu-streak', x: Math.random() * effectW, y: effectH + Math.random() * 100, vx: (Math.random() - 0.5) * 0.5, vy: -3 - Math.random() * 4, len: 40 + Math.random() * 120, thickness: 1 + Math.random() * 2, life: 1 });
    for (let i = 0; i < 30; i++) effectParticles.push({ kind: 'orb', x: Math.random() * effectW, y: Math.random() * effectH, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, size: 1.5 + Math.random() * 3, life: 1, phase: Math.random() * Math.PI * 2 });
}
function spawnDragon() {
    for (let i = 0; i < 60; i++) effectParticles.push({ kind: 'ice-wing-frag', x: Math.random() * effectW, y: Math.random() * effectH, vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8, size: 3 + Math.random() * 5, rot: Math.random() * Math.PI * 2, rotSpeed: (Math.random() - 0.5) * 0.02, life: 1 });
    for (let i = 0; i < 25; i++) effectParticles.push({ kind: 'mist', x: Math.random() * effectW, y: effectH - Math.random() * 200, vx: (Math.random() - 0.5) * 0.3, vy: -0.5 - Math.random() * 0.5, size: 80 + Math.random() * 150, life: 1 });
}
function spawnThreads() {
    for (let i = 0; i < 30; i++) effectParticles.push({ kind: 'thread', x: Math.random() * effectW, y: effectH + 20, vx: (Math.random() - 0.5) * 0.4, vy: -0.8 - Math.random() * 1.5, len: 40 + Math.random() * 100, color: 'red', life: 1, wobble: Math.random() * Math.PI * 2, wobbleSpeed: 0.02 + Math.random() * 0.03 });
    for (let i = 0; i < 30; i++) effectParticles.push({ kind: 'thread', x: Math.random() * effectW, y: effectH + 20, vx: (Math.random() - 0.5) * 0.4, vy: -0.8 - Math.random() * 1.5, len: 40 + Math.random() * 100, color: 'blue', life: 1, wobble: Math.random() * Math.PI * 2, wobbleSpeed: 0.02 + Math.random() * 0.03 });
}
function spawnStitch() {
    for (let i = 0; i < 60; i++) effectParticles.push({ kind: 'benihime-thread', x: Math.random() * effectW, y: Math.random() * effectH, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6, len: 30 + Math.random() * 80, angle: Math.random() * Math.PI * 2, rotSpeed: (Math.random() - 0.5) * 0.01, life: 1, pulse: Math.random() * Math.PI * 2 });
    for (let i = 0; i < 30; i++) effectParticles.push({ kind: 'stitch-mark', x: Math.random() * effectW, y: Math.random() * effectH, size: 6 + Math.random() * 8, rot: Math.random() * Math.PI * 2, life: 1, pulse: Math.random() * Math.PI * 2 });
}
function spawnPoison() {
    for (let i = 0; i < 70; i++) effectParticles.push({ kind: 'poison-bubble', x: Math.random() * effectW, y: effectH + Math.random() * 200, vx: (Math.random() - 0.5) * 0.6, vy: -0.6 - Math.random() * 1.5, size: 4 + Math.random() * 12, life: 1, wobble: Math.random() * Math.PI * 2, wobbleSpeed: 0.02 + Math.random() * 0.03 });
    for (let i = 0; i < 20; i++) effectParticles.push({ kind: 'poison-mist', x: Math.random() * effectW, y: effectH - Math.random() * 200, vx: (Math.random() - 0.5) * 0.3, vy: -0.3 - Math.random() * 0.4, size: 100 + Math.random() * 200, life: 1 });
}
function spawnWeave() {
    for (let i = 0; i < 50; i++) effectParticles.push({ kind: 'gold-thread', x: Math.random() * effectW, y: -50, vx: (Math.random() - 0.5) * 0.4, vy: 1.5 + Math.random() * 2, len: 80 + Math.random() * 150, life: 1, wobble: Math.random() * Math.PI * 2, wobbleSpeed: 0.03 + Math.random() * 0.02 });
    for (let i = 0; i < 50; i++) effectParticles.push({ kind: 'gold-sparkle', x: Math.random() * effectW, y: Math.random() * effectH, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, size: 1 + Math.random() * 3, life: 1, phase: Math.random() * Math.PI * 2, phaseSpeed: 0.03 + Math.random() * 0.04 });
}
function spawnArmor() {
    for (let i = 0; i < 40; i++) effectParticles.push({ kind: 'armor-plate', x: Math.random() * effectW, y: effectH + Math.random() * 100, vx: (Math.random() - 0.5) * 0.6, vy: -0.8 - Math.random() * 1.2, size: 12 + Math.random() * 18, rot: Math.random() * Math.PI * 2, rotSpeed: (Math.random() - 0.5) * 0.02, life: 1 });
    for (let i = 0; i < 30; i++) effectParticles.push({ kind: 'kokujo-ember', x: Math.random() * effectW, y: Math.random() * effectH, vx: (Math.random() - 0.5) * 0.8, vy: -0.5 - Math.random() * 0.8, size: 2 + Math.random() * 3, life: 1 });
    for (let i = 0; i < 6; i++) effectParticles.push({ kind: 'spirit-shadow', x: (i + 0.5) * (effectW / 6) + (Math.random() - 0.5) * 40, y: effectH - 80, baseY: effectH - 80, phase: Math.random() * Math.PI * 2, phaseSpeed: 0.01 + Math.random() * 0.01, size: 50 + Math.random() * 40, life: 1 });
}
function spawnBlood() {
    for (let i = 0; i < 60; i++) effectParticles.push({ kind: 'blood-drop', x: Math.random() * effectW, y: -100 - Math.random() * 300, vx: 0, vy: 1.5 + Math.random() * 2.5, size: 3 + Math.random() * 7, life: 1 });
    for (let i = 0; i < 20; i++) effectParticles.push({ kind: 'blood-mist', x: Math.random() * effectW, y: effectH - Math.random() * 200, vx: (Math.random() - 0.5) * 0.3, vy: -0.3 - Math.random() * 0.5, size: 60 + Math.random() * 120, life: 1 });
}

function updateEffect() {
    const fn = {
        fire: p => { p.x += p.vx; p.y += p.vy; p.vy -= 0.005; p.life -= 0.006; p.flicker += 0.3; if (p.life <= 0 || p.y < -30) { p.life = 0; return; } const sz = p.size * (0.8 + Math.sin(p.flicker) * 0.3); effectCtx.globalAlpha = p.life * 0.9; effectCtx.fillStyle = `hsl(${p.hue + p.life * 20}, 100%, ${55 + p.life * 25}%)`; effectCtx.shadowBlur = 25; effectCtx.shadowColor = `hsl(${p.hue}, 100%, 60%)`; effectCtx.beginPath(); effectCtx.arc(p.x, p.y, sz * p.life, 0, Math.PI * 2); effectCtx.fill(); },
        haze: p => { p.x += p.vx; p.y += p.vy; p.life -= 0.002; if (p.life <= 0) { p.life = 0; return; } const g = effectCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size); g.addColorStop(0, `rgba(251, 146, 60, ${p.life * 0.08})`); g.addColorStop(1, 'rgba(251, 146, 60, 0)'); effectCtx.fillStyle = g; effectCtx.beginPath(); effectCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2); effectCtx.fill(); },
        spark: p => { p.x += p.vx; p.y += p.vy; p.vy += 0.05; p.life -= 0.012; effectCtx.globalAlpha = p.life; effectCtx.fillStyle = '#fff7cc'; effectCtx.shadowBlur = 15; effectCtx.shadowColor = '#fbbf24'; effectCtx.beginPath(); effectCtx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2); effectCtx.fill(); },
        crystal: p => { p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed; p.life -= 0.0025; if (p.life <= 0) { p.life = 0; return; } effectCtx.save(); effectCtx.translate(p.x, p.y); effectCtx.rotate(p.rot); effectCtx.globalAlpha = p.life * 0.9; effectCtx.strokeStyle = '#a5f3fc'; effectCtx.lineWidth = 1.5; effectCtx.shadowBlur = 20; effectCtx.shadowColor = '#00d8ff'; for (let a = 0; a < p.arms; a++) { const angle = (Math.PI * 2 / p.arms) * a; effectCtx.beginPath(); effectCtx.moveTo(0, 0); effectCtx.lineTo(Math.cos(angle) * p.size, Math.sin(angle) * p.size); effectCtx.stroke(); } effectCtx.restore(); },
        snowflake: p => { p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed; if (p.y > effectH + 20) { p.y = -20; p.x = Math.random() * effectW; } effectCtx.save(); effectCtx.translate(p.x, p.y); effectCtx.rotate(p.rot); effectCtx.globalAlpha = 0.85; effectCtx.strokeStyle = '#e0f2fe'; effectCtx.lineWidth = 1; effectCtx.shadowBlur = 10; effectCtx.shadowColor = '#a5f3fc'; for (let a = 0; a < 6; a++) { effectCtx.beginPath(); effectCtx.moveTo(0, 0); effectCtx.lineTo(Math.cos((Math.PI / 3) * a) * p.size, Math.sin((Math.PI / 3) * a) * p.size); effectCtx.stroke(); } effectCtx.restore(); },
        frost: p => { p.phase += 0.05; effectCtx.globalAlpha = (0.5 + Math.sin(p.phase) * 0.5) * 0.7; effectCtx.fillStyle = '#e0f2fe'; effectCtx.shadowBlur = 8; effectCtx.beginPath(); effectCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2); effectCtx.fill(); },
        'reiatsu-streak': p => { p.x += p.vx; p.y += p.vy; p.life -= 0.012; if (p.life <= 0 || p.y < -100) { p.life = 0; return; } effectCtx.globalAlpha = p.life * 0.9; effectCtx.strokeStyle = '#fff'; effectCtx.lineWidth = p.thickness; effectCtx.shadowBlur = 20; effectCtx.shadowColor = '#fff'; effectCtx.beginPath(); effectCtx.moveTo(p.x, p.y); effectCtx.lineTo(p.x, p.y + p.len); effectCtx.stroke(); },
        orb: p => { p.x += p.vx; p.y += p.vy; p.phase += 0.05; if (p.x < 0 || p.x > effectW) p.vx *= -1; if (p.y < 0 || p.y > effectH) p.vy *= -1; effectCtx.globalAlpha = 0.7; effectCtx.fillStyle = '#fff'; effectCtx.shadowBlur = 15; effectCtx.shadowColor = '#fff'; effectCtx.beginPath(); effectCtx.arc(p.x, p.y, p.size * (1 + Math.sin(p.phase) * 0.3), 0, Math.PI * 2); effectCtx.fill(); },
        'ice-wing-frag': p => { p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed; p.life -= 0.004; if (p.life <= 0) { p.life = 0; return; } if (p.x < -50 || p.x > effectW + 50 || p.y < -50 || p.y > effectH + 50) { p.x = Math.random() * effectW; p.y = Math.random() * effectH; p.life = 1; } effectCtx.save(); effectCtx.translate(p.x, p.y); effectCtx.rotate(p.rot); effectCtx.globalAlpha = p.life * 0.85; effectCtx.fillStyle = '#a5f3fc'; effectCtx.shadowBlur = 20; effectCtx.shadowColor = '#06b6d4'; effectCtx.beginPath(); effectCtx.moveTo(0, -p.size); effectCtx.lineTo(p.size * 0.5, 0); effectCtx.lineTo(0, p.size); effectCtx.lineTo(-p.size * 0.5, 0); effectCtx.closePath(); effectCtx.fill(); effectCtx.restore(); },
        mist: p => { p.x += p.vx; p.y += p.vy; p.life -= 0.003; if (p.life <= 0) { p.life = 0; return; } const g = effectCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size); g.addColorStop(0, `rgba(165, 243, 252, ${p.life * 0.15})`); g.addColorStop(1, 'rgba(165, 243, 252, 0)'); effectCtx.fillStyle = g; effectCtx.beginPath(); effectCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2); effectCtx.fill(); },
        thread: p => { p.x += p.vx; p.y += p.vy; p.wobble += p.wobbleSpeed; p.life -= 0.008; if (p.life <= 0 || p.y < -100) { p.life = 0; return; } const wobbleX = Math.sin(p.wobble) * 15; const color = p.color === 'red' ? '#dc2626' : '#3b82f6'; effectCtx.globalAlpha = p.life * 0.9; effectCtx.strokeStyle = color; effectCtx.lineWidth = 1.5; effectCtx.shadowBlur = 15; effectCtx.shadowColor = color; effectCtx.beginPath(); effectCtx.moveTo(p.x + wobbleX, p.y); effectCtx.quadraticCurveTo(p.x + wobbleX * 2, p.y + p.len / 2, p.x + wobbleX, p.y + p.len); effectCtx.stroke(); },
        'benihime-thread': p => { p.x += p.vx; p.y += p.vy; p.angle += p.rotSpeed; p.pulse += 0.05; p.life -= 0.005; if (p.life <= 0) { p.life = 0; return; } effectCtx.save(); effectCtx.translate(p.x, p.y); effectCtx.rotate(p.angle); effectCtx.globalAlpha = p.life * (0.7 + Math.sin(p.pulse) * 0.3); effectCtx.strokeStyle = '#dc2626'; effectCtx.lineWidth = 2; effectCtx.lineCap = 'round'; effectCtx.shadowBlur = 15; effectCtx.shadowColor = '#dc2626'; effectCtx.setLineDash([8, 4]); effectCtx.beginPath(); effectCtx.moveTo(-p.len / 2, 0); effectCtx.lineTo(p.len / 2, 0); effectCtx.stroke(); effectCtx.setLineDash([]); effectCtx.restore(); },
        'stitch-mark': p => { p.rot += 0.005; p.pulse += 0.06; effectCtx.save(); effectCtx.translate(p.x, p.y); effectCtx.rotate(p.rot); effectCtx.globalAlpha = 0.5 + Math.sin(p.pulse) * 0.4; effectCtx.strokeStyle = '#dc2626'; effectCtx.lineWidth = 2; effectCtx.lineCap = 'round'; effectCtx.shadowBlur = 12; effectCtx.shadowColor = '#dc2626'; effectCtx.beginPath(); effectCtx.moveTo(-p.size / 2, -p.size / 2); effectCtx.lineTo(p.size / 2, p.size / 2); effectCtx.moveTo(p.size / 2, -p.size / 2); effectCtx.lineTo(-p.size / 2, p.size / 2); effectCtx.stroke(); effectCtx.restore(); },
        'poison-bubble': p => { p.wobble += p.wobbleSpeed; p.x += p.vx + Math.sin(p.wobble) * 0.5; p.y += p.vy; p.life -= 0.005; if (p.life <= 0 || p.y < -50) { p.life = 0; return; } effectCtx.globalAlpha = p.life * 0.85; effectCtx.fillStyle = `hsl(${80 + Math.random() * 20}, 70%, ${50 + Math.random() * 15}%)`; effectCtx.shadowBlur = 20; effectCtx.shadowColor = '#84cc16'; effectCtx.beginPath(); effectCtx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2); effectCtx.fill(); },
        'poison-mist': p => { p.x += p.vx; p.y += p.vy; p.life -= 0.003; if (p.life <= 0) { p.life = 0; return; } const g = effectCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size); g.addColorStop(0, `rgba(132, 204, 22, ${p.life * 0.15})`); g.addColorStop(1, 'rgba(132, 204, 22, 0)'); effectCtx.fillStyle = g; effectCtx.beginPath(); effectCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2); effectCtx.fill(); },
        'gold-thread': p => { p.wobble += p.wobbleSpeed; p.x += p.vx + Math.sin(p.wobble) * 0.8; p.y += p.vy; p.life -= 0.005; if (p.life <= 0 || p.y > effectH + 100) { p.life = 0; return; } effectCtx.globalAlpha = p.life * 0.85; effectCtx.strokeStyle = '#fbbf24'; effectCtx.lineWidth = 1.5; effectCtx.shadowBlur = 15; effectCtx.shadowColor = '#fbbf24'; effectCtx.beginPath(); effectCtx.moveTo(p.x, p.y); effectCtx.quadraticCurveTo(p.x + Math.sin(p.wobble) * 30, p.y + p.len / 2, p.x, p.y + p.len); effectCtx.stroke(); },
        'gold-sparkle': p => { p.x += p.vx; p.y += p.vy; p.phase += p.phaseSpeed; if (p.x < 0 || p.x > effectW) p.vx *= -1; if (p.y < 0 || p.y > effectH) p.vy *= -1; const tw = 0.5 + Math.sin(p.phase) * 0.5; effectCtx.globalAlpha = tw; effectCtx.fillStyle = '#fef3c7'; effectCtx.shadowBlur = 15; effectCtx.shadowColor = '#fbbf24'; effectCtx.beginPath(); effectCtx.arc(p.x, p.y, p.size * tw, 0, Math.PI * 2); effectCtx.fill(); },
        'armor-plate': p => { p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed; p.life -= 0.004; if (p.life <= 0 || p.y < -60) { p.life = 0; return; } effectCtx.save(); effectCtx.translate(p.x, p.y); effectCtx.rotate(p.rot); effectCtx.globalAlpha = p.life * 0.75; effectCtx.fillStyle = '#78350f'; effectCtx.strokeStyle = '#fbbf24'; effectCtx.lineWidth = 1.5; effectCtx.shadowBlur = 18; effectCtx.shadowColor = '#a16207'; effectCtx.beginPath(); effectCtx.moveTo(0, -p.size); effectCtx.lineTo(p.size * 0.7, -p.size * 0.3); effectCtx.lineTo(p.size * 0.7, p.size * 0.3); effectCtx.lineTo(0, p.size); effectCtx.lineTo(-p.size * 0.7, p.size * 0.3); effectCtx.lineTo(-p.size * 0.7, -p.size * 0.3); effectCtx.closePath(); effectCtx.fill(); effectCtx.stroke(); effectCtx.restore(); },
        'kokujo-ember': p => { p.x += p.vx; p.y += p.vy; p.life -= 0.008; if (p.life <= 0 || p.y < -20) { p.life = 0; return; } effectCtx.globalAlpha = p.life; effectCtx.fillStyle = '#fbbf24'; effectCtx.shadowBlur = 15; effectCtx.shadowColor = '#a16207'; effectCtx.beginPath(); effectCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2); effectCtx.fill(); },
        'spirit-shadow': p => { p.phase += p.phaseSpeed; const yOff = Math.sin(p.phase) * 15; effectCtx.save(); effectCtx.translate(p.x, p.baseY + yOff); effectCtx.globalAlpha = 0.35 + Math.sin(p.phase * 0.5) * 0.15; effectCtx.fillStyle = '#1c1917'; effectCtx.shadowBlur = 30; effectCtx.shadowColor = '#a16207'; effectCtx.beginPath(); effectCtx.ellipse(0, -p.size * 0.5, p.size * 0.35, p.size * 0.6, 0, 0, Math.PI * 2); effectCtx.fill(); effectCtx.beginPath(); effectCtx.arc(0, -p.size * 0.95, p.size * 0.2, 0, Math.PI * 2); effectCtx.fill(); effectCtx.restore(); },
        'blood-drop': p => { p.x += p.vx; p.y += p.vy; p.life -= 0.005; if (p.life <= 0 || p.y > effectH + 30) { p.life = 0; return; } effectCtx.globalAlpha = p.life * 0.9; effectCtx.fillStyle = `hsl(0, 85%, ${25 + p.life * 15}%)`; effectCtx.shadowBlur = 15; effectCtx.shadowColor = '#7f1d1d'; effectCtx.beginPath(); effectCtx.moveTo(p.x, p.y - p.size); effectCtx.bezierCurveTo(p.x + p.size * 0.7, p.y - p.size * 0.3, p.x + p.size * 0.5, p.y + p.size * 0.5, p.x, p.y + p.size); effectCtx.bezierCurveTo(p.x - p.size * 0.5, p.y + p.size * 0.5, p.x - p.size * 0.7, p.y - p.size * 0.3, p.x, p.y - p.size); effectCtx.fill(); },
        'blood-mist': p => { p.x += p.vx; p.y += p.vy; p.life -= 0.003; if (p.life <= 0) { p.life = 0; return; } const g = effectCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size); g.addColorStop(0, `rgba(127, 29, 29, ${p.life * 0.2})`); g.addColorStop(1, 'rgba(127, 29, 29, 0)'); effectCtx.fillStyle = g; effectCtx.beginPath(); effectCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2); effectCtx.fill(); }
    };
    effectParticles.forEach(p => fn[p.kind]?.(p));
    effectParticles = effectParticles.filter(p => p.life > 0);
    effectCtx.globalAlpha = 1; effectCtx.shadowBlur = 0;
}

function setAmbient(type) {
    document.querySelectorAll('.bankai-ambient').forEach(el => el.remove());
    if (!type) return;
    const layer = document.createElement('div');
    layer.className = `bankai-ambient ambient-${type}`;
    if (type === 'zanka') for (let i = 0; i < 6; i++) { const c = document.createElement('div'); c.className = 'crack-line'; c.style.top = (Math.random() * 100) + '%'; c.style.width = (30 + Math.random() * 70) + '%'; layer.appendChild(c); }
    if (type === 'hakka') ['top-left', 'top-right', 'bottom-left', 'bottom-right'].forEach((pos, i) => { const c = document.createElement('div'); c.className = 'crystal'; c.style.borderWidth = '0 80px 200px 80px'; c.style.borderColor = 'transparent transparent #a5f3fc transparent'; if (pos.includes('top')) c.style.top = '0'; else c.style.bottom = '0'; if (pos.includes('left')) c.style.left = '0'; else c.style.right = '0'; c.style.animationDelay = (i * 0.3) + 's'; layer.appendChild(c); });
    if (type === 'katen') { const l = document.createElement('div'); l.className = 'curtain left'; layer.appendChild(l); const r = document.createElement('div'); r.className = 'curtain right'; layer.appendChild(r); }
    if (type === 'tensa') for (let i = 0; i < 12; i++) { const s = document.createElement('div'); s.className = 'reiatsu-streak'; s.style.left = (Math.random() * 100) + '%'; s.style.animationDelay = (Math.random() * 3) + 's'; s.style.animationDuration = (1.5 + Math.random() * 1.5) + 's'; layer.appendChild(s); }
    if (type === 'daiguren') { const wings = document.createElement('div'); wings.className = 'ice-wings'; wings.innerHTML = `<svg viewBox="0 0 600 400" fill="none"><path d="M300 200 Q150 80 50 100 Q150 150 150 200 Q200 180 300 200 Z" fill="rgba(165,243,252,0.35)" stroke="#67e8f9" stroke-width="1.5"/><path d="M300 200 Q450 80 550 100 Q450 150 450 200 Q400 180 300 200 Z" fill="rgba(165,243,252,0.35)" stroke="#67e8f9" stroke-width="1.5"/></svg>`; layer.appendChild(wings); }
    if (type === 'benihime') for (let i = 0; i < 20; i++) { const t = document.createElement('div'); t.style.cssText = `position:absolute;top:${Math.random()*100}%;left:${Math.random()*100}%;width:${50+Math.random()*100}px;height:1px;background:linear-gradient(90deg,transparent,#dc2626,transparent);transform:rotate(${Math.random()*360}deg);box-shadow:0 0 8px #dc2626;`; layer.appendChild(t); }
    if (type === 'konjiki') { const mist = document.createElement('div'); mist.className = 'poison-mist'; layer.appendChild(mist); }
    if (type === 'shatatsu') for (let i = 0; i < 30; i++) { const t = document.createElement('div'); t.className = 'silk-thread'; t.style.left = (Math.random() * 100) + '%'; t.style.animationDelay = (Math.random() * 5) + 's'; t.style.height = (100 + Math.random() * 200) + 'px'; layer.appendChild(t); }
    if (type === 'kokujo') for (let i = 0; i < 5; i++) { const f = document.createElement('div'); f.className = 'samurai-spirit'; f.style.left = (10 + Math.random() * 80) + '%'; f.style.animationDelay = (Math.random() * 4) + 's'; layer.appendChild(f); }
    if (type === 'minazuki') for (let i = 0; i < 15; i++) { const d = document.createElement('div'); d.className = 'blood-drip'; d.style.left = (Math.random() * 100) + '%'; d.style.animationDelay = (Math.random() * 6) + 's'; d.style.animationDuration = (3 + Math.random() * 3) + 's'; layer.appendChild(d); }
    document.body.appendChild(layer);
}

/* ═══════════════════════════════════════════════════════════════
   CLOCK
   ═══════════════════════════════════════════════════════════════ */
function initClock() {
    const update = () => {
        const n = new Date();
        const c = $('#clock'), d = $('#date');
        if (c) c.textContent = n.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        if (d) d.textContent = n.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
    };
    update(); setInterval(update, 1000);
}

/* ═══════════════════════════════════════════════════════════════
   DOCK
   ═══════════════════════════════════════════════════════════════ */
function initDock() {
    const c = $('#taskbar-apps');
    if (!c) return;
    APPS.filter(a => a.pinned).forEach(a => {
        const b = document.createElement('div');
        b.className = 'tb-app'; b.dataset.appId = a.id;
        b.innerHTML = a.icon + `<span class="tb-label">${a.name}</span>`;
        b.onclick = () => openApp(a.id);
        c.appendChild(b);
    });
    const settingsBtn = document.createElement('div');
    settingsBtn.className = 'tb-app';
    settingsBtn.innerHTML = '⚙️<span class="tb-label">Settings</span>';
    settingsBtn.onclick = () => $('#settings-modal').classList.add('open');
    c.appendChild(settingsBtn);

    const sb = $('#start-btn');
    if (sb) sb.onclick = (e) => { e.stopPropagation(); $('#start-menu').classList.toggle('open'); };
    const grid = $('#start-grid');
    if (grid) {
        APPS.forEach(a => {
            const el = document.createElement('div');
            el.className = 'start-app';
            el.innerHTML = `<div class="sa-icon">${a.icon}</div><div class="sa-label">${a.name}</div>`;
            el.onclick = () => { if (a.id === 'settings') $('#settings-modal').classList.add('open'); else openApp(a.id); $('#start-menu').classList.remove('open'); };
            grid.appendChild(el);
        });
        $('#start-search').addEventListener('input', e => {
            const q = e.target.value.toLowerCase();
            grid.querySelectorAll('.start-app').forEach(el => { el.style.display = el.textContent.toLowerCase().includes(q) ? '' : 'none'; });
        });
    }

    const MAX_SCALE = 1.55, INFLUENCE = 120, VERTICAL_ZONE = 140;
    let rafId = null, lastX = 0, lastY = 0;
    const applyScales = (mx, my) => {
        const taskbarTop = window.innerHeight - 52;
        const inVerticalZone = my > taskbarTop - VERTICAL_ZONE;
        document.querySelectorAll('.taskbar-apps .tb-app').forEach(app => {
            const rect = app.getBoundingClientRect();
            if (!inVerticalZone) { app.style.transform = ''; app.classList.remove('magnified'); return; }
            const dist = Math.abs(mx - (rect.left + rect.width / 2));
            let scale = 1, lift = 0;
            if (dist < INFLUENCE) { const t = dist / INFLUENCE; const infl = Math.cos(t * Math.PI / 2); scale = 1 + (MAX_SCALE - 1) * Math.pow(infl, 1.6); lift = -20 * Math.pow(infl, 1.4); }
            app.style.transform = `translateY(${lift}px) scale(${scale})`;
            app.classList.toggle('magnified', scale > 1.15);
        });
    };
    document.addEventListener('mousemove', e => { lastX = e.clientX; lastY = e.clientY; if (!rafId) rafId = requestAnimationFrame(() => { rafId = null; applyScales(lastX, lastY); }); });

    const tt = document.getElementById('theme-toggle');
    const ts = document.getElementById('sound-toggle');
    const tp = document.getElementById('print-icon');
    if (tt) tt.onclick = () => { const cur = document.body.dataset.theme; const next = cur === 'dark' ? 'light' : 'dark'; document.body.dataset.theme = next; localStorage.setItem('theme', next); tt.textContent = next === 'dark' ? '🌙' : '☀️'; };
    if (ts) ts.onclick = () => { const cur = localStorage.getItem('sound') !== 'false'; localStorage.setItem('sound', !cur); ts.textContent = !cur ? '🔊' : '🔇'; };
    if (tp) tp.onclick = () => window.print();
}

/* ═══════════════════════════════════════════════════════════════
   DESKTOP WIDGETS
   ═══════════════════════════════════════════════════════════════ */
const DesktopWidgets = (() => {
    function updateClock() {
        const n = new Date();
        const t = document.getElementById('desk-clock-time'), d = document.getElementById('desk-clock-day'), dt = document.getElementById('desk-clock-date');
        if (t) t.textContent = n.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        if (d) d.textContent = n.toLocaleDateString([], { weekday: 'long' });
        if (dt) dt.textContent = n.toLocaleDateString([], { day: 'numeric', month: 'long', year: 'numeric' });
    }
    function initDesktopIcons() {
        const col = document.getElementById('desktop-icons-col'); if (!col) return;
        const icons = [
            { id: 'about', icon: '👤', label: 'About Me' },
            { id: 'projects', icon: '🚀', label: 'Projects' },
            { id: 'chess', icon: '♟️', label: 'Chess' },
            { id: 'terminal', icon: '⌨️', label: 'Terminal' },
            { id: 'snake', icon: '🐍', label: 'Snake' }
        ];
        col.innerHTML = icons.map(i => `<div class="desk-icon-item" data-app="${i.id}"><span class="di-icon">${i.icon}</span><span class="di-label">${i.label}</span></div>`).join('');
        col.querySelectorAll('.desk-icon-item').forEach(el => { el.addEventListener('click', () => openApp(el.dataset.app)); });
    }
    function initHeroTyping() {
        const titleEl = document.getElementById('hero-title');
        const displayEl = document.getElementById('hero-text-display');
        const hintEl = document.querySelector('.hero-text p');
        if (!titleEl || !displayEl) return;

        // Hide old subtitle
        if (hintEl) hintEl.style.display = 'none';

        const ENGLISH = 'Rishabh Singh';
        const HINDI = 'ऋषभ सिंह';
        const TYPE_SPEED = 90, DELETE_SPEED = 45, PAUSE = 2800;
        let currentText = '';

        function setLang(lang) {
            titleEl.classList.remove('english-mode', 'hindi-mode');
            titleEl.classList.add(lang === 'hindi' ? 'hindi-mode' : 'english-mode');
        }
        function type(target, cb) {
            let i = 0;
            function next() {
                if (i >= target.length) { setTimeout(() => del(cb), PAUSE); return; }
                currentText += target[i]; displayEl.textContent = currentText; i++; setTimeout(next, TYPE_SPEED);
            }
            next();
        }
        function del(cb) {
            function next() {
                if (currentText.length === 0) { setTimeout(cb, 400); return; }
                currentText = currentText.slice(0, -1); displayEl.textContent = currentText;
                setTimeout(next, DELETE_SPEED);
            }
            next();
        }
        function cycle() {
            setLang('english');
            type(ENGLISH, () => {
                setLang('hindi');
                type(HINDI, () => cycle());
            });
        }
        setTimeout(cycle, 1500);
    }
    function init() { updateClock(); setInterval(updateClock, 1000); initDesktopIcons(); initHeroTyping(); }
    return { init };
})();

/* ═══════════════════════════════════════════════════════════════
   WINDOW MANAGEMENT
   ═══════════════════════════════════════════════════════════════ */
const widthMap = { chess: '860px', codeflow: '1000px', analytics: '860px', terminal: '720px', snake: '520px', music: '900px' };

function openApp(id) {
    const existing = document.getElementById('win-' + id);
    if (existing) { existing.classList.remove('minimized'); existing.style.zIndex = ++state.zIndex; return; }
    const app = APPS.find(a => a.id === id); if (!app) return;

    const win = document.createElement('div');
    win.className = 'window'; win.id = 'win-' + id;
    const w = widthMap[id] || '580px', wNum = parseInt(w);
    const vw = window.innerWidth, vh = window.innerHeight;
    const offset = (state.openWindows.length % 6) * 30;
    let left = Math.max(20, (vw - wNum) / 2 + offset);
    let top = Math.max(50, 80 + offset);
    if (left + wNum > vw - 20) left = Math.max(20, vw - wNum - 20);
    if (top + 400 > vh - 60) top = Math.max(50, vh - 460);

    win.style.width = w; win.style.left = left + 'px'; win.style.top = top + 'px'; win.style.zIndex = ++state.zIndex;
    win.innerHTML = `
        <div class="window-header">
            <div class="window-controls">
                <span class="control close"></span>
                <span class="control minimize"></span>
                <span class="control maximize"></span>
            </div>
            <div class="window-title">${app.name}</div>
        </div>
        <div class="window-content">${getContent(id)}</div>`;

    document.getElementById('windows-container').appendChild(win);
    state.openWindows.push(id);
    Persist.saveOpenApps();
    updateTaskbarRunning();
    makeDraggable(win, win.querySelector('.window-header'));

    win.querySelector('.control.close').onclick = () => closeApp(id);
    win.querySelector('.control.minimize').onclick = () => {
        win.classList.add('minimized');
        if (id === 'music' && window.MusicPlayer && MusicPlayer.handleWindowHidden) {
            try { MusicPlayer.handleWindowHidden('minimize'); } catch (e) {}
        }
        if (window.SwordSystem && SwordSystem.syncSwordVisibility) setTimeout(() => SwordSystem.syncSwordVisibility(), 50);
    };
    win.querySelector('.control.maximize').onclick = () => {
        if (win.dataset.max === 'true') { win.style.width = win.dataset.prevW; win.style.left = win.dataset.prevL; win.style.top = win.dataset.prevT; win.style.height = ''; win.dataset.max = 'false'; }
        else { win.dataset.prevW = win.style.width; win.dataset.prevL = win.style.left; win.dataset.prevT = win.style.top; win.style.width = '100vw'; win.style.left = '0'; win.style.top = '32px'; win.style.height = 'calc(100vh - 84px)'; win.dataset.max = 'true'; }
    };
    win.addEventListener('mousedown', () => { win.style.zIndex = ++state.zIndex; });

    const savedPos = Persist.loadWinPos(id);
    if (savedPos && !win.dataset.restored && savedPos.left < vw - 100 && savedPos.top < vh - 100) {
        win.style.left = Math.max(0, savedPos.left) + 'px';
        win.style.top = Math.max(0, savedPos.top) + 'px';
        win.dataset.restored = 'true';
    }

    if (id === 'skills') setTimeout(() => document.querySelectorAll('.skill-fill').forEach((e, i) => setTimeout(() => { e.style.width = e.dataset.pct + '%'; }, i * 80)), 100);
    if (id === 'chess') setTimeout(() => ChessUI.init(), 50);
    if (id === 'codeflow') setTimeout(() => CodeFlow.init(), 50);
    if (id === 'analytics') setTimeout(() => Analytics.init(), 60);
    if (id === 'terminal') setTimeout(() => Terminal.init(), 60);
    if (id === 'snake') setTimeout(() => SnakeGame.init(), 60);
    if (id === 'music') setTimeout(() => MusicPlayer.init(), 80);
    if (id === 'gallery') setTimeout(() => Gallery.init(), 50);

    if (window.SwordSystem && SwordSystem.syncSwordVisibility) setTimeout(() => SwordSystem.syncSwordVisibility(), 50);
}
window.openApp = openApp;

function closeApp(id) {
    const w = document.getElementById('win-' + id);
    if (id === 'music' && window.MusicPlayer && MusicPlayer.handleWindowHidden) { try { MusicPlayer.handleWindowHidden('close'); } catch (e) {} }
    if (id === 'gallery' && window.Gallery && Gallery.close) { try { Gallery.close(); } catch (e) {} }
    if (w) w.remove();
    state.openWindows = state.openWindows.filter(x => x !== id);
    Persist.saveOpenApps();
    Persist.remove('win-pos:' + id);
    updateTaskbarRunning();
    if (window.SwordSystem && SwordSystem.syncSwordVisibility) setTimeout(() => SwordSystem.syncSwordVisibility(), 50);
}
window.closeApp = closeApp;

function updateTaskbarRunning() {
    document.querySelectorAll('.tb-app').forEach(b => b.classList.toggle('running', state.openWindows.includes(b.dataset.appId)));
}

function makeDraggable(win, handle) {
    let dragging = false, sx, sy, sl, st;
    handle.addEventListener('mousedown', e => {
        if (e.target.classList.contains('control')) return;
        dragging = true; sx = e.clientX; sy = e.clientY; sl = win.offsetLeft; st = win.offsetTop;
        win.style.zIndex = ++state.zIndex;
    });
    document.addEventListener('mousemove', e => {
        if (!dragging) return;
        win.style.left = (sl + e.clientX - sx) + 'px';
        win.style.top = Math.max(0, st + e.clientY - sy) + 'px';
    });
    document.addEventListener('mouseup', () => {
        if (!dragging) return;
        dragging = false;
        setTimeout(() => Persist.saveWinPos(win.id.replace('win-', ''), win), 300);
    });
}

/* ═══════════════════════════════════════════════════════════════
   CONTENT
   ═══════════════════════════════════════════════════════════════ */
window.CF_EXAMPLES = {
    'Basics': `name = "Rishabh"\nage = 15\nbonus = age * 2\nprint(name)\nprint(bonus)`,
    'Increment (i++ / ++i)': `i = 5\nprint(i)\ni = i + 1\nprint(i)\ni = i + 1\nprint(i)\ni = i - 1\nprint(i)`,
    'If / Else': `age = 18\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")\nprint("Done")`,
    'For Loop': `total = 0\nfor n in [1, 2, 3, 4, 5]:\n    total = total + n\n    print(total)\nprint("Final:", total)`,
    'While Loop': `count = 0\ntotal = 0\nwhile count < 5:\n    count = count + 1\n    total = total + count\n    print("Count:", count)\nprint("Total:", total)`,
    'Functions': `def greet(who):\n    msg = "Hello, " + who\n    return msg\n\ngreeting = greet("World")\nprint(greeting)`,
    'Function + Loop': `def sum_up(nums):\n    total = 0\n    for n in nums:\n        total = total + n\n    return total\n\nresult = sum_up([10, 20, 30])\nprint(result)`,
    'Dictionary': `scores = {"math": 95, "sci": 88}\nmath = scores["math"]\nsci = scores["sci"]\ntotal = math + sci\nprint(total)`,
    'List Comprehension': `nums = [1, 2, 3, 4, 5]\nsquares = [n * n for n in nums]\nprint(squares)`,
    'Math Operations': `a = 10\nb = 20\nc = a + b\nd = c * 2\ne = d / 4\nprint(e)`,
    'Strings': `first = "Rishabh"\nlast = "Singh"\nfull = first + " " + last\nprint(full)`,
    'Function Chain': `def add(a, b):\n    return a + b\n\ndef double(x):\n    return x * 2\n\nresult = double(add(5, 10))\nprint(result)`,
    'Full Example': `name = "Rishabh"\nage = 15\n\ndef greet(who):\n    msg = "Hello, " + who\n    return msg\n\ngreeting = greet(name)\nprint(greeting)\n\nscores = {"math": 95, "sci": 88}\nnums = [1, 2, 3]\nsquares = [n * n for n in nums]\nprint(scores["math"])\nprint(squares)`
};

function getContent(id) {
    const map = {
        about: `
            <div class="about-hero">
                <div class="about-avatar">RS</div>
                <h1 class="about-name">Rishabh Singh</h1>
                <p class="about-tagline">Curious Student · Java Debugger · Professional "What If" Asker</p>
                <div class="about-location">📍 Mughalsarai, Varanasi, UP</div>
            </div>
            <h3 class="about-section-title">Currently</h3>
            <div class="about-status">
                <div class="status-card"><div class="status-icon">📚</div><div class="status-text"><div class="status-label">Learning</div><div class="status-value">Java GUI + OOP</div></div></div>
                <div class="status-card"><div class="status-icon">🚀</div><div class="status-text"><div class="status-label">Building</div><div class="status-value">Personal Data API</div></div></div>
                <div class="status-card"><div class="status-icon">♟️</div><div class="status-text"><div class="status-label">Grinding</div><div class="status-value">Chess endgames</div></div></div>
                <div class="status-card"><div class="status-icon">🧪</div><div class="status-text"><div class="status-label">Experimenting</div><div class="status-value">Hinglish as a language</div></div></div>
            </div>
            <h3 class="about-section-title">The Short Version</h3>
            <p class="app-p">Class 9 student who refuses to behave like a normal Class 9 student. I break things, figure out why they broke, and then build them back better. Sometimes I even finish the project.</p>
            <h3 class="about-section-title">Random Facts</h3>
            <div class="fun-facts">
                <div class="fact-item">I debug better at 11 PM than at 11 AM.</div>
                <div class="fact-item">Built an ATM simulator in Java. It doesn't dispense real money yet.</div>
                <div class="fact-item">My first chess opening was "hope for the best." It still works sometimes.</div>
                <div class="fact-item">Spent 3 hours on a missing semicolon once. We don't speak of that day.</div>
            </div>
            <h3 class="about-section-title">Tools I Use</h3>
            <div class="tools-grid">
                <span class="tool-chip">☕ Java</span><span class="tool-chip">🐍 Python</span>
                <span class="tool-chip">🌐 HTML/CSS</span><span class="tool-chip">⚡ JavaScript</span>
                <span class="tool-chip">📊 Excel</span><span class="tool-chip">🎨 Scratch</span>
                <span class="tool-chip">💡 VS Code</span><span class="tool-chip">🎯 Git</span>
            </div>`,
        skills: `
            <div class="skills-header">
                <h1 class="skills-title">Skills Dashboard</h1>
                <p class="skills-subtitle">Hover over any skill for details</p>
            </div>
            <div class="skills-summary">
                <div class="summary-stat"><div class="summary-value">8</div><div class="summary-label">Core Skills</div></div>
                <div class="summary-divider"></div>
                <div class="summary-stat"><div class="summary-value">7.6</div><div class="summary-label">Avg Level</div></div>
                <div class="summary-divider"></div>
                <div class="summary-stat"><div class="summary-value">17h</div><div class="summary-label">Weekly</div></div>
            </div>
            <div class="skill-category">
                <div class="skill-category-title"><span class="cat-icon">💻</span> Programming & Tech</div>
                <div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">☕</span> Java & Programming</span><span class="skill-percent">80%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="80" style="width:0%"></div></div><div class="skill-description">Started March 2023. Built console apps, GUI prototypes, ATM simulator.</div></div>
                <div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">🔧</span> Debugging</span><span class="skill-percent">85%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="85" style="width:0%"></div></div><div class="skill-description">Reproduce → isolate → test → fix → verify. Cause before solution.</div></div>
                <div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">🖥️</span> Computer Skills</span><span class="skill-percent">90%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="90" style="width:0%"></div></div><div class="skill-description">Windows troubleshooting, optimization, storage management, Wi-Fi config.</div></div>
                <div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">🧩</span> Creative Engineering</span><span class="skill-percent">75%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="75" style="width:0%"></div></div><div class="skill-description">Combining geometry, cardboard construction, presentation design.</div></div>
            </div>
            <div class="skill-category">
                <div class="skill-category-title"><span class="cat-icon">♟️</span> Strategy & Communication</div>
                <div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">♟️</span> Chess</span><span class="skill-percent">95%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="95" style="width:0%"></div></div><div class="skill-description">Playing since Oct 2020. Dynamic, tactical positions.</div></div>
                <div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">🎤</span> Communication</span><span class="skill-percent">70%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="70" style="width:0%"></div></div><div class="skill-description">Presented school projects solo. Working on spontaneity.</div></div>
                <div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">🧪</span> Experimentation</span><span class="skill-percent">80%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="80" style="width:0%"></div></div><div class="skill-description">Change one variable at a time. Method over madness.</div></div>
                <div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">📖</span> Independent Learning</span><span class="skill-percent">85%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="85" style="width:0%"></div></div><div class="skill-description">Self-taught most of what I know. Working on consistency.</div></div>
            </div>`,
        experience: `
            <h2 class="app-h2">03 // Experience</h2>
            <div class="exp-item"><h3>Inspire-Manak</h3><div class="date">2025 — Present</div><p>Competitive environment focused on innovation, problem-solving, and teamwork. Learned that sleep is optional and bugs are mandatory.</p></div>
            <div class="exp-item"><h3>Cordorra Hackathon</h3><div class="date">2025 — Present</div><p>Team member contributing to creative direction and technical problem-solving.</p></div>`,
        projects: `
            <h2 class="app-h2">04 // Projects</h2>
            <div class="project-card"><h3>Personal Data API</h3><div class="tech">Tech: Java, JSON</div><p>Monitors personal data and structures it into a readable format.</p></div>
            <div class="project-card"><h3>Hinglish Programming Language</h3><div class="tech">Tech: Python, NLP</div><p>A programming language that uses a very funny type of Hinglish. Because <code>if (x &gt; 5)</code> is boring, <code>agar (x &gt; 5)</code> is revolutionary.</p></div>
            <div class="project-card"><h3>Rishabh OS</h3><div class="tech">Tech: HTML, CSS, JavaScript</div><p>This portfolio website! A Windows 11-style desktop experience in the browser with games, apps, and anime themes.</p></div>`,
        gallery: `
            <div class="gallery-header">
                <h1 class="gallery-title">Gallery</h1>
                <p class="gallery-subtitle">Moments that matter · 12 photos</p>
            </div>
            <div class="gallery-grid" id="gallery-grid"></div>`,
        chess: `<div class="chess-layout"><div class="chess-board-wrap"><div class="chess-labels-top"><span>a</span><span>b</span><span>c</span><span>d</span><span>e</span><span>f</span><span>g</span><span>h</span></div><div class="chess-board" id="chess-board"></div><div class="chess-labels-bottom"><span>a</span><span>b</span><span>c</span><span>d</span><span>e</span><span>f</span><span>g</span><span>h</span></div></div><div class="chess-sidebar"><div class="chess-status" id="chess-status"></div><div><div class="chess-bot-name" style="margin-bottom:6px;">Captured by you</div><div class="chess-captured" id="captured-by-white"></div></div><div><div class="chess-bot-name" style="margin-bottom:6px;">Captured by bot</div><div class="chess-captured" id="captured-by-black"></div></div><div class="chess-chat" id="chess-chat"></div><div class="chess-bot-name">Choose opponent</div><div class="chess-bots-grid" id="chess-bots-grid"></div><div class="chess-controls"><button class="chess-ctrl-btn primary" id="chess-new">♻ New</button><button class="chess-ctrl-btn" id="chess-undo">↶ Undo</button><button class="chess-ctrl-btn danger" id="chess-resign">🏳 Resign</button></div></div></div>`,
        codeflow: `<div class="cf-wrap"><div class="cf-toolbar"><select id="cf-preset">${Object.keys(window.CF_EXAMPLES).map(k => `<option>${k}</option>`).join('')}</select><button id="cf-step" class="primary">▶ Step</button><button id="cf-run">⚡ Auto Run</button><button id="cf-reset">↺ Reset</button><span class="cf-progress" id="cf-progress">Step 0 / 0</span></div><div class="cf-editor-wrap"><div class="cf-editor-label"><span>Edit Code (Python subset)</span><span>Supports: variables · if/else · loops · functions</span></div><textarea class="cf-editor" id="cf-editor" spellcheck="false">${window.CF_EXAMPLES['Basics']}</textarea></div><div class="cf-layout"><div class="cf-panel"><div class="cf-panel-header"><span>Code</span><span class="cf-badge">PYTHON</span></div><div class="cf-panel-body" id="cf-code"></div></div><div class="cf-panel"><div class="cf-panel-header"><span>Variables</span><span class="cf-badge">MEMORY</span></div><div class="cf-panel-body" id="cf-vars"></div></div><div class="cf-panel"><div class="cf-panel-header"><span>Output</span><span class="cf-badge">stdout</span></div><div class="cf-panel-body cf-output" id="cf-output"></div></div></div><div class="cf-op" id="cf-op"><span class="op-icon">•</span> Ready — press Step to begin</div></div>`,
        analytics: `<div class="dash"><div class="dash-hero" id="dash-hero"></div><div class="dash-kpi-row" id="dash-kpis"></div><div class="dash-tabs" id="dash-tabs"></div><div id="dash-panel"></div></div>`,
        terminal: `<div class="term"><div class="term-output" id="term-output"></div><div class="term-input-row"><span class="term-prompt">rishabh@portfolio<span class="path">:~$</span></span><input type="text" class="term-input" id="term-input" autocomplete="off" spellcheck="false"></div></div>`,
        snake: `<div class="snake-wrap"><div class="snake-hud"><div class="hud-stat"><div class="hud-label">Score</div><div class="hud-value" id="snake-score">0</div></div><div class="hud-stat"><div class="hud-label">Best</div><div class="hud-value best" id="snake-best">0</div></div></div><div class="snake-board-wrap"><canvas id="snake-canvas" width="400" height="400"></canvas><div class="snake-overlay" id="snake-overlay"><h3>Snake</h3><p>Use <strong>Arrow keys</strong> or <strong>WASD</strong> to move.<br>Eat the red apples. Don't hit the walls.</p><button class="snake-start-btn" id="snake-start">▶ Start Game</button><div class="snake-keys">↑ ↓ ← →  ·  W A S D</div></div></div><button class="snake-start-btn" id="snake-restart" style="background:rgba(255,255,255,0.1);color:#fff;box-shadow:none;border:1px solid rgba(255,255,255,0.15);">↺ Reset</button></div>`,
        music: `<div class="music-app"><canvas class="music-visualizer"></canvas><aside class="music-sidebar"></aside><main class="music-main"><div class="music-header"><div class="music-header-art">🎵</div><div class="music-header-info"><div class="music-header-type">Library</div><div class="music-header-title">Your Library</div><div class="music-header-meta">15 tracks · 55 minutes</div></div></div><div class="music-actions"><button class="music-play-big">▶</button><button class="music-action-btn">🔀 Shuffle Play</button><button class="music-add-btn" id="music-add">➕ Add Music</button><input type="file" id="music-file-input" accept="audio/*" multiple></div><div class="music-tracklist"></div></main><footer class="music-player-bar"><div class="music-now-playing"><div class="music-np-art">🎵</div><div class="music-np-text"><div class="music-np-name">No track playing</div><div class="music-np-artist">Select a track</div></div></div><div class="music-controls"><div class="music-ctrl-row"><button class="music-ctrl-btn music-ctrl-shuffle" title="Shuffle">🔀</button><button class="music-ctrl-btn music-ctrl-prev" title="Previous">⏮</button><button class="music-ctrl-btn music-ctrl-play" title="Play / Pause">▶</button><button class="music-ctrl-btn music-ctrl-next" title="Next">⏭</button><button class="music-ctrl-btn music-ctrl-repeat" title="Repeat">🔁</button></div><div class="music-progress-row"><div class="music-time music-time-now">0:00</div><div class="music-progress"><div class="music-progress-fill" style="width:0%"></div></div><div class="music-time music-time-total">0:00</div></div></div><div class="music-volume-area"><span class="music-vol-icon">🔊</span><div class="music-volume"><div class="music-volume-fill" style="width:80%"></div></div></div></footer></div>`
    };
    return map[id] || '<p>App not found.</p>';
}

/* ═══════════════════════════════════════════════════════════════
   SETTINGS
   ═══════════════════════════════════════════════════════════════ */
function initSettings() {
    const modal = $('#settings-modal');
    $('#close-settings').onclick = () => modal.classList.remove('open');
    modal.onclick = e => { if (e.target === modal) modal.classList.remove('open'); };
    document.querySelectorAll('.settings-tab').forEach(t => {
        t.onclick = () => {
            document.querySelectorAll('.settings-tab').forEach(x => x.classList.remove('active'));
            t.classList.add('active');
            renderSettings(t.dataset.tab);
        };
    });
    renderSettings('wallpaper');
}

function renderSettings(tab) {
    const c = $('#settings-content');
    if (tab === 'wallpaper') {
        c.innerHTML = `<h2>Wallpaper</h2><p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:15px;">Right-click anywhere on the desktop for quick access.</p><div class="wallpaper-grid">${WALLPAPERS.map(w => `<div class="wallpaper-item ${w.id === state.currentBg ? 'active' : ''}" data-id="${w.id}" onclick="changeWallpaper('${w.id}')"><div class="wp-preview" style="background:${w.css}"></div><span>${w.name}</span></div>`).join('')}</div>`;
    } else if (tab === 'anime') {
        c.innerHTML = `<h2>Anime Themes</h2><div style="margin-bottom:22px;"><h3 style="font-size:1rem;margin-bottom:10px;">Jujutsu Kaisen</h3><button class="cf-btn primary" onclick="document.body.classList.add('theme-jjk');document.getElementById('settings-modal').classList.remove('open');showNotification('JJK Mode Activated');">Activate JJK Mode</button></div><div style="margin-bottom:22px;"><h3 style="font-size:1rem;margin-bottom:10px;">Bleach — Bankai</h3><select id="bankai-select" class="bankai-select"><option value="">Select a Bankai...</option>${Object.entries(BANKAI).map(([id, b]) => `<option value="${id}">${b.name} — ${b.jp}</option>`).join('')}</select><button class="cf-btn primary" onclick="const v=document.getElementById('bankai-select').value;if(v)playBankaiSequence(v);">⚔️ Release Bankai</button></div><div><h3 style="font-size:1rem;margin-bottom:10px;">Death Note</h3><button class="cf-btn primary" onclick="activateDeathNote()">🍎 Activate Death Note</button></div>`;
    } else {
        c.innerHTML = `<h2>General</h2><button class="cf-btn" onclick="resetToAstra()">✨ Reset to Astra Galaxy</button>`;
    }
}

function changeWallpaper(id) {
    state.currentBg = id;
    const w = WALLPAPERS.find(x => x.id === id);
    if (w) {
        const bgLayer = document.querySelector('.background-layer');
        if (bgLayer) bgLayer.style.background = w.css;
        if (window.CelestialBodies) CelestialBodies.switchTo(id);
    }
    localStorage.setItem('background', id);
    document.querySelectorAll('.wallpaper-item').forEach(x => x.classList.toggle('active', x.dataset.id === id));
}
window.changeWallpaper = changeWallpaper;

/* ═══════════════════════════════════════════════════════════════
   RESET TO ASTRA
   ═══════════════════════════════════════════════════════════════ */
function resetToAstra() {
    try {
        const dnMusic = document.getElementById('dn-music');
        if (dnMusic) { dnMusic.pause(); dnMusic.currentTime = 0; dnMusic.src = ''; }
    } catch (e) {}
    if (window.MusicPlayer && MusicPlayer.stopAll) { try { MusicPlayer.stopAll(); } catch (e) {} }
    if (window.Gallery && Gallery.close) { try { Gallery.close(); } catch (e) {} }

    document.body.className = document.body.className
        .replace(/theme-\S+/g, '')
        .replace(/bankai-active|revealed|fight-mode|serious|jjk|deathnote|jjk-absorbing|jjk-blasting|jjk-purple-shock|jjk-restored|has-open-windows|dn-hover-light|dn-hover-l/g, '')
        .trim();

    state.bankai = null;
    state.dnStage = 'idle';

    try { setEffect(null); effectParticles = []; effectType = null; } catch (e) {}
    document.querySelectorAll('.bankai-ambient').forEach(el => el.remove());
    document.querySelectorAll('.cursor-trail, .click-burst, .jjk-orb, .jjk-attached-orb, .jjk-prompt').forEach(el => el.remove());

    const cur = document.getElementById('bankai-cursor');
    if (cur) { cur.innerHTML = ''; cur.style.left = '-9999px'; cur.style.top = '-9999px'; }
    cursor.x = -9999; cursor.y = -9999; cursor.tx = -9999; cursor.ty = -9999;

    const scene = document.getElementById('dn-scene');
    if (scene) scene.classList.remove('friendship', 'fight');
    const shatterCanvas = document.getElementById('dn-shatter-canvas');
    if (shatterCanvas) { shatterCanvas.classList.remove('active'); const sctx = shatterCanvas.getContext('2d'); if (sctx) sctx.clearRect(0, 0, shatterCanvas.width, shatterCanvas.height); }

    state.currentBg = 'astra';
    const bgLayer = document.querySelector('.background-layer');
    if (bgLayer && WALLPAPERS[0]) bgLayer.style.background = WALLPAPERS[0].css;
    document.body.dataset.bg = 'astra';
    localStorage.setItem('background', 'astra');
    if (window.CelestialBodies) CelestialBodies.switchTo('astra');
    if (window.SwordSystem) { SwordSystem.updateSword('tensa'); SwordSystem.syncSwordVisibility(); }
    if (window.Persist) { Persist.set('bankai', null); Persist.set('active-themes', []); }
    showNotification('Back to Astra', { icon: '🌌', title: 'Reset' });
}
window.resetToAstra = resetToAstra;

/* ═══════════════════════════════════════════════════════════════
   BANKAI SEQUENCE
   ═══════════════════════════════════════════════════════════════ */
function playBankaiSequence(id) {
    const b = BANKAI[id]; if (!b) return;
    effectParticles = []; effectType = null;
    if (effectCtx) effectCtx.clearRect(0, 0, effectW, effectH);
    document.querySelectorAll('.bankai-ambient').forEach(el => el.remove());
    document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
    document.body.classList.remove('bankai-active');
    document.body.className = document.body.className.replace(/theme-\S+/g, '');
    const sm = document.getElementById('settings-modal'); if (sm) sm.classList.remove('open');

    const overlay = $('#bankai-overlay');
    const jp = $('#bankai-jp'), romaji = $('#bankai-romaji');
    const flash = overlay.querySelector('.bankai-flash');
    jp.textContent = b.jp; jp.style.color = b.color;
    jp.style.textShadow = `0 0 40px ${b.color}, 0 0 80px ${b.color}`;
    romaji.textContent = b.romaji; romaji.style.color = b.color;
    flash.style.setProperty('--bankai-color', b.color);
    jp.classList.remove('show'); romaji.classList.remove('show'); flash.classList.remove('show');
    requestAnimationFrame(() => overlay.classList.add('active'));
    setTimeout(() => { playSound(b.sound, () => synthBankai(id)); jp.classList.add('show'); }, 500);
    setTimeout(() => romaji.classList.add('show'), 1500);
    setTimeout(() => flash.classList.add('show'), 2500);
    setTimeout(() => {
        document.body.classList.add(`theme-${b.theme}`, 'bankai-active');
        state.bankai = id;
        setEffect(b.effect); setAmbient(b.ambient); setCursor(b);
        if (window.SwordSystem) SwordSystem.updateSword(id);
        Persist.saveActiveTheme();
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.classList.remove('active'); overlay.style.opacity = '1'; }, 500);
        showNotification(`⚔️ Bankai: ${b.name}`);
    }, 3100);
}
window.playBankaiSequence = playBankaiSequence;

function synthBankai(id) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o1 = ctx.createOscillator(), g1 = ctx.createGain();
        o1.connect(g1); g1.connect(ctx.destination);
        o1.frequency.setValueAtTime(90, ctx.currentTime);
        o1.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 1.5);
        o1.type = 'sawtooth';
        g1.gain.setValueAtTime(0.25, ctx.currentTime);
        g1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
        o1.start(); o1.stop(ctx.currentTime + 1.5);
        const o2 = ctx.createOscillator(), g2 = ctx.createGain();
        o2.connect(g2); g2.connect(ctx.destination);
        o2.frequency.setValueAtTime(200, ctx.currentTime + 0.8);
        o2.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 2.2);
        o2.type = 'sine';
        g2.gain.setValueAtTime(0.001, ctx.currentTime + 0.8);
        g2.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 1.2);
        g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.2);
        o2.start(ctx.currentTime + 0.8); o2.stop(ctx.currentTime + 2.2);
    } catch (e) {}
}

/* ═══════════════════════════════════════════════════════════════
   CURSOR SYSTEM
   ═══════════════════════════════════════════════════════════════ */
let cursor = { x: -9999, y: -9999, tx: -9999, ty: -9999, color: '#fff' };
let cursorEl = null;

function initCursorSystem() {
    cursorEl = document.getElementById('bankai-cursor');
    document.addEventListener('mousemove', e => {
        cursor.tx = e.clientX; cursor.ty = e.clientY;
        if (state.bankai && Math.random() < 0.5) spawnTrail(e.clientX, e.clientY);
    });
    animateCursor();
}
function animateCursor() {
    cursor.x += (cursor.tx - cursor.x) * 0.15;
    cursor.y += (cursor.ty - cursor.y) * 0.15;
    if (cursorEl) { cursorEl.style.left = cursor.x + 'px'; cursorEl.style.top = cursor.y + 'px'; }
    requestAnimationFrame(animateCursor);
}
function setCursor(b) {
    if (!cursorEl) return;
    cursorEl.innerHTML = b.cursor;
    cursorEl.style.color = b.color;
    cursor.color = b.color;
}
function spawnTrail(x, y) {
    const b = BANKAI[state.bankai]; if (!b) return;
    const t = document.createElement('div');
    t.className = 'cursor-trail';
    t.style.left = x + 'px'; t.style.top = y + 'px';
    t.style.background = b.trailColor;
    t.style.boxShadow = `0 0 12px ${b.trailColor}`;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 800);
}

/* ═══════════════════════════════════════════════════════════════
   SWORD SYSTEM
   ═══════════════════════════════════════════════════════════════ */
const SwordSystem = (() => {
    let swordBtn = null, swordIcon = null;
    let currentBankai = 'tensa';
    let isInitialized = false;

    const SWORD_SVGS = {
        tensa: `<svg viewBox="0 0 60 60"><defs><linearGradient id="b-tensa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff"/><stop offset="50%" stop-color="#a0a0a0"/><stop offset="100%" stop-color="#303030"/></linearGradient></defs><path d="M30 2 L33 8 L33 44 L30 48 L27 44 L27 8 Z" fill="url(#b-tensa)" stroke="#111" stroke-width="0.8"/><rect x="22" y="46" width="16" height="2.5" rx="1" fill="#000"/><rect x="27" y="48.5" width="6" height="9" rx="1" fill="#0a0a0a"/><circle cx="30" cy="58" r="1.8" fill="#222"/></svg>`,
        hakka: `<svg viewBox="0 0 60 60"><defs><linearGradient id="b-hakka" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff"/><stop offset="40%" stop-color="#a5f3fc"/><stop offset="100%" stop-color="#0891b2"/></linearGradient></defs><path d="M30 2 L34 8 L34 44 L30 50 L26 44 L26 8 Z" fill="url(#b-hakka)" stroke="#0e7490" stroke-width="0.8"/><polygon points="24,44 36,44 38,48 22,48" fill="#67e8f9"/><rect x="27" y="48" width="6" height="9" rx="1" fill="#0c4a6e"/><circle cx="30" cy="58" r="2" fill="#67e8f9"/></svg>`,
        daiguren: `<svg viewBox="0 0 60 60"><defs><linearGradient id="b-dai" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff"/><stop offset="50%" stop-color="#67e8f9"/><stop offset="100%" stop-color="#0e7490"/></linearGradient></defs><path d="M30 2 L33 8 L33 44 L30 48 L27 44 L27 8 Z" fill="url(#b-dai)" stroke="#06b6d4" stroke-width="0.8"/><path d="M18 46 L24 42 L36 42 L42 46 L36 50 L24 50 Z" fill="#22d3ee"/><rect x="27" y="50" width="6" height="7" rx="1" fill="#0c4a6e"/><circle cx="30" cy="58" r="2" fill="#22d3ee"/></svg>`,
        zanka: `<svg viewBox="0 0 60 60"><defs><linearGradient id="b-zanka" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fbbf24"/><stop offset="50%" stop-color="#ef4444"/><stop offset="100%" stop-color="#7f1d1d"/></linearGradient></defs><path d="M30 2 L33 8 L33 44 L30 48 L27 44 L27 8 Z" fill="url(#b-zanka)" stroke="#991b1b" stroke-width="0.8"/><rect x="22" y="45" width="16" height="3" rx="1" fill="#1c1917"/><rect x="27" y="48" width="6" height="9" rx="1" fill="#450a0a"/><circle cx="30" cy="58" r="2" fill="#fbbf24"/></svg>`,
        katen: `<svg viewBox="0 0 60 60"><path d="M22 2 L25 8 L25 40 L22 44 L19 40 L19 8 Z" fill="#dc2626" stroke="#450a0a" stroke-width="0.6"/><path d="M38 2 L41 8 L41 40 L38 44 L35 40 L35 8 Z" fill="#3b82f6" stroke="#1e3a8a" stroke-width="0.6"/><rect x="14" y="42" width="16" height="2.5" fill="#1c1917"/><rect x="30" y="42" width="16" height="2.5" fill="#1c1917"/><rect x="19" y="44.5" width="6" height="9" fill="#000"/><rect x="35" y="44.5" width="6" height="9" fill="#000"/></svg>`,
        benihime: `<svg viewBox="0 0 60 60"><defs><linearGradient id="b-beni" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fca5a5"/><stop offset="50%" stop-color="#dc2626"/><stop offset="100%" stop-color="#7f1d1d"/></linearGradient></defs><path d="M30 2 L32 8 L32 44 L30 48 L28 44 L28 8 Z" fill="url(#b-beni)" stroke="#450a0a" stroke-width="0.8"/><line x1="30" y1="6" x2="30" y2="44" stroke="#fca5a5" stroke-width="0.8"/><rect x="22" y="44" width="16" height="3" fill="#1c1917"/><rect x="27" y="47" width="6" height="10" fill="#450a0a"/></svg>`,
        konjiki: `<svg viewBox="0 0 60 60"><defs><linearGradient id="b-kon" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#bef264"/><stop offset="50%" stop-color="#84cc16"/><stop offset="100%" stop-color="#3f6212"/></linearGradient></defs><path d="M30 4 L34 10 L34 42 L30 48 L26 42 L26 10 Z" fill="url(#b-kon)" stroke="#1a2e05" stroke-width="0.8"/><circle cx="30" cy="18" r="2" fill="#bef264"/><circle cx="30" cy="30" r="2" fill="#bef264"/><rect x="21" y="44" width="18" height="3" fill="#1a2e05"/><rect x="27" y="47" width="6" height="9" fill="#1a2e05"/></svg>`,
        shatatsu: `<svg viewBox="0 0 60 60"><defs><linearGradient id="b-shat" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fef3c7"/><stop offset="50%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#b45309"/></linearGradient></defs><path d="M30 2 L31.5 8 L31.5 44 L30 48 L28.5 44 L28.5 8 Z" fill="url(#b-shat)" stroke="#78350f" stroke-width="0.6"/><circle cx="30" cy="46" r="3" fill="none" stroke="#fbbf24" stroke-width="1.5"/><rect x="28" y="48" width="4" height="9" fill="#78350f"/></svg>`,
        kokujo: `<svg viewBox="0 0 60 60"><defs><linearGradient id="b-kok" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a16207"/><stop offset="50%" stop-color="#78350f"/><stop offset="100%" stop-color="#450a0a"/></linearGradient></defs><path d="M30 2 L35 10 L35 40 L30 48 L25 40 L25 10 Z" fill="url(#b-kok)" stroke="#1c1917" stroke-width="0.8"/><rect x="18" y="42" width="24" height="4" fill="#1c1917" stroke="#fbbf24" stroke-width="0.5"/><rect x="27" y="46" width="6" height="10" fill="#450a0a"/></svg>`,
        minazuki: `<svg viewBox="0 0 60 60"><defs><linearGradient id="b-mina" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fca5a5"/><stop offset="50%" stop-color="#dc2626"/><stop offset="100%" stop-color="#450a0a"/></linearGradient></defs><path d="M30 2 Q34 20 30 46 Q26 20 30 2 Z" fill="url(#b-mina)" stroke="#7f1d1d" stroke-width="0.8"/><rect x="22" y="44" width="16" height="3" fill="#1c1917"/><rect x="27" y="47" width="6" height="9" fill="#450a0a"/></svg>`
    };

    function init() {
        if (isInitialized) return;
        swordBtn = document.getElementById('sword-btn');
        swordIcon = document.getElementById('sword-icon');
        if (!swordBtn || !swordIcon) return;
        isInitialized = true;
        swordBtn.addEventListener('click', handleSwordClick);
        updateSword(currentBankai);
        syncSwordVisibility();
        const wc = document.getElementById('windows-container');
        if (wc) { const obs = new MutationObserver(syncSwordVisibility); obs.observe(wc, { childList: true, subtree: false }); }
    }

    function handleSwordClick() {
        const bankaiData = window.BANKAI && window.BANKAI[currentBankai];
        if (bankaiData && bankaiData.sound) playSound(bankaiData.sound, () => synthBankai(currentBankai));
        if (typeof playBankaiSequence === 'function') playBankaiSequence(currentBankai);
        const name = bankaiData ? bankaiData.name : 'Bankai';
        showNotification(`⚔️ ${name}`, { icon: '⚔️', title: 'Sword Released' });
    }

    function updateSword(bankaiId) {
        if (!swordIcon) return;
        const svg = SWORD_SVGS[bankaiId] || SWORD_SVGS.tensa;
        swordIcon.innerHTML = svg;
        const container = document.getElementById('sword-container');
        if (container) container.dataset.bankai = bankaiId;
        currentBankai = bankaiId;
        const bankaiData = window.BANKAI && window.BANKAI[bankaiId];
        if (bankaiData && swordIcon) swordIcon.style.color = bankaiData.color || '#fff';
    }

    function syncSwordVisibility() {
        const container = document.getElementById('sword-container');
        if (!container) return;
        const hasWindows = document.querySelectorAll('#windows-container .window:not(.minimized)').length > 0;
        const inSpecialMode = document.body.classList.contains('bankai-active') || document.body.classList.contains('theme-deathnote') || document.body.classList.contains('theme-jjk');
        if (hasWindows || inSpecialMode) document.body.classList.add('has-open-windows');
        else document.body.classList.remove('has-open-windows');
    }

    return { init, updateSword, syncSwordVisibility, getCurrentBankai: () => currentBankai };
})();
window.SwordSystem = SwordSystem;

/* ═══════════════════════════════════════════════════════════════
   JJK
   ═══════════════════════════════════════════════════════════════ */
let jjkState = { attached: null, element: null, orbType: null };
function launchJJK(type) {
    if (!document.body.classList.contains('theme-jjk')) document.body.classList.add('theme-jjk');
    if (jjkState.attached) return;
    jjkState.attached = true; jjkState.orbType = type;
    const orb = document.createElement('div');
    orb.className = `jjk-attached-orb ${type}`;
    document.body.appendChild(orb);
    jjkState.element = orb;
    const prompt = document.createElement('div');
    prompt.className = 'jjk-prompt show'; prompt.id = 'jjk-prompt';
    prompt.textContent = type === 'blue' ? '吸引' : type === 'red' ? '反発' : '紫';
    prompt.style.color = type === 'blue' ? '#3b82f6' : type === 'red' ? '#ef4444' : '#a855f7';
    document.body.appendChild(prompt);
    const move = e => { orb.style.left = e.clientX + 'px'; orb.style.top = e.clientY + 'px'; };
    document.addEventListener('mousemove', move);
    orb._moveHandler = move;
    playBeep(440, 0.15);
}
window.launchJJK = launchJJK;

function fireJJK() {
    if (!jjkState.attached) return;
    const orb = jjkState.element, prompt = document.getElementById('jjk-prompt');
    const type = jjkState.orbType;
    document.removeEventListener('mousemove', orb._moveHandler);
    if (prompt) prompt.remove();
    if (orb) orb.remove();
    const flash = document.createElement('div');
    flash.className = 'jjk-screen-flash';
    flash.style.background = `radial-gradient(circle at 50% 50%, ${type === 'blue' ? '#3b82f6' : type === 'red' ? '#ef4444' : '#a855f7'} 0%, transparent 70%)`;
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 1200);
    if (type === 'blue') { document.body.style.animation = 'jjkAbsorb 1.5s ease-out'; setTimeout(() => document.body.style.animation = '', 1600); }
    else if (type === 'red') { document.body.style.animation = 'jjkRepel 1.5s ease-out'; setTimeout(() => document.body.style.animation = '', 1600); }
    else { document.body.style.animation = 'jjkDestroy 2s ease-out'; setTimeout(() => { document.body.style.animation = ''; resetToAstra(); }, 2100); }
    playBeep(type === 'purple' ? 120 : 220, 0.6, 'sawtooth', 0.15);
    jjkState = { attached: null, element: null, orbType: null };
}
document.addEventListener('click', () => { if (jjkState.attached) fireJJK(); });

/* ═══════════════════════════════════════════════════════════════
   DEATH NOTE
   ═══════════════════════════════════════════════════════════════ */
let dnShatter = { canvas: null, ctx: null, shards: [], running: false, rafId: null };

function activateDeathNote() {
    document.body.className = document.body.className.replace(/bankai-active/g, '').replace(/theme-\S+/g, '');
    document.body.classList.add('theme-deathnote');
    setEffect(null); setAmbient(null);
    state.bankai = null; state.dnStage = 'apple';
    const sm = document.getElementById('settings-modal'); if (sm) sm.classList.remove('open');
    showNotification('Death Note Mode');
    if (window.SwordSystem) SwordSystem.syncSwordVisibility();
}
window.activateDeathNote = activateDeathNote;

function advanceDeathNote() {
    const scene = document.getElementById('dn-scene');
    if (!scene) return;
    if (state.dnStage === 'apple') {
        state.dnStage = 'friendship';
        scene.classList.add('friendship');
        document.body.classList.add('revealed');
        playBeep(440, 2.5);
    } else if (state.dnStage === 'friendship') {
        state.dnStage = 'fight';
        triggerGlassShatter();
        setTimeout(() => {
            scene.classList.remove('friendship');
            scene.classList.add('fight');
            document.body.classList.add('fight-mode');
            playBeep(55, 3);
        }, 50);
    } else if (state.dnStage === 'fight') {
        resetToAstra();
    }
}
window.advanceDeathNote = advanceDeathNote;

function triggerGlassShatter() {
    const canvas = document.getElementById('dn-shatter-canvas');
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const W = window.innerWidth, H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    canvas.classList.add('active');
    const impactX = W / 2, impactY = H / 2;
    dnShatter.canvas = canvas; dnShatter.ctx = ctx; dnShatter.shards = []; dnShatter.running = true;
    const shardCount = 60;
    for (let i = 0; i < shardCount; i++) {
        const angle1 = (Math.PI * 2 / shardCount) * i + (Math.random() - 0.5) * 0.15;
        const angle2 = angle1 + (Math.PI * 2 / shardCount) * (0.6 + Math.random() * 0.5);
        const radius = 200 + Math.random() * 800;
        const x1 = impactX + Math.cos(angle1) * radius, y1 = impactY + Math.sin(angle1) * radius;
        const x2 = impactX + Math.cos(angle2) * radius, y2 = impactY + Math.sin(angle2) * radius;
        const midAngle = (angle1 + angle2) / 2, speed = 15 + Math.random() * 25;
        dnShatter.shards.push({
            points: [{ x: impactX, y: impactY }, { x: x1, y: y1 }, { x: x2, y: y2 }],
            offsetX: 0, offsetY: 0, vx: Math.cos(midAngle) * speed, vy: Math.sin(midAngle) * speed,
            rot: 0, rotSpeed: (Math.random() - 0.5) * 0.1, alpha: 1, tint: Math.random() * 0.2 + 0.9
        });
    }
    synthGlassShatter();
    animateGlassShatter();
}

function animateGlassShatter() {
    if (!dnShatter.running) return;
    const ctx = dnShatter.ctx, W = window.innerWidth, H = window.innerHeight;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; ctx.fillRect(0, 0, W, H);
    for (let i = dnShatter.shards.length - 1; i >= 0; i--) {
        const shard = dnShatter.shards[i];
        shard.offsetX += shard.vx; shard.offsetY += shard.vy; shard.rot += shard.rotSpeed;
        shard.vx *= 0.98; shard.vy *= 0.98; shard.alpha -= 0.008;
        if (shard.alpha <= 0) { dnShatter.shards.splice(i, 1); continue; }
        ctx.save(); ctx.globalAlpha = shard.alpha;
        const centerX = (shard.points[0].x + shard.points[1].x + shard.points[2].x) / 3;
        const centerY = (shard.points[0].y + shard.points[1].y + shard.points[2].y) / 3;
        ctx.translate(centerX + shard.offsetX, centerY + shard.offsetY);
        ctx.rotate(shard.rot); ctx.translate(-centerX, -centerY);
        ctx.beginPath(); ctx.moveTo(shard.points[0].x, shard.points[0].y); ctx.lineTo(shard.points[1].x, shard.points[1].y); ctx.lineTo(shard.points[2].x, shard.points[2].y); ctx.closePath();
        const grad = ctx.createLinearGradient(shard.points[0].x, shard.points[0].y, shard.points[2].x, shard.points[2].y);
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.15 * shard.tint})`);
        grad.addColorStop(0.5, `rgba(200, 220, 255, ${0.08 * shard.tint})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${0.12 * shard.tint})`);
        ctx.fillStyle = grad; ctx.fill();
        ctx.strokeStyle = `rgba(255, 255, 255, ${shard.alpha * 0.8})`; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.restore();
    }
    if (dnShatter.shards.length === 0) { dnShatter.running = false; ctx.clearRect(0, 0, W, H); dnShatter.canvas.classList.remove('active'); return; }
    dnShatter.rafId = requestAnimationFrame(animateGlassShatter);
}

function synthGlassShatter() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        for (let i = 0; i < 8; i++) {
            const osc = ctx.createOscillator(), gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.frequency.value = 800 + Math.random() * 2000; osc.type = 'triangle';
            const startTime = ctx.currentTime + i * 0.02;
            gain.gain.setValueAtTime(0.08, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.15);
            osc.start(startTime); osc.stop(startTime + 0.15);
        }
        const boom = ctx.createOscillator(), boomGain = ctx.createGain();
        boom.connect(boomGain); boomGain.connect(ctx.destination);
        boom.frequency.setValueAtTime(80, ctx.currentTime);
        boom.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.6);
        boom.type = 'sawtooth';
        boomGain.gain.setValueAtTime(0.15, ctx.currentTime);
        boomGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
        boom.start(); boom.stop(ctx.currentTime + 0.6);
    } catch (e) {}
}

/* ═══════════════════════════════════════════════════════════════
   CHESS ENGINE
   ═══════════════════════════════════════════════════════════════ */
const ChessEngine = (() => {
    let board, turn, castling, enPassant, halfmove, fullmove, history = [];
    const PV = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 };
    const PST = {
        p: [[0,0,0,0,0,0,0,0],[50,50,50,50,50,50,50,50],[10,10,20,30,30,20,10,10],[5,5,10,25,25,10,5,5],[0,0,0,20,20,0,0,0],[5,-5,-10,0,0,-10,-5,5],[5,10,10,-20,-20,10,10,5],[0,0,0,0,0,0,0,0]],
        n: [[-50,-40,-30,-30,-30,-30,-40,-50],[-40,-20,0,0,0,0,-20,-40],[-30,0,10,15,15,10,0,-30],[-30,5,15,20,20,15,5,-30],[-30,0,15,20,20,15,0,-30],[-30,5,10,15,15,10,5,-30],[-40,-20,0,5,5,0,-20,-40],[-50,-40,-30,-30,-30,-30,-40,-50]],
        b: [[-20,-10,-10,-10,-10,-10,-10,-20],[-10,0,0,0,0,0,0,-10],[-10,0,5,10,10,5,0,-10],[-10,5,5,10,10,5,5,-10],[-10,0,10,10,10,10,0,-10],[-10,10,10,10,10,10,10,-10],[-10,5,0,0,0,0,5,-10],[-20,-10,-10,-10,-10,-10,-10,-20]],
        r: [[0,0,0,0,0,0,0,0],[5,10,10,10,10,10,10,5],[-5,0,0,0,0,0,0,-5],[-5,0,0,0,0,0,0,-5],[-5,0,0,0,0,0,0,-5],[-5,0,0,0,0,0,0,-5],[-5,0,0,0,0,0,0,-5],[0,0,0,5,5,0,0,0]],
        q: [[-20,-10,-10,-5,-5,-10,-10,-20],[-10,0,0,0,0,0,0,-10],[-10,0,5,5,5,5,0,-10],[-5,0,5,5,5,5,0,-5],[0,0,5,5,5,5,0,-5],[-10,5,5,5,5,5,0,-10],[-10,0,5,0,0,0,0,-10],[-20,-10,-10,-5,-5,-10,-10,-20]],
        k: [[-30,-40,-40,-50,-50,-40,-40,-30],[-30,-40,-40,-50,-50,-40,-40,-30],[-30,-40,-40,-50,-50,-40,-40,-30],[-30,-40,-40,-50,-50,-40,-40,-30],[-20,-30,-30,-40,-40,-30,-30,-20],[-10,-20,-20,-20,-20,-20,-20,-10],[20,20,0,0,0,0,20,20],[20,30,10,0,0,10,30,20]],
        k_end: [[-50,-40,-30,-20,-20,-30,-40,-50],[-30,-20,-10,0,0,-10,-20,-30],[-30,-10,20,30,30,20,-10,-30],[-30,-10,30,40,40,30,-10,-30],[-30,-10,30,40,40,30,-10,-30],[-30,-10,20,30,30,20,-10,-30],[-30,-30,0,0,0,0,-30,-30],[-50,-30,-30,-30,-30,-30,-30,-50]]
    };
    const isW = p => p && p === p.toUpperCase();
    const colorOf = p => p ? (isW(p) ? 'w' : 'b') : null;
    const inB = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;

    function loadFEN(fen) {
        board = Array.from({ length: 8 }, () => Array(8).fill(null));
        const parts = fen.split(' ');
        parts[0].split('/').forEach((row, r) => { let c = 0; for (const ch of row) { if (/\d/.test(ch)) c += parseInt(ch); else { board[r][c] = ch; c++; } } });
        turn = parts[1] === 'w' ? 'w' : 'b';
        const cs = parts[2] || 'KQkq';
        castling = { wk: cs.includes('K'), wq: cs.includes('Q'), bk: cs.includes('k'), bq: cs.includes('q') };
        enPassant = parts[3] && parts[3] !== '-' ? { row: 8 - parseInt(parts[3][1]), col: parts[3].charCodeAt(0) - 97 } : null;
        halfmove = parseInt(parts[4]) || 0; fullmove = parseInt(parts[5]) || 1;
        history = [];
    }

    function generateMoves(color, capturesOnly = false) {
        const moves = [], enemy = color === 'w' ? 'b' : 'w';
        for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
            const p = board[r][c]; if (!p || colorOf(p) !== color) continue;
            const t = p.toLowerCase();
            if (t === 'p') {
                const dir = color === 'w' ? -1 : 1;
                const startRow = color === 'w' ? 6 : 1, promoRow = color === 'w' ? 0 : 7;
                if (inB(r + dir, c) && !board[r + dir][c] && !capturesOnly) {
                    if (r + dir === promoRow) for (const pr of ['q','r','b','n']) moves.push({ from: [r,c], to: [r+dir,c], promo: pr });
                    else moves.push({ from: [r,c], to: [r+dir,c] });
                    if (r === startRow && !board[r + 2 * dir][c]) moves.push({ from: [r,c], to: [r+2*dir,c] });
                }
                for (const dc of [-1, 1]) {
                    const nc = c + dc; if (!inB(r + dir, nc)) continue;
                    const tgt = board[r + dir][nc];
                    if (tgt && colorOf(tgt) === enemy) {
                        if (r + dir === promoRow) for (const pr of ['q','r','b','n']) moves.push({ from: [r,c], to: [r+dir,nc], promo: pr });
                        else moves.push({ from: [r,c], to: [r+dir,nc] });
                    } else if (enPassant && enPassant.row === r + dir && enPassant.col === nc) moves.push({ from: [r,c], to: [r+dir,nc], enPassant: true });
                }
            } else if (t === 'n') {
                [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(([dr, dc]) => {
                    const nr = r + dr, nc = c + dc; if (!inB(nr, nc)) return;
                    const tgt = board[nr][nc];
                    if (tgt && colorOf(tgt) === color) return;
                    if (capturesOnly && !tgt) return;
                    moves.push({ from: [r,c], to: [nr,nc] });
                });
            } else if (t === 'b' || t === 'r' || t === 'q') {
                const dirs = [];
                if (t !== 'r') dirs.push([-1,-1],[-1,1],[1,-1],[1,1]);
                if (t !== 'b') dirs.push([-1,0],[1,0],[0,-1],[0,1]);
                dirs.forEach(([dr, dc]) => {
                    let nr = r + dr, nc = c + dc;
                    while (inB(nr, nc)) {
                        const tgt = board[nr][nc];
                        if (!tgt) { if (!capturesOnly) moves.push({ from: [r,c], to: [nr,nc] }); }
                        else { if (colorOf(tgt) === enemy) moves.push({ from: [r,c], to: [nr,nc] }); break; }
                        nr += dr; nc += dc;
                    }
                });
            } else if (t === 'k') {
                for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
                    if (!dr && !dc) continue;
                    const nr = r + dr, nc = c + dc; if (!inB(nr, nc)) continue;
                    const tgt = board[nr][nc];
                    if (tgt && colorOf(tgt) === color) continue;
                    if (capturesOnly && !tgt) continue;
                    moves.push({ from: [r,c], to: [nr,nc] });
                }
                if (!capturesOnly) {
                    if (color === 'w' && r === 7 && c === 4) {
                        if (castling.wk && !board[7][5] && !board[7][6] && board[7][7] === 'R' && !isSquareAttacked(7,4,'b') && !isSquareAttacked(7,5,'b') && !isSquareAttacked(7,6,'b')) moves.push({ from: [7,4], to: [7,6], castle: 'k' });
                        if (castling.wq && !board[7][1] && !board[7][2] && !board[7][3] && board[7][0] === 'R' && !isSquareAttacked(7,4,'b') && !isSquareAttacked(7,3,'b') && !isSquareAttacked(7,2,'b')) moves.push({ from: [7,4], to: [7,2], castle: 'q' });
                    }
                    if (color === 'b' && r === 0 && c === 4) {
                        if (castling.bk && !board[0][5] && !board[0][6] && board[0][7] === 'r' && !isSquareAttacked(0,4,'w') && !isSquareAttacked(0,5,'w') && !isSquareAttacked(0,6,'w')) moves.push({ from: [0,4], to: [0,6], castle: 'k' });
                        if (castling.bq && !board[0][1] && !board[0][2] && !board[0][3] && board[0][0] === 'r' && !isSquareAttacked(0,4,'w') && !isSquareAttacked(0,3,'w') && !isSquareAttacked(0,2,'w')) moves.push({ from: [0,4], to: [0,2], castle: 'q' });
                    }
                }
            }
        }
        return moves;
    }

    function isSquareAttacked(r, c, by) {
        const pd = by === 'w' ? -1 : 1;
        for (const dc of [-1, 1]) { const pr = r - pd, pc = c + dc; if (inB(pr, pc)) { const p = board[pr][pc]; if (p && p.toLowerCase() === 'p' && colorOf(p) === by) return true; } }
        for (const [dr, dc] of [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]) { const nr = r + dr, nc = c + dc; if (inB(nr, nc) && board[nr][nc] && board[nr][nc].toLowerCase() === 'n' && colorOf(board[nr][nc]) === by) return true; }
        for (const [dr, dc] of [[-1,-1],[-1,1],[1,-1],[1,1]]) { let nr = r + dr, nc = c + dc; while (inB(nr, nc)) { const p = board[nr][nc]; if (p) { if (colorOf(p) === by && (p.toLowerCase() === 'b' || p.toLowerCase() === 'q')) return true; break; } nr += dr; nc += dc; } }
        for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) { let nr = r + dr, nc = c + dc; while (inB(nr, nc)) { const p = board[nr][nc]; if (p) { if (colorOf(p) === by && (p.toLowerCase() === 'r' || p.toLowerCase() === 'q')) return true; break; } nr += dr; nc += dc; } }
        for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) { if (!dr && !dc) continue; const nr = r + dr, nc = c + dc; if (inB(nr, nc) && board[nr][nc] && board[nr][nc].toLowerCase() === 'k' && colorOf(board[nr][nc]) === by) return true; }
        return false;
    }

    const findKing = color => { const k = color === 'w' ? 'K' : 'k'; for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) if (board[r][c] === k) return [r, c]; return null; };
    const isInCheck = color => { const k = findKing(color); return k ? isSquareAttacked(k[0], k[1], color === 'w' ? 'b' : 'w') : false; };

    function makeMove(m) {
        const snap = { board: board.map(r => r.slice()), turn, castling: { ...castling }, enPassant: enPassant ? { ...enPassant } : null, halfmove, fullmove, move: m };
        const [fr, fc] = m.from, [tr, tc] = m.to;
        const piece = board[fr][fc], captured = board[tr][tc];
        board[tr][tc] = piece; board[fr][fc] = null;
        if (m.enPassant) board[fr][tc] = null;
        if (m.promo) board[tr][tc] = turn === 'w' ? m.promo.toUpperCase() : m.promo;
        if (m.castle === 'k') { if (turn === 'w') { board[7][5] = board[7][7]; board[7][7] = null; } else { board[0][5] = board[0][7]; board[0][7] = null; } }
        else if (m.castle === 'q') { if (turn === 'w') { board[7][3] = board[7][0]; board[7][0] = null; } else { board[0][3] = board[0][0]; board[0][0] = null; } }
        const t = piece.toLowerCase();
        if (t === 'k') { if (turn === 'w') { castling.wk = castling.wq = false; } else { castling.bk = castling.bq = false; } }
        if (t === 'r') { if (turn === 'w' && fc === 0 && fr === 7) castling.wq = false; if (turn === 'w' && fc === 7 && fr === 7) castling.wk = false; if (turn === 'b' && fc === 0 && fr === 0) castling.bq = false; if (turn === 'b' && fc === 7 && fr === 0) castling.bk = false; }
        if (t === 'p' && Math.abs(tr - fr) === 2) enPassant = { row: (fr + tr) / 2, col: fc }; else enPassant = null;
        if (t === 'p' || captured) halfmove = 0; else halfmove++;
        if (turn === 'b') fullmove++;
        turn = turn === 'w' ? 'b' : 'w';
        history.push(snap);
    }

    function undoMove() {
        const s = history.pop(); if (!s) return;
        board = s.board; turn = s.turn; castling = s.castling; enPassant = s.enPassant; halfmove = s.halfmove; fullmove = s.fullmove;
    }

    function legalMoves(color) { return generateMoves(color).filter(m => { makeMove(m); const inCheck = isInCheck(color); undoMove(); return !inCheck; }); }

    function evaluate() {
        let score = 0, totalMat = 0, queens = 0;
        for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) { const p = board[r][c]; if (!p) continue; const t = p.toLowerCase(); totalMat += PV[t]; if (t === 'q') queens++; }
        const endgame = totalMat < 2600 || queens === 0;
        for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
            const p = board[r][c]; if (!p) continue;
            const t = p.toLowerCase(), white = isW(p);
            const table = (t === 'k' && endgame) ? PST.k_end : PST[t];
            const pstRow = white ? r : 7 - r, pstCol = white ? c : 7 - c;
            const val = PV[t] + table[pstRow][pstCol];
            score += white ? val : -val;
        }
        return score;
    }

    function negamax(depth, alpha, beta, color) {
        const moves = legalMoves(color);
        if (moves.length === 0) return isInCheck(color) ? -1000000 - depth : 0;
        if (depth === 0) return color === 'w' ? evaluate() : -evaluate();
        const ordered = moves.slice().sort((a, b) => scoreMove(b) - scoreMove(a));
        let best = -Infinity;
        for (const m of ordered) {
            makeMove(m);
            const score = -negamax(depth - 1, -beta, -alpha, color === 'w' ? 'b' : 'w');
            undoMove();
            if (score > best) best = score;
            if (best > alpha) alpha = best;
            if (alpha >= beta) break;
        }
        return best;
    }

    const scoreMove = m => {
        let s = 0;
        const cap = board[m.to[0]][m.to[1]], mover = board[m.from[0]][m.from[1]];
        if (cap) s += 10 * PV[cap.toLowerCase()] - PV[mover.toLowerCase()];
        if (m.promo) s += PV[m.promo];
        return s;
    };

    function bestMove(color, depth) {
        const moves = legalMoves(color); if (moves.length === 0) return null;
        const ordered = moves.slice().sort((a, b) => scoreMove(b) - scoreMove(a));
        let best = -Infinity, bestM = ordered[0], alpha = -Infinity;
        for (const m of ordered) {
            makeMove(m);
            const score = -negamax(depth - 1, -Infinity, -alpha, color === 'w' ? 'b' : 'w');
            undoMove();
            if (score > best) { best = score; bestM = m; }
            if (best > alpha) alpha = best;
        }
        return bestM;
    }

    function randomMove(color) { const m = legalMoves(color); return m.length ? m[Math.floor(Math.random() * m.length)] : null; }

    function moveToSAN(m) {
        const [fr, fc] = m.from, [tr, tc] = m.to;
        const piece = board[fr][fc]; if (!piece) return '';
        const t = piece.toLowerCase(), files = 'abcdefgh';
        const cap = board[tr][tc] || m.enPassant;
        let san = '';
        if (m.castle === 'k') san = 'O-O';
        else if (m.castle === 'q') san = 'O-O-O';
        else if (t === 'p') { if (cap) san += files[fc] + 'x'; san += files[tc] + (8 - tr); if (m.promo) san += '=' + m.promo.toUpperCase(); }
        else { san += t.toUpperCase() + files[fc] + (8 - fr); if (cap) san += 'x'; san += files[tc] + (8 - tr); }
        return san;
    }

    function gameStatus() {
        const moves = legalMoves(turn);
        if (moves.length === 0) return isInCheck(turn) ? { type: 'checkmate', winner: turn === 'w' ? 'b' : 'w' } : { type: 'stalemate' };
        if (halfmove >= 100) return { type: 'draw', reason: '50-move rule' };
        const pieces = [];
        for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) if (board[r][c]) pieces.push(board[r][c].toLowerCase());
        const nonK = pieces.filter(p => p !== 'k');
        if (nonK.length === 0 || (nonK.length === 1 && 'nb'.includes(nonK[0])) || (nonK.length === 2 && nonK.every(p => p === 'b'))) return { type: 'draw', reason: 'insufficient material' };
        return { type: 'ongoing' };
    }

    return { loadFEN, legalMoves, makeMove, undoMove, isInCheck, bestMove, randomMove, moveToSAN, gameStatus, getBoard: () => board, getTurn: () => turn, getHistory: () => history };
})();

/* ═══════════════════════════════════════════════════════════════
   CHESS BOTS + UI + LIGHTNING
   ═══════════════════════════════════════════════════════════════ */
const CHESS_BOTS = [
    { id: 1,  name: 'Blunder_Bob',        elo: 400,  tag: 'Chaotic',    depth: 0, blunder: 0.75, chats: ["I meant to do that.", "Wait, that was my piece?", "Oops."] },
    { id: 2,  name: 'Greedy_Gary',        elo: 600,  tag: 'Hungry',     depth: 1, blunder: 0.5,  chats: ["Ooh, a free piece!", "I love captures."] },
    { id: 3,  name: 'Pawn_Pusher',        elo: 800,  tag: 'Simple',     depth: 1, blunder: 0.35, chats: ["Pawns are the soul of chess."] },
    { id: 4,  name: 'Knight_Rider',       elo: 1000, tag: 'Tricky',     depth: 2, blunder: 0.25, chats: ["L-shapes are superior.", "Surprise!"] },
    { id: 5,  name: 'Bishop_Beast',       elo: 1200, tag: 'Diagonal',   depth: 2, blunder: 0.18, chats: ["Diagonals are my kingdom."] },
    { id: 6,  name: 'Rook_Roll',          elo: 1400, tag: 'Endgame',    depth: 3, blunder: 0.12, chats: ["Rooks love open files."] },
    { id: 7,  name: 'Queen_Quasar',       elo: 1600, tag: 'Aggressive', depth: 3, blunder: 0.08, chats: ["Bow before the Queen."] },
    { id: 8,  name: 'Checkmate_Charlie',  elo: 1800, tag: 'Tactical',   depth: 3, blunder: 0.05, chats: ["Tactics win games."] },
    { id: 9,  name: 'Tactical_Titan',     elo: 1900, tag: 'Calculated', depth: 4, blunder: 0.02, chats: ["Every move has purpose."] },
    { id: 10, name: 'Grandmaster_AI',     elo: 2000, tag: 'Ruthless',   depth: 4, blunder: 0,    chats: ["Resistance is futile.", "Inevitable."] }
];

const ChessUI = (() => {
    let selected = null, legalMoves = [], lastMove = null, playerColor = 'w', currentBot = CHESS_BOTS[0], gameOver = false, thinking = false;
    let capturedByW = [], capturedByB = [], chatLines = [];
    const GLYPH = { 'K':'♔','Q':'♕','R':'♖','B':'♗','N':'♘','P':'♙','k':'♚','q':'♛','r':'♜','b':'♝','n':'♞','p':'♟' };

    function renderBoard() {
        const boardEl = document.getElementById('chess-board'); if (!boardEl) return;
        const b = ChessEngine.getBoard();
        boardEl.innerHTML = '';
        const targets = legalMoves.map(m => m.to);
        for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
            const sq = document.createElement('div');
            sq.className = 'chess-sq ' + ((r + c) % 2 === 0 ? 'light' : 'dark');
            if (lastMove && ((lastMove.from[0] === r && lastMove.from[1] === c) || (lastMove.to[0] === r && lastMove.to[1] === c))) sq.classList.add('last-move');
            if (selected && selected[0] === r && selected[1] === c) sq.classList.add('selected');
            const piece = b[r][c];
            if (piece && piece.toLowerCase() === 'k' && ((piece === piece.toUpperCase() && ChessEngine.getTurn() === 'w') || (piece === piece.toLowerCase() && ChessEngine.getTurn() === 'b')) && ChessEngine.isInCheck(ChessEngine.getTurn())) sq.classList.add('in-check');
            if (targets.some(t => t[0] === r && t[1] === c)) {
                if (piece) { const ring = document.createElement('div'); ring.className = 'legal-capture'; sq.appendChild(ring); }
                else { const dot = document.createElement('div'); dot.className = 'legal-dot'; sq.appendChild(dot); }
            }
            if (piece) {
                const sp = document.createElement('span');
                sp.className = 'piece';
                sp.dataset.color = piece === piece.toUpperCase() ? 'w' : 'b';
                sp.textContent = GLYPH[piece];
                sq.appendChild(sp);
            }
            sq.onclick = () => onSquareClick(r, c);
            boardEl.appendChild(sq);
        }
    }

    function onSquareClick(r, c) {
        if (gameOver || thinking || ChessEngine.getTurn() !== playerColor) return;
        const b = ChessEngine.getBoard(), piece = b[r][c];
        if (selected) { const m = legalMoves.find(x => x.to[0] === r && x.to[1] === c); if (m) { if (m.promo) m.promo = 'q'; playerMove(m); return; } }
        if (piece && ((playerColor === 'w' && piece === piece.toUpperCase()) || (playerColor === 'b' && piece === piece.toLowerCase()))) {
            selected = [r, c];
            legalMoves = ChessEngine.legalMoves(playerColor).filter(m => m.from[0] === r && m.from[1] === c);
        } else { selected = null; legalMoves = []; }
        renderBoard();
    }

    function playerMove(move) {
        const b = ChessEngine.getBoard();
        const cap = b[move.to[0]][move.to[1]] || (move.enPassant ? b[move.from[0]][move.to[1]] : null);
        const san = ChessEngine.moveToSAN(move);
        ChessEngine.makeMove(move);
        lastMove = move; selected = null; legalMoves = [];
        if (cap) capturedByW.push(cap);
        addChat('You', san, 'player');
        const status = ChessEngine.gameStatus();
        let fxType = 'move';
        if (move.castle) fxType = 'castle'; else if (move.promo) fxType = 'promote'; else if (move.enPassant) fxType = 'enpassant'; else if (cap) fxType = 'capture';
        if (status.type === 'checkmate') fxType = 'checkmate';
        else if (status.type === 'ongoing' && ChessEngine.isInCheck(ChessEngine.getTurn())) fxType = 'check';
        if (window.ChessLightning) ChessLightning.fire(move, fxType);
        renderBoard(); updateStatus(); updateCaptured();
        if (status.type !== 'ongoing') return endGame(status);
        thinking = true; updateStatus();
        setTimeout(botMove, 400 + Math.random() * 400);
    }

    function botMove() {
        const b = ChessEngine.getBoard();
        let move;
        const r = Math.random();
        if (currentBot.depth === 0) move = ChessEngine.randomMove('b');
        else if (r < currentBot.blunder) move = ChessEngine.randomMove('b');
        else move = ChessEngine.bestMove('b', currentBot.depth);
        if (!move) { thinking = false; return endGame(ChessEngine.gameStatus()); }
        const cap = b[move.to[0]][move.to[1]] || (move.enPassant ? b[move.from[0]][move.to[1]] : null);
        const san = ChessEngine.moveToSAN(move);
        ChessEngine.makeMove(move);
        lastMove = move;
        if (cap) capturedByB.push(cap);
        addChat(currentBot.name, san, 'bot');
        if (Math.random() < 0.35) setTimeout(() => addChat(currentBot.name, currentBot.chats[Math.floor(Math.random() * currentBot.chats.length)], 'bot'), 500);
        const status = ChessEngine.gameStatus();
        let fxType = 'bot';
        if (move.castle) fxType = 'castle'; else if (move.promo) fxType = 'promote'; else if (move.enPassant) fxType = 'enpassant'; else if (cap) fxType = 'capture';
        if (status.type === 'checkmate') fxType = 'checkmate';
        else if (status.type === 'ongoing' && ChessEngine.isInCheck(ChessEngine.getTurn())) fxType = 'check';
        if (window.ChessLightning) ChessLightning.fire(move, fxType);
        thinking = false;
        renderBoard(); updateStatus(); updateCaptured();
        if (status.type !== 'ongoing') endGame(status);
    }

    function endGame(s) {
        gameOver = true;
        let msg = '';
        if (s.type === 'checkmate') msg = s.winner === playerColor ? '🏆 Checkmate — You win!' : '💀 Checkmate — You lose.';
        else if (s.type === 'stalemate') msg = '🤝 Stalemate — Draw.';
        else if (s.type === 'draw') msg = `🤝 Draw — ${s.reason}.`;
        addChat('System', msg, 'system');
        updateStatus(msg);
    }

    function updateStatus(custom) {
        const el = document.getElementById('chess-status'); if (!el) return;
        if (custom) { el.innerHTML = `<span class="turn-indicator">${custom}</span>`; return; }
        if (gameOver) return;
        const t = ChessEngine.getTurn();
        const youTurn = t === playerColor;
        const dot = `<span class="turn-dot ${t === 'b' ? 'black' : ''}"></span>`;
        const who = youTurn ? 'Your turn' : `${currentBot.name} is thinking`;
        const think = (!youTurn && thinking) ? '<span class="chess-thinking"></span>' : '';
        el.innerHTML = `<span class="turn-indicator">${dot} ${who}${think}</span><span class="chess-bot-name">${currentBot.name} · ${currentBot.elo}</span>`;
    }

    function updateCaptured() {
        const w = document.getElementById('captured-by-white'), b = document.getElementById('captured-by-black');
        if (w) w.innerHTML = capturedByW.map(p => `<span class="cap-${p === p.toUpperCase() ? 'b' : 'w'}">${GLYPH[p]}</span>`).join('');
        if (b) b.innerHTML = capturedByB.map(p => `<span class="cap-${p === p.toUpperCase() ? 'b' : 'w'}">${GLYPH[p]}</span>`).join('');
    }

    function addChat(who, msg, cls) {
        chatLines.push({ who, msg, cls });
        const chat = document.getElementById('chess-chat'); if (!chat) return;
        const d = document.createElement('div');
        d.className = 'msg ' + (cls || '');
        d.innerHTML = `<span class="who">${escHTML(who)}:</span> ${escHTML(msg)}`;
        chat.appendChild(d);
        chat.scrollTop = chat.scrollHeight;
    }

    function renderBotList() {
        const g = document.getElementById('chess-bots-grid'); if (!g) return;
        g.innerHTML = CHESS_BOTS.map(b => `<div class="bot-card ${b.id === currentBot.id ? 'active' : ''}" data-bot="${b.id}"><div class="bot-name">${b.name}</div><div class="bot-elo">${b.elo} Elo · ${b.tag}</div></div>`).join('');
        g.querySelectorAll('.bot-card').forEach(c => {
            c.onclick = () => {
                currentBot = CHESS_BOTS.find(b => b.id === parseInt(c.dataset.bot));
                resetGame();
                addChat('System', `Now playing ${currentBot.name} (${currentBot.elo} Elo).`, 'system');
            };
        });
    }

    function resetGame() {
        ChessEngine.loadFEN('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
        selected = null; legalMoves = []; lastMove = null;
        gameOver = false; thinking = false;
        capturedByW = []; capturedByB = []; chatLines = [];
        const chat = document.getElementById('chess-chat'); if (chat) chat.innerHTML = '';
        addChat('System', `New game vs ${currentBot.name} (${currentBot.elo} Elo). You're White.`, 'system');
        renderBoard(); updateStatus(); updateCaptured();
    }

    function undo() {
        if (thinking || ChessEngine.getHistory().length < 2) return;
        ChessEngine.undoMove(); ChessEngine.undoMove();
        selected = null; legalMoves = []; gameOver = false;
        const h = ChessEngine.getHistory();
        lastMove = h.length ? h[h.length - 1].move : null;
        chatLines = chatLines.slice(0, -2);
        const chat = document.getElementById('chess-chat');
        if (chat) chat.innerHTML = chatLines.map(l => `<div class="msg ${l.cls}"><span class="who">${escHTML(l.who)}:</span> ${escHTML(l.msg)}</div>`).join('');
        renderBoard(); updateStatus(); updateCaptured();
    }

    function init() {
        renderBotList();
        resetGame();
        const nb = document.getElementById('chess-new'), ub = document.getElementById('chess-undo'), rb = document.getElementById('chess-resign');
        if (nb) nb.onclick = resetGame;
        if (ub) ub.onclick = undo;
        if (rb) rb.onclick = () => { if (gameOver) return; gameOver = true; addChat('System', 'You resigned.', 'system'); updateStatus('🏳️ You resigned'); };
        if (window.ChessLightning) setTimeout(() => ChessLightning.init(document.getElementById('chess-board')), 100);
    }
    return { init };
})();

const ChessLightning = (() => {
    let canvas, ctx, W, H, boardEl;
    let bolts = [], bursts = [], rings = [], sparks = [];
    let running = false;

    function init(el) {
        boardEl = el;
        const wrap = el.closest('.chess-board-wrap') || el.parentElement;
        let c = wrap.querySelector('.chess-lightning-canvas');
        if (!c) { c = document.createElement('canvas'); c.className = 'chess-lightning-canvas'; wrap.appendChild(c); }
        canvas = c; ctx = c.getContext('2d');
        resize();
        new ResizeObserver(resize).observe(el);
    }
    function resize() {
        if (!canvas || !boardEl) return;
        const rect = boardEl.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
        canvas.style.width = rect.width + 'px'; canvas.style.height = rect.height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        W = rect.width; H = rect.height;
    }
    const sqCenter = (r, c) => ({ x: (c + 0.5) * (W / 8), y: (r + 0.5) * (H / 8) });

    function fire(move, type = 'move') {
        if (!ctx || !move) return;
        const from = sqCenter(move.from[0], move.from[1]);
        const to = sqCenter(move.to[0], move.to[1]);
        const cfg = getConfig(type); const now = performance.now();
        for (let i = 0; i < cfg.bolts; i++) bolts.push({ x1: from.x, y1: from.y, x2: to.x, y2: to.y, jitter: cfg.jitter, width: cfg.width, color: cfg.color, glow: cfg.glow, born: now, duration: cfg.duration, offset: (i - (cfg.bolts - 1) / 2) * 6 });
        bursts.push({ x: to.x, y: to.y, color: cfg.burstColor, radius: cfg.burstRadius, born: now, duration: cfg.duration });
        if (cfg.ring) rings.push({ x: to.x, y: to.y, color: cfg.ringColor, maxR: cfg.ringMaxR, born: now, duration: cfg.duration * 1.4 });
        if (cfg.sparks) for (let i = 0; i < cfg.sparks; i++) { const a = Math.random() * Math.PI * 2, s = 2 + Math.random() * 4; sparks.push({ x: to.x, y: to.y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, color: cfg.color, born: now, duration: cfg.duration * 1.2, size: 1.5 + Math.random() * 2 }); }
        startLoop();
    }
    function getConfig(type) {
        const cfgs = {
            capture: { bolts: 2, jitter: 55, color: '#ff3b6b', glow: '#ff0055', width: 3, duration: 380, burstColor: 'rgba(255,59,107,0.65)', burstRadius: 55, ring: true, ringColor: '#ff3b6b', ringMaxR: 45, sparks: 12 },
            check:   { bolts: 3, jitter: 80, color: '#ffb800', glow: '#ff8800', width: 4, duration: 500, burstColor: 'rgba(255,184,0,0.75)', burstRadius: 65, ring: true, ringColor: '#ffb800', ringMaxR: 60, sparks: 16 },
            checkmate:{ bolts: 5, jitter: 120, color: '#ff0044', glow: '#ff0066', width: 5, duration: 900, burstColor: 'rgba(255,0,68,0.85)', burstRadius: 110, ring: true, ringColor: '#ff0044', ringMaxR: 130, sparks: 30 },
            castle:  { bolts: 3, jitter: 45, color: '#ffd700', glow: '#ffaa00', width: 3.5, duration: 550, burstColor: 'rgba(255,215,0,0.75)', burstRadius: 60, ring: true, ringColor: '#ffd700', ringMaxR: 55, sparks: 10 },
            enpassant:{ bolts: 3, jitter: 70, color: '#a855f7', glow: '#8b5cf6', width: 3, duration: 450, burstColor: 'rgba(168,85,247,0.75)', burstRadius: 50, ring: true, ringColor: '#a855f7', ringMaxR: 45, sparks: 12 },
            promote: { bolts: 5, jitter: 90, color: '#00f0ff', glow: '#00a2ff', width: 4, duration: 800, burstColor: 'rgba(0,240,255,0.8)', burstRadius: 85, ring: true, ringColor: '#00f0ff', ringMaxR: 90, sparks: 24 },
            bot:     { bolts: 2, jitter: 50, color: '#ff5c00', glow: '#ff3300', width: 3, duration: 320, burstColor: 'rgba(255,92,0,0.65)', burstRadius: 45, ring: false, sparks: 8 },
            move:    { bolts: 1, jitter: 50, color: '#00f0ff', glow: '#00a2ff', width: 3, duration: 320, burstColor: 'rgba(0,240,255,0.65)', burstRadius: 42, ring: false, sparks: 6 }
        };
        return cfgs[type] || cfgs.move;
    }
    function traceBolt(x1, y1, x2, y2, d) {
        if (d < 2) { ctx.lineTo(x2, y2); return; }
        const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
        const dx = x2 - x1, dy = y2 - y1;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len;
        const disp = (Math.random() - 0.5) * d;
        const px = mx + nx * disp, py = my + ny * disp;
        traceBolt(x1, y1, px, py, d / 2.2);
        traceBolt(px, py, x2, y2, d / 2.2);
    }
    function startLoop() { if (running) return; running = true; requestAnimationFrame(loop); }
    function loop() {
        const now = performance.now();
        ctx.clearRect(0, 0, W, H);
        bolts = bolts.filter(b => now - b.born < b.duration);
        for (const b of bolts) {
            const t = (now - b.born) / b.duration, a = 1 - Math.pow(t, 1.6);
            const x1 = b.x1 + b.offset, y1 = b.y1 + b.offset;
            ctx.save(); ctx.globalAlpha = a; ctx.shadowBlur = 25; ctx.shadowColor = b.glow;
            ctx.strokeStyle = b.color; ctx.lineWidth = b.width * (1 - t * 0.4); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
            ctx.beginPath(); ctx.moveTo(x1, y1); traceBolt(x1, y1, b.x2, b.y2, b.jitter); ctx.stroke();
            ctx.shadowBlur = 0; ctx.strokeStyle = `rgba(255,255,255,${a})`; ctx.lineWidth = b.width * 0.4 * (1 - t * 0.4);
            ctx.beginPath(); ctx.moveTo(x1, y1); traceBolt(x1, y1, b.x2, b.y2, b.jitter); ctx.stroke();
            ctx.restore();
        }
        bursts = bursts.filter(b => now - b.born < b.duration);
        for (const b of bursts) {
            const t = (now - b.born) / b.duration, r = b.radius * Math.pow(t, 0.6), a = 1 - t;
            const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r);
            g.addColorStop(0, `rgba(255,255,255,${a * 0.9})`); g.addColorStop(0.3, b.color); g.addColorStop(1, 'transparent');
            ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x, b.y, r, 0, Math.PI * 2); ctx.fill();
        }
        rings = rings.filter(r => now - r.born < r.duration);
        for (const r of rings) {
            const t = (now - r.born) / r.duration, rad = r.maxR * t, a = 1 - t;
            ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = r.color; ctx.lineWidth = 3 * (1 - t);
            ctx.shadowBlur = 20; ctx.shadowColor = r.color; ctx.beginPath(); ctx.arc(r.x, r.y, rad, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
        }
        sparks = sparks.filter(s => now - s.born < s.duration);
        for (const s of sparks) {
            const t = (now - s.born) / s.duration;
            const x = s.x + s.vx * t * 20, y = s.y + s.vy * t * 20, a = 1 - t;
            ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = s.color; ctx.shadowBlur = 12; ctx.shadowColor = s.color;
            ctx.beginPath(); ctx.arc(x, y, s.size * (1 - t * 0.6), 0, Math.PI * 2); ctx.fill(); ctx.restore();
        }
        if (bolts.length || bursts.length || rings.length || sparks.length) requestAnimationFrame(loop);
        else { ctx.clearRect(0, 0, W, H); running = false; }
    }
    return { init, fire };
})();
window.ChessLightning = ChessLightning;

/* ═══════════════════════════════════════════════════════════════
   CODEFLOW
   ═══════════════════════════════════════════════════════════════ */
const CodeFlow = (() => {
    let lines = [], functions = {}, globalScope = {}, callStack = [];
    let topSteps = [], topIdx = 0, output = [], currentLine = -1, currentOp = '', newVars = new Set(), errorMsg = null;
    let isRunning = false, runInterval = null;

    function tokenize(src) {
        const tokens = []; let i = 0;
        while (i < src.length) {
            const c = src[i];
            if (/\s/.test(c)) { i++; continue; }
            if (c === '"' || c === "'") { const q = c; let s = ''; i++; while (i < src.length && src[i] !== q) { s += src[i]; i++; } i++; tokens.push({ t: 'str', v: s }); continue; }
            if (/[0-9]/.test(c)) { let n = ''; while (i < src.length && /[0-9.]/.test(src[i])) { n += src[i]; i++; } tokens.push({ t: 'num', v: parseFloat(n) }); continue; }
            if (/[a-zA-Z_]/.test(c)) { let id = ''; while (i < src.length && /[a-zA-Z0-9_]/.test(src[i])) { id += src[i]; i++; } tokens.push({ t: 'id', v: id }); continue; }
            const two = src.substr(i, 2);
            if (['==','!=','<=','>=','**','//'].includes(two)) { tokens.push({ t: 'op', v: two }); i += 2; continue; }
            if ('+-*/%()[]{}<>=:,.'.includes(c)) { tokens.push({ t: 'op', v: c }); i++; continue; }
            i++;
        }
        return tokens;
    }

    function parse(tokens) {
        let pos = 0;
        const peek = () => tokens[pos], next = () => tokens[pos++];
        function parsePrimary() {
            const t = peek(); if (!t) return null;
            if (t.t === 'num' || t.t === 'str') { next(); return { type: 'lit', value: t.v }; }
            if (t.t === 'id') {
                next();
                if (peek() && peek().v === '(') {
                    next(); const args = [];
                    while (peek() && peek().v !== ')') { args.push(parseTernary()); if (peek() && peek().v === ',') next(); }
                    if (peek()) next();
                    let node = { type: 'call', name: t.v, args };
                    while (peek() && peek().v === '[') { next(); const idx = parseTernary(); if (peek()) next(); node = { type: 'index', obj: node, idx }; }
                    return node;
                }
                let node = { type: 'var', name: t.v };
                while (peek() && peek().v === '[') { next(); const idx = parseTernary(); if (peek()) next(); node = { type: 'index', obj: node, idx }; }
                return node;
            }
            if (t.v === '(') { next(); const e = parseTernary(); if (peek()) next(); return e; }
            if (t.v === '[') {
                next(); const first = parseTernary();
                if (peek() && peek().t === 'id' && peek().v === 'for') {
                    next(); const varName = next().v;
                    if (peek() && peek().v === 'in') next();
                    const iter = parseTernary();
                    if (peek() && peek().v === ']') next();
                    return { type: 'listcomp', expr: first, var: varName, iter };
                }
                const items = [first];
                while (peek() && peek().v === ',') { next(); items.push(parseTernary()); }
                if (peek() && peek().v === ']') next();
                return { type: 'list', items };
            }
            if (t.v === '{') {
                next(); const entries = [];
                while (peek() && peek().v !== '}') {
                    const k = parseTernary();
                    if (peek() && peek().v === ':') next();
                    const v = parseTernary();
                    entries.push({ key: k, value: v });
                    if (peek() && peek().v === ',') next();
                }
                if (peek()) next();
                return { type: 'dict', entries };
            }
            next(); return { type: 'lit', value: 0 };
        }
        function parseBinary(minPrec) {
            let left = parsePrimary();
            while (peek()) {
                const op = peek().v;
                const prec = { '**': 4, '*': 3, '/': 3, '%': 3, '//': 3, '+': 2, '-': 2, '<': 1, '>': 1, '<=': 1, '>=': 1, '==': 1, '!=': 1 };
                if (!(op in prec) || prec[op] < minPrec) break;
                next();
                const right = parseBinary(prec[op] + (op === '**' ? 0 : 1));
                left = { type: 'bin', op, left, right };
            }
            return left;
        }
        function parseTernary() { return parseBinary(0); }
        return parseTernary();
    }

    function fmt(v) {
        if (v === null || v === undefined) return 'None';
        if (typeof v === 'string') return '"' + v + '"';
        if (Array.isArray(v)) return '[' + v.map(x => typeof x === 'string' ? '"' + x + '"' : String(x)).join(', ') + ']';
        if (typeof v === 'object') return '{' + Object.entries(v).map(([k, x]) => `"${k}": ${typeof x === 'string' ? '"' + x + '"' : x}`).join(', ') + '}';
        if (typeof v === 'boolean') return v ? 'True' : 'False';
        return String(v);
    }

    function evalNode(node, scope) {
        if (!node) return null;
        switch (node.type) {
            case 'lit': return node.value;
            case 'var': return scope[node.name] !== undefined ? scope[node.name] : globalScope[node.name];
            case 'bin': { const l = evalNode(node.left, scope), r = evalNode(node.right, scope); return { '+': (typeof l === 'string' || typeof r === 'string') ? String(l) + String(r) : l + r, '-': l - r, '*': l * r, '/': l / r, '%': l % r, '//': Math.floor(l / r), '**': Math.pow(l, r), '==': l === r, '!=': l !== r, '<': l < r, '>': l > r, '<=': l <= r, '>=': l >= r }[node.op]; }
            case 'list': return node.items.map(i => evalNode(i, scope));
            case 'dict': { const o = {}; node.entries.forEach(e => { o[evalNode(e.key, scope)] = evalNode(e.value, scope); }); return o; }
            case 'index': { const o = evalNode(node.obj, scope), i = evalNode(node.idx, scope); return o ? o[i] : null; }
            case 'listcomp': { const iter = evalNode(node.iter, scope); if (!Array.isArray(iter)) return []; const child = Object.create(scope); return iter.map(x => { child[node.var] = x; return evalNode(node.expr, child); }); }
        }
        return null;
    }

    function splitTopLevel(str, sep) {
        const parts = []; let depth = 0, start = 0, inStr = false, q = '';
        for (let i = 0; i < str.length; i++) {
            const c = str[i];
            if (!inStr && (c === '"' || c === "'")) { inStr = true; q = c; continue; }
            if (inStr && c === q) { inStr = false; continue; }
            if (inStr) continue;
            if ('([{'.includes(c)) depth++;
            if (')]}'.includes(c)) depth--;
            if (c === sep && depth === 0) { parts.push(str.substring(start, i)); start = i + 1; }
        }
        parts.push(str.substring(start)); return parts;
    }

    function parseProgram(code) {
        lines = code.split('\n'); functions = {}; globalScope = {}; callStack = [];
        topSteps = []; topIdx = 0; output = []; currentLine = -1; currentOp = ''; newVars = new Set(); errorMsg = null;
        const bodySet = new Set();
        let i = 0;
        while (i < lines.length) {
            const line = lines[i], trimmed = line.trim();
            const m = trimmed.match(/^def\s+(\w+)\s*\(([^)]*)\)\s*:/);
            if (m) {
                const name = m[1], params = m[2].split(',').map(p => p.trim()).filter(Boolean);
                const baseIndent = line.match(/^(\s*)/)[1].length;
                const body = []; let j = i + 1;
                while (j < lines.length) {
                    const l = lines[j];
                    if (l.trim() === '') { j++; continue; }
                    const indent = l.match(/^(\s*)/)[1].length;
                    if (indent <= baseIndent) break;
                    body.push({ lineIdx: j, code: l.trim() }); bodySet.add(j); j++;
                }
                functions[name] = { params, body, defLine: i };
                i = j; continue;
            }
            i++;
        }
        lines.forEach((line, idx) => {
            if (bodySet.has(idx)) return;
            const t = line.trim();
            if (!t || t.startsWith('#')) return;
            topSteps.push({ lineIdx: idx, code: t });
        });
    }

    function executeLine(code, scope, frame) {
        const printM = code.match(/^print\s*\((.*)\)\s*$/);
        if (printM) {
            const args = splitTopLevel(printM[1], ',').map(a => evalNode(parse(tokenize(a.trim())), scope));
            output.push(args.map(v => typeof v === 'string' ? v : fmt(v)).join(' '));
            currentOp = `print ${args.map(v => typeof v === 'string' ? '"' + v + '"' : fmt(v)).join(', ')}`;
            return;
        }
        const retM = code.match(/^return\s*(.*)$/);
        if (retM) { let val = null; if (retM[1].trim()) val = evalNode(parse(tokenize(retM[1].trim())), scope); currentOp = `return ${val !== null ? fmt(val) : 'None'}`; popFrame(val); return; }
        const assignM = code.match(/^(\w+)\s*=\s*(.+)$/);
        if (assignM) {
            const name = assignM[1], expr = assignM[2].trim();
            const callM = expr.match(/^(\w+)\s*\((.*)\)\s*$/);
            if (callM && functions[callM[1]]) {
                const fn = functions[callM[1]];
                const args = splitTopLevel(callM[2], ',').map(a => a.trim()).filter(Boolean).map(a => evalNode(parse(tokenize(a)), scope));
                pushFrame(callM[1], fn, args, name);
                currentOp = `call ${callM[1]}(${args.map(fmt).join(', ')})`;
                return;
            }
            const val = evalNode(parse(tokenize(expr)), scope);
            const isNew = !(name in scope);
            scope[name] = val;
            if (isNew) newVars.add(name + '::' + (frame ? frame.fnName : 'global'));
            currentOp = `${name} = ${fmt(val)}`;
            return;
        }
        const bareCall = code.match(/^(\w+)\s*\((.*)\)\s*$/);
        if (bareCall && functions[bareCall[1]]) {
            const fn = functions[bareCall[1]];
            const args = splitTopLevel(bareCall[2], ',').map(a => a.trim()).filter(Boolean).map(a => evalNode(parse(tokenize(a)), scope));
            pushFrame(bareCall[1], fn, args, null);
            currentOp = `call ${bareCall[1]}(${args.map(fmt).join(', ')})`;
            return;
        }
        currentOp = '...';
    }

    function pushFrame(name, fn, args, returnTo) {
        const scope = {};
        fn.params.forEach((p, i) => { scope[p] = args[i] !== undefined ? args[i] : null; });
        callStack.push({ fnName: name, scope, params: fn.params, body: fn.body, idx: 0, returnTo });
    }
    function popFrame(ret) {
        const f = callStack.pop(); if (!f) return;
        if (f.returnTo != null) {
            const ps = callStack.length > 0 ? callStack[callStack.length - 1].scope : globalScope;
            ps[f.returnTo] = ret;
            newVars.add(f.returnTo + '::' + (callStack.length > 0 ? callStack[callStack.length - 1].fnName : 'global'));
        }
    }

    function stepOnce() {
        if (errorMsg) return false;
        const frame = callStack.length > 0 ? callStack[callStack.length - 1] : null;
        const steps = frame ? frame.body : topSteps;
        const idx = frame ? frame.idx : topIdx;
        if (idx >= steps.length) { if (frame) { popFrame(null); return true; } return false; }
        const step = steps[idx];
        currentLine = step.lineIdx;
        const scope = frame ? frame.scope : globalScope;
        try { executeLine(step.code, scope, frame); }
        catch (e) { errorMsg = e.message || String(e); return true; }
        if (frame) frame.idx++; else topIdx++;
        return true;
    }

    function renderAll() {
        const codeEl = document.getElementById('cf-code');
        if (codeEl) {
            codeEl.innerHTML = lines.map((line, idx) => {
                let cls = 'cf-code-line';
                if (line.trim().startsWith('def ')) cls += ' fn-def';
                if (idx === currentLine) cls += ' active';
                if (idx < currentLine && !callStack.length) cls += ' done';
                if (errorMsg && idx === currentLine) cls += ' error';
                return `<div class="${cls}"><span class="ln">${idx + 1}</span><span>${escHTML(line) || ' '}</span></div>`;
            }).join('');
            const act = codeEl.querySelector('.active');
            if (act) act.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
        const varsEl = document.getElementById('cf-vars');
        if (varsEl) {
            let html = `<div class="cf-scope-title"><span>Global scope</span><span class="cf-scope-name">module</span></div>`;
            const gv = Object.entries(globalScope);
            if (gv.length === 0) html += `<div class="cf-empty" style="padding:8px;">No variables yet</div>`;
            else gv.forEach(([k, v]) => { const isNew = newVars.has(k + '::global') && currentLine >= 0; html += `<div class="cf-var${isNew ? ' new' : ''}"><span class="k">${escHTML(k)}</span><span class="v ${valCls(v)}">${escHTML(fmt(v))}</span></div>`; });
            if (callStack.length > 0) {
                html += `<div style="height:1px;background:var(--border);margin:8px 10px;"></div>`;
                html += `<div class="cf-scope-title"><span>Call stack</span><span class="cf-scope-name">${callStack.length} frame${callStack.length > 1 ? 's' : ''}</span></div>`;
                [...callStack].reverse().forEach((f, i) => {
                    const isTop = i === 0;
                    const vars = Object.entries(f.scope);
                    html += `<div class="cf-frame ${isTop ? '' : 'call'}"><div class="cf-frame-header">${escHTML(f.fnName)}(${f.params.join(', ')})${isTop ? ' ← active' : ''}</div>`;
                    if (vars.length === 0) html += `<div style="font-size:0.72rem;color:var(--text-muted);">no local variables</div>`;
                    else vars.forEach(([k, v]) => { const isNew = newVars.has(k + '::' + f.fnName) && currentLine >= 0; html += `<div class="cf-var${isNew ? ' new' : ''}" style="padding:3px 4px;"><span class="k">${escHTML(k)}</span><span class="v ${valCls(v)}">${escHTML(fmt(v))}</span></div>`; });
                    html += `</div>`;
                });
            }
            varsEl.innerHTML = html;
        }
        const outEl = document.getElementById('cf-output');
        if (outEl) outEl.innerHTML = output.length === 0 ? `<div class="cf-empty">Output will appear here</div>` : output.map(o => `<div class="cf-out-line">${escHTML(o)}</div>`).join('');
        const opEl = document.getElementById('cf-op');
        if (opEl) opEl.innerHTML = errorMsg ? `<span class="op-icon" style="color:#dc2626;">✕</span> ${escHTML(errorMsg)}` : (currentOp ? `<span class="op-icon">→</span> ${escHTML(currentOp)}` : `<span class="op-icon">•</span> Ready — press Step to begin`);
        const pr = document.getElementById('cf-progress');
        if (pr) {
            const total = topSteps.length + callStack.reduce((a, f) => a + f.body.length, 0);
            const done = topIdx + callStack.reduce((a, f) => a + f.idx, 0);
            const overall = errorMsg ? 'ERROR' : (done >= total && callStack.length === 0 ? 'DONE' : `${topIdx + (callStack.length ? callStack[callStack.length - 1].idx : 0)} / ${topSteps.length}`);
            pr.textContent = `Step ${done} / ${total}  ·  ${overall}`;
        }
    }

    const valCls = v => { if (typeof v === 'string') return 'str'; if (typeof v === 'number') return ''; if (Array.isArray(v)) return 'list'; if (v && typeof v === 'object') return 'dict'; return ''; };

    function reset() { stopAuto(); const ed = document.getElementById('cf-editor'); parseProgram(ed ? ed.value : ''); renderAll(); }
    function stepOne() { if (errorMsg) return; const more = stepOnce(); renderAll(); if (!more) stopAuto(); }
    function startAuto() {
        if (isRunning || errorMsg) return;
        isRunning = true;
        const btn = document.getElementById('cf-run');
        if (btn) btn.textContent = '⏸ Pause';
        runInterval = setInterval(() => { const more = stepOnce(); renderAll(); if (!more) stopAuto(); }, 700);
    }
    function stopAuto() { isRunning = false; if (runInterval) { clearInterval(runInterval); runInterval = null; } const btn = document.getElementById('cf-run'); if (btn) btn.textContent = '⚡ Auto Run'; }

    function init() {
        const ed = document.getElementById('cf-editor');
        const sb = document.getElementById('cf-step'), rb = document.getElementById('cf-run'), rs = document.getElementById('cf-reset');
        if (sb) sb.onclick = stepOne;
        if (rb) rb.onclick = () => isRunning ? stopAuto() : startAuto();
        if (rs) rs.onclick = reset;
        if (ed) ed.addEventListener('input', reset);
        const presetSel = document.getElementById('cf-preset');
        if (presetSel) {
            presetSel.onchange = () => { const code = window.CF_EXAMPLES[presetSel.value]; if (code && ed) { ed.value = code; reset(); } };
        }
        parseProgram(ed ? ed.value : '');
        renderAll();
    }
    return { init };
})();

/* ═══════════════════════════════════════════════════════════════
   ANALYTICS
   ═══════════════════════════════════════════════════════════════ */
const Analytics = (() => {
    const SKILLS = {
        java: { name:'Java Programming', icon:'☕', color:'#f59e0b', chartType:'line', started:'2023-03', currentLevel:7, peakLevel:8, weeklyHours:3.33, trajectory:[['2023-03',1],['2023-06',2],['2023-09',2.5],['2023-12',3],['2024-03',4],['2024-06',3.5],['2024-09',4],['2024-12',4.5],['2025-03',5.5],['2025-06',6],['2025-09',6.5],['2025-11',7.5],['2026-03',7]], drops:[{date:'2024-06',text:'Stuck on OOP for 6 weeks'}], milestones:[{date:'2023-06',title:'First Java utility',body:'Console calculator.',tag:'start',tagLabel:'Start'},{date:'2024-06',title:'OOP wall',body:'6 weeks confused.',tag:'drop',tagLabel:'Drop'},{date:'2024-09',title:'OOP breakthrough',body:'Wrote a program end-to-end.',tag:'win',tagLabel:'Breakthrough'},{date:'2025-11',title:'Peak confidence',body:'Debugging multi-class programs.',tag:'peak',tagLabel:'Peak'}], stats:[{label:'Started',value:'Mar 2023',cls:'info'},{label:'Current',value:'7/10',cls:'good'},{label:'Weakness',value:'Over-complicating',cls:'warn'},{label:'Next',value:'Larger apps with architecture',cls:'info'}] },
        troubleshooting: { name:'Troubleshooting', icon:'🔧', color:'#22c55e', chartType:'step', started:'2022-08', currentLevel:8, peakLevel:8.5, weeklyHours:1.5, trajectory:[['2022-08',2],['2022-12',3],['2023-06',4],['2023-12',5],['2024-06',6],['2024-12',6.5],['2025-06',7.5],['2025-12',8],['2026-02',8.5]], drops:[], milestones:[{date:'2022-08',title:'Systematic diagnosis',body:'Stopped trying random fixes.',tag:'start',tagLabel:'Start'},{date:'2024-06',title:'Cause-before-solution',body:'Identify WHY first.',tag:'win',tagLabel:'Milestone'},{date:'2026-02',title:'Peak confidence',body:'Comfortable with unfamiliar systems.',tag:'peak',tagLabel:'Peak'}], stats:[{label:'Started',value:'Aug 2022',cls:'info'},{label:'Current',value:'8/10',cls:'good'},{label:'Method',value:'Reproduce → isolate → fix',cls:'info'},{label:'Weakness',value:'Decides too quickly',cls:'warn'}] },
        logic: { name:'Problem-Solving', icon:'🧩', color:'#a78bfa', chartType:'wave', started:'2021-01', currentLevel:8, peakLevel:8, weeklyHours:1.67, trajectory:[['2021-01',2],['2021-06',3],['2021-12',4],['2022-06',5],['2022-12',5.5],['2023-03',5],['2023-06',5.5],['2023-12',6],['2024-06',7],['2024-12',7.5],['2025-09',8],['2026-03',8]], drops:[{date:'2023-03',text:'Lost patience'}], milestones:[{date:'2021-06',title:'Multi-step logic',body:'Problems requiring multiple moves.',tag:'start',tagLabel:'Start'},{date:'2023-03',title:'Patience dip',body:'Long problems drained motivation.',tag:'drop',tagLabel:'Drop'},{date:'2025-09',title:'Structured reasoning',body:'Multiple approaches.',tag:'peak',tagLabel:'Peak'}], stats:[{label:'Started',value:'Jan 2021',cls:'info'},{label:'Current',value:'8/10',cls:'good'},{label:'Metric',value:'Explains why it works',cls:'info'},{label:'Next',value:'First-principles problems',cls:'info'}] },
        build: { name:'Project Building', icon:'🚀', color:'#ec4899', chartType:'area', started:'2023-06', currentLevel:7, peakLevel:7.5, weeklyHours:2.17, trajectory:[['2023-06',2],['2023-09',3],['2023-12',4],['2024-03',5],['2024-06',5],['2024-09',5],['2024-12',5.5],['2025-03',6],['2025-06',6.5],['2025-12',7],['2026-03',7.5]], drops:[{date:'2024-09',text:'Started more than finished'}], milestones:[{date:'2023-06',title:'First utility',body:'Built from scratch.',tag:'start',tagLabel:'Start'},{date:'2024-09',title:'Feature creep',body:'Kept adding instead of finishing.',tag:'drop',tagLabel:'Drop'},{date:'2025-12',title:'Complete pipeline',body:'idea → design → code → test.',tag:'win',tagLabel:'Breakthrough'},{date:'2026-03',title:'Peak',body:'Focused on finishing.',tag:'peak',tagLabel:'Peak'}], stats:[{label:'Started',value:'Jun 2023',cls:'info'},{label:'Current',value:'7/10',cls:'good'},{label:'Weakness',value:'Feature creep',cls:'warn'},{label:'Next',value:'Polished project + docs',cls:'info'}] },
        chess: { name:'Chess', icon:'♟️', color:'#06b6d4', chartType:'wave', started:'2020-10', currentLevel:8, peakLevel:8, weeklyHours:2, trajectory:[['2020-10',1],['2021-06',3],['2021-12',4],['2022-06',5],['2022-12',6],['2023-06',6.5],['2023-12',7],['2024-07',8],['2024-12',8],['2025-06',7.5],['2025-12',8],['2026-03',8]], drops:[{date:'2025-06',text:'Irregular practice'}], milestones:[{date:'2020-10',title:'First games',body:'Basic rules and tactics.',tag:'start',tagLabel:'Start'},{date:'2021-12',title:'Tactical patterns',body:'Recognized tactics.',tag:'win',tagLabel:'Milestone'},{date:'2024-07',title:'Multi-move thinking',body:'Planning 3-4 moves ahead.',tag:'peak',tagLabel:'Peak'},{date:'2025-06',title:'Irregular practice',body:'Plateaued.',tag:'drop',tagLabel:'Drop'}], stats:[{label:'Started',value:'Oct 2020',cls:'info'},{label:'Current',value:'8/10',cls:'good'},{label:'Style',value:'Dynamic, tactical',cls:'info'},{label:'Weakness',value:'Too aggressive',cls:'warn'}] },
        comm: { name:'Communication', icon:'🎤', color:'#f472b6', chartType:'line', started:'2022-04', currentLevel:6, peakLevel:6.5, weeklyHours:1.25, trajectory:[['2022-04',2],['2022-09',3],['2023-03',4],['2023-09',4.5],['2024-03',5],['2024-06',4],['2024-09',4.5],['2024-12',5],['2025-06',5.5],['2025-12',6],['2026-01',6.5],['2026-03',6]], drops:[{date:'2024-06',text:'Bad presentations'}], milestones:[{date:'2022-04',title:'First solo presentation',body:'Presented alone.',tag:'start',tagLabel:'Start'},{date:'2024-06',title:'Confidence dip',body:'Two presentations went badly.',tag:'drop',tagLabel:'Drop'},{date:'2025-12',title:'Natural speaking',body:'Stopped reading from notes.',tag:'win',tagLabel:'Breakthrough'},{date:'2026-01',title:'Peak',body:'Comfortable without script.',tag:'peak',tagLabel:'Peak'}], stats:[{label:'Started',value:'Apr 2022',cls:'info'},{label:'Current',value:'6/10',cls:'good'},{label:'Weakness',value:'Impromptu speaking',cls:'warn'},{label:'Next',value:'Confident spontaneity',cls:'info'}] },
        experiments: { name:'Experimentation', icon:'🧪', color:'#10b981', chartType:'step', started:'2022-05', currentLevel:8, peakLevel:8, weeklyHours:1.33, trajectory:[['2022-05',2],['2022-12',3],['2023-06',4],['2023-12',5],['2024-06',6],['2024-12',6.5],['2025-06',7],['2025-12',7.5],['2026-04',8]], drops:[], milestones:[{date:'2022-05',title:'Controlled tests',body:'Testing deliberately.',tag:'start',tagLabel:'Start'},{date:'2023-06',title:'One variable',body:'Change one thing at a time.',tag:'win',tagLabel:'Breakthrough'},{date:'2026-04',title:'Peak',body:'Controlled experiments.',tag:'peak',tagLabel:'Peak'}], stats:[{label:'Started',value:'May 2022',cls:'info'},{label:'Current',value:'8/10',cls:'good'},{label:'Method',value:'Question → test → observe',cls:'info'},{label:'Next',value:'Document systematically',cls:'info'}] },
        learning: { name:'Independent Learning', icon:'📖', color:'#8b5cf6', chartType:'line', started:'2021-09', currentLevel:8, peakLevel:8, weeklyHours:2.25, trajectory:[['2021-09',2],['2022-03',3],['2022-09',4],['2023-03',5],['2023-09',5.5],['2024-03',6],['2024-09',6.5],['2025-03',7],['2025-09',7.5],['2026-05',8]], drops:[], milestones:[{date:'2021-09',title:'Solo learning',body:'Learned without classroom.',tag:'start',tagLabel:'Start'},{date:'2023-03',title:'Personal learning plans',body:'Structured plans.',tag:'win',tagLabel:'Milestone'},{date:'2026-05',title:'Peak',body:'Beginner → practical competence.',tag:'peak',tagLabel:'Peak'}], stats:[{label:'Started',value:'Sep 2021',cls:'info'},{label:'Current',value:'8/10',cls:'good'},{label:'Weakness',value:'Jumps subjects',cls:'warn'},{label:'Next',value:'Long-term consistency',cls:'info'}] }
    };
    const SUPPORTING = [
        { name: 'Python', icon: '🐍', color: '#3776ab', started: 'Feb 2024', level: 4, hours: 25 },
        { name: 'HTML', icon: '🌐', color: '#e34c26', started: 'Jun 2023', level: 5, hours: 20 },
        { name: 'Scratch', icon: '🐱', color: '#f59e0b', started: 'Aug 2021', level: 6, hours: 10 },
        { name: 'Excel', icon: '📊', color: '#22c55e', started: 'Jan 2024', level: 5, hours: 20 },
        { name: 'Video Editing', icon: '🎬', color: '#a78bfa', started: 'Sep 2023', level: 5, hours: 15 },
        { name: 'Fast Typing', icon: '⌨️', color: '#06b6d4', started: 'Apr 2022', level: 7, hours: 15 }
    ];
    let activeTab = 'overview';

    function init() { renderHero(); renderKPIs(); renderTabs(); renderPanel(); }
    function renderHero() {
        const el = document.getElementById('dash-hero'); if (!el) return;
        el.innerHTML = `<div class="dash-hero-icon">🚀</div><div class="dash-hero-text"><div class="dash-hero-label">Currently Building</div><div class="dash-hero-title">Java GUI + Long-term software project</div><div class="dash-hero-sub">6-year journey · 8 core skills · ~17 hrs/week</div></div><div class="dash-hero-stat"><div class="dash-hero-stat-val">7.5<span style="font-size:0.9rem;color:rgba(255,255,255,0.5)">/10</span></div><div class="dash-hero-stat-lbl">Overall Level</div></div>`;
    }
    function renderKPIs() {
        const el = document.getElementById('dash-kpis'); if (!el) return;
        const keys = Object.keys(SKILLS);
        const total = keys.reduce((s, k) => s + SKILLS[k].weeklyHours, 0);
        const cumulative = Math.round(total * 52 * 5);
        const kpis = [
            { label: 'Weekly', value: total.toFixed(1), unit: 'h', delta: '+12%', cls: 'up' },
            { label: 'Total Hours', value: cumulative.toLocaleString(), unit: 'h', delta: 'since 2021', cls: 'flat' },
            { label: 'Skills', value: keys.length + SUPPORTING.length, unit: '', delta: '8+6', cls: 'flat' },
            { label: 'Streak', value: '30', unit: 'days', delta: 'current', cls: 'up' },
            { label: 'Top Focus', value: 'Java', unit: '', delta: '3.3 h/wk', cls: 'up' }
        ];
        el.innerHTML = kpis.map(k => `<div class="dash-kpi"><div class="dash-kpi-label">${k.label}</div><div class="dash-kpi-val">${k.value}<span class="dash-kpi-unit">${k.unit}</span></div><div class="dash-kpi-delta ${k.cls}">${k.delta}</div></div>`).join('');
    }
    function renderTabs() {
        const el = document.getElementById('dash-tabs'); if (!el) return;
        const tabs = [{ id: 'overview', label: 'Overview', icon: '🎯', color: '#3776ab' }, ...Object.entries(SKILLS).map(([k, s]) => ({ id: k, label: s.name.split(' ')[0], icon: s.icon, color: s.color })), { id: 'support', label: 'Supporting', icon: '🧰', color: '#94a3b8' }];
        el.innerHTML = tabs.map(t => `<div class="dash-tab ${t.id === activeTab ? 'active' : ''}" data-tab="${t.id}"><span class="tab-dot" style="background:${t.color}"></span>${t.icon} ${t.label}</div>`).join('');
        el.querySelectorAll('.dash-tab').forEach(tab => { tab.onclick = () => { activeTab = tab.dataset.tab; renderTabs(); renderPanel(); }; });
    }
    function renderPanel() {
        const el = document.getElementById('dash-panel'); if (!el) return;
        if (activeTab === 'overview') return renderOverview(el);
        if (activeTab === 'support') return renderSupport(el);
        const s = SKILLS[activeTab]; if (s) renderSkill(el, activeTab, s);
    }
    function renderOverview(el) {
        const sorted = Object.entries(SKILLS).map(([k, s]) => ({ key: k, ...s })).sort((a, b) => b.currentLevel - a.currentLevel);
        const W = 720, PAD_L = 170, PAD_R = 60, PAD_T = 20, PAD_B = 20, rowH = 34, H = PAD_T + PAD_B + sorted.length * rowH;
        const barMax = W - PAD_L - PAD_R;
        let svg = '';
        sorted.forEach((s, i) => {
            const y = PAD_T + i * rowH;
            const barW = (s.currentLevel / 10) * barMax;
            const peakW = (s.peakLevel / 10) * barMax;
            svg += `<text x="0" y="${y + rowH / 2 + 4}" font-family="var(--font-main)" font-size="12" font-weight="600" fill="var(--text-main)">${s.icon} ${s.name}</text>`;
            svg += `<rect x="${PAD_L}" y="${y + 8}" width="${peakW}" height="${rowH - 16}" rx="4" fill="${s.color}" opacity="0.15"/>`;
            svg += `<rect x="${PAD_L}" y="${y + 8}" width="${barW}" height="${rowH - 16}" rx="4" fill="${s.color}"/>`;
            svg += `<text x="${PAD_L + barW + 8}" y="${y + rowH / 2 + 4}" font-family="var(--font-code)" font-size="12" font-weight="700" fill="${s.color}">${s.currentLevel}/10</text>`;
        });
        el.innerHTML = `<div class="dash-panel"><div class="dash-panel-head"><div><div class="dash-panel-title">Skill Balance</div><div class="dash-panel-sub">Current level per skill · faded bar shows peak</div></div><span class="dash-panel-badge">LEVEL / 10</span></div><div class="dash-chart-wrap" style="height:${H}px"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg></div><div class="dash-stats"><div class="dash-stat good"><div class="dash-stat-label">Strongest</div><div class="dash-stat-val">🔧 Troubleshooting · 8.5</div></div><div class="dash-stat warn"><div class="dash-stat-label">Needs Focus</div><div class="dash-stat-val">🎤 Communication · 6</div></div><div class="dash-stat info"><div class="dash-stat-label">Most Hours</div><div class="dash-stat-val">☕ Java · 3.3 h/week</div></div></div></div>`;
    }
    function renderSkill(el, key, skill) {
        const chartHTML = renderChart(skill);
        el.innerHTML = `<div class="dash-panel"><div class="dash-panel-head"><div><div class="dash-panel-title">${skill.icon} ${skill.name}</div><div class="dash-panel-sub">${skill.started} → present · ${skill.weeklyHours.toFixed(1)} h/week</div></div><span class="dash-panel-badge">${skill.currentLevel}/10 CURRENT</span></div><div class="dash-chart-wrap">${chartHTML}</div><div class="dash-stats">${skill.stats.map(s => `<div class="dash-stat ${s.cls}"><div class="dash-stat-label">${s.label}</div><div class="dash-stat-val">${s.value}</div></div>`).join('')}</div></div>`;
        el.querySelectorAll('.dash-marker').forEach(m => { m.onclick = () => { const i = parseInt(m.dataset.ms); if (skill.milestones[i]) showMilestoneModal(skill.milestones[i]); }; });
    }
    function renderChart(skill) {
        const traj = skill.trajectory, W = 720, H = 240;
        const PAD = { l: 40, r: 20, t: 20, b: 32 };
        const innerW = W - PAD.l - PAD.r, innerH = H - PAD.t - PAD.b;
        const xStep = traj.length > 1 ? innerW / (traj.length - 1) : innerW;
        const xPos = i => PAD.l + i * xStep;
        const yPos = v => PAD.t + innerH - (v / 10) * innerH;
        let svg = '';
        for (let i = 0; i <= 5; i++) { const y = PAD.t + (innerH / 5) * i; svg += `<line class="dash-grid" x1="${PAD.l}" y1="${y}" x2="${W - PAD.r}" y2="${y}"/>`; svg += `<text class="dash-axis-text" x="${PAD.l - 8}" y="${y + 3}" text-anchor="end">${10 - i * 2}</text>`; }
        const every = Math.max(1, Math.ceil(traj.length / 6));
        traj.forEach(([d], i) => { if (i % every !== 0 && i !== traj.length - 1) return; svg += `<text class="dash-axis-text" x="${xPos(i)}" y="${H - 10}" text-anchor="middle">${d}</text>`; });
        if (skill.chartType === 'step') { let p = `M ${xPos(0)} ${yPos(traj[0][1])}`; traj.forEach(([, v], i) => { if (i === 0) return; const py = yPos(traj[i - 1][1]); p += ` L ${xPos(i)} ${py} L ${xPos(i)} ${yPos(v)}`; }); svg += `<path class="dash-traj" d="${p}" stroke="${skill.color}"/>`; }
        else if (skill.chartType === 'wave') {
            const pts = traj.map(([, v], i) => [xPos(i), yPos(v)]);
            let p = `M ${pts[0][0]} ${pts[0][1]}`;
            for (let i = 0; i < pts.length - 1; i++) { const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2; p += ` C ${p1[0] + (p2[0] - p0[0]) / 6} ${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6} ${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]} ${p2[1]}`; }
            svg += `<path class="dash-traj" d="${p}" stroke="${skill.color}"/>`;
        }
        else if (skill.chartType === 'area') {
            let a = `M ${xPos(0)} ${yPos(0)}`;
            traj.forEach(([, v], i) => { a += ` L ${xPos(i)} ${yPos(v)}`; });
            a += ` L ${xPos(traj.length - 1)} ${yPos(0)} Z`;
            svg += `<path class="dash-traj-fill" d="${a}" fill="${skill.color}"/>`;
            let p = '';
            traj.forEach(([, v], i) => { p += i === 0 ? `M ${xPos(i)} ${yPos(v)}` : ` L ${xPos(i)} ${yPos(v)}`; });
            svg += `<path class="dash-traj" d="${p}" stroke="${skill.color}"/>`;
        }
        else { let p = ''; traj.forEach(([, v], i) => { p += i === 0 ? `M ${xPos(i)} ${yPos(v)}` : ` L ${xPos(i)} ${yPos(v)}`; }); svg += `<path class="dash-traj" d="${p}" stroke="${skill.color}"/>`; }
        traj.forEach(([, v], i) => { svg += `<circle cx="${xPos(i)}" cy="${yPos(v)}" r="3" fill="${skill.color}" stroke="var(--window-bg)" stroke-width="2"/>`; });
        skill.drops.forEach(d => { const idx = traj.findIndex(t => t[0] === d.date); if (idx < 0) return; svg += `<circle cx="${xPos(idx)}" cy="${yPos(traj[idx][1])}" r="5" fill="#f87171" stroke="var(--window-bg)" stroke-width="2"/>`; });
        skill.milestones.forEach((m, i) => {
            let idx = traj.findIndex(t => t[0] === m.date);
            if (idx < 0) { let bd = Infinity, best = 0; traj.forEach(([d], ti) => { const dist = Math.abs(new Date(d) - new Date(m.date)); if (dist < bd) { bd = dist; best = ti; } }); idx = best; }
            const x = xPos(idx), y = yPos(traj[idx][1]);
            const colors = { peak: '#4ade80', drop: '#f87171', start: '#7dd3fc', win: '#fbbf24' };
            const c = colors[m.tag] || '#fff';
            svg += `<g class="dash-marker" data-ms="${i}" style="cursor:pointer"><circle cx="${x}" cy="${y}" r="6" fill="${c}" stroke="var(--window-bg)" stroke-width="2"/></g>`;
        });
        return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">${svg}</svg>`;
    }
    function showMilestoneModal(m) {
        let back = document.getElementById('dash-modal-back');
        if (!back) { back = document.createElement('div'); back.id = 'dash-modal-back'; back.className = 'dash-modal-back'; document.body.appendChild(back); back.addEventListener('click', e => { if (e.target === back) back.classList.remove('open'); }); }
        back.innerHTML = `<div class="dash-modal"><button class="dash-modal-close" onclick="document.getElementById('dash-modal-back').classList.remove('open')">✕</button><div class="dash-modal-date">${m.date}</div><div class="dash-modal-title">${m.title}</div><div class="dash-modal-body">${m.body}</div><span class="dash-modal-tag ${m.tag}">${m.tagLabel}</span></div>`;
        back.classList.add('open');
    }
    function renderSupport(el) {
        el.innerHTML = `<div class="dash-panel"><div class="dash-panel-head"><div><div class="dash-panel-title">🧰 Supporting Skills</div><div class="dash-panel-sub">Background investments that add depth</div></div><span class="dash-panel-badge">6 TRACKED</span></div><div class="dash-mini-grid">${SUPPORTING.map(s => `<div class="dash-mini"><div class="dash-mini-head"><div class="dash-mini-name">${s.icon} ${s.name}</div><div class="dash-mini-level">${s.level}/10</div></div><div class="dash-mini-bar"><div class="dash-mini-fill" style="width:${s.level * 10}%;background:${s.color}"></div></div><div class="dash-mini-meta">Since ${s.started} · ${s.hours} min/week</div></div>`).join('')}</div></div>`;
    }
    return { init };
})();

/* ═══════════════════════════════════════════════════════════════
   TERMINAL
   ═══════════════════════════════════════════════════════════════ */
const Terminal = (() => {
    let outputEl, inputEl, cmdHistory = [], historyIdx = -1;
    const QUOTES = ['"First, solve the problem. Then, write the code." — John Johnson','"Simplicity is the soul of efficiency." — Austin Freeman','"Talk is cheap. Show me the code." — Linus Torvalds','"Programs must be written for people to read." — Harold Abelson'];
    const BOOT = [{ cls: 'ascii', text: '  ╔══════════════════════════════════╗\n  ║   RISHABH OS · Terminal v1.0     ║\n  ╚══════════════════════════════════╝' }, { cls: 'muted', text: 'Type "help" for a list of commands.' }, { cls: 'muted', text: '' }];

    function appendLines(lines) { lines.forEach(l => { const d = document.createElement('div'); d.className = 'term-line ' + (l.cls || 'info'); d.textContent = l.text || ''; outputEl.appendChild(d); }); outputEl.scrollTop = outputEl.scrollHeight; }
    function appendEcho(cmd) { const d = document.createElement('div'); d.className = 'term-line cmd-echo'; d.textContent = cmd; outputEl.appendChild(d); }

    function processCommand(raw) {
        const line = raw.trim(); if (!line) return [];
        const [cmd, ...args] = line.split(/\s+/);
        const argStr = args.join(' ');
        const c = cmd.toLowerCase();
        if (c === 'help') return [{ cls: 'info', text: 'Available commands:' }, { cls: '', text: '  help / ls / open <app> / close <app>' }, { cls: '', text: '  theme <dark|light> / bankai <name>' }, { cls: '', text: '  wallpaper <name> / quote / date / echo <text>' }, { cls: '', text: '  whoami / neofetch / matrix / clear / exit' }];
        if (c === 'ls') { const apps = APPS.filter(a => a.id !== 'terminal'); return [{ cls: 'info', text: `Apps (${apps.length}):` }, ...apps.map(a => ({ cls: '', text: `  ${a.icon}  ${a.id.padEnd(12)} ${a.name}` }))]; }
        if (c === 'whoami') return [{ cls: 'info', text: '  User: Rishabh Singh' }, { cls: 'info', text: '  Role: Curious Student · Java Debugger' }, { cls: 'info', text: '  Location: Mughalsarai, Varanasi, UP' }];
        if (c === 'neofetch') return [{ cls: 'ascii', text: '        ◆◆◆◆        Rishabh@rishabh-os\n      ◆◆◆◆◆◆◆◆      ─────────────────\n    ◆◆◆◆◆◆◆◆◆◆◆◆    OS:       Rishabh OS 1.0\n   ◆◆◆◆      ◆◆◆◆   Kernel:   curiosity\n   ◆◆◆◆      ◆◆◆◆   Uptime:   ' + Math.floor(Math.random() * 20 + 1) + ' days\n   ◆◆◆◆◆◆◆◆◆◆◆◆◆    Shell:    rishabh-sh\n    ◆◆◆◆◆◆◆◆◆◆◆     CPU:      Curious Cortex (8)\n     ◆◆◆◆◆◆◆◆◆      Memory:   128MB / 8GB' }];
        if (c === 'quote') return [{ cls: 'info', text: QUOTES[Math.floor(Math.random() * QUOTES.length)] }];
        if (c === 'date') return [{ cls: 'info', text: new Date().toString() }];
        if (c === 'echo') return [{ cls: 'info', text: argStr }];
        if (c === 'clear') { outputEl.innerHTML = ''; return null; }
        if (c === 'exit') { setTimeout(() => closeApp('terminal'), 300); return [{ cls: 'muted', text: 'Goodbye.' }]; }
        if (c === 'open') { const app = APPS.find(a => a.id === argStr.toLowerCase()); if (!app) return [{ cls: 'error', text: `open: unknown "${argStr}"` }]; setTimeout(() => app.id === 'settings' ? document.getElementById('settings-modal').classList.add('open') : openApp(app.id), 200); return [{ cls: 'success', text: `✓ Opening ${app.name}...` }]; }
        if (c === 'close') { const id = argStr.toLowerCase(); if (!state.openWindows.includes(id)) return [{ cls: 'error', text: `close: "${id}" not open` }]; setTimeout(() => closeApp(id), 200); return [{ cls: 'success', text: `✓ Closing ${id}...` }]; }
        if (c === 'theme') { const m = argStr.toLowerCase(); if (m !== 'dark' && m !== 'light') return [{ cls: 'error', text: 'theme: use "theme dark" or "theme light"' }]; document.body.dataset.theme = m; localStorage.setItem('theme', m); return [{ cls: 'success', text: `✓ Theme → ${m}` }]; }
        if (c === 'bankai') { const id = argStr.toLowerCase(); if (!id) return [{ cls: 'info', text: 'bankai: available → ' + Object.keys(BANKAI).join(', ') }]; if (!BANKAI[id]) return [{ cls: 'error', text: `bankai: unknown "${id}"` }]; setTimeout(() => playBankaiSequence(id), 200); return [{ cls: 'success', text: `⚔️ Releasing ${BANKAI[id].name}...` }]; }
        if (c === 'wallpaper') { const id = argStr.toLowerCase(); if (!id) return [{ cls: 'info', text: 'wallpaper: use "wallpaper <name>"' }]; changeWallpaper(id); return [{ cls: 'success', text: `✓ Wallpaper → ${id}` }]; }
        if (c === 'matrix') { setTimeout(runMatrix, 100); return [{ cls: 'success', text: 'Wake up, Neo...' }]; }
        return [{ cls: 'error', text: `command not found: ${cmd}. Type "help".` }];
    }

    function runMatrix() {
        const el = document.querySelector('.term'); if (!el) return;
        const ov = document.createElement('div');
        ov.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,0.9);z-index:100;pointer-events:none;overflow:hidden;';
        el.appendChild(ov);
        const cols = Array.from({ length: 30 }, () => ({ x: Math.random() * 100, y: -20, s: 0.5 + Math.random() * 1.5, c: 'アイウエオカキクケコサシスセソタチツテト0123456789' }));
        let frame = 0;
        const iv = setInterval(() => {
            ov.innerHTML = cols.map(c => `<div style="position:absolute;left:${c.x}%;top:${c.y}%;color:${Math.random() < 0.05 ? '#fff' : '#4ade80'};text-shadow:0 0 6px currentColor;">${c.c[Math.floor(Math.random() * c.c.length)]}</div>`).join('');
            cols.forEach(c => { c.y += c.s; if (c.y > 100) { c.y = -20; c.x = Math.random() * 100; } });
            frame++;
            if (frame > 60) { clearInterval(iv); ov.remove(); }
        }, 50);
    }

    function submit() {
        const raw = inputEl.value; if (!raw.trim()) return;
        appendEcho(raw); cmdHistory.unshift(raw); cmdHistory = cmdHistory.slice(0, 50); historyIdx = -1;
        const lines = processCommand(raw); if (lines) appendLines(lines);
        inputEl.value = '';
    }

    function init() {
        outputEl = document.getElementById('term-output'); inputEl = document.getElementById('term-input');
        if (!outputEl || !inputEl) return;
        outputEl.innerHTML = ''; cmdHistory = []; historyIdx = -1;
        BOOT.forEach(m => { const d = document.createElement('div'); d.className = 'term-line ' + m.cls; d.textContent = m.text; outputEl.appendChild(d); });
        inputEl.addEventListener('keydown', e => {
            if (e.key === 'Enter') { e.preventDefault(); submit(); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); if (cmdHistory.length) { historyIdx = Math.min(historyIdx + 1, cmdHistory.length - 1); inputEl.value = cmdHistory[historyIdx]; } }
            else if (e.key === 'ArrowDown') { e.preventDefault(); historyIdx = Math.max(historyIdx - 1, -1); inputEl.value = historyIdx === -1 ? '' : cmdHistory[historyIdx]; }
        });
        setTimeout(() => inputEl.focus(), 200);
    }
    return { init };
})();

/* ═══════════════════════════════════════════════════════════════
   SNAKE
   ═══════════════════════════════════════════════════════════════ */
const SnakeGame = (() => {
    const GRID = 20, CELL = 20;
    const START_SPEED = 150, MIN_SPEED = 65, SPEED_STEP = 5, APPLES_PER_SPEEDUP = 3;
    let canvas, ctx, snake, dir, nextDir, food, score, best, speed, applesEaten, lastTick = 0, rafId = null, alive = false, keyHandler = null;

    function init() {
        canvas = document.getElementById('snake-canvas'); if (!canvas) return;
        ctx = canvas.getContext('2d');
        canvas.width = GRID * CELL; canvas.height = GRID * CELL;
        best = parseInt(localStorage.getItem('rishabh-os:snake-best') || '0', 10);
        updateHUD();
        document.getElementById('snake-start').onclick = start;
        document.getElementById('snake-restart').onclick = start;
        if (keyHandler) document.removeEventListener('keydown', keyHandler);
        keyHandler = e => {
            const win = document.getElementById('win-snake'); if (!win) return;
            const k = e.key.toLowerCase();
            if (['arrowup', 'w'].includes(k) && dir !== 'down') nextDir = 'up';
            else if (['arrowdown', 's'].includes(k) && dir !== 'up') nextDir = 'down';
            else if (['arrowleft', 'a'].includes(k) && dir !== 'right') nextDir = 'left';
            else if (['arrowright', 'd'].includes(k) && dir !== 'left') nextDir = 'right';
            else return;
            e.preventDefault();
        };
        document.addEventListener('keydown', keyHandler);
    }
    function start() {
        snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
        dir = 'right'; nextDir = 'right'; score = 0; applesEaten = 0; speed = START_SPEED;
        placeFood(); alive = true; updateHUD();
        document.getElementById('snake-overlay').classList.add('hidden');
        lastTick = performance.now();
        if (rafId) cancelAnimationFrame(rafId);
        loop();
    }
    function placeFood() {
        let attempts = 0;
        while (attempts < 100) { const f = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) }; if (!snake.some(s => s.x === f.x && s.y === f.y)) { food = f; return; } attempts++; }
        food = { x: 0, y: 0 };
    }
    function loop(now) {
        if (!alive) return;
        now = now || performance.now();
        if (now - lastTick >= speed) { lastTick = now; tick(); if (!alive) return; }
        draw();
        rafId = requestAnimationFrame(loop);
    }
    function tick() {
        dir = nextDir;
        const h = { x: snake[0].x, y: snake[0].y };
        if (dir === 'up') h.y--; else if (dir === 'down') h.y++; else if (dir === 'left') h.x--; else if (dir === 'right') h.x++;
        if (h.x < 0 || h.x >= GRID || h.y < 0 || h.y >= GRID) return die();
        if (snake.some(s => s.x === h.x && s.y === h.y)) return die();
        snake.unshift(h);
        if (h.x === food.x && h.y === food.y) {
            score += 10; applesEaten++;
            if (score > best) { best = score; localStorage.setItem('rishabh-os:snake-best', best); }
            updateHUD(); placeFood();
            if (applesEaten % APPLES_PER_SPEEDUP === 0 && speed > MIN_SPEED) speed = Math.max(MIN_SPEED, speed - SPEED_STEP);
            playBeep(660, 0.06, 'square');
        } else snake.pop();
    }
    function die() {
        alive = false;
        if (rafId) cancelAnimationFrame(rafId);
        playBeep(180, 0.3, 'square');
        const ov = document.getElementById('snake-overlay');
        if (ov) { ov.classList.remove('hidden'); ov.querySelector('h3').textContent = 'Game Over'; ov.querySelector('p').innerHTML = `You scored <strong style="color:#00f0ff;">${score}</strong> points.`; document.getElementById('snake-start').textContent = 'Play Again'; }
    }
    function draw() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pulse = 0.85 + Math.sin(Date.now() / 200) * 0.15;
        ctx.save(); ctx.shadowBlur = 18; ctx.shadowColor = '#ff3b6b'; ctx.fillStyle = '#ff3b6b';
        ctx.beginPath(); ctx.arc(food.x * CELL + CELL / 2, food.y * CELL + CELL / 2, (CELL / 2 - 2) * pulse, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        for (let i = 0; i < snake.length; i++) {
            const s = snake[i]; const x = s.x * CELL, y = s.y * CELL;
            const isHead = i === 0, t = i / Math.max(snake.length, 1);
            const hue = isHead ? 190 : 190 + t * 80;
            ctx.fillStyle = `hsl(${hue}, 100%, ${isHead ? 70 : 55 - t * 20}%)`;
            const pad = isHead ? 1 : 2, r = isHead ? 4 : 3;
            roundRect(ctx, x + pad, y + pad, CELL - pad * 2, CELL - pad * 2, r);
            ctx.fill();
            if (isHead) {
                ctx.fillStyle = '#050210'; const es = 3; let e1, e2;
                if (dir === 'right') { e1 = [x + CELL - 6, y + 5]; e2 = [x + CELL - 6, y + CELL - 8]; }
                else if (dir === 'left') { e1 = [x + 6, y + 5]; e2 = [x + 6, y + CELL - 8]; }
                else if (dir === 'up') { e1 = [x + 5, y + 6]; e2 = [x + CELL - 8, y + 6]; }
                else { e1 = [x + 5, y + CELL - 6]; e2 = [x + CELL - 8, y + CELL - 6]; }
                ctx.beginPath(); ctx.arc(e1[0], e1[1], es, 0, Math.PI * 2); ctx.fill();
                ctx.beginPath(); ctx.arc(e2[0], e2[1], es, 0, Math.PI * 2); ctx.fill();
            }
        }
        ctx.save(); ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'; ctx.font = '11px "Fira Code", monospace';
        const speedMult = Math.max(1, Math.round((START_SPEED / Math.max(speed, 1)) * 10) / 10);
        ctx.fillText(`SPEED: ${speedMult}×`, 10, 20); ctx.restore();
    }
    function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
    function updateHUD() { const s = document.getElementById('snake-score'), b = document.getElementById('snake-best'); if (s) s.textContent = score || 0; if (b) b.textContent = best || 0; }
    return { init };
})();

/* ═══════════════════════════════════════════════════════════════
   MUSIC PLAYER — 15 tracks
   ═══════════════════════════════════════════════════════════════ */
const MusicPlayer = (() => {
    const TRACKS = [
        { name: 'Agudo Mágico 3', artist: 'Funk BR', album: 'TikTok Hits', dur: 180, emoji: '🌶️', color: ['#dc2626', '#7f1d1d'], localUrl: 'music/agudo-magico-3.mp3' },
        { name: 'Ai Đưa Em Về', artist: 'Vietnamese Pop', album: 'Chill Vibes', dur: 240, emoji: '🌊', color: ['#0ea5e9', '#082f49'], localUrl: 'music/ai-dua-em-ve.mp3' },
        { name: 'I Wanna Be Yours', artist: 'Arctic Monkeys', album: 'AM', dur: 184, emoji: '🖤', color: ['#1e293b', '#000'], localUrl: 'music/arctic-monkeys-i-wanna-be-yours.mp3' },
        { name: 'Blue', artist: 'Various', album: 'Mood', dur: 210, emoji: '💙', color: ['#3b82f6', '#1e40af'], localUrl: 'music/blue.mp3' },
        { name: 'Catch Catch', artist: 'K-Pop', album: 'Viral Hits', dur: 195, emoji: '🎯', color: ['#ec4899', '#a855f7'], localUrl: 'music/catch-catch.mp3' },
        { name: 'B.O.T.A. (Baddest Of Them All)', artist: 'Eliza Rose', album: 'B.O.T.A.', dur: 218, emoji: '🔥', color: ['#f59e0b', '#dc2626'], localUrl: 'music/eliza-rose-bota.mp3' },
        { name: 'Fendi 2', artist: 'Various', album: 'Trending', dur: 200, emoji: '👑', color: ['#a855f7', '#6b21a8'], localUrl: 'music/fendi-2.mp3' },
        { name: 'GATA ONLY', artist: 'FloyyMenor ft. Cris MJ', album: 'GATA ONLY', dur: 213, emoji: '🐱', color: ['#22c55e', '#065f46'], localUrl: 'music/floyymenor-gata-only.mp3' },
        { name: 'Love Nwantiti (North African Remix)', artist: 'CKay', album: 'Nwantiti', dur: 188, emoji: '💫', color: ['#06b6d4', '#0e7490'], localUrl: 'music/love-nwantiti-north-african-remix.mp3' },
        { name: 'If I Am With You', artist: 'JJK Season 2 OST', album: 'Jujutsu Kaisen', dur: 235, emoji: '👁️', color: ['#dc2626', '#1c1917'], localUrl: 'music/if-i-am-with-you-jjk.mp3' },
        { name: 'Love Story', artist: 'Various', album: 'Romance', dur: 224, emoji: '❤️', color: ['#f43f5e', '#7f1d1d'], localUrl: 'music/love-story.mp3' },
        { name: 'MALA', artist: 'Various', album: 'Viral', dur: 205, emoji: '😈', color: ['#7c3aed', '#312e81'], localUrl: 'music/mala.mp3' },
        { name: 'Nyah! Arigato', artist: "Leat'eq", album: 'TikTok Hits', dur: 172, emoji: '😼', color: ['#fbbf24', '#d97706'], localUrl: 'music/nyah-arigato.mp3' },
        { name: 'TRIAL & ERROR', artist: 'JJK Soundtrack', album: 'Jujutsu Kaisen', dur: 240, emoji: '⚡', color: ['#06b6d4', '#1e3a8a'], localUrl: 'music/trial-and-error.mp3' },
        { name: 'Golden Brown', artist: 'The Stranglers', album: 'La Folie', dur: 205, emoji: '🌾', color: ['#d97706', '#78350f'], localUrl: 'music/golden-brown.mp3' }
    ];
    const PLAYLISTS = [
        { name: 'Liked Songs', color: 'linear-gradient(135deg,#7c3aed,#a855f7)', icon: '💜' },
        { name: 'Viral Hits', color: 'linear-gradient(135deg,#1db954,#22c55e)', icon: '🔥' },
        { name: 'Chill Vibes', color: 'linear-gradient(135deg,#1e40af,#3b82f6)', icon: '🌙' },
        { name: 'Anime OST', color: 'linear-gradient(135deg,#dc2626,#f97316)', icon: '⚔️' }
    ];
    let st = { currentIdx: -1, playing: false, position: 0, volume: 0.8, shuffle: false, repeat: 'off', ticker: null };
    let el = {};
    let currentAudio = null;

    const fmt = s => { if (!s || !isFinite(s)) return '0:00'; return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`; };

    function renderSidebar() {
        el.sidebar.innerHTML = `<div class="music-sidebar-title">Library</div><button class="music-nav-item active"><span class="music-nav-icon">🎵</span> All Tracks</button><button class="music-nav-item"><span class="music-nav-icon">💜</span> Favorites</button><div class="music-sidebar-title" style="margin-top:14px;">Playlists</div>${PLAYLISTS.map(p => `<div class="music-playlist"><span class="music-playlist-dot" style="background:${p.color}"></span>${p.icon} ${p.name}</div>`).join('')}`;
    }
    function renderTrackList() {
        el.tracklist.innerHTML = TRACKS.map((t, i) => {
            const act = i === st.currentIdx, play = act && st.playing;
            return `<div class="music-track ${act ? 'active' : ''} ${play ? 'playing' : ''}" data-idx="${i}"><div class="music-track-num">${i + 1}<div class="music-track-eq"><span></span><span></span><span></span><span></span></div></div><div class="music-track-info"><div class="music-track-name">${escHTML(t.name)}</div><div class="music-track-artist">${escHTML(t.artist)}</div></div><div class="music-track-album">${escHTML(t.album)}</div><div class="music-track-dur">${fmt(t.dur)}</div></div>`;
        }).join('');
        el.tracklist.querySelectorAll('.music-track').forEach(row => { row.onclick = () => playTrack(parseInt(row.dataset.idx)); });
    }
    function playTrack(i) {
        if (i < 0 || i >= TRACKS.length) return;
        st.currentIdx = i; st.position = 0; st.playing = true;
        const t = TRACKS[i];
        if (currentAudio) { currentAudio.pause(); currentAudio.onended = null; currentAudio = null; }
        if (t.localUrl) {
            currentAudio = new Audio(t.localUrl);
            currentAudio.volume = st.volume;
            currentAudio.addEventListener('loadedmetadata', () => { if (currentAudio.duration && isFinite(currentAudio.duration)) { t.dur = currentAudio.duration; updateProgress(); } });
            currentAudio.play().catch(e => { console.warn('Audio play failed:', e); showNotification('Could not play: ' + t.name, { icon: '🔇', title: 'Playback Error' }); });
            currentAudio.onended = () => { if (st.repeat === 'one') { st.position = 0; currentAudio.currentTime = 0; currentAudio.play().catch(() => {}); } else next(); };
        }
        updateAll(); startTicker();
    }
    function toggle() {
        if (st.currentIdx === -1) return playTrack(0);
        st.playing = !st.playing;
        if (currentAudio) { if (st.playing) currentAudio.play().catch(() => {}); else currentAudio.pause(); }
        updateAll();
        if (st.playing) startTicker(); else stopTicker();
    }
    function next() {
        if (!TRACKS.length) return;
        if (st.shuffle) { let n; do { n = Math.floor(Math.random() * TRACKS.length); } while (n === st.currentIdx && TRACKS.length > 1); playTrack(n); }
        else playTrack((st.currentIdx + 1) % TRACKS.length);
    }
    function prev() {
        if (!TRACKS.length) return;
        if (st.position > 3 && currentAudio) { st.position = 0; currentAudio.currentTime = 0; updateProgress(); return; }
        if (st.shuffle) { let n; do { n = Math.floor(Math.random() * TRACKS.length); } while (n === st.currentIdx && TRACKS.length > 1); playTrack(n); }
        else playTrack((st.currentIdx - 1 + TRACKS.length) % TRACKS.length);
    }
    function startTicker() {
        stopTicker();
        st.ticker = setInterval(() => {
            if (!st.playing) return;
            const t = TRACKS[st.currentIdx]; if (!t) return;
            if (currentAudio && isFinite(currentAudio.currentTime)) st.position = currentAudio.currentTime;
            else st.position += 0.25;
            updateProgress();
        }, 250);
    }
    function stopTicker() { if (st.ticker) { clearInterval(st.ticker); st.ticker = null; } }
    function updateAll() { updateHeader(); updateTracklist(); updatePlayerBar(); updateProgress(); }
    function updateHeader() {
        const t = TRACKS[st.currentIdx];
        if (!t) { el.headerArt.style.background = 'linear-gradient(135deg,#1f2937,#111827)'; el.headerArt.textContent = '🎵'; el.headerTitle.textContent = 'Your Library'; el.headerMeta.textContent = `${TRACKS.length} tracks`; return; }
        el.headerArt.style.background = `linear-gradient(135deg, ${t.color[0]}, ${t.color[1]})`;
        el.headerArt.textContent = t.emoji;
        el.headerTitle.textContent = t.name;
        el.headerMeta.textContent = `${t.artist} · ${t.album}`;
    }
    function updateTracklist() {
        el.tracklist.querySelectorAll('.music-track').forEach((row, i) => {
            const act = i === st.currentIdx, play = act && st.playing;
            row.classList.toggle('active', act); row.classList.toggle('playing', play);
        });
    }
    function updatePlayerBar() {
        const t = TRACKS[st.currentIdx];
        if (!t) { el.npArt.style.background = 'rgba(255,255,255,0.05)'; el.npArt.textContent = '🎵'; el.npName.textContent = 'No track playing'; el.npArtist.textContent = 'Select a track'; el.playBtn.textContent = '▶'; el.playBig.textContent = '▶'; el.playBtn.classList.remove('playing'); el.playBig.classList.remove('playing'); return; }
        el.npArt.style.background = `linear-gradient(135deg, ${t.color[0]}, ${t.color[1]})`;
        el.npArt.textContent = t.emoji;
        el.npName.textContent = t.name;
        el.npArtist.textContent = t.artist;
        const icon = st.playing ? '⏸' : '▶';
        el.playBtn.textContent = icon; el.playBig.textContent = icon;
        el.playBtn.classList.toggle('playing', st.playing); el.playBig.classList.toggle('playing', st.playing);
    }
    function updateProgress() {
        const t = TRACKS[st.currentIdx];
        if (!t) { el.progressFill.style.width = '0%'; el.timeNow.textContent = '0:00'; el.timeTotal.textContent = '0:00'; return; }
        el.progressFill.style.width = Math.min(100, (st.position / t.dur) * 100) + '%';
        el.timeNow.textContent = fmt(st.position);
        el.timeTotal.textContent = fmt(t.dur);
    }
    function wireSeek() {
        el.progressBar.addEventListener('click', e => {
            const t = TRACKS[st.currentIdx]; if (!t) return;
            const r = el.progressBar.getBoundingClientRect();
            st.position = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * t.dur;
            if (currentAudio) currentAudio.currentTime = st.position;
            updateProgress();
        });
        el.volumeBar.addEventListener('click', e => {
            const r = el.volumeBar.getBoundingClientRect();
            st.volume = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
            el.volumeFill.style.width = (st.volume * 100) + '%';
            if (currentAudio) currentAudio.volume = st.volume;
        });
    }
    function init() {
        const c = document.querySelector('#win-music .window-content'); if (!c) return;
        el.sidebar = c.querySelector('.music-sidebar');
        el.tracklist = c.querySelector('.music-tracklist');
        el.headerArt = c.querySelector('.music-header-art');
        el.headerTitle = c.querySelector('.music-header-title');
        el.headerMeta = c.querySelector('.music-header-meta');
        el.playBig = c.querySelector('.music-play-big');
        el.npArt = c.querySelector('.music-np-art');
        el.npName = c.querySelector('.music-np-name');
        el.npArtist = c.querySelector('.music-np-artist');
        el.playBtn = c.querySelector('.music-ctrl-play');
        el.prevBtn = c.querySelector('.music-ctrl-prev');
        el.nextBtn = c.querySelector('.music-ctrl-next');
        el.shuffleBtn = c.querySelector('.music-ctrl-shuffle');
        el.repeatBtn = c.querySelector('.music-ctrl-repeat');
        el.progressBar = c.querySelector('.music-progress');
        el.progressFill = c.querySelector('.music-progress-fill');
        el.timeNow = c.querySelector('.music-time-now');
        el.timeTotal = c.querySelector('.music-time-total');
        el.volumeBar = c.querySelector('.music-volume');
        el.volumeFill = c.querySelector('.music-volume-fill');
        el.volIcon = c.querySelector('.music-vol-icon');
        el.playBig.onclick = toggle; el.playBtn.onclick = toggle;
        el.prevBtn.onclick = prev; el.nextBtn.onclick = next;
        el.shuffleBtn.onclick = () => { st.shuffle = !st.shuffle; el.shuffleBtn.classList.toggle('active', st.shuffle); showNotification(st.shuffle ? 'Shuffle ON' : 'Shuffle OFF', { icon: '🔀', title: 'Shuffle' }); };
        el.repeatBtn.onclick = () => { const ms = ['off','all','one']; st.repeat = ms[(ms.indexOf(st.repeat) + 1) % 3]; el.repeatBtn.textContent = st.repeat === 'one' ? '🔂' : '🔁'; el.repeatBtn.classList.toggle('active', st.repeat !== 'off'); };
        el.volIcon.onclick = () => { st.volume = st.volume > 0 ? 0 : 0.8; el.volumeFill.style.width = (st.volume * 100) + '%'; el.volIcon.textContent = st.volume === 0 ? '🔇' : '🔊'; if (currentAudio) currentAudio.volume = st.volume; };
        el.volumeFill.style.width = (st.volume * 100) + '%';

        const addBtn = document.getElementById('music-add');
        const fileInput = document.getElementById('music-file-input');
        if (addBtn && fileInput) {
            addBtn.onclick = () => fileInput.click();
            fileInput.onchange = (e) => {
                const files = Array.from(e.target.files || []);
                files.forEach(file => {
                    const url = URL.createObjectURL(file);
                    TRACKS.push({ name: file.name.replace(/\.[^/.]+$/, ''), artist: 'Your Library', album: 'Local Files', dur: 240, emoji: '🎧', color: ['#1db954', '#0d7a33'], localUrl: url });
                });
                if (files.length) { showNotification(`Added ${files.length} track${files.length > 1 ? 's' : ''}`, { icon: '🎵', title: 'Tracks Added' }); renderTrackList(); updateAll(); }
            };
        }

        renderSidebar(); renderTrackList(); wireSeek(); updateAll();
    }
    function handleWindowHidden(action) {
        if (action === 'minimize' || action === 'close') {
            if (currentAudio) currentAudio.pause();
            st.playing = false; stopTicker(); updateAll();
        }
    }
    function stopAll() {
        if (currentAudio) { currentAudio.pause(); currentAudio = null; }
        st.playing = false; stopTicker();
    }
    return { init, handleWindowHidden, stopAll };
})();
window.MusicPlayer = MusicPlayer;

/* ═══════════════════════════════════════════════════════════════
   GALLERY
   ═══════════════════════════════════════════════════════════════ */
const Gallery = (() => {
    const PHOTOS = [
        { file: 'varanasi-rain.jpg',   location: 'Varanasi Streets', date: 'December 2025', emoji: '🌧️' },
        { file: 'varanasi-sunset.jpg', location: 'Varanasi Sunset',  date: 'December 2025', emoji: '🌅' },
        { file: 'varanasi-aarti.jpg',  location: 'Ganga Aarti',      date: 'December 2025', emoji: '🪔' },
        { file: 'kashi-art.jpg',       location: 'Kashi Art Wall',   date: 'November 2025', emoji: '🎨' },
        { file: 'khebda-bacha.jpg',    location: 'Khebda Bacha',     date: 'November 2025', emoji: '♟️' },
        { file: 'chess-pieces.jpg',    location: 'Chess Pieces',     date: 'October 2025',  emoji: '♜' },
        { file: 'chess-game.jpg',      location: 'Chess Game',       date: 'October 2025',  emoji: '🏆' },
        { file: 'chess-online.jpg',    location: 'Online Chess',     date: 'September 2025', emoji: '💻' },
        { file: 'python-code.jpg',     location: 'Python Workspace', date: 'August 2025',   emoji: '🐍' },
        { file: 'java-code.jpg',       location: 'Java Development', date: 'July 2025',     emoji: '☕' },
        { file: 'anime-laptop.jpg',    location: 'Late Night Anime', date: 'June 2025',     emoji: '🌙' },
        { file: 'death-note-l.jpg',    location: 'Death Note · L',   date: 'May 2025',      emoji: '🍎' }
    ];
    const BASE_PATH = 'gallery/';
    let currentIdx = 0, zoomLevel = 1;
    let modalEl = null, imageEl = null, counterEl = null, zoomLabelEl = null;
    let keyHandler = null;

    function renderGrid() {
        const grid = document.getElementById('gallery-grid'); if (!grid) return;
        grid.innerHTML = PHOTOS.map((p, i) => `
            <div class="gallery-item" data-idx="${i}">
                <img src="${BASE_PATH}${p.file}" alt="${escHTML(p.location)}" loading="lazy" data-emoji="${p.emoji}">
                <div class="gallery-caption">
                    <div class="gallery-caption-location">${escHTML(p.location)}</div>
                    <div class="gallery-caption-date">${escHTML(p.date)}</div>
                </div>
            </div>`).join('');
        grid.querySelectorAll('.gallery-item img').forEach(img => {
            img.addEventListener('error', function () {
                const emoji = this.dataset.emoji || '🖼️';
                this.style.display = 'none';
                const parent = this.parentElement;
                if (parent && !parent.querySelector('.gallery-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'gallery-fallback';
                    fallback.textContent = emoji;
                    parent.insertBefore(fallback, parent.firstChild);
                }
            });
            if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event('error'));
        });
        grid.querySelectorAll('.gallery-item').forEach(item => { item.onclick = () => open(parseInt(item.dataset.idx)); });
    }

    function open(idx) {
        if (idx < 0 || idx >= PHOTOS.length) return;
        currentIdx = idx; zoomLevel = 1;
        if (!modalEl) {
            modalEl = document.createElement('div');
            modalEl.className = 'gallery-modal';
            modalEl.id = 'gallery-modal';
            modalEl.innerHTML = `
                <div class="gallery-modal-toolbar">
                    <div class="gallery-zoom-label" id="gallery-zoom-label">100%</div>
                    <button class="gallery-tool-btn" id="gallery-zoom-out" title="Zoom Out">−</button>
                    <button class="gallery-tool-btn" id="gallery-zoom-in" title="Zoom In">+</button>
                    <button class="gallery-tool-btn" id="gallery-reset-zoom" title="Reset Zoom">⟲</button>
                    <button class="gallery-tool-btn" id="gallery-download" title="Download">⬇</button>
                    <button class="gallery-tool-btn close-btn" id="gallery-close" title="Close (Esc)">✕</button>
                </div>
                <button class="gallery-nav prev" id="gallery-prev" title="Previous">‹</button>
                <button class="gallery-nav next" id="gallery-next" title="Next">›</button>
                <div class="gallery-modal-image-wrap">
                    <img class="gallery-modal-image" id="gallery-modal-image" src="" alt="">
                </div>
                <div class="gallery-modal-info">
                    <span class="gallery-modal-info-location" id="gallery-info-location"></span>
                    <span class="gallery-modal-info-date" id="gallery-info-date"></span>
                    <span class="gallery-modal-info-counter" id="gallery-info-counter"></span>
                </div>`;
            document.body.appendChild(modalEl);
            imageEl = document.getElementById('gallery-modal-image');
            counterEl = document.getElementById('gallery-info-counter');
            zoomLabelEl = document.getElementById('gallery-zoom-label');
            document.getElementById('gallery-close').onclick = close;
            document.getElementById('gallery-prev').onclick = () => navigate(-1);
            document.getElementById('gallery-next').onclick = () => navigate(1);
            document.getElementById('gallery-zoom-in').onclick = () => zoom(0.25);
            document.getElementById('gallery-zoom-out').onclick = () => zoom(-0.25);
            document.getElementById('gallery-reset-zoom').onclick = () => resetZoom();
            document.getElementById('gallery-download').onclick = download;
            modalEl.addEventListener('click', e => { if (e.target === modalEl) close(); });
            modalEl.addEventListener('wheel', e => { e.preventDefault(); if (e.deltaY < 0) zoom(0.15); else zoom(-0.15); }, { passive: false });
        }
        const p = PHOTOS[currentIdx];
        imageEl.src = BASE_PATH + p.file;
        imageEl.alt = p.location;
        document.getElementById('gallery-info-location').textContent = p.location;
        document.getElementById('gallery-info-date').textContent = p.date;
        counterEl.textContent = `${currentIdx + 1} / ${PHOTOS.length}`;
        resetZoom();
        modalEl.classList.add('open');
        if (!keyHandler) {
            keyHandler = e => {
                if (!modalEl.classList.contains('open')) return;
                if (e.key === 'Escape') close();
                else if (e.key === 'ArrowLeft') navigate(-1);
                else if (e.key === 'ArrowRight') navigate(1);
                else if (e.key === '+' || e.key === '=') zoom(0.2);
                else if (e.key === '-') zoom(-0.2);
                else if (e.key === '0') resetZoom();
            };
            document.addEventListener('keydown', keyHandler);
        }
    }

    function close() { if (modalEl) modalEl.classList.remove('open'); if (imageEl) imageEl.src = ''; }
    function navigate(dir) {
        currentIdx += dir;
        if (currentIdx < 0) currentIdx = PHOTOS.length - 1;
        if (currentIdx >= PHOTOS.length) currentIdx = 0;
        const p = PHOTOS[currentIdx];
        imageEl.style.opacity = '0';
        setTimeout(() => {
            imageEl.src = BASE_PATH + p.file;
            imageEl.alt = p.location;
            document.getElementById('gallery-info-location').textContent = p.location;
            document.getElementById('gallery-info-date').textContent = p.date;
            counterEl.textContent = `${currentIdx + 1} / ${PHOTOS.length}`;
            resetZoom();
            imageEl.style.opacity = '1';
        }, 150);
    }
    function zoom(delta) { zoomLevel = Math.max(0.5, Math.min(4, zoomLevel + delta)); applyZoom(); }
    function resetZoom() { zoomLevel = 1; applyZoom(); }
    function applyZoom() { if (imageEl) imageEl.style.transform = `scale(${zoomLevel})`; if (zoomLabelEl) zoomLabelEl.textContent = Math.round(zoomLevel * 100) + '%'; }
    function download() {
        const p = PHOTOS[currentIdx];
        const link = document.createElement('a');
        link.href = BASE_PATH + p.file; link.download = p.file;
        document.body.appendChild(link); link.click(); document.body.removeChild(link);
        showNotification(`Downloading ${p.location}`, { icon: '⬇️', title: 'Gallery' });
    }
    function init() { renderGrid(); }
    return { init, open, close };
})();
window.Gallery = Gallery;

/* ═══════════════════════════════════════════════════════════════
   COMMAND PALETTE
   ═══════════════════════════════════════════════════════════════ */
const CommandPalette = (() => {
    let overlay, input, results, items = [], activeIdx = 0, isOpen = false;
    const CMDS = [
        ...APPS.filter(a => a.id !== 'settings').map(a => ({ type: 'app', id: a.id, name: a.name, icon: a.icon, hint: 'App' })),
        { type: 'cmd', name: 'Settings', icon: '⚙️', hint: 'App', action: () => document.getElementById('settings-modal').classList.add('open') },
        { type: 'cmd', name: 'Toggle Theme', icon: '🌓', action: () => document.getElementById('theme-toggle')?.click() },
        { type: 'cmd', name: 'Toggle Sound', icon: '🔊', action: () => document.getElementById('sound-toggle')?.click() },
        { type: 'cmd', name: 'Copy Email', icon: '📧', action: () => { navigator.clipboard.writeText('virganox3690@gmail.com'); showNotification('Email copied'); } },
        { type: 'cmd', name: 'Open GitHub', icon: '🐙', action: () => window.open('https://github.com/Rishabh3690', '_blank') },
        { type: 'cmd', name: 'Print / Download PDF', icon: '📄', action: () => window.print() },
        { type: 'cmd', name: 'Reset to Astra Galaxy', icon: '🌌', action: () => resetToAstra() },
        { type: 'cmd', name: 'Close All Windows', icon: '✕', action: () => [...state.openWindows].forEach(id => closeApp(id)) },
        { type: 'cmd', name: 'Lock Screen', icon: '🔒', action: () => LockScreen.lock() },
        { type: 'theme', name: 'Theme: Jujutsu Kaisen', icon: '🔮', action: () => { document.body.classList.add('theme-jjk'); showNotification('JJK Mode'); } },
        { type: 'theme', name: 'Theme: Death Note', icon: '🍎', action: () => activateDeathNote() },
        ...Object.entries(BANKAI).map(([id, b]) => ({ type: 'bankai', id, name: `Bankai: ${b.name}`, icon: '⚔️', jp: b.jp, action: () => playBankaiSequence(id) }))
    ];

    function score(q, t) { if (!q) return 1; const ql = q.toLowerCase(), tl = t.toLowerCase(); if (tl.includes(ql)) return 100 - tl.indexOf(ql); let qi = 0, m = 0; for (let i = 0; i < tl.length && qi < ql.length; i++) if (tl[i] === ql[qi]) { qi++; m++; } return qi === ql.length ? m * 2 : 0; }
    function filter(q) { if (!q.trim()) return CMDS.slice(0, 12); return CMDS.map(c => ({ ...c, _s: Math.max(score(q, c.name), c.jp ? score(q, c.jp) * 0.8 : 0) })).filter(c => c._s > 0).sort((a, b) => b._s - a._s).slice(0, 12); }
    function highlight(text, q) {
        if (!q) return escHTML(text);
        const ql = q.toLowerCase(), tl = text.toLowerCase();
        const i = tl.indexOf(ql);
        if (i >= 0) return escHTML(text.slice(0, i)) + '<mark>' + escHTML(text.slice(i, i + ql.length)) + '</mark>' + escHTML(text.slice(i + ql.length));
        let r = '', qi = 0;
        for (let j = 0; j < text.length; j++) { if (qi < ql.length && text[j].toLowerCase() === ql[qi]) { r += '<mark>' + escHTML(text[j]) + '</mark>'; qi++; } else r += escHTML(text[j]); }
        return r;
    }
    function render(q = '') {
        const list = filter(q); items = list;
        if (list.length === 0) { results.innerHTML = `<div class="cmd-empty">No results for "<strong>${escHTML(q)}</strong>"</div>`; return; }
        const groups = {};
        list.forEach(c => { const k = c.type === 'app' ? 'Apps' : c.type === 'cmd' ? 'Actions' : c.type === 'theme' ? 'Themes' : c.type === 'bankai' ? 'Bankai' : 'Other'; (groups[k] = groups[k] || []).push(c); });
        let html = '', gi = 0;
        Object.entries(groups).forEach(([lbl, g]) => {
            html += `<div class="cmd-group-label">${lbl}</div>`;
            g.forEach(c => { html += `<div class="cmd-item ${gi === activeIdx ? 'active' : ''}" data-idx="${gi}"><span class="cmd-item-icon">${c.icon}</span><span class="cmd-item-name">${highlight(c.name, q)}</span><span class="cmd-item-hint">${c.hint || (c.type === 'bankai' ? '⚔' : '')}</span></div>`; gi++; });
        });
        results.innerHTML = html;
        results.querySelectorAll('.cmd-item').forEach(el => { el.onmouseenter = () => { activeIdx = parseInt(el.dataset.idx); updateActive(); }; el.onclick = () => execute(parseInt(el.dataset.idx)); });
    }
    function updateActive() { results.querySelectorAll('.cmd-item').forEach(el => el.classList.toggle('active', parseInt(el.dataset.idx) === activeIdx)); const a = results.querySelector('.cmd-item.active'); if (a) a.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
    function execute(i) { const c = items[i]; if (!c) return; close(); if (c.type === 'app') { c.id === 'settings' ? document.getElementById('settings-modal').classList.add('open') : openApp(c.id); } else if (c.action) c.action(); }
    function open() { isOpen = true; activeIdx = 0; overlay.classList.add('open'); input.value = ''; input.focus(); render(''); }
    function close() { isOpen = false; overlay.classList.remove('open'); }
    function init() {
        overlay = document.getElementById('cmd-overlay'); input = document.getElementById('cmd-input'); results = document.getElementById('cmd-results');
        if (!overlay) return;
        overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
        input.addEventListener('input', e => { activeIdx = 0; render(e.target.value); });
        input.addEventListener('keydown', e => {
            if (e.key === 'ArrowDown') { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, items.length - 1); updateActive(); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); updateActive(); }
            else if (e.key === 'Enter') { e.preventDefault(); execute(activeIdx); }
            else if (e.key === 'Escape') close();
        });
        document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); isOpen ? close() : open(); } });
    }
    return { init, open, close };
})();

/* ═══════════════════════════════════════════════════════════════
   NOTIFICATIONS
   ═══════════════════════════════════════════════════════════════ */
const NotifCenter = (() => {
    const MAX = 50;
    let panel, back, list, sub, badge, items = [], isOpen = false;
    function load() { try { items = JSON.parse(localStorage.getItem('rishabh-os:notifications') || '[]'); } catch (e) { items = []; } }
    function save() { localStorage.setItem('rishabh-os:notifications', JSON.stringify(items.slice(0, MAX))); }
    function push(icon, title, msg) { items.unshift({ id: Date.now() + Math.random(), icon, title, msg, time: Date.now(), unread: true }); items = items.slice(0, MAX); save(); renderBadge(); if (isOpen) renderList(); }
    function timeAgo(t) { const s = Math.floor((Date.now() - t) / 1000); if (s < 60) return 'just now'; if (s < 3600) return Math.floor(s / 60) + 'm ago'; if (s < 86400) return Math.floor(s / 3600) + 'h ago'; return Math.floor(s / 86400) + 'd ago'; }
    function renderBadge() {
        const u = items.filter(i => i.unread).length;
        if (badge) { if (u > 0) { badge.textContent = u > 99 ? '99+' : u; badge.style.display = 'inline-flex'; } else badge.style.display = 'none'; }
        if (sub) sub.textContent = u === 0 ? 'No unread' : `${u} unread`;
    }
    function renderList() {
        if (!list) return;
        if (items.length === 0) { list.innerHTML = `<div class="notif-empty">No notifications yet.</div>`; return; }
        list.innerHTML = items.map(i => `<div class="notif-item ${i.unread ? 'unread' : ''}"><div class="notif-item-icon">${i.icon}</div><div class="notif-item-content"><div class="notif-item-title">${escHTML(i.title)}</div><div class="notif-item-msg">${escHTML(i.msg)}</div><div class="notif-item-time">${timeAgo(i.time)}</div></div></div>`).join('');
    }
    function openPanel() { isOpen = true; panel.classList.add('open'); back.classList.add('open'); items.forEach(i => i.unread = false); save(); renderBadge(); renderList(); }
    function closePanel() { isOpen = false; panel.classList.remove('open'); back.classList.remove('open'); }
    function toggle() { isOpen ? closePanel() : openPanel(); }
    function clearAll() { items = []; save(); renderBadge(); renderList(); }
    function init() {
        panel = document.getElementById('notif-panel'); back = document.getElementById('notif-back');
        list = document.getElementById('notif-list'); sub = document.getElementById('notif-sub');
        if (!panel) return;
        const clock = document.getElementById('clock');
        if (clock && !document.querySelector('.notif-badge')) { badge = document.createElement('span'); badge.className = 'notif-badge'; badge.style.display = 'none'; clock.parentElement.appendChild(badge); }
        back.onclick = closePanel;
        const clearBtn = document.getElementById('notif-clear');
        if (clearBtn) clearBtn.onclick = clearAll;
        const sysTray = document.querySelector('.sys-tray');
        if (sysTray) sysTray.onclick = (e) => { if (e.target === clock || e.target.closest('#clock')) toggle(); };
        load(); renderBadge(); renderList();
        setTimeout(() => { if (window._markNotifCenterReady) window._markNotifCenterReady(); }, 100);
    }
    return { init, push, toggle };
})();

/* ═══════════════════════════════════════════════════════════════
   LOCK SCREEN
   ═══════════════════════════════════════════════════════════════ */
const LockScreen = (() => {
    let el, timeEl, dateEl, locked = false;
    function update() {
        if (!timeEl) return;
        const n = new Date();
        timeEl.textContent = n.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        dateEl.textContent = n.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    }
    function lock() { locked = true; el.classList.add('open'); update(); }
    function unlock() { locked = false; el.classList.remove('open'); }
    function init() {
        el = document.getElementById('lock-screen'); timeEl = document.getElementById('lock-time'); dateEl = document.getElementById('lock-date');
        if (!el) return;
        update(); setInterval(update, 1000);
        el.addEventListener('click', unlock);
        document.addEventListener('keydown', e => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') { e.preventDefault(); lock(); return; }
            if (locked) { e.preventDefault(); unlock(); }
        });
    }
    return { init, lock, unlock };
})();

/* ═══════════════════════════════════════════════════════════════
   WIDGET PANEL
   ═══════════════════════════════════════════════════════════════ */
const WidgetPanel = (() => {
    const QUOTES = ['Simplicity is the soul of efficiency.', 'First, solve the problem. Then, write the code.', 'The best way to predict the future is to invent it.', 'Any sufficiently advanced technology is indistinguishable from magic.', 'Talk is cheap. Show me the code.', 'Code is like humor. When you have to explain it, it\'s bad.'];
    let panel, back, isOpen = false;
    function toggle() { isOpen ? close() : open(); }
    function open() { isOpen = true; panel.classList.add('open'); back.classList.add('open'); refreshQuote(); }
    function close() { isOpen = false; panel.classList.remove('open'); back.classList.remove('open'); }
    function refreshQuote() { const el = document.getElementById('wp-quote'); if (el) el.textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)]; }
    function updateClock() {
        const t = document.getElementById('wp-clock-time'), d = document.getElementById('wp-clock-date'); if (!t) return;
        const n = new Date();
        t.textContent = n.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        d.textContent = n.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
    }
    function init() {
        panel = document.getElementById('widget-panel'); back = document.getElementById('widget-back'); if (!panel) return;
        document.getElementById('wp-trigger').onclick = toggle;
        document.getElementById('wp-close').onclick = close;
        back.onclick = close;
        document.getElementById('wp-toggle-theme').onclick = () => document.getElementById('theme-toggle')?.click();
        document.getElementById('wp-toggle-sound').onclick = () => document.getElementById('sound-toggle')?.click();
        document.getElementById('wp-toggle-lock').onclick = () => { close(); LockScreen.lock(); };
        document.getElementById('wp-toggle-cmd').onclick = () => { close(); CommandPalette.open(); };
        updateClock(); setInterval(updateClock, 1000);
        setInterval(refreshQuote, 30000);
    }
    return { init, open, close, toggle };
})();

/* ═══════════════════════════════════════════════════════════════
   CONTEXT MENU
   ═══════════════════════════════════════════════════════════════ */
function initContextMenu() {
    document.addEventListener('contextmenu', e => {
        if (e.target.closest('.window') || e.target.closest('.taskbar')) return;
        e.preventDefault();
        const cur = WALLPAPERS.findIndex(w => w.id === state.currentBg);
        const next = WALLPAPERS[(cur + 1) % WALLPAPERS.length];
        changeWallpaper(next.id);
        const pulse = document.createElement('div');
        pulse.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:20px;height:20px;border-radius:50%;border:2px solid rgba(55,118,171,0.8);transform:translate(-50%,-50%);pointer-events:none;z-index:9999;animation:burstAnim 0.5s ease-out forwards;`;
        document.body.appendChild(pulse);
        setTimeout(() => pulse.remove(), 500);
    });
}

/* ═══════════════════════════════════════════════════════════════
   GLOBAL RIPPLE + KEYBOARD
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('click', e => {
    const btn = e.target.closest('.cf-btn, .chess-ctrl-btn, .jjk-btn, .tb-btn, .tb-app, .start-app, .bot-card, .gallery-item');
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - r.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - r.top - size / 2) + 'px';
    if (getComputedStyle(btn).position === 'static') btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
});

document.addEventListener('click', e => {
    if (!e.target.closest('#start-btn') && !e.target.closest('#start-menu')) {
        document.getElementById('start-menu')?.classList.remove('open');
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.getElementById('start-menu')?.classList.remove('open');
});

/* ═══════════════════════════════════════════════════════════════
   BOOT SEQUENCE
   ═══════════════════════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
    document.body.dataset.theme = localStorage.getItem('theme') || 'dark';
    document.body.dataset.bg = localStorage.getItem('background') || 'astra';

    try { CelestialBodies.init(); } catch (e) { console.error('[Boot] CelestialBodies:', e); }
    try { initEffectCanvas(); } catch (e) { console.error('[Boot] EffectCanvas:', e); }
    try { initClock(); } catch (e) { console.error('[Boot] Clock:', e); }
    try { initDock(); } catch (e) { console.error('[Boot] Dock:', e); }
    try { initSettings(); } catch (e) { console.error('[Boot] Settings:', e); }
    try { initCursorSystem(); } catch (e) { console.error('[Boot] Cursor:', e); }
    try { initContextMenu(); } catch (e) { console.error('[Boot] ContextMenu:', e); }

    try { DesktopWidgets.init(); } catch (e) { console.error('[Boot] DesktopWidgets:', e); }
    try { LockScreen.init(); } catch (e) { console.error('[Boot] LockScreen:', e); }
    try { WidgetPanel.init(); } catch (e) { console.error('[Boot] WidgetPanel:', e); }
    try { CommandPalette.init(); } catch (e) { console.error('[Boot] CommandPalette:', e); }
    try { NotifCenter.init(); } catch (e) { console.error('[Boot] NotifCenter:', e); }
    try { if (window.SwordSystem) SwordSystem.init(); } catch (e) { console.error('[Boot] SwordSystem:', e); }

    setTimeout(() => {
        const bootScreen = document.getElementById('boot-screen');
        if (bootScreen) bootScreen.classList.add('hidden');
        playBeep(523, 0.15);
        setTimeout(() => playBeep(784, 0.3), 150);

        try {
            const saved = Persist.loadOpenApps();
            if (Array.isArray(saved)) saved.forEach(id => { if (APPS.find(a => a.id === id)) openApp(id); });
        } catch (e) {}

        try {
            const themes = Persist.loadActiveThemes();
            themes.forEach(t => document.body.classList.add(t));
            const bankaiId = Persist.get('bankai', null);
            if (bankaiId && BANKAI[bankaiId]) {
                state.bankai = bankaiId;
                setEffect(BANKAI[bankaiId].effect);
                setAmbient(BANKAI[bankaiId].ambient);
                setCursor(BANKAI[bankaiId]);
                document.body.classList.add('bankai-active');
                if (window.SwordSystem) SwordSystem.updateSword(bankaiId);
            }
        } catch (e) {}

        setTimeout(() => {
            const bs = document.getElementById('boot-screen');
            if (bs && !bs.classList.contains('hidden')) { console.warn('[Boot] Force hiding boot screen'); bs.classList.add('hidden'); }
        }, 4000);
    }, 2400);
});

/* ═══════════════════════════════════════════════════════════════
   SAFETY NETS
   ═══════════════════════════════════════════════════════════════ */
window.addEventListener('error', e => { console.warn('[Rishabh OS Error]', e.message); e.preventDefault && e.preventDefault(); });
window.addEventListener('unhandledrejection', e => { console.warn('[Rishabh OS Promise Rejection]', e.reason); e.preventDefault && e.preventDefault(); });

window.RishabhOSDebug = function () {
    const modules = {
        CelestialBodies: typeof CelestialBodies, initEffectCanvas: typeof initEffectCanvas,
        SwordSystem: typeof SwordSystem, MusicPlayer: typeof MusicPlayer,
        ChessEngine: typeof ChessEngine, ChessUI: typeof ChessUI, CodeFlow: typeof CodeFlow,
        Terminal: typeof Terminal, SnakeGame: typeof SnakeGame, Analytics: typeof Analytics,
        Gallery: typeof Gallery, NotifCenter: typeof NotifCenter, CommandPalette: typeof CommandPalette,
        DesktopWidgets: typeof DesktopWidgets, LockScreen: typeof LockScreen, WidgetPanel: typeof WidgetPanel
    };
    console.table(modules);
    return modules;
};

setTimeout(() => {
    const d = window.RishabhOSDebug();
    const missing = Object.keys(d).filter(k => d[k] === 'undefined');
    if (missing.length > 0) console.warn('⚠️ Missing modules:', missing);
    else console.log('%c✅ All modules loaded!', 'color:#4ade80;font-weight:bold;');
}, 3000);

console.log('%c🖥️ Rishabh OS loaded — All 10 modules integrated', 'color:#00f0ff;font-weight:bold;font-size:14px;');
console.log('%c  Type RishabhOSDebug() to check module status', 'color:#94a3b8;font-size:11px;');