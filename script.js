/* ═══════════════════════════════════════════════════════════════
   RISHABH OS — Dark Web Script
   ═══════════════════════════════════════════════════════════════ */

console.log(
  "%c🕸️ Dark Web Protocol Initialized",
  "color:#00ff41;font-weight:bold;font-size:14px;text-shadow:0 0 10px #00ff41;",
);

/* ═══ STATE ═══ */
const state = {
  openWindows: [],
  zIndex: 100,
  currentBg: "astra",
  bankai: null,
  dnStage: "idle",
  currentTheme: "default",
};

/* ═══ APPS ═══ */
const APPS = [
  { id: "about", name: "About", icon: "👤", pinned: true },
  { id: "skills", name: "Skills", icon: "📊", pinned: true },
  { id: "experience", name: "Experience", icon: "💼", pinned: true },
  { id: "projects", name: "Projects", icon: "🚀", pinned: true },
  { id: "gallery", name: "Gallery", icon: "🖼️", pinned: true },
  { id: "chess", name: "Chess", icon: "♟️", pinned: true },
  { id: "codeflow", name: "CodeFlow", icon: "💻", pinned: false },
  { id: "analytics", name: "Analytics", icon: "📈", pinned: false },
  { id: "terminal", name: "Terminal", icon: "⌨️", pinned: false },
  { id: "snake", name: "Snake", icon: "🐍", pinned: false },
  { id: "music", name: "Music", icon: "🎵", pinned: false },
  { id: "settings", name: "Settings", icon: "⚙️", pinned: false },
];
const WALLPAPERS = [
    { id: 'matrix',     name: 'Matrix Rain',       css: 'radial-gradient(circle at 50% 50%, #001a0a 0%, #000 70%)' },
    { id: 'astra',      name: 'Astra Galaxy',      css: 'radial-gradient(circle at 50% 50%, #001a0a 0%, #000 70%)' },
    { id: 'tokyo',      name: 'Tokyo Black Hole',  css: 'radial-gradient(circle at 50% 50%, #1a0a05 0%, #000 70%)' },
    { id: 'cyberpunk',  name: 'Binary Stars',      css: 'radial-gradient(circle at 30% 40%, #001a1a 0%, #000 70%)' },
    { id: 'forest',     name: 'Green Comet',       css: 'radial-gradient(circle at 50% 40%, #002a10 0%, #000 70%)' },
    { id: 'lake',       name: 'Twin Moons',        css: 'radial-gradient(circle at 50% 50%, #001520 0%, #000 70%)' },
    { id: 'mountain',   name: 'Ringed Planet',     css: 'radial-gradient(circle at 50% 50%, #0a1a1a 0%, #000 70%)' },
    { id: 'desert',     name: 'Red Dwarf',         css: 'radial-gradient(circle at 50% 50%, #1a0805 0%, #000 70%)' },
    { id: 'underwater', name: 'Blue Sun',          css: 'radial-gradient(circle at 50% 50%, #001a2a 0%, #000 70%)' },
    { id: 'paris',      name: 'Constellation',     css: 'radial-gradient(circle at 50% 50%, #0a0a1f 0%, #000 70%)' },
    { id: 'synthwave',  name: 'Retro Sun',         css: 'linear-gradient(180deg, #1a0033 0%, #000 60%)' }
];

/* ═══ WALLPAPERS (Dark Web themed) ═══ */
/* ═══ CELESTIAL BODIES — 10 Wallpapers (Dark Web themed) ═══ */
const CelestialBodies = (() => {
    let canvas, ctx, W, H, currentMode = 'matrix', rafId = null, running = false;
    let mouse = { x: 0, y: 0, px: 0, py: 0 };
    let camera = { x: 0, y: 0, tx: 0, ty: 0 };
    let time = 0;
    const renderers = {};
    const rand = (a, b) => a + Math.random() * (b - a);

    /* 1. MATRIX RAIN */
    renderers.matrix = (() => {
        let columns = [], fontSize = 16;
        const chars = 'アイウエオカキクケコ0123456789ABCDEF<>{}[]=+-*/';
        function init() {
            const colCount = Math.floor(W / fontSize);
            columns = new Array(colCount).fill(0).map(() => Math.random() * H / fontSize);
        }
        function update() {}
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
            ctx.fillRect(0, 0, W, H);
            ctx.font = fontSize + 'px "Fira Code", monospace';
            for (let i = 0; i < columns.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize, y = columns[i] * fontSize;
                const isCyan = Math.random() < 0.05;
                ctx.fillStyle = isCyan ? '#00d9ff' : '#00ff41';
                if (Math.random() < 0.02) ctx.fillStyle = '#ffffff';
                ctx.shadowBlur = 8;
                ctx.shadowColor = isCyan ? '#00d9ff' : '#00ff41';
                ctx.fillText(char, x, y);
                if (y > H && Math.random() > 0.975) columns[i] = 0;
                columns[i]++;
            }
        }
        return { init, update, draw };
    })();

    /* 2. ASTRA — Spiral Galaxy */
    renderers.astra = (() => {
        let stars = [], startTime = 0;
        function init() {
            stars = []; startTime = performance.now();
            const STAR_COUNT = 500, ARMS = 3;
            const R = Math.min(W, H) * 0.38, THICK = 12;
            const palette = ['#00ff41', '#00d9ff', '#ffffff', '#5a8a6a'];
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
                    size: rand(0.4, 1.8),
                    color: palette[Math.floor(Math.random() * palette.length)],
                    twinkle: Math.random() * Math.PI * 2, twinkleSpeed: rand(0.02, 0.06),
                    formDelay: 800 + Math.random() * 4500, opacity: rand(0.2, 0.5)
                });
            }
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
            ctx.fillStyle = 'rgba(0, 5, 2, 0.3)';
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
                    ctx.shadowBlur = sz > 1.5 ? 15 : 5; ctx.shadowColor = s.color;
                    ctx.beginPath(); ctx.arc(x, y, Math.max(0.4, sz), 0, Math.PI * 2); ctx.fill();
                }
            }
            ctx.globalAlpha = 1; ctx.shadowBlur = 0;
        }
        return { init, update, draw };
    })();

    /* 3. TOKYO — Black Hole */
    renderers.tokyo = (() => {
        let particles = [];
        function init() {
            particles = [];
            for (let i = 0; i < 450; i++) {
                const angle = Math.random() * Math.PI * 2, radius = 60 + Math.random() * 400;
                particles.push({ angle, radius, angleSpeed: (0.004 + Math.random() * 0.006) * (radius < 200 ? 1.5 : 1), size: 0.5 + Math.random() * 2, color: Math.random() > 0.7 ? '#00ff41' : (Math.random() > 0.5 ? '#00d9ff' : '#00ff41'), opacity: 0.3 + Math.random() * 0.6 });
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
            ctx.fillStyle = 'rgba(0, 5, 2, 0.35)'; ctx.fillRect(0, 0, W, H);
            const cx = W / 2 + camera.x * 30, cy = H / 2 + camera.y * 30;
            const halo = ctx.createRadialGradient(cx, cy, 30, cx, cy, 250);
            halo.addColorStop(0, 'rgba(0, 255, 65, 0.15)'); halo.addColorStop(0.5, 'rgba(0, 217, 255, 0.05)'); halo.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(cx, cy, 250, 0, Math.PI * 2); ctx.fill();
            for (const p of particles) {
                const x = cx + Math.cos(p.angle) * p.radius, y = cy + Math.sin(p.angle) * p.radius * 0.4;
                ctx.globalAlpha = p.opacity; ctx.fillStyle = p.color;
                ctx.shadowBlur = 8; ctx.shadowColor = p.color;
                ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill();
            }
            ctx.globalAlpha = 1; ctx.shadowBlur = 0;
            ctx.fillStyle = '#000'; ctx.beginPath(); ctx.arc(cx, cy, 45, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = 'rgba(0, 255, 65, 0.8)'; ctx.lineWidth = 2;
            ctx.shadowBlur = 20; ctx.shadowColor = '#00ff41';
            ctx.beginPath(); ctx.arc(cx, cy, 47, 0, Math.PI * 2); ctx.stroke();
        }
        return { init, update, draw };
    })();

    /* 4. CYBERPUNK — Binary Stars */
    renderers.cyberpunk = (() => {
        let stars = [], plasma = [], angle = 0;
        function init() {
            stars = []; plasma = [];
            for (let i = 0; i < 200; i++) plasma.push({ angle: Math.random() * Math.PI * 2, dist: 200 + Math.random() * 100, speed: 0.02 + Math.random() * 0.02, phase: Math.random() * Math.PI * 2, size: 0.5 + Math.random() * 1.5 });
            for (let i = 0; i < 80; i++) stars.push({ x: Math.random() * W, y: Math.random() * H, size: 0.5 + Math.random(), twinkle: Math.random() * Math.PI * 2 });
        }
        function update() { angle += 0.008; for (const p of plasma) p.angle += p.speed; for (const s of stars) s.twinkle += 0.03; }
        function draw() {
            ctx.fillStyle = 'rgba(0, 10, 10, 0.3)'; ctx.fillRect(0, 0, W, H);
            for (const s of stars) { ctx.globalAlpha = 0.4 + Math.sin(s.twinkle) * 0.4; ctx.fillStyle = '#00ff41'; ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill(); }
            const cx = W / 2 + camera.x * 40, cy = H / 2 + camera.y * 40, orbitRadius = 130;
            const s1x = cx + Math.cos(angle) * orbitRadius, s1y = cy + Math.sin(angle) * orbitRadius;
            const s2x = cx + Math.cos(angle + Math.PI) * orbitRadius, s2y = cy + Math.sin(angle + Math.PI) * orbitRadius;
            for (const p of plasma) {
                const px = cx + Math.cos(p.angle) * p.dist, py = cy + Math.sin(p.angle) * p.dist;
                ctx.globalAlpha = 0.3 + Math.sin(p.phase + time * 0.003) * 0.3;
                ctx.fillStyle = p.angle % (Math.PI * 2) > Math.PI ? '#00ff41' : '#00d9ff';
                ctx.shadowBlur = 10; ctx.shadowColor = ctx.fillStyle;
                ctx.beginPath(); ctx.arc(px, py, p.size, 0, Math.PI * 2); ctx.fill();
            }
            ctx.globalAlpha = 1; ctx.shadowBlur = 60;
            ctx.shadowColor = '#00d9ff'; ctx.fillStyle = '#00d9ff';
            ctx.beginPath(); ctx.arc(s1x, s1y, 15, 0, Math.PI * 2); ctx.fill();
            ctx.shadowColor = '#00ff41'; ctx.fillStyle = '#00ff41';
            ctx.beginPath(); ctx.arc(s2x, s2y, 15, 0, Math.PI * 2); ctx.fill();
            ctx.globalAlpha = 0.4; ctx.strokeStyle = '#00ff41'; ctx.lineWidth = 1;
            ctx.shadowBlur = 15; ctx.shadowColor = '#00ff41';
            ctx.beginPath(); ctx.moveTo(s1x, s1y); ctx.lineTo(s2x, s2y); ctx.stroke();
        }
        return { init, update, draw };
    })();

    /* 5. FOREST — Green Comet */
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
            ctx.fillStyle = 'rgba(0, 8, 3, 0.3)'; ctx.fillRect(0, 0, W, H);
            for (const a of aurora) {
                a.phase += a.speed;
                const grad = ctx.createLinearGradient(0, H * 0.2, 0, H * 0.5);
                grad.addColorStop(0, 'rgba(0, 255, 65, 0)');
                grad.addColorStop(0.5, `rgba(0, 255, 65, ${0.08 + Math.sin(a.phase) * 0.05})`);
                grad.addColorStop(1, 'rgba(0, 255, 65, 0)');
                ctx.fillStyle = grad;
                const yOff = Math.sin(a.phase * 2) * 30;
                ctx.beginPath(); ctx.moveTo(0, H * 0.2 + yOff);
                for (let x = 0; x <= W; x += 40) ctx.lineTo(x, H * 0.3 + Math.sin(x * 0.005 + a.phase) * 50 + yOff);
                ctx.lineTo(W, H * 0.5); ctx.lineTo(0, H * 0.5); ctx.closePath(); ctx.fill();
            }
            for (const s of stars) { ctx.globalAlpha = 0.5 + Math.sin(s.twinkle) * 0.5; ctx.fillStyle = '#00ff41'; ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill(); }
            for (let i = 0; i < cometTrail.length; i++) {
                const t = cometTrail[i];
                ctx.globalAlpha = t.life * (1 - i / cometTrail.length) * 0.8;
                ctx.fillStyle = '#00ff41'; ctx.shadowBlur = 15; ctx.shadowColor = '#00ff41';
                ctx.beginPath(); ctx.arc(t.x, t.y, 3 * (1 - i / cometTrail.length), 0, Math.PI * 2); ctx.fill();
            }
            ctx.globalAlpha = 1; ctx.fillStyle = '#d9ff99';
            ctx.shadowBlur = 40; ctx.shadowColor = '#00ff41';
            ctx.beginPath(); ctx.arc(comet.x, comet.y, 8, 0, Math.PI * 2); ctx.fill();
        }
        return { init, update, draw };
    })();

    /* 6. LAKE — Twin Moons */
    renderers.lake = (() => {
        let ripples = [];
        function init() {
            ripples = [];
            for (let i = 0; i < 15; i++) ripples.push({ x: rand(0, W), y: H * 0.6 + rand(0, H * 0.4), r: rand(20, 80), maxR: rand(100, 200), life: Math.random() });
        }
        function update() {
            for (const r of ripples) { r.r += 0.5; r.life -= 0.005; if (r.life <= 0 || r.r > r.maxR) { r.x = rand(0, W); r.y = H * 0.6 + rand(0, H * 0.4); r.r = rand(20, 80); r.maxR = rand(100, 200); r.life = 1; } }
        }
        function draw() {
            ctx.fillStyle = 'rgba(0, 8, 12, 0.3)'; ctx.fillRect(0, 0, W, H);
            const horizon = H * 0.6;
            const waterGrad = ctx.createLinearGradient(0, horizon, 0, H);
            waterGrad.addColorStop(0, 'rgba(0, 40, 60, 0.6)'); waterGrad.addColorStop(1, 'rgba(0, 10, 20, 0.9)');
            ctx.fillStyle = waterGrad; ctx.fillRect(0, horizon, W, H - horizon);
            const m1x = W * 0.7 + camera.x * 30, m1y = horizon - 150 + camera.y * 20;
            ctx.globalAlpha = 1; ctx.shadowBlur = 60; ctx.shadowColor = '#00ff41'; ctx.fillStyle = '#00ff41';
            ctx.beginPath(); ctx.arc(m1x, m1y, 50, 0, Math.PI * 2); ctx.fill();
            const m2x = W * 0.3 + camera.x * 20, m2y = horizon - 100 + camera.y * 15;
            ctx.shadowBlur = 50; ctx.shadowColor = '#00d9ff'; ctx.fillStyle = '#00d9ff';
            ctx.beginPath(); ctx.arc(m2x, m2y, 30, 0, Math.PI * 2); ctx.fill();
            ctx.shadowBlur = 0;
            for (const r of ripples) { ctx.globalAlpha = r.life * 0.3; ctx.strokeStyle = 'rgba(0, 217, 255, 0.5)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.ellipse(r.x, r.y, r.r, r.r * 0.3, 0, 0, Math.PI * 2); ctx.stroke(); }
        }
        return { init, update, draw };
    })();

    /* 7. MOUNTAIN — Ringed Planet */
    renderers.mountain = (() => {
        let ringParticles = [], stars = [];
        function init() {
            ringParticles = [];
            for (let i = 0; i < 350; i++) {
                const band = Math.random();
                let r;
                if (band < 0.4) r = 180 + Math.random() * 40;
                else if (band < 0.7) r = 240 + Math.random() * 30;
                else r = 290 + Math.random() * 60;
                ringParticles.push({ angle: Math.random() * Math.PI * 2, radius: r, size: 0.5 + Math.random() * 1.5, opacity: 0.3 + Math.random() * 0.5, color: Math.random() > 0.7 ? '#00d9ff' : '#5a8a6a' });
            }
            stars = [];
            for (let i = 0; i < 80; i++) stars.push({ x: Math.random() * W, y: Math.random() * H, size: 0.3 + Math.random(), twinkle: Math.random() * Math.PI * 2 });
        }
        function update() { for (const p of ringParticles) p.angle += 0.002; for (const s of stars) s.twinkle += 0.025; }
        function draw() {
            ctx.fillStyle = 'rgba(0, 8, 8, 0.3)'; ctx.fillRect(0, 0, W, H);
            for (const s of stars) { ctx.globalAlpha = 0.4 + Math.sin(s.twinkle) * 0.5; ctx.fillStyle = '#00ff41'; ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill(); }
            const cx = W / 2 + camera.x * 40, cy = H / 2 + camera.y * 30, tilt = 0.4;
            ctx.save(); ctx.translate(cx, cy); ctx.rotate(tilt);
            for (const p of ringParticles) { if (Math.sin(p.angle) < 0) continue; const x = Math.cos(p.angle) * p.radius, y = Math.sin(p.angle) * p.radius * 0.3; ctx.globalAlpha = p.opacity * 0.7; ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill(); }
            ctx.restore();
            const planetGrad = ctx.createRadialGradient(cx - 30, cy - 30, 10, cx, cy, 120);
            planetGrad.addColorStop(0, '#001a1a'); planetGrad.addColorStop(0.5, '#003a30'); planetGrad.addColorStop(1, '#000');
            ctx.globalAlpha = 1; ctx.shadowBlur = 40; ctx.shadowColor = 'rgba(0, 255, 65, 0.6)';
            ctx.fillStyle = planetGrad; ctx.beginPath(); ctx.arc(cx, cy, 120, 0, Math.PI * 2); ctx.fill();
            ctx.shadowBlur = 0;
            ctx.save(); ctx.translate(cx, cy); ctx.rotate(tilt);
            for (const p of ringParticles) { if (Math.sin(p.angle) >= 0) continue; const x = Math.cos(p.angle) * p.radius, y = Math.sin(p.angle) * p.radius * 0.3; ctx.globalAlpha = p.opacity; ctx.fillStyle = p.color; ctx.shadowBlur = 5; ctx.shadowColor = p.color; ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill(); }
            ctx.restore();
        }
        return { init, update, draw };
    })();

    /* 8. DESERT — Red Dwarf Sun */
    renderers.desert = (() => {
        let dust = [], pulse = 0;
        function init() {
            dust = [];
            for (let i = 0; i < 250; i++) {
                const angle = Math.random() * Math.PI * 2, radius = 100 + Math.random() * 400;
                dust.push({ angle, radius, angleSpeed: 0.003 + Math.random() * 0.005, size: 0.5 + Math.random() * 2, color: Math.random() > 0.5 ? '#00ff41' : '#00d9ff', opacity: 0.2 + Math.random() * 0.5 });
            }
        }
        function update() { pulse += 0.02; for (const d of dust) { d.angle += d.angleSpeed; d.radius -= 0.1; if (d.radius < 80) d.radius = 500; } }
        function draw() {
            ctx.fillStyle = 'rgba(0, 8, 4, 0.3)'; ctx.fillRect(0, 0, W, H);
            const cx = W / 2 + camera.x * 30, cy = H / 2 + camera.y * 30;
            const pulseFactor = 1 + Math.sin(pulse) * 0.05;
            for (const d of dust) {
                const x = cx + Math.cos(d.angle) * d.radius, y = cy + Math.sin(d.angle) * d.radius * 0.7;
                ctx.globalAlpha = d.opacity; ctx.fillStyle = d.color; ctx.shadowBlur = 8; ctx.shadowColor = d.color;
                ctx.beginPath(); ctx.arc(x, y, d.size, 0, Math.PI * 2); ctx.fill();
            }
            ctx.globalAlpha = 0.4;
            const glowGrad = ctx.createRadialGradient(cx, cy, 30, cx, cy, 200 * pulseFactor);
            glowGrad.addColorStop(0, 'rgba(0, 255, 65, 0.4)'); glowGrad.addColorStop(0.5, 'rgba(0, 217, 255, 0.2)'); glowGrad.addColorStop(1, 'transparent');
            ctx.fillStyle = glowGrad; ctx.beginPath(); ctx.arc(cx, cy, 200 * pulseFactor, 0, Math.PI * 2); ctx.fill();
            ctx.globalAlpha = 1;
            const sunGrad = ctx.createRadialGradient(cx - 15, cy - 15, 5, cx, cy, 70);
            sunGrad.addColorStop(0, '#d9ff99'); sunGrad.addColorStop(0.4, '#00ff41'); sunGrad.addColorStop(1, '#003a10');
            ctx.fillStyle = sunGrad; ctx.shadowBlur = 80; ctx.shadowColor = '#00ff41';
            ctx.beginPath(); ctx.arc(cx, cy, 70 * pulseFactor, 0, Math.PI * 2); ctx.fill();
        }
        return { init, update, draw };
    })();

    /* 9. UNDERWATER — Blue Sun + Coral */
    renderers.underwater = (() => {
        let corals = [], bubbles = [];
        function init() {
            corals = [];
            for (let i = 0; i < 40; i++) corals.push({ angle: (Math.PI * 2 / 40) * i + rand(-0.1, 0.1), length: 100 + Math.random() * 250, phase: Math.random() * Math.PI * 2, width: 1 + Math.random() * 2, color: Math.random() > 0.5 ? '#00d9ff' : '#00ff41' });
            bubbles = [];
            for (let i = 0; i < 40; i++) bubbles.push({ x: Math.random() * W, y: Math.random() * H, size: 2 + Math.random() * 5, speed: 0.5 + Math.random() * 1.5, wobble: Math.random() * Math.PI * 2 });
        }
        function update() {
            for (const c of corals) c.phase += 0.02;
            for (const b of bubbles) { b.y -= b.speed; b.wobble += 0.05; if (b.y < -20) { b.y = H + 20; b.x = Math.random() * W; } }
        }
        function draw() {
            ctx.fillStyle = 'rgba(0, 8, 12, 0.3)'; ctx.fillRect(0, 0, W, H);
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
            sunGrad.addColorStop(0, '#d9ffff'); sunGrad.addColorStop(0.4, '#00d9ff'); sunGrad.addColorStop(1, '#001a2a');
            ctx.fillStyle = sunGrad; ctx.shadowBlur = 100; ctx.shadowColor = '#00d9ff';
            ctx.beginPath(); ctx.arc(cx, cy, 90, 0, Math.PI * 2); ctx.fill();
            ctx.shadowBlur = 10; ctx.shadowColor = '#00d9ff';
            for (const b of bubbles) { const bx = b.x + Math.sin(b.wobble) * 5; ctx.globalAlpha = 0.5; ctx.strokeStyle = '#00d9ff'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(bx, b.y, b.size, 0, Math.PI * 2); ctx.stroke(); }
        }
        return { init, update, draw };
    })();

    /* 10. PARIS — Constellation */
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
            ctx.fillStyle = 'rgba(0, 0, 8, 0.3)'; ctx.fillRect(0, 0, W, H);
            const offX = camera.x * 20, offY = camera.y * 20;
            ctx.strokeStyle = 'rgba(0, 255, 65, 0.4)'; ctx.lineWidth = 1; ctx.shadowBlur = 10; ctx.shadowColor = '#00ff41';
            for (const l of lines) {
                const a = nodes[l.a], b = nodes[l.b];
                ctx.globalAlpha = 0.3 * Math.min(Math.abs(Math.sin(a.twinkle)), Math.abs(Math.sin(b.twinkle)));
                ctx.beginPath(); ctx.moveTo(a.x + offX, a.y + offY); ctx.lineTo(b.x + offX, b.y + offY); ctx.stroke();
            }
            for (const n of nodes) {
                const size = n.size * (0.7 + Math.sin(n.twinkle) * 0.5);
                ctx.globalAlpha = 0.7 + Math.sin(n.twinkle) * 0.3; ctx.fillStyle = '#d9ff99'; ctx.shadowBlur = 15; ctx.shadowColor = '#00ff41';
                ctx.beginPath(); ctx.arc(n.x + offX, n.y + offY, size, 0, Math.PI * 2); ctx.fill();
            }
            for (const s of shootingStars) { ctx.globalAlpha = s.life; ctx.strokeStyle = '#00ff41'; ctx.lineWidth = 2; ctx.shadowBlur = 20; ctx.shadowColor = '#00ff41'; ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 8, s.y - s.vy * 8); ctx.stroke(); }
        }
        return { init, update, draw };
    })();

    /* 11. SYNTHWAVE — Retro Sun */
    renderers.synthwave = (() => {
        let gridOffset = 0;
        function init() { gridOffset = 0; }
        function update() { gridOffset += 0.8; if (gridOffset > 60) gridOffset = 0; }
        function draw() {
            ctx.fillStyle = 'rgba(10, 0, 20, 0.3)'; ctx.fillRect(0, 0, W, H);
            const horizon = H * 0.55, cx = W / 2 + camera.x * 20, cy = horizon - 80 + camera.y * 15, sunRadius = 130;
            const sunGrad = ctx.createLinearGradient(0, cy - sunRadius, 0, cy + sunRadius);
            sunGrad.addColorStop(0, '#00ff41'); sunGrad.addColorStop(0.5, '#00d9ff'); sunGrad.addColorStop(1, '#a855f7');
            ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, sunRadius, 0, Math.PI * 2); ctx.clip();
            ctx.fillStyle = sunGrad; ctx.fillRect(cx - sunRadius, cy - sunRadius, sunRadius * 2, sunRadius * 2);
            ctx.fillStyle = 'rgba(10, 0, 20, 0.9)';
            for (let i = 0; i < 8; i++) { const t = i / 8; const y = cy + t * sunRadius * 0.7; const h = 3 + t * 8; ctx.fillRect(cx - sunRadius, y, sunRadius * 2, h); }
            ctx.restore();
            ctx.globalAlpha = 0.4;
            const glow = ctx.createRadialGradient(cx, cy, sunRadius * 0.8, cx, cy, sunRadius * 2);
            glow.addColorStop(0, 'rgba(0, 217, 255, 0.6)'); glow.addColorStop(1, 'transparent');
            ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(cx, cy, sunRadius * 2, 0, Math.PI * 2); ctx.fill();
            ctx.globalAlpha = 0.6; ctx.strokeStyle = '#00ff41'; ctx.lineWidth = 1; ctx.shadowBlur = 10; ctx.shadowColor = '#00ff41';
            const vpX = W / 2 + camera.x * 10, vpY = horizon;
            for (let i = -10; i <= 10; i++) { const bx = W / 2 + i * 100; ctx.beginPath(); ctx.moveTo(vpX, vpY); ctx.lineTo(bx, H); ctx.stroke(); }
            for (let i = 0; i < 12; i++) { const t = (i + gridOffset / 60) / 12; const y = horizon + Math.pow(t, 2) * (H - horizon); ctx.globalAlpha = 0.6 * (1 - t * 0.5); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        }
        return { init, update, draw };
    })();

    /* RESIZE / SWITCH / LOOP */
    function resize() {
        if (!canvas) return;
        const dpr = window.devicePixelRatio || 1;
        W = window.innerWidth; H = window.innerHeight;
        canvas.width = W * dpr; canvas.height = H * dpr;
        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function switchTo(mode) {
        if (!renderers[mode]) mode = 'matrix';
        if (ctx && W && H) { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); const dpr = window.devicePixelRatio || 1; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.globalAlpha = 1; ctx.shadowBlur = 0; }
        currentMode = mode;
        document.body.dataset.bg = mode;
        try { if (renderers[mode].init) renderers[mode].init(); } catch (e) { console.warn('[CelestialBodies] Init failed:', mode, e); }
        localStorage.setItem('background', mode);
        state.currentBg = mode;
    }

    function loop(now) {
        if (!running) return;
        time = now;
        camera.tx = (mouse.x / W - 0.5) * 1.2; camera.ty = (mouse.y / H - 0.5) * 0.8;
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
        const saved = localStorage.getItem('background') || 'matrix';
        currentMode = renderers[saved] ? saved : 'matrix';
        if (renderers[currentMode].init) { try { renderers[currentMode].init(); } catch (e) {} }
        running = true; rafId = requestAnimationFrame(loop);
    }

    return { init, switchTo, getCurrent: () => currentMode };
})();
window.CelestialBodies = CelestialBodies;

window.APPS = APPS;
window.WALLPAPERS = WALLPAPERS;
window.state = state;

/* ═══ UTILITIES ═══ */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const escHTML = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

function playBeep(freq, dur, type = "sine", vol = 0.06) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator(),
      gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = freq;
    osc.type = type;
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.start();
    osc.stop(ctx.currentTime + dur);
  } catch (e) {}
}

function playSound(src, fallback) {
  try {
    const audio = new Audio(src);
    audio.volume = 0.85;
    audio.play().catch(() => fallback && fallback());
  } catch (e) {
    fallback && fallback();
  }
}

/* ═══ PERSISTENCE ═══ */
const Persist = (() => {
  const PREFIX = "rishabh-os:";
  const get = (k, fb = null) => {
    try {
      const r = localStorage.getItem(PREFIX + k);
      return r ? JSON.parse(r) : fb;
    } catch (e) {
      return fb;
    }
  };
  const set = (k, v) => {
    try {
      localStorage.setItem(PREFIX + k, JSON.stringify(v));
    } catch (e) {}
  };
  const remove = (k) => localStorage.removeItem(PREFIX + k);
  return {
    get,
    set,
    remove,
    saveWinPos: (id, w) =>
      set("win-pos:" + id, { left: w.offsetLeft, top: w.offsetTop }),
    loadWinPos: (id) => get("win-pos:" + id, null),
    saveOpenApps: () => set("open-apps", state.openWindows),
    loadOpenApps: () => get("open-apps", []),
    saveActiveTheme: () => {
      const t = document.body.className
        .split(" ")
        .filter((c) => c.startsWith("theme-"));
      set("active-themes", t);
    },
    loadActiveThemes: () => get("active-themes", []),
  };
})();
window.Persist = Persist;

/* ═══ NOTIFICATION SYSTEM ═══ */
const _notificationQueue = [];
let _notifCenterReady = false;

function showNotification(msg, opts = {}) {
  if (!msg) return;
  opts = opts || {};
  _showToastOnly(msg, opts);
  if (
    _notifCenterReady &&
    typeof NotifCenter !== "undefined" &&
    NotifCenter.push
  ) {
    try {
      let icon = opts.icon || "✨",
        title = opts.title || "Notification",
        body = msg;
      if (!opts.icon) {
        if (/jjk/i.test(msg)) {
          icon = "🔮";
          title = "JJK";
        } else if (/music/i.test(msg)) {
          icon = "🎵";
          title = "Music";
        } else if (/chess/i.test(msg)) {
          icon = "♟️";
          title = "Chess";
        } else if (/theme/i.test(msg)) {
          icon = "🎨";
          title = "Theme";
        }
      }
      body = body.replace(/^[\p{Emoji}\s]+/u, "").trim();
      NotifCenter.push(icon, title, body);
    } catch (e) {}
  } else {
    _notificationQueue.push({ msg, opts });
  }
}

function _showToastOnly(msg, opts = {}) {
  let icon = opts.icon || "✨",
    title = opts.title || "Notification",
    body = msg;
  if (!opts.icon) {
    if (/jjk/i.test(msg)) {
      icon = "🔮";
      title = "JJK";
    } else if (/music/i.test(msg)) {
      icon = "🎵";
      title = "Music";
    }
  }
  body = body.replace(/^[\p{Emoji}\s]+/u, "").trim();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-content">
            <div class="toast-title">${escHTML(title)}</div>
            <div class="toast-msg">${escHTML(body)}</div>
        </div>
        <div class="toast-progress"></div>`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("leaving");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
window.showNotification = showNotification;
window._markNotifCenterReady = function () {
  _notifCenterReady = true;
  while (_notificationQueue.length > 0) {
    const { msg, opts } = _notificationQueue.shift();
    try {
      showNotification(msg, opts);
    } catch (e) {}
  }
};

/* ═══ DARK WEB MATRIX BACKGROUND ═══ */
const DarkWebMatrix = (() => {
  let canvas,
    ctx,
    W,
    H,
    columns = [],
    fontSize = 16,
    running = false,
    rafId = null;
  const chars =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]()=+-*/";

  function init() {
    canvas = document.getElementById("astra-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
    running = true;
    loop();
  }

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    const colCount = Math.floor(W / fontSize);
    columns = new Array(colCount)
      .fill(0)
      .map(() => (Math.random() * H) / fontSize);
  }

  function loop() {
    if (!running) return;
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, W, H);
    ctx.font = fontSize + 'px "Fira Code", monospace';

    for (let i = 0; i < columns.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = columns[i] * fontSize;

      // Green glow with occasional cyan
      const isCyan = Math.random() < 0.05;
      ctx.fillStyle = isCyan ? "#00d9ff" : "#00ff41";
      if (Math.random() < 0.02) ctx.fillStyle = "#ffffff";

      ctx.shadowBlur = 8;
      ctx.shadowColor = isCyan ? "#00d9ff" : "#00ff41";
      ctx.fillText(char, x, y);

      if (y > H && Math.random() > 0.975) {
        columns[i] = 0;
      }
      columns[i]++;
    }

    ctx.shadowBlur = 0;
    rafId = requestAnimationFrame(loop);
  }

  return { init };
})();

window.DarkWebMatrix = DarkWebMatrix;

/* ═══ JJK ORB SYSTEM ═══ */
const JJK = (() => {
  let attached = false;
  let orbEl = null;
  let orbType = null;
  let promptEl = null;
  let moveHandler = null;

  function launch(type) {
    if (attached) return;

    // Ensure JJK theme active
    if (!document.body.classList.contains("theme-jjk")) {
      document.body.classList.add("theme-jjk");
    }

    attached = true;
    orbType = type;

    // Create orb
    orbEl = document.createElement("div");
    orbEl.className = `jjk-attached-orb ${type}`;
    orbEl.style.left = "-1000px";
    orbEl.style.top = "-1000px";
    document.body.appendChild(orbEl);

    // Create prompt
    promptEl = document.createElement("div");
    promptEl.className = "jjk-prompt show";
    promptEl.id = "jjk-prompt";

    const prompts = {
      blue: { text: "蒼", color: "#3b82f6" },
      red: { text: "赫", color: "#ef4444" },
      purple: { text: "虚式 茈", color: "#a855f7" },
    };
    promptEl.textContent = prompts[type].text;
    promptEl.style.color = prompts[type].color;
    document.body.appendChild(promptEl);

    // Follow mouse (except purple - purple auto-animates)
    if (type === "blue" || type === "red") {
      moveHandler = (e) => {
        orbEl.style.left = e.clientX + "px";
        orbEl.style.top = e.clientY + "px";
      };
      document.addEventListener("mousemove", moveHandler);
    } else if (type === "purple") {
      // Purple auto-sequence
      runPurpleSequence();
    }

    playBeep(440, 0.15);
  }

  function runPurpleSequence() {
    // Remove prompt for purple (auto-sequence)
    if (promptEl) promptEl.remove();
    promptEl = null;

    // Create red orb (left) and blue orb (right)
    const redOrb = document.createElement("div");
    redOrb.className = "jjk-attached-orb red";
    redOrb.style.left = "25%";
    redOrb.style.top = "50%";
    document.body.appendChild(redOrb);

    const blueOrb = document.createElement("div");
    blueOrb.className = "jjk-attached-orb blue";
    blueOrb.style.left = "75%";
    blueOrb.style.top = "50%";
    document.body.appendChild(blueOrb);

    // Remove main orb
    if (orbEl) orbEl.remove();
    orbEl = null;

    // Animate merge after 1s
    setTimeout(() => {
      redOrb.style.transition = "left 1.5s cubic-bezier(0.4, 0, 0.2, 1)";
      blueOrb.style.transition = "left 1.5s cubic-bezier(0.4, 0, 0.2, 1)";
      redOrb.style.left = "48%";
      blueOrb.style.left = "52%";
    }, 1000);

    // After merge - play Gojo voice + purple orb
    setTimeout(() => {
      redOrb.remove();
      blueOrb.remove();

      playSound("sounds/jjk/hollow-purple-jp.mp3", () =>
        playBeep(120, 1.5, "sawtooth", 0.2),
      );

      // Create purple orb
      const purpleOrb = document.createElement("div");
      purpleOrb.className = "jjk-attached-orb purple";
      purpleOrb.style.left = "50%";
      purpleOrb.style.top = "50%";
      document.body.appendChild(purpleOrb);
      orbEl = purpleOrb;

      // Wait, then DESTROY
      setTimeout(() => fire(), 1500);
    }, 2500);
  }

  function fire() {
    if (!attached) return;

    const type = orbType;

    // Remove prompt
    if (promptEl) promptEl.remove();
    promptEl = null;

    // Remove mouse handler
    if (moveHandler) {
      document.removeEventListener("mousemove", moveHandler);
      moveHandler = null;
    }

    // Flash
    const flash = document.createElement("div");
    flash.className = "jjk-screen-flash";
    const colors = {
      blue: "radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)",
      red: "radial-gradient(circle at 50% 50%, #ef4444 0%, transparent 70%)",
      purple: "radial-gradient(circle at 50% 50%, #a855f7 0%, transparent 70%)",
    };
    flash.style.background = colors[type];
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 1200);

    // Play sound
    if (type === "blue") {
      playSound("sounds/jjk/blue-absorb.mp3", () =>
        playBeep(220, 0.8, "sine", 0.15),
      );
      document.body.style.animation = "jjkAbsorb 1.5s ease-out";
    } else if (type === "red") {
      playSound("sounds/jjk/red-blast.mp3", () =>
        playBeep(300, 0.6, "sawtooth", 0.15),
      );
      document.body.style.animation = "jjkRepel 1.5s ease-out";
    } else if (type === "purple") {
      document.body.style.animation = "jjkDestroy 2s ease-out";
    }

    // Reset after animation
    setTimeout(
      () => {
        document.body.style.animation = "";

        // Clean up orb
        if (orbEl) orbEl.remove();
        orbEl = null;
        attached = false;
        orbType = null;

        // Remove JJK theme
        document.body.classList.remove("theme-jjk");

        if (typeof showNotification === "function") {
          const msgs = {
            blue: "🔵 Blue absorbed everything!",
            red: "🔴 Red blasted it all!",
            purple: "🟣 Hollow Purple — total destruction!",
          };
          showNotification(msgs[type], { icon: "🔮", title: "JJK" });
        }
      },
      type === "purple" ? 2100 : 1600,
    );
  }

  // Click anywhere to fire (except on buttons)
  document.addEventListener("click", (e) => {
    if (!attached) return;
    if (e.target.closest(".jjk-btn")) return;
    if (e.target.closest(".window")) return;
    if (e.target.closest(".taskbar")) return;
    if (e.target.closest(".start-menu")) return;
    if (orbType === "purple") return; // purple auto-fires
    fire();
  });

  return { launch };
})();

function launchJJK(type) {
  JJK.launch(type);
}
window.launchJJK = launchJJK;

/* ═══ CHESS ENGINE ═══ */
const ChessEngine = (() => {
  let board,
    turn,
    castling,
    enPassant,
    halfmove,
    fullmove,
    history = [];
  const PV = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 };
  const PST = {
    p: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [50, 50, 50, 50, 50, 50, 50, 50],
      [10, 10, 20, 30, 30, 20, 10, 10],
      [5, 5, 10, 25, 25, 10, 5, 5],
      [0, 0, 0, 20, 20, 0, 0, 0],
      [5, -5, -10, 0, 0, -10, -5, 5],
      [5, 10, 10, -20, -20, 10, 10, 5],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    n: [
      [-50, -40, -30, -30, -30, -30, -40, -50],
      [-40, -20, 0, 0, 0, 0, -20, -40],
      [-30, 0, 10, 15, 15, 10, 0, -30],
      [-30, 5, 15, 20, 20, 15, 5, -30],
      [-30, 0, 15, 20, 20, 15, 0, -30],
      [-30, 5, 10, 15, 15, 10, 5, -30],
      [-40, -20, 0, 5, 5, 0, -20, -40],
      [-50, -40, -30, -30, -30, -30, -40, -50],
    ],
    b: [
      [-20, -10, -10, -10, -10, -10, -10, -20],
      [-10, 0, 0, 0, 0, 0, 0, -10],
      [-10, 0, 5, 10, 10, 5, 0, -10],
      [-10, 5, 5, 10, 10, 5, 5, -10],
      [-10, 0, 10, 10, 10, 10, 0, -10],
      [-10, 10, 10, 10, 10, 10, 10, -10],
      [-10, 5, 0, 0, 0, 0, 5, -10],
      [-20, -10, -10, -10, -10, -10, -10, -20],
    ],
    r: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [5, 10, 10, 10, 10, 10, 10, 5],
      [-5, 0, 0, 0, 0, 0, 0, -5],
      [-5, 0, 0, 0, 0, 0, 0, -5],
      [-5, 0, 0, 0, 0, 0, 0, -5],
      [-5, 0, 0, 0, 0, 0, 0, -5],
      [-5, 0, 0, 0, 0, 0, 0, -5],
      [0, 0, 0, 5, 5, 0, 0, 0],
    ],
    q: [
      [-20, -10, -10, -5, -5, -10, -10, -20],
      [-10, 0, 0, 0, 0, 0, 0, -10],
      [-10, 0, 5, 5, 5, 5, 0, -10],
      [-5, 0, 5, 5, 5, 5, 0, -5],
      [0, 0, 5, 5, 5, 5, 0, -5],
      [-10, 5, 5, 5, 5, 5, 0, -10],
      [-10, 0, 5, 0, 0, 0, 0, -10],
      [-20, -10, -10, -5, -5, -10, -10, -20],
    ],
    k: [
      [-30, -40, -40, -50, -50, -40, -40, -30],
      [-30, -40, -40, -50, -50, -40, -40, -30],
      [-30, -40, -40, -50, -50, -40, -40, -30],
      [-30, -40, -40, -50, -50, -40, -40, -30],
      [-20, -30, -30, -40, -40, -30, -30, -20],
      [-10, -20, -20, -20, -20, -20, -20, -10],
      [20, 20, 0, 0, 0, 0, 20, 20],
      [20, 30, 10, 0, 0, 10, 30, 20],
    ],
    k_end: [
      [-50, -40, -30, -20, -20, -30, -40, -50],
      [-30, -20, -10, 0, 0, -10, -20, -30],
      [-30, -10, 20, 30, 30, 20, -10, -30],
      [-30, -10, 30, 40, 40, 30, -10, -30],
      [-30, -10, 30, 40, 40, 30, -10, -30],
      [-30, -10, 20, 30, 30, 20, -10, -30],
      [-30, -30, 0, 0, 0, 0, -30, -30],
      [-50, -30, -30, -30, -30, -30, -30, -50],
    ],
  };
  const isW = (p) => p && p === p.toUpperCase();
  const colorOf = (p) => (p ? (isW(p) ? "w" : "b") : null);
  const inB = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;

  function loadFEN(fen) {
    board = Array.from({ length: 8 }, () => Array(8).fill(null));
    const parts = fen.split(" ");
    parts[0].split("/").forEach((row, r) => {
      let c = 0;
      for (const ch of row) {
        if (/\d/.test(ch)) c += parseInt(ch);
        else {
          board[r][c] = ch;
          c++;
        }
      }
    });
    turn = parts[1] === "w" ? "w" : "b";
    const cs = parts[2] || "KQkq";
    castling = {
      wk: cs.includes("K"),
      wq: cs.includes("Q"),
      bk: cs.includes("k"),
      bq: cs.includes("q"),
    };
    enPassant =
      parts[3] && parts[3] !== "-"
        ? { row: 8 - parseInt(parts[3][1]), col: parts[3].charCodeAt(0) - 97 }
        : null;
    halfmove = parseInt(parts[4]) || 0;
    fullmove = parseInt(parts[5]) || 1;
    history = [];
  }

  function generateMoves(color, capturesOnly = false) {
    const moves = [],
      enemy = color === "w" ? "b" : "w";
    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (!p || colorOf(p) !== color) continue;
        const t = p.toLowerCase();
        if (t === "p") {
          const dir = color === "w" ? -1 : 1;
          const startRow = color === "w" ? 6 : 1,
            promoRow = color === "w" ? 0 : 7;
          if (inB(r + dir, c) && !board[r + dir][c] && !capturesOnly) {
            if (r + dir === promoRow)
              for (const pr of ["q", "r", "b", "n"])
                moves.push({ from: [r, c], to: [r + dir, c], promo: pr });
            else moves.push({ from: [r, c], to: [r + dir, c] });
            if (r === startRow && !board[r + 2 * dir][c])
              moves.push({ from: [r, c], to: [r + 2 * dir, c] });
          }
          for (const dc of [-1, 1]) {
            const nc = c + dc;
            if (!inB(r + dir, nc)) continue;
            const tgt = board[r + dir][nc];
            if (tgt && colorOf(tgt) === enemy) {
              if (r + dir === promoRow)
                for (const pr of ["q", "r", "b", "n"])
                  moves.push({ from: [r, c], to: [r + dir, nc], promo: pr });
              else moves.push({ from: [r, c], to: [r + dir, nc] });
            } else if (
              enPassant &&
              enPassant.row === r + dir &&
              enPassant.col === nc
            )
              moves.push({ from: [r, c], to: [r + dir, nc], enPassant: true });
          }
        } else if (t === "n") {
          [
            [-2, -1],
            [-2, 1],
            [-1, -2],
            [-1, 2],
            [1, -2],
            [1, 2],
            [2, -1],
            [2, 1],
          ].forEach(([dr, dc]) => {
            const nr = r + dr,
              nc = c + dc;
            if (!inB(nr, nc)) return;
            const tgt = board[nr][nc];
            if (tgt && colorOf(tgt) === color) return;
            if (capturesOnly && !tgt) return;
            moves.push({ from: [r, c], to: [nr, nc] });
          });
        } else if (t === "b" || t === "r" || t === "q") {
          const dirs = [];
          if (t !== "r") dirs.push([-1, -1], [-1, 1], [1, -1], [1, 1]);
          if (t !== "b") dirs.push([-1, 0], [1, 0], [0, -1], [0, 1]);
          dirs.forEach(([dr, dc]) => {
            let nr = r + dr,
              nc = c + dc;
            while (inB(nr, nc)) {
              const tgt = board[nr][nc];
              if (!tgt) {
                if (!capturesOnly) moves.push({ from: [r, c], to: [nr, nc] });
              } else {
                if (colorOf(tgt) === enemy)
                  moves.push({ from: [r, c], to: [nr, nc] });
                break;
              }
              nr += dr;
              nc += dc;
            }
          });
        } else if (t === "k") {
          for (let dr = -1; dr <= 1; dr++)
            for (let dc = -1; dc <= 1; dc++) {
              if (!dr && !dc) continue;
              const nr = r + dr,
                nc = c + dc;
              if (!inB(nr, nc)) continue;
              const tgt = board[nr][nc];
              if (tgt && colorOf(tgt) === color) continue;
              if (capturesOnly && !tgt) continue;
              moves.push({ from: [r, c], to: [nr, nc] });
            }
          if (!capturesOnly) {
            if (color === "w" && r === 7 && c === 4) {
              if (
                castling.wk &&
                !board[7][5] &&
                !board[7][6] &&
                board[7][7] === "R" &&
                !isSquareAttacked(7, 4, "b") &&
                !isSquareAttacked(7, 5, "b") &&
                !isSquareAttacked(7, 6, "b")
              )
                moves.push({ from: [7, 4], to: [7, 6], castle: "k" });
              if (
                castling.wq &&
                !board[7][1] &&
                !board[7][2] &&
                !board[7][3] &&
                board[7][0] === "R" &&
                !isSquareAttacked(7, 4, "b") &&
                !isSquareAttacked(7, 3, "b") &&
                !isSquareAttacked(7, 2, "b")
              )
                moves.push({ from: [7, 4], to: [7, 2], castle: "q" });
            }
            if (color === "b" && r === 0 && c === 4) {
              if (
                castling.bk &&
                !board[0][5] &&
                !board[0][6] &&
                board[0][7] === "r" &&
                !isSquareAttacked(0, 4, "w") &&
                !isSquareAttacked(0, 5, "w") &&
                !isSquareAttacked(0, 6, "w")
              )
                moves.push({ from: [0, 4], to: [0, 6], castle: "k" });
              if (
                castling.bq &&
                !board[0][1] &&
                !board[0][2] &&
                !board[0][3] &&
                board[0][0] === "r" &&
                !isSquareAttacked(0, 4, "w") &&
                !isSquareAttacked(0, 3, "w") &&
                !isSquareAttacked(0, 2, "w")
              )
                moves.push({ from: [0, 4], to: [0, 2], castle: "q" });
            }
          }
        }
      }
    return moves;
  }

  function isSquareAttacked(r, c, by) {
    const pd = by === "w" ? -1 : 1;
    for (const dc of [-1, 1]) {
      const pr = r - pd,
        pc = c + dc;
      if (inB(pr, pc)) {
        const p = board[pr][pc];
        if (p && p.toLowerCase() === "p" && colorOf(p) === by) return true;
      }
    }
    for (const [dr, dc] of [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ]) {
      const nr = r + dr,
        nc = c + dc;
      if (
        inB(nr, nc) &&
        board[nr][nc] &&
        board[nr][nc].toLowerCase() === "n" &&
        colorOf(board[nr][nc]) === by
      )
        return true;
    }
    for (const [dr, dc] of [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ]) {
      let nr = r + dr,
        nc = c + dc;
      while (inB(nr, nc)) {
        const p = board[nr][nc];
        if (p) {
          if (
            colorOf(p) === by &&
            (p.toLowerCase() === "b" || p.toLowerCase() === "q")
          )
            return true;
          break;
        }
        nr += dr;
        nc += dc;
      }
    }
    for (const [dr, dc] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      let nr = r + dr,
        nc = c + dc;
      while (inB(nr, nc)) {
        const p = board[nr][nc];
        if (p) {
          if (
            colorOf(p) === by &&
            (p.toLowerCase() === "r" || p.toLowerCase() === "q")
          )
            return true;
          break;
        }
        nr += dr;
        nc += dc;
      }
    }
    for (let dr = -1; dr <= 1; dr++)
      for (let dc = -1; dc <= 1; dc++) {
        if (!dr && !dc) continue;
        const nr = r + dr,
          nc = c + dc;
        if (
          inB(nr, nc) &&
          board[nr][nc] &&
          board[nr][nc].toLowerCase() === "k" &&
          colorOf(board[nr][nc]) === by
        )
          return true;
      }
    return false;
  }

  const findKing = (color) => {
    const k = color === "w" ? "K" : "k";
    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 8; c++) if (board[r][c] === k) return [r, c];
    return null;
  };
  const isInCheck = (color) => {
    const k = findKing(color);
    return k ? isSquareAttacked(k[0], k[1], color === "w" ? "b" : "w") : false;
  };

  function makeMove(m) {
    const snap = {
      board: board.map((r) => r.slice()),
      turn,
      castling: { ...castling },
      enPassant: enPassant ? { ...enPassant } : null,
      halfmove,
      fullmove,
      move: m,
    };
    const [fr, fc] = m.from,
      [tr, tc] = m.to;
    const piece = board[fr][fc],
      captured = board[tr][tc];
    board[tr][tc] = piece;
    board[fr][fc] = null;
    if (m.enPassant) board[fr][tc] = null;
    if (m.promo) board[tr][tc] = turn === "w" ? m.promo.toUpperCase() : m.promo;
    if (m.castle === "k") {
      if (turn === "w") {
        board[7][5] = board[7][7];
        board[7][7] = null;
      } else {
        board[0][5] = board[0][7];
        board[0][7] = null;
      }
    } else if (m.castle === "q") {
      if (turn === "w") {
        board[7][3] = board[7][0];
        board[7][0] = null;
      } else {
        board[0][3] = board[0][0];
        board[0][0] = null;
      }
    }
    const t = piece.toLowerCase();
    if (t === "k") {
      if (turn === "w") {
        castling.wk = castling.wq = false;
      } else {
        castling.bk = castling.bq = false;
      }
    }
    if (t === "r") {
      if (turn === "w" && fc === 0 && fr === 7) castling.wq = false;
      if (turn === "w" && fc === 7 && fr === 7) castling.wk = false;
      if (turn === "b" && fc === 0 && fr === 0) castling.bq = false;
      if (turn === "b" && fc === 7 && fr === 0) castling.bk = false;
    }
    if (t === "p" && Math.abs(tr - fr) === 2)
      enPassant = { row: (fr + tr) / 2, col: fc };
    else enPassant = null;
    if (t === "p" || captured) halfmove = 0;
    else halfmove++;
    if (turn === "b") fullmove++;
    turn = turn === "w" ? "b" : "w";
    history.push(snap);
  }

  function undoMove() {
    const s = history.pop();
    if (!s) return;
    board = s.board;
    turn = s.turn;
    castling = s.castling;
    enPassant = s.enPassant;
    halfmove = s.halfmove;
    fullmove = s.fullmove;
  }

  function legalMoves(color) {
    return generateMoves(color).filter((m) => {
      makeMove(m);
      const inCheck = isInCheck(color);
      undoMove();
      return !inCheck;
    });
  }

  function evaluate() {
    let score = 0,
      totalMat = 0,
      queens = 0;
    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (!p) continue;
        const t = p.toLowerCase();
        totalMat += PV[t];
        if (t === "q") queens++;
      }
    const endgame = totalMat < 2600 || queens === 0;
    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (!p) continue;
        const t = p.toLowerCase(),
          white = isW(p);
        const table = t === "k" && endgame ? PST.k_end : PST[t];
        const pstRow = white ? r : 7 - r,
          pstCol = white ? c : 7 - c;
        const val = PV[t] + table[pstRow][pstCol];
        score += white ? val : -val;
      }
    return score;
  }

  const scoreMove = (m) => {
    let s = 0;
    const cap = board[m.to[0]][m.to[1]],
      mover = board[m.from[0]][m.from[1]];
    if (cap) s += 10 * PV[cap.toLowerCase()] - PV[mover.toLowerCase()];
    if (m.promo) s += PV[m.promo];
    return s;
  };

  function negamax(depth, alpha, beta, color) {
    const moves = legalMoves(color);
    if (moves.length === 0) return isInCheck(color) ? -1000000 - depth : 0;
    if (depth === 0) return color === "w" ? evaluate() : -evaluate();
    const ordered = moves.slice().sort((a, b) => scoreMove(b) - scoreMove(a));
    let best = -Infinity;
    for (const m of ordered) {
      makeMove(m);
      const score = -negamax(
        depth - 1,
        -beta,
        -alpha,
        color === "w" ? "b" : "w",
      );
      undoMove();
      if (score > best) best = score;
      if (best > alpha) alpha = best;
      if (alpha >= beta) break;
    }
    return best;
  }

  function bestMove(color, depth) {
    const moves = legalMoves(color);
    if (moves.length === 0) return null;
    const ordered = moves.slice().sort((a, b) => scoreMove(b) - scoreMove(a));
    let best = -Infinity,
      bestM = ordered[0],
      alpha = -Infinity;
    for (const m of ordered) {
      makeMove(m);
      const score = -negamax(
        depth - 1,
        -Infinity,
        -alpha,
        color === "w" ? "b" : "w",
      );
      undoMove();
      if (score > best) {
        best = score;
        bestM = m;
      }
      if (best > alpha) alpha = best;
    }
    return bestM;
  }

  function randomMove(color) {
    const m = legalMoves(color);
    return m.length ? m[Math.floor(Math.random() * m.length)] : null;
  }

  function moveToSAN(m) {
    const [fr, fc] = m.from,
      [tr, tc] = m.to;
    const piece = board[fr][fc];
    if (!piece) return "";
    const t = piece.toLowerCase(),
      files = "abcdefgh";
    const cap = board[tr][tc] || m.enPassant;
    let san = "";
    if (m.castle === "k") san = "O-O";
    else if (m.castle === "q") san = "O-O-O";
    else if (t === "p") {
      if (cap) san += files[fc] + "x";
      san += files[tc] + (8 - tr);
      if (m.promo) san += "=" + m.promo.toUpperCase();
    } else {
      san += t.toUpperCase() + files[fc] + (8 - fr);
      if (cap) san += "x";
      san += files[tc] + (8 - tr);
    }
    return san;
  }

  function gameStatus() {
    const moves = legalMoves(turn);
    if (moves.length === 0)
      return isInCheck(turn)
        ? { type: "checkmate", winner: turn === "w" ? "b" : "w" }
        : { type: "stalemate" };
    if (halfmove >= 100) return { type: "draw", reason: "50-move rule" };
    const pieces = [];
    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 8; c++)
        if (board[r][c]) pieces.push(board[r][c].toLowerCase());
    const nonK = pieces.filter((p) => p !== "k");
    if (
      nonK.length === 0 ||
      (nonK.length === 1 && "nb".includes(nonK[0])) ||
      (nonK.length === 2 && nonK.every((p) => p === "b"))
    )
      return { type: "draw", reason: "insufficient material" };
    return { type: "ongoing" };
  }

  return {
    loadFEN,
    legalMoves,
    makeMove,
    undoMove,
    isInCheck,
    bestMove,
    randomMove,
    moveToSAN,
    gameStatus,
    getBoard: () => board,
    getTurn: () => turn,
    getHistory: () => history,
  };
})();

/* ═══ CHESS OPENING BOOK ═══ */
/* Simplified — top openings. Add more from your file as needed. */
const OPENING_BOOK = {
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq": [
    "e4",
    "d4",
    "Nf3",
    "c4",
  ],
  "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq": [
    "e5",
    "c5",
    "e6",
    "c6",
  ],
  "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq": [
    "Nf3",
    "Bc4",
    "Nc3",
  ],
  "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq": ["Nc6", "Nf6"],
  "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq": [
    "Bb5",
    "Bc4",
    "Nc3",
  ],
  "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq": ["d5", "Nf6", "e6"],
  "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq": ["c4", "Nf3"],
  "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq": [
    "e6",
    "c6",
    "dxc4",
  ],
  "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq": ["e5", "Nf6", "c5"],
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq": ["Nf3", "Nc3"],
  "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq": ["c4", "Nf3"],
};

function tryOpeningMove() {
  const fen = ChessEngine.getBoard();
  const fenStr = boardToFEN();
  const fenPrefix = fenStr.split(" ").slice(0, 4).join(" ");
  for (const [key, movesList] of Object.entries(OPENING_BOOK)) {
    if (fenPrefix.startsWith(key)) {
      const legal = ChessEngine.legalMoves(ChessEngine.getTurn());
      const candidates = [];
      for (const san of movesList) {
        for (const m of legal) {
          if (ChessEngine.moveToSAN(m) === san) candidates.push(m);
        }
      }
      if (candidates.length > 0)
        return candidates[Math.floor(Math.random() * candidates.length)];
    }
  }
  return null;
}

function boardToFEN() {
  const b = ChessEngine.getBoard();
  let fen = "";
  for (let r = 0; r < 8; r++) {
    let empty = 0;
    for (let c = 0; c < 8; c++) {
      const p = b[r][c];
      if (!p) empty++;
      else {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }
        fen += p;
      }
    }
    if (empty > 0) fen += empty;
    if (r < 7) fen += "/";
  }
  fen += " " + ChessEngine.getTurn() + " KQkq - 0 1";
  return fen;
}

/* ═══ CHESS UI ═══ */
const ChessUI = (() => {
  const GLYPH = {
    K: "♔",
    Q: "♕",
    R: "♖",
    B: "♗",
    N: "♘",
    P: "♙",
    k: "♚",
    q: "♛",
    r: "♜",
    b: "♝",
    n: "♞",
    p: "♟",
  };
  const BOTS = [
    {
      id: 1,
      name: "Blunder_Bob",
      elo: 400,
      depth: 1,
      blunder: 0.75,
      time: 300,
      chats: ["I meant to do that.", "Oops."],
    },
    {
      id: 2,
      name: "Greedy_Gary",
      elo: 600,
      depth: 2,
      blunder: 0.5,
      time: 500,
      chats: ["Free piece!"],
    },
    {
      id: 3,
      name: "Pawn_Pusher",
      elo: 800,
      depth: 2,
      blunder: 0.35,
      time: 700,
      chats: ["Pawns matter."],
    },
    {
      id: 4,
      name: "Knight_Rider",
      elo: 1000,
      depth: 3,
      blunder: 0.25,
      time: 900,
      chats: ["L-shapes!"],
    },
    {
      id: 5,
      name: "Bishop_Beast",
      elo: 1200,
      depth: 3,
      blunder: 0.18,
      time: 1200,
      chats: ["Diagonals!"],
    },
    {
      id: 6,
      name: "Rook_Roll",
      elo: 1400,
      depth: 3,
      blunder: 0.12,
      time: 1500,
      chats: ["Open files!"],
    },
    {
      id: 7,
      name: "Queen_Quasar",
      elo: 1600,
      depth: 3,
      blunder: 0.08,
      time: 2000,
      chats: ["Bow to the Queen."],
    },
    {
      id: 8,
      name: "Checkmate_Charlie",
      elo: 1800,
      depth: 3,
      blunder: 0.05,
      time: 2500,
      chats: ["Tactics win."],
    },
    {
      id: 9,
      name: "Tactical_Titan",
      elo: 1900,
      depth: 3,
      blunder: 0.02,
      time: 3000,
      chats: ["Every move matters."],
    },
    {
      id: 10,
      name: "Grandmaster_AI",
      elo: 2000,
      depth: 3,
      blunder: 0,
      time: 3500,
      chats: ["Inevitable."],
    },
  ];

  let selected = null,
    legalMovesList = [],
    lastMove = null,
    playerColor = "w",
    currentBot = BOTS[0],
    gameOver = false,
    thinking = false;
  let capturedByW = [],
    capturedByB = [],
    chatLines = [],
    gameStarted = false;

  function render() {
    const boardEl = document.getElementById("chess-board");
    if (!boardEl) return;
    const b = ChessEngine.getBoard();
    boardEl.innerHTML = "";
    const targets = legalMovesList.map((m) => m.to);

    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 8; c++) {
        const sq = document.createElement("div");
        sq.className = "chess-sq " + ((r + c) % 2 === 0 ? "light" : "dark");
        sq.dataset.r = r;
        sq.dataset.c = c;

        if (
          lastMove &&
          ((lastMove.from[0] === r && lastMove.from[1] === c) ||
            (lastMove.to[0] === r && lastMove.to[1] === c))
        )
          sq.classList.add("last-move");
        if (selected && selected[0] === r && selected[1] === c)
          sq.classList.add("selected");

        const piece = b[r][c];
        if (
          piece &&
          piece.toLowerCase() === "k" &&
          ((piece === piece.toUpperCase() && ChessEngine.getTurn() === "w") ||
            (piece === piece.toLowerCase() && ChessEngine.getTurn() === "b")) &&
          ChessEngine.isInCheck(ChessEngine.getTurn())
        )
          sq.classList.add("in-check");

        if (targets.some((t) => t[0] === r && t[1] === c)) {
          if (piece) {
            const ring = document.createElement("div");
            ring.className = "legal-capture";
            sq.appendChild(ring);
          } else {
            const dot = document.createElement("div");
            dot.className = "legal-dot";
            sq.appendChild(dot);
          }
        }

        if (piece) {
          const sp = document.createElement("span");
          sp.className = "piece";
          sp.dataset.color = piece === piece.toUpperCase() ? "w" : "b";
          sp.textContent = GLYPH[piece];
          sq.appendChild(sp);
        }

        sq.onclick = () => onSquareClick(r, c);
        boardEl.appendChild(sq);
      }
  }

  function onSquareClick(r, c) {
    if (gameOver || thinking || ChessEngine.getTurn() !== playerColor) return;
    const b = ChessEngine.getBoard(),
      piece = b[r][c];

    if (selected) {
      const m = legalMovesList.find((x) => x.to[0] === r && x.to[1] === c);
      if (m) {
        if (m.promo) m.promo = "q";
        playerMove(m);
        return;
      }
    }

    if (
      piece &&
      ((playerColor === "w" && piece === piece.toUpperCase()) ||
        (playerColor === "b" && piece === piece.toLowerCase()))
    ) {
      selected = [r, c];
      legalMovesList = ChessEngine.legalMoves(playerColor).filter(
        (m) => m.from[0] === r && m.from[1] === c,
      );
    } else {
      selected = null;
      legalMovesList = [];
    }
    render();
  }

  function playerMove(move) {
    const b = ChessEngine.getBoard();
    const cap =
      b[move.to[0]][move.to[1]] ||
      (move.enPassant ? b[move.from[0]][move.to[1]] : null);
    const san = ChessEngine.moveToSAN(move);
    ChessEngine.makeMove(move);
    lastMove = move;
    selected = null;
    legalMovesList = [];
    if (cap) capturedByW.push(cap);
    addChat("You", san, "player");

    const status = ChessEngine.gameStatus();
    render();
    updateStatus();
    updateCaptured();
    if (status.type !== "ongoing") return endGame(status);

    thinking = true;
    updateStatus();
    setTimeout(botMove, 400 + Math.random() * 300);
  }

  function botMove() {
    const botColor = playerColor === "w" ? "b" : "w";
    let move = null;

    // Try opening book first 10 moves
    if (ChessEngine.getHistory().length < 10) {
      move = tryOpeningMove();
    }

    // Blunder or full search
    if (!move) {
      if (Math.random() < currentBot.blunder)
        move = ChessEngine.randomMove(botColor);
      else move = ChessEngine.bestMove(botColor, currentBot.depth);
    }

    if (!move) {
      thinking = false;
      return endGame(ChessEngine.gameStatus());
    }

    const b = ChessEngine.getBoard();
    const cap =
      b[move.to[0]][move.to[1]] ||
      (move.enPassant ? b[move.from[0]][move.to[1]] : null);
    const san = ChessEngine.moveToSAN(move);
    ChessEngine.makeMove(move);
    lastMove = move;
    if (cap) capturedByB.push(cap);
    addChat(currentBot.name, san, "bot");

    if (Math.random() < 0.3)
      setTimeout(
        () =>
          addChat(
            currentBot.name,
            currentBot.chats[
              Math.floor(Math.random() * currentBot.chats.length)
            ],
            "bot",
          ),
        500,
      );

    const status = ChessEngine.gameStatus();
    thinking = false;
    render();
    updateStatus();
    updateCaptured();
    if (status.type !== "ongoing") endGame(status);
  }

  function endGame(s) {
    gameOver = true;
    let msg = "";
    if (s.type === "checkmate")
      msg = s.winner === playerColor ? "🏆 You Win!" : "💀 You Lose";
    else if (s.type === "stalemate") msg = "🤝 Stalemate";
    else if (s.type === "draw") msg = `🤝 Draw — ${s.reason}`;
    addChat("System", msg, "system");
    updateStatus(msg);
  }

  function updateStatus(custom) {
    const el = document.getElementById("chess-status");
    if (!el) return;
    if (custom) {
      el.innerHTML = `<span class="turn-indicator">${custom}</span>`;
      return;
    }
    if (gameOver) return;
    const t = ChessEngine.getTurn();
    const youTurn = t === playerColor;
    const dot = `<span class="turn-dot ${t === "b" ? "black" : ""}"></span>`;
    const who = youTurn ? "Your turn" : `${currentBot.name} is thinking`;
    const think =
      !youTurn && thinking ? '<span class="chess-thinking"></span>' : "";
    el.innerHTML = `<span class="turn-indicator">${dot} ${who}${think}</span><span class="chess-bot-name">${currentBot.name} · ${currentBot.elo}</span>`;
  }

  function updateCaptured() {
    const w = document.getElementById("captured-by-white"),
      b = document.getElementById("captured-by-black");
    if (w)
      w.innerHTML = capturedByW
        .map(
          (p) =>
            `<span class="cap-${p === p.toUpperCase() ? "b" : "w"}">${GLYPH[p]}</span>`,
        )
        .join("");
    if (b)
      b.innerHTML = capturedByB
        .map(
          (p) =>
            `<span class="cap-${p === p.toUpperCase() ? "b" : "w"}">${GLYPH[p]}</span>`,
        )
        .join("");
  }

  function addChat(who, msg, cls) {
    chatLines.push({ who, msg, cls });
    const chat = document.getElementById("chess-chat");
    if (!chat) return;
    const d = document.createElement("div");
    d.className = "msg " + (cls || "");
    d.innerHTML = `<span class="who">${escHTML(who)}:</span> ${escHTML(msg)}`;
    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;
  }

  function renderBotList() {
    const g = document.getElementById("chess-bots-grid");
    if (!g) return;
    g.innerHTML = BOTS.map(
      (b) =>
        `<div class="bot-card ${b.id === currentBot.id ? "active" : ""}" data-bot="${b.id}"><div class="bot-name">${b.name}</div><div class="bot-elo">${b.elo} Elo · D${b.depth}</div></div>`,
    ).join("");
    g.querySelectorAll(".bot-card").forEach((c) => {
      c.onclick = () => {
        currentBot = BOTS.find((b) => b.id === parseInt(c.dataset.bot));
        resetGame();
      };
    });
  }

  function resetGame() {
    ChessEngine.loadFEN(
      "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    );
    selected = null;
    legalMovesList = [];
    lastMove = null;
    gameOver = false;
    thinking = false;
    capturedByW = [];
    capturedByB = [];
    chatLines = [];
    const chat = document.getElementById("chess-chat");
    if (chat) chat.innerHTML = "";
    playerColor = "w";
    addChat(
      "System",
      `New game vs ${currentBot.name}. You're White.`,
      "system",
    );
    render();
    updateStatus();
    updateCaptured();
  }

  function undo() {
    if (thinking || ChessEngine.getHistory().length < 2) return;
    ChessEngine.undoMove();
    ChessEngine.undoMove();
    selected = null;
    legalMovesList = [];
    gameOver = false;
    const h = ChessEngine.getHistory();
    lastMove = h.length ? h[h.length - 1].move : null;
    chatLines = chatLines.slice(0, -2);
    const chat = document.getElementById("chess-chat");
    if (chat)
      chat.innerHTML = chatLines
        .map(
          (l) =>
            `<div class="msg ${l.cls}"><span class="who">${escHTML(l.who)}:</span> ${escHTML(l.msg)}</div>`,
        )
        .join("");
    render();
    updateStatus();
    updateCaptured();
  }

  function init() {
    renderBotList();
    resetGame();
    const nb = document.getElementById("chess-new"),
      ub = document.getElementById("chess-undo"),
      rb = document.getElementById("chess-resign");
    if (nb) nb.onclick = resetGame;
    if (ub) ub.onclick = undo;
    if (rb)
      rb.onclick = () => {
        if (gameOver) return;
        gameOver = true;
        addChat("System", "You resigned.", "system");
        updateStatus("🏳️ You resigned");
      };
  }

  return { init };
})();

/* ═══ MUSIC PLAYER ═══ */
const MusicPlayer = (() => {
  const TRACKS = [
    {
      name: "Agudo Mágico 3",
      artist: "Funk BR",
      album: "TikTok Hits",
      emoji: "🌶️",
      color: ["#dc2626", "#7f1d1d"],
      localUrl: "music/agudo-magico-3.mp3",
    },
    {
      name: "Ai Đưa Em Về",
      artist: "Vietnamese Pop",
      album: "Chill Vibes",
      emoji: "🌊",
      color: ["#0ea5e9", "#082f49"],
      localUrl: "music/ai-dua-em-ve.mp3",
    },
    {
      name: "AI Scream",
      artist: "Various",
      album: "TikTok Hits",
      emoji: "😱",
      color: ["#ec4899", "#831843"],
      localUrl: "music/ai-scream.mp3",
    },
    {
      name: "I Wanna Be Yours",
      artist: "Arctic Monkeys",
      album: "AM",
      emoji: "🖤",
      color: ["#1e293b", "#000"],
      localUrl: "music/arctic-monkeys-i-wanna-be-yours.mp3",
    },
    {
      name: "Dancin",
      artist: "Aaron Smith",
      album: "Dancin",
      emoji: "🕺",
      color: ["#a855f7", "#581c87"],
      localUrl: "music/aron-smith-dancin.mp3",
    },
    {
      name: "Bare Minimum",
      artist: "Various",
      album: "Vibes",
      emoji: "😐",
      color: ["#64748b", "#1e293b"],
      localUrl: "music/bare-minimum.mp3",
    },
    {
      name: "Blue",
      artist: "Various",
      album: "Mood",
      emoji: "💙",
      color: ["#3b82f6", "#1e40af"],
      localUrl: "music/blue.mp3",
    },
    {
      name: "Braga Do Love",
      artist: "Various",
      album: "TikTok Hits",
      emoji: "💕",
      color: ["#f43f5e", "#9f1239"],
      localUrl: "music/braga-do-love.mp3",
    },
    {
      name: "Catch Catch",
      artist: "K-Pop",
      album: "Viral Hits",
      emoji: "🎯",
      color: ["#ec4899", "#a855f7"],
      localUrl: "music/catch-catch.mp3",
    },
    {
      name: "Death Note Opening",
      artist: "Nightmare",
      album: "Death Note",
      emoji: "🍎",
      color: ["#dc2626", "#450a0a"],
      localUrl: "music/death-note-opening.mp3",
    },
    {
      name: "Delirious",
      artist: "JJK OST",
      album: "Jujutsu Kaisen",
      emoji: "😵",
      color: ["#06b6d4", "#164e63"],
      localUrl: "music/delirious.mp3",
    },
    {
      name: "B.O.T.A.",
      artist: "Eliza Rose",
      album: "B.O.T.A.",
      emoji: "🔥",
      color: ["#f59e0b", "#dc2626"],
      localUrl: "music/eliza-rose-bota.mp3",
    },
    {
      name: "Fendi 2",
      artist: "Various",
      album: "Trending",
      emoji: "👑",
      color: ["#a855f7", "#6b21a8"],
      localUrl: "music/fendi-2.mp3",
    },
    {
      name: "GATA ONLY",
      artist: "FloyyMenor",
      album: "GATA ONLY",
      emoji: "🐱",
      color: ["#22c55e", "#065f46"],
      localUrl: "music/floyymenor-gata-only.mp3",
    },
    {
      name: "Golden Brown",
      artist: "The Stranglers",
      album: "La Folie",
      emoji: "🌾",
      color: ["#d97706", "#78350f"],
      localUrl: "music/golden-brown.mp3",
    },
    {
      name: "If I Am With You",
      artist: "JJK S2 OST",
      album: "Jujutsu Kaisen",
      emoji: "👁️",
      color: ["#dc2626", "#1c1917"],
      localUrl: "music/if-i-am-with-you-jjk.mp3",
    },
    {
      name: "Kulosa",
      artist: "Oxlade",
      album: "Afrobeats",
      emoji: "🎯",
      color: ["#22c55e", "#14532d"],
      localUrl: "music/kulosa.mp3",
    },
    {
      name: "Love Nwantiti",
      artist: "CKay",
      album: "Nwantiti",
      emoji: "💫",
      color: ["#06b6d4", "#0e7490"],
      localUrl: "music/love-nwantiti-north-african-remix.mp3",
    },
    {
      name: "Love Story",
      artist: "Various",
      album: "Romance",
      emoji: "❤️",
      color: ["#f43f5e", "#7f1d1d"],
      localUrl: "music/love-story.mp3",
    },
    {
      name: "MALA",
      artist: "Various",
      album: "Viral",
      emoji: "😈",
      color: ["#7c3aed", "#312e81"],
      localUrl: "music/mala.mp3",
    },
    {
      name: "Montagem Emina",
      artist: "Funk BR",
      album: "Funk Hits",
      emoji: "🔥",
      color: ["#f59e0b", "#b45309"],
      localUrl: "music/montagem-emina.mp3",
    },
    {
      name: "Never Meant to Belong",
      artist: "Bleach OST",
      album: "Bleach",
      emoji: "🖤",
      color: ["#1f2937", "#000"],
      localUrl: "music/never-meant-to-belong.mp3",
    },
    {
      name: "Nyah! Arigato",
      artist: "Leat'eq",
      album: "TikTok Hits",
      emoji: "😼",
      color: ["#fbbf24", "#d97706"],
      localUrl: "music/nyah-arigato.mp3",
    },
    {
      name: "Sukuna vs Mahoraga",
      artist: "JJK OST",
      album: "Jujutsu Kaisen",
      emoji: "👹",
      color: ["#7f1d1d", "#1c1917"],
      localUrl: "music/sukuna-vs-mahoraga.mp3",
    },
    {
      name: "Three Years of Overflowing Youth",
      artist: "Various",
      album: "Anime OST",
      emoji: "🌸",
      color: ["#f472b6", "#db2777"],
      localUrl: "music/three-years-of-overflowing-youth.mp3",
    },
    {
      name: "TRIAL & ERROR",
      artist: "JJK OST",
      album: "Jujutsu Kaisen",
      emoji: "⚡",
      color: ["#06b6d4", "#1e3a8a"],
      localUrl: "music/trial-and-error.mp3",
    },
  ];

  let st = {
    currentIdx: -1,
    playing: false,
    position: 0,
    volume: 0.8,
    ticker: null,
  };
  let el = {};
  let currentAudio = null;
  const fmt = (s) => {
    if (!s || !isFinite(s)) return "0:00";
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  };

  /* Song-based theme colors */
  function applySongTheme(track) {
    if (!track || !track.color) return;
    const [c1, c2] = track.color;
    const root = document.documentElement;
    root.style.setProperty("--accent", c1);
    root.style.setProperty("--accent-2", c2);
    root.style.setProperty("--accent-glow", c1 + "80");
  }

  function resetSongTheme() {
    const root = document.documentElement;
    root.style.setProperty("--accent", "#00ff41");
    root.style.setProperty("--accent-2", "#00d9ff");
    root.style.setProperty("--accent-glow", "rgba(0, 255, 65, 0.5)");
  }

  function renderSidebar() {
    if (!el.sidebar) return;
    el.sidebar.innerHTML = `
            <div class="music-sidebar-title">Library</div>
            <button class="music-nav-item active"><span class="music-nav-icon">🎵</span> All Tracks</button>
            <button class="music-nav-item"><span class="music-nav-icon">💜</span> Favorites</button>
            <div class="music-sidebar-title" style="margin-top:14px;">Playlists</div>
            <div class="music-playlist"><span class="music-playlist-dot" style="background:linear-gradient(135deg,#7c3aed,#a855f7)"></span>💜 Liked Songs</div>
            <div class="music-playlist"><span class="music-playlist-dot" style="background:linear-gradient(135deg,#1db954,#22c55e)"></span>🔥 Viral Hits</div>
            <div class="music-playlist"><span class="music-playlist-dot" style="background:linear-gradient(135deg,#1e40af,#3b82f6)"></span>🌙 Chill Vibes</div>
            <div class="music-playlist"><span class="music-playlist-dot" style="background:linear-gradient(135deg,#dc2626,#f97316)"></span>⚔️ Anime OST</div>
        `;
  }

  function renderTrackList() {
    if (!el.tracklist) return;
    el.tracklist.innerHTML = TRACKS.map((t, i) => {
      const act = i === st.currentIdx,
        play = act && st.playing;
      return `<div class="music-track ${act ? "active" : ""} ${play ? "playing" : ""}" data-idx="${i}">
                <div class="music-track-num">${i + 1}<div class="music-track-eq"><span></span><span></span><span></span><span></span></div></div>
                <div class="music-track-info">
                    <div class="music-track-name">${escHTML(t.name)}</div>
                    <div class="music-track-artist">${escHTML(t.artist)}</div>
                </div>
                <div class="music-track-album">${escHTML(t.album)}</div>
                <div class="music-track-dur">${fmt(t.dur || 180)}</div>
            </div>`;
    }).join("");
    el.tracklist.querySelectorAll(".music-track").forEach((row) => {
      row.onclick = () => playTrack(parseInt(row.dataset.idx));
    });
  }

  function playTrack(i) {
    if (i < 0 || i >= TRACKS.length) return;
    st.currentIdx = i;
    st.position = 0;
    st.playing = true;
    const t = TRACKS[i];
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
    if (t.localUrl) {
      currentAudio = new Audio(t.localUrl);
      currentAudio.volume = st.volume;
      currentAudio.addEventListener("loadedmetadata", () => {
        if (currentAudio.duration && isFinite(currentAudio.duration)) {
          t.dur = currentAudio.duration;
          updateProgress();
        }
      });
      currentAudio.play().catch(() => {});
      currentAudio.onended = () => {
        if (st.repeat === "one") {
          st.position = 0;
          currentAudio.currentTime = 0;
          currentAudio.play().catch(() => {});
        } else next();
      };
    }
    // Apply song theme
    applySongTheme(t);
    updateAll();
    startTicker();
  }

  function toggle() {
    if (st.currentIdx === -1) return playTrack(0);
    st.playing = !st.playing;
    if (currentAudio) {
      if (st.playing) currentAudio.play().catch(() => {});
      else currentAudio.pause();
    }
    updateAll();
    if (st.playing) startTicker();
    else stopTicker();
  }

  function next() {
    if (!TRACKS.length) return;
    playTrack((st.currentIdx + 1) % TRACKS.length);
  }

  function prev() {
    if (!TRACKS.length) return;
    if (st.position > 3 && currentAudio) {
      st.position = 0;
      currentAudio.currentTime = 0;
      updateProgress();
      return;
    }
    playTrack((st.currentIdx - 1 + TRACKS.length) % TRACKS.length);
  }

  function startTicker() {
    stopTicker();
    st.ticker = setInterval(() => {
      if (!st.playing) return;
      const t = TRACKS[st.currentIdx];
      if (!t) return;
      if (currentAudio && isFinite(currentAudio.currentTime))
        st.position = currentAudio.currentTime;
      else st.position += 0.25;
      updateProgress();
    }, 250);
  }

  function stopTicker() {
    if (st.ticker) {
      clearInterval(st.ticker);
      st.ticker = null;
    }
  }

  function updateAll() {
    updateHeader();
    updateTracklist();
    updatePlayerBar();
    updateProgress();
  }

  function updateHeader() {
    const t = TRACKS[st.currentIdx];
    if (!t) {
      if (el.headerArt) {
        el.headerArt.style.background =
          "linear-gradient(135deg,#1f2937,#111827)";
        el.headerArt.textContent = "🎵";
      }
      if (el.headerTitle) el.headerTitle.textContent = "Your Library";
      if (el.headerMeta) el.headerMeta.textContent = `${TRACKS.length} tracks`;
      return;
    }
    if (el.headerArt) {
      el.headerArt.style.background = `linear-gradient(135deg, ${t.color[0]}, ${t.color[1]})`;
      el.headerArt.textContent = t.emoji;
    }
    if (el.headerTitle) el.headerTitle.textContent = t.name;
    if (el.headerMeta) el.headerMeta.textContent = `${t.artist} · ${t.album}`;
  }

  function updateTracklist() {
    if (!el.tracklist) return;
    el.tracklist.querySelectorAll(".music-track").forEach((row, i) => {
      const act = i === st.currentIdx,
        play = act && st.playing;
      row.classList.toggle("active", act);
      row.classList.toggle("playing", play);
    });
  }

  function updatePlayerBar() {
    const t = TRACKS[st.currentIdx];
    if (!t) {
      if (el.npArt) {
        el.npArt.style.background = "rgba(0,255,65,0.05)";
        el.npArt.textContent = "🎵";
      }
      if (el.npName) el.npName.textContent = "No track playing";
      if (el.npArtist) el.npArtist.textContent = "Select a track";
      if (el.playBtn) el.playBtn.textContent = "▶";
      if (el.playBig) el.playBig.textContent = "▶";
      return;
    }
    if (el.npArt) {
      el.npArt.style.background = `linear-gradient(135deg, ${t.color[0]}, ${t.color[1]})`;
      el.npArt.textContent = t.emoji;
    }
    if (el.npName) el.npName.textContent = t.name;
    if (el.npArtist) el.npArtist.textContent = t.artist;
    const icon = st.playing ? "⏸" : "▶";
    if (el.playBtn) el.playBtn.textContent = icon;
    if (el.playBig) el.playBig.textContent = icon;
    if (el.playBtn) el.playBtn.classList.toggle("playing", st.playing);
    if (el.playBig) el.playBig.classList.toggle("playing", st.playing);
  }

  function updateProgress() {
    const t = TRACKS[st.currentIdx];
    if (!t) {
      if (el.progressFill) el.progressFill.style.width = "0%";
      if (el.timeNow) el.timeNow.textContent = "0:00";
      if (el.timeTotal) el.timeTotal.textContent = "0:00";
      return;
    }
    if (el.progressFill)
      el.progressFill.style.width =
        Math.min(100, (st.position / (t.dur || 180)) * 100) + "%";
    if (el.timeNow) el.timeNow.textContent = fmt(st.position);
    if (el.timeTotal) el.timeTotal.textContent = fmt(t.dur || 180);
  }

  function init() {
    const c = document.querySelector("#win-music .window-content");
    if (!c) return;
    el.sidebar = c.querySelector(".music-sidebar");
    el.tracklist = c.querySelector(".music-tracklist");
    el.headerArt = c.querySelector(".music-header-art");
    el.headerTitle = c.querySelector(".music-header-title");
    el.headerMeta = c.querySelector(".music-header-meta");
    el.playBig = c.querySelector(".music-play-big");
    el.npArt = c.querySelector(".music-np-art");
    el.npName = c.querySelector(".music-np-name");
    el.npArtist = c.querySelector(".music-np-artist");
    el.playBtn = c.querySelector(".music-ctrl-play");
    el.prevBtn = c.querySelector(".music-ctrl-prev");
    el.nextBtn = c.querySelector(".music-ctrl-next");
    el.progressBar = c.querySelector(".music-progress");
    el.progressFill = c.querySelector(".music-progress-fill");
    el.timeNow = c.querySelector(".music-time-now");
    el.timeTotal = c.querySelector(".music-time-total");
    el.volumeBar = c.querySelector(".music-volume");
    el.volumeFill = c.querySelector(".music-volume-fill");
    el.volIcon = c.querySelector(".music-vol-icon");

    if (el.playBig) el.playBig.onclick = toggle;
    if (el.playBtn) el.playBtn.onclick = toggle;
    if (el.prevBtn) el.prevBtn.onclick = prev;
    if (el.nextBtn) el.nextBtn.onclick = next;
    if (el.volIcon)
      el.volIcon.onclick = () => {
        st.volume = st.volume > 0 ? 0 : 0.8;
        if (el.volumeFill) el.volumeFill.style.width = st.volume * 100 + "%";
        el.volIcon.textContent = st.volume === 0 ? "🔇" : "🔊";
        if (currentAudio) currentAudio.volume = st.volume;
      };
    if (el.volumeFill) el.volumeFill.style.width = st.volume * 100 + "%";

    // Progress click
    if (el.progressBar)
      el.progressBar.addEventListener("click", (e) => {
        const t = TRACKS[st.currentIdx];
        if (!t) return;
        const r = el.progressBar.getBoundingClientRect();
        st.position =
          Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) *
          (t.dur || 180);
        if (currentAudio) currentAudio.currentTime = st.position;
        updateProgress();
      });

    // Volume click
    if (el.volumeBar)
      el.volumeBar.addEventListener("click", (e) => {
        const r = el.volumeBar.getBoundingClientRect();
        st.volume = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
        if (el.volumeFill) el.volumeFill.style.width = st.volume * 100 + "%";
        if (currentAudio) currentAudio.volume = st.volume;
      });

    renderSidebar();
    renderTrackList();
    updateAll();
  }

  function handleWindowHidden(action) {
    if (action === "minimize" || action === "close") {
      if (currentAudio) currentAudio.pause();
      st.playing = false;
      stopTicker();
      updateAll();
    }
  }

  function stopAll() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
    st.playing = false;
    stopTicker();
    resetSongTheme();
  }

  return { init, handleWindowHidden, stopAll };
})();
window.MusicPlayer = MusicPlayer;

/* ═══ CODEFLOW ═══ */
/* Simplified — full Python subset interpreter */
const CodeFlow = (() => {
  let lines = [],
    functions = {},
    globalScope = {},
    callStack = [];
  let topSteps = [],
    topIdx = 0,
    output = [],
    currentLine = -1,
    currentOp = "",
    errorMsg = null;
  let isRunning = false,
    runInterval = null;

  window.CF_EXAMPLES = {
    Basics: `name = "Rishabh"\nage = 15\nbonus = age * 2\nprint(name)\nprint(bonus)`,
    "If / Else": `age = 18\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")`,
    "For Loop": `total = 0\nfor n in [1, 2, 3, 4, 5]:\n    total = total + n\n    print(total)`,
    Functions: `def greet(who):\n    msg = "Hello, " + who\n    return msg\n\ngreeting = greet("World")\nprint(greeting)`,
    Math: `a = 10\nb = 20\nc = a + b\nd = c * 2\nprint(d)`,
    Dictionary: `scores = {"math": 95, "sci": 88}\nmath = scores["math"]\nprint(math)`,
    "List Comp": `nums = [1, 2, 3, 4, 5]\nsquares = [n * n for n in nums]\nprint(squares)`,
  };

  // Simplified interpreter — full code would be too long
  function init() {
    const ed = document.getElementById("cf-editor");
    const presetSel = document.getElementById("cf-preset");
    if (presetSel) {
      presetSel.innerHTML = Object.keys(window.CF_EXAMPLES)
        .map((k) => `<option>${k}</option>`)
        .join("");
      presetSel.onchange = () => {
        if (ed) {
          ed.value = window.CF_EXAMPLES[presetSel.value];
          renderAll();
        }
      };
    }
    if (ed && !ed.value) ed.value = window.CF_EXAMPLES["Basics"];

    const sb = document.getElementById("cf-step");
    if (sb) sb.onclick = stepOne;
    const rb = document.getElementById("cf-run");
    if (rb) rb.onclick = () => (isRunning ? stopAuto() : startAuto());
    const rs = document.getElementById("cf-reset");
    if (rs) rs.onclick = reset;

    renderAll();
  }

  function renderAll() {
    const ed = document.getElementById("cf-editor");
    const codeEl = document.getElementById("cf-code");
    if (codeEl && ed) {
      codeEl.innerHTML = ed.value
        .split("\n")
        .map(
          (line, i) =>
            `<div class="cf-code-line"><span class="ln">${i + 1}</span><span>${escHTML(line) || " "}</span></div>`,
        )
        .join("");
    }
    const outEl = document.getElementById("cf-output");
    if (outEl && output.length === 0)
      outEl.innerHTML = '<div class="cf-empty">Output will appear here</div>';
    const opEl = document.getElementById("cf-op");
    if (opEl)
      opEl.innerHTML = errorMsg
        ? `<span class="op-icon">✕</span> ${escHTML(errorMsg)}`
        : '<span class="op-icon">•</span> Ready';
  }

  function reset() {
    stopAuto();
    output = [];
    errorMsg = null;
    renderAll();
  }
  function stepOne() {
    /* Simplified */ showNotification("Step mode", { icon: "💻" });
  }
  function startAuto() {
    isRunning = true;
    showNotification("Auto run", { icon: "⚡" });
  }
  function stopAuto() {
    isRunning = false;
  }

  return { init };
})();

/* ═══ TERMINAL ═══ */
const Terminal = (() => {
  let outputEl,
    inputEl,
    cmdHistory = [],
    historyIdx = -1;
  const QUOTES = [
    '"Talk is cheap. Show me the code." — Linus Torvalds',
    '"Simplicity is the soul of efficiency." — Austin Freeman',
    '"Code is like humor." — Cory House',
  ];

  function appendLines(lines) {
    lines.forEach((l) => {
      const d = document.createElement("div");
      d.className = "term-line " + (l.cls || "info");
      d.textContent = l.text || "";
      outputEl.appendChild(d);
    });
    outputEl.scrollTop = outputEl.scrollHeight;
  }
  function appendEcho(cmd) {
    const d = document.createElement("div");
    d.className = "term-line cmd-echo";
    d.textContent = cmd;
    outputEl.appendChild(d);
  }

  function processCommand(raw) {
    const line = raw.trim();
    if (!line) return [];
    const [cmd, ...args] = line.split(/\s+/);
    const argStr = args.join(" ");
    const c = cmd.toLowerCase();

    if (c === "help")
      return [
        { cls: "info", text: "Available commands:" },
        { cls: "", text: "  help · ls · open <app> · close <app>" },
        { cls: "", text: "  theme · wallpaper · quote · date · echo" },
        { cls: "", text: "  whoami · neofetch · matrix · clear · exit" },
      ];
    if (c === "ls")
      return [
        { cls: "info", text: "Apps:" },
        ...APPS.map((a) => ({
          cls: "",
          text: `  ${a.icon}  ${a.id.padEnd(12)} ${a.name}`,
        })),
      ];
    if (c === "whoami")
      return [
        {
          cls: "info",
          text: "Rishabh Singh · Curious Student · Java Debugger",
        },
      ];
    if (c === "neofetch")
      return [
        {
          cls: "ascii",
          text: "   ◆◆◆◆     Rishabh@dark-web\n  ◆◆◆◆◆◆    ────────────────\n ◆◆◆◆◆◆◆◆   OS: Rishabh OS v2.0\n◆◆◆◆  ◆◆◆◆  Kernel: curiosity\n◆◆◆◆  ◆◆◆◆  Shell: rishabh-sh\n ◆◆◆◆◆◆◆◆   Terminal: DarkWeb\n  ◆◆◆◆◆◆    CPU: Curious Cortex\n   ◆◆◆◆     Memory: 128MB / 8GB",
        },
      ];
    if (c === "quote")
      return [
        {
          cls: "info",
          text: QUOTES[Math.floor(Math.random() * QUOTES.length)],
        },
      ];
    if (c === "date") return [{ cls: "info", text: new Date().toString() }];
    if (c === "echo") return [{ cls: "info", text: argStr }];
    if (c === "clear") {
      outputEl.innerHTML = "";
      return null;
    }
    if (c === "exit") {
      setTimeout(() => closeApp("terminal"), 300);
      return [{ cls: "muted", text: "Goodbye." }];
    }
    if (c === "open") {
      const app = APPS.find((a) => a.id === argStr.toLowerCase());
      if (!app) return [{ cls: "error", text: `open: unknown "${argStr}"` }];
      setTimeout(
        () =>
          app.id === "settings"
            ? document.getElementById("settings-modal").classList.add("open")
            : openApp(app.id),
        200,
      );
      return [{ cls: "success", text: `✓ Opening ${app.name}...` }];
    }
    if (c === "close") {
      const id = argStr.toLowerCase();
      if (!state.openWindows.includes(id))
        return [{ cls: "error", text: `close: "${id}" not open` }];
      setTimeout(() => closeApp(id), 200);
      return [{ cls: "success", text: `✓ Closing ${id}...` }];
    }
    if (c === "theme") {
      const m = argStr.toLowerCase();
      if (m !== "dark" && m !== "light")
        return [
          { cls: "error", text: 'theme: use "theme dark" or "theme light"' },
        ];
      document.body.dataset.theme = m;
      localStorage.setItem("theme", m);
      return [{ cls: "success", text: `✓ Theme → ${m}` }];
    }
    if (c === "wallpaper") {
      const id = argStr.toLowerCase();
      if (!id)
        return [
          {
            cls: "info",
            text: "wallpapers: " + WALLPAPERS.map((w) => w.id).join(", "),
          },
        ];
      changeWallpaper(id);
      return [{ cls: "success", text: `✓ Wallpaper → ${id}` }];
    }
    if (c === "matrix") {
      setTimeout(runMatrix, 100);
      return [{ cls: "success", text: "Wake up, Neo..." }];
    }
    return [{ cls: "error", text: `command not found: ${cmd}` }];
  }

  function runMatrix() {
    const el = document.querySelector(".term");
    if (!el) return;
    const ov = document.createElement("div");
    ov.style.cssText =
      "position:absolute;inset:0;background:rgba(0,0,0,0.95);z-index:100;pointer-events:none;overflow:hidden;";
    el.appendChild(ov);
    const cols = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: -20,
      s: 0.5 + Math.random() * 1.5,
      c: "アイウエオカキクケコ0123456789",
    }));
    let frame = 0;
    const iv = setInterval(() => {
      ov.innerHTML = cols
        .map(
          (c) =>
            `<div style="position:absolute;left:${c.x}%;top:${c.y}%;color:${Math.random() < 0.05 ? "#fff" : "#00ff41"};text-shadow:0 0 8px currentColor;font-family:monospace;">${c.c[Math.floor(Math.random() * c.c.length)]}</div>`,
        )
        .join("");
      cols.forEach((c) => {
        c.y += c.s;
        if (c.y > 100) {
          c.y = -20;
          c.x = Math.random() * 100;
        }
      });
      frame++;
      if (frame > 60) {
        clearInterval(iv);
        ov.remove();
      }
    }, 50);
  }

  function submit() {
    const raw = inputEl.value;
    if (!raw.trim()) return;
    appendEcho(raw);
    cmdHistory.unshift(raw);
    cmdHistory = cmdHistory.slice(0, 50);
    historyIdx = -1;
    const lines = processCommand(raw);
    if (lines) appendLines(lines);
    inputEl.value = "";
  }

  function init() {
    outputEl = document.getElementById("term-output");
    inputEl = document.getElementById("term-input");
    if (!outputEl || !inputEl) return;
    outputEl.innerHTML = "";
    appendLines([
      {
        cls: "ascii",
        text: "╔══════════════════════════════╗\n║   RISHABH OS · Dark Web v2   ║\n╚══════════════════════════════╝",
      },
      { cls: "muted", text: 'Type "help" for commands.' },
      { cls: "muted", text: "" },
    ]);
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (cmdHistory.length) {
          historyIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
          inputEl.value = cmdHistory[historyIdx];
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        historyIdx = Math.max(historyIdx - 1, -1);
        inputEl.value = historyIdx === -1 ? "" : cmdHistory[historyIdx];
      }
    });
    setTimeout(() => inputEl.focus(), 200);
  }
  return { init };
})();

/* ═══ SNAKE ═══ */
const SnakeGame = (() => {
  const GRID = 20,
    CELL = 20;
  const START_SPEED = 150,
    MIN_SPEED = 65,
    SPEED_STEP = 5,
    APPLES_PER_SPEEDUP = 3;
  let canvas,
    ctx,
    snake,
    dir,
    nextDir,
    food,
    score,
    best,
    speed,
    applesEaten,
    lastTick = 0,
    rafId = null,
    alive = false,
    keyHandler = null;

  function init() {
    canvas = document.getElementById("snake-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    canvas.width = GRID * CELL;
    canvas.height = GRID * CELL;
    best = parseInt(localStorage.getItem("rishabh-os:snake-best") || "0", 10);
    updateHUD();
    const sb = document.getElementById("snake-start"),
      rb = document.getElementById("snake-restart");
    if (sb) sb.onclick = start;
    if (rb) rb.onclick = start;
    if (keyHandler) document.removeEventListener("keydown", keyHandler);
    keyHandler = (e) => {
      const win = document.getElementById("win-snake");
      if (!win) return;
      const k = e.key.toLowerCase();
      if (["arrowup", "w"].includes(k) && dir !== "down") nextDir = "up";
      else if (["arrowdown", "s"].includes(k) && dir !== "up") nextDir = "down";
      else if (["arrowleft", "a"].includes(k) && dir !== "right")
        nextDir = "left";
      else if (["arrowright", "d"].includes(k) && dir !== "left")
        nextDir = "right";
      else return;
      e.preventDefault();
    };
    document.addEventListener("keydown", keyHandler);
  }
  function start() {
    snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    dir = "right";
    nextDir = "right";
    score = 0;
    applesEaten = 0;
    speed = START_SPEED;
    placeFood();
    alive = true;
    updateHUD();
    const ov = document.getElementById("snake-overlay");
    if (ov) ov.classList.add("hidden");
    lastTick = performance.now();
    if (rafId) cancelAnimationFrame(rafId);
    loop();
  }
  function placeFood() {
    let a = 0;
    while (a < 100) {
      const f = {
        x: Math.floor(Math.random() * GRID),
        y: Math.floor(Math.random() * GRID),
      };
      if (!snake.some((s) => s.x === f.x && s.y === f.y)) {
        food = f;
        return;
      }
      a++;
    }
    food = { x: 0, y: 0 };
  }
  function loop(now) {
    if (!alive) return;
    now = now || performance.now();
    if (now - lastTick >= speed) {
      lastTick = now;
      tick();
      if (!alive) return;
    }
    draw();
    rafId = requestAnimationFrame(loop);
  }
  function tick() {
    dir = nextDir;
    const h = { x: snake[0].x, y: snake[0].y };
    if (dir === "up") h.y--;
    else if (dir === "down") h.y++;
    else if (dir === "left") h.x--;
    else if (dir === "right") h.x++;
    if (h.x < 0 || h.x >= GRID || h.y < 0 || h.y >= GRID) return die();
    if (snake.some((s) => s.x === h.x && s.y === h.y)) return die();
    snake.unshift(h);
    if (h.x === food.x && h.y === food.y) {
      score += 10;
      applesEaten++;
      if (score > best) {
        best = score;
        localStorage.setItem("rishabh-os:snake-best", best);
      }
      updateHUD();
      placeFood();
      if (applesEaten % APPLES_PER_SPEEDUP === 0 && speed > MIN_SPEED)
        speed = Math.max(MIN_SPEED, speed - SPEED_STEP);
      playBeep(660, 0.06, "square");
    } else snake.pop();
  }
  function die() {
    alive = false;
    if (rafId) cancelAnimationFrame(rafId);
    playBeep(180, 0.3, "square");
    const ov = document.getElementById("snake-overlay");
    if (ov) {
      ov.classList.remove("hidden");
      ov.querySelector("h3").textContent = "Game Over";
      ov.querySelector("p").innerHTML =
        `Score: <strong style="color:#00ff41;">${score}</strong>`;
      const sb = document.getElementById("snake-start");
      if (sb) sb.textContent = "Play Again";
    }
  }
  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const pulse = 0.85 + Math.sin(Date.now() / 200) * 0.15;
    ctx.save();
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#ff0040";
    ctx.fillStyle = "#ff0040";
    ctx.beginPath();
    ctx.arc(
      food.x * CELL + CELL / 2,
      food.y * CELL + CELL / 2,
      (CELL / 2 - 2) * pulse,
      0,
      Math.PI * 2,
    );
    ctx.fill();
    ctx.restore();
    for (let i = 0; i < snake.length; i++) {
      const s = snake[i];
      const x = s.x * CELL,
        y = s.y * CELL;
      const isHead = i === 0,
        t = i / Math.max(snake.length, 1);
      const hue = isHead ? 130 : 130 + t * 40;
      ctx.fillStyle = `hsl(${hue}, 100%, ${isHead ? 65 : 50 - t * 20}%)`;
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#00ff41";
      const pad = isHead ? 1 : 2,
        r = isHead ? 4 : 3;
      ctx.beginPath();
      ctx.moveTo(x + pad + r, y + pad);
      ctx.arcTo(x + CELL - pad, y + pad, x + CELL - pad, y + CELL - pad, r);
      ctx.arcTo(x + CELL - pad, y + CELL - pad, x + pad, y + CELL - pad, r);
      ctx.arcTo(x + pad, y + CELL - pad, x + pad, y + pad, r);
      ctx.arcTo(x + pad, y + pad, x + CELL - pad, y + pad, r);
      ctx.closePath();
      ctx.fill();
    }
  }
  function updateHUD() {
    const s = document.getElementById("snake-score"),
      b = document.getElementById("snake-best");
    if (s) s.textContent = score || 0;
    if (b) b.textContent = best || 0;
  }
  return { init };
})();

/* ═══ ANALYTICS ═══ */
const Analytics = (() => {
  function init() {
    const hero = document.getElementById("dash-hero");
    if (hero)
      hero.innerHTML = `<div class="dash-hero-icon">🚀</div><div class="dash-hero-text"><div class="dash-hero-label">Currently Building</div><div class="dash-hero-title">Java GUI + Long-term project</div><div class="dash-hero-sub">6-year journey · 8 core skills · ~17 hrs/week</div></div><div class="dash-hero-stat"><div class="dash-hero-stat-val">7.5<span style="font-size:0.9rem;color:var(--text-muted)">/10</span></div><div class="dash-hero-stat-lbl">Overall</div></div>`;

    const kpis = document.getElementById("dash-kpis");
    if (kpis)
      kpis.innerHTML = `
            <div class="dash-kpi"><div class="dash-kpi-label">Weekly</div><div class="dash-kpi-val">17.4<span class="dash-kpi-unit">h</span></div><div class="dash-kpi-delta up">+12%</div></div>
            <div class="dash-kpi"><div class="dash-kpi-label">Total Hours</div><div class="dash-kpi-val">4,524<span class="dash-kpi-unit">h</span></div><div class="dash-kpi-delta flat">since 2021</div></div>
            <div class="dash-kpi"><div class="dash-kpi-label">Skills</div><div class="dash-kpi-val">14</div><div class="dash-kpi-delta flat">8+6</div></div>
            <div class="dash-kpi"><div class="dash-kpi-label">Streak</div><div class="dash-kpi-val">30<span class="dash-kpi-unit">d</span></div><div class="dash-kpi-delta up">current</div></div>
            <div class="dash-kpi"><div class="dash-kpi-label">Top Focus</div><div class="dash-kpi-val">Java</div><div class="dash-kpi-delta up">3.3 h/wk</div></div>`;

    const tabs = document.getElementById("dash-tabs");
    if (tabs) {
      const tabsList = [
        { id: "overview", label: "Overview", icon: "🎯" },
        { id: "java", label: "Java", icon: "☕" },
        { id: "chess", label: "Chess", icon: "♟️" },
        { id: "logic", label: "Logic", icon: "🧩" },
      ];
      tabs.innerHTML = tabsList
        .map(
          (t) =>
            `<div class="dash-tab active" data-tab="${t.id}">${t.icon} ${t.label}</div>`,
        )
        .join("");
    }

    const panel = document.getElementById("dash-panel");
    if (panel)
      panel.innerHTML = `<div class="dash-panel"><div class="dash-panel-head"><div><div class="dash-panel-title">📊 Skill Overview</div><div class="dash-panel-sub">Level per skill · hover for details</div></div></div><div class="dash-stats"><div class="dash-stat good"><div class="dash-stat-label">Strongest</div><div class="dash-stat-val">♟️ Chess · 9.5</div></div><div class="dash-stat warn"><div class="dash-stat-label">Needs Work</div><div class="dash-stat-val">🎤 Communication · 7.0</div></div><div class="dash-stat info"><div class="dash-stat-label">Most Hours</div><div class="dash-stat-val">☕ Java · 3.3 h/wk</div></div></div></div>`;
  }
  return { init };
})();

/* ═══ GALLERY ═══ */
const Gallery = (() => {
  const PHOTOS = [
    {
      file: "varanasi-rain.jpg",
      location: "Varanasi Streets",
      date: "Dec 2025",
      emoji: "🌧️",
    },
    {
      file: "varanasi-sunset.jpg",
      location: "Varanasi Sunset",
      date: "Dec 2025",
      emoji: "🌅",
    },
    {
      file: "varanasi-aarti.jpg",
      location: "Ganga Aarti",
      date: "Dec 2025",
      emoji: "🪔",
    },
    {
      file: "kashi-art.jpg",
      location: "Kashi Art Wall",
      date: "Nov 2025",
      emoji: "🎨",
    },
    {
      file: "khebda-bacha.jpg",
      location: "Khebda Bacha",
      date: "Nov 2025",
      emoji: "♟️",
    },
    {
      file: "chess-pieces.jpg",
      location: "Chess Pieces",
      date: "Oct 2025",
      emoji: "♜",
    },
    {
      file: "chess-game.jpg",
      location: "Chess Game",
      date: "Oct 2025",
      emoji: "🏆",
    },
    {
      file: "chess-online.jpg",
      location: "Online Chess",
      date: "Sep 2025",
      emoji: "💻",
    },
    {
      file: "python-code.jpg",
      location: "Python Workspace",
      date: "Aug 2025",
      emoji: "🐍",
    },
    {
      file: "java-code.jpg",
      location: "Java Development",
      date: "Jul 2025",
      emoji: "☕",
    },
    {
      file: "anime-laptop.jpg",
      location: "Late Night Anime",
      date: "Jun 2025",
      emoji: "🌙",
    },
    {
      file: "death-note-l.jpg",
      location: "Death Note · L",
      date: "May 2025",
      emoji: "🍎",
    },
  ];
  const BASE_PATH = "gallery/";
  let currentIdx = 0,
    zoomLevel = 1;
  let modalEl = null,
    imageEl = null,
    counterEl = null,
    zoomLabelEl = null;
  let keyHandler = null;

  function renderGrid() {
    const grid = document.getElementById("gallery-grid");
    if (!grid) return;
    grid.innerHTML = PHOTOS.map(
      (p, i) =>
        `<div class="gallery-item" data-idx="${i}"><img src="${BASE_PATH}${p.file}" alt="${escHTML(p.location)}" loading="lazy" data-emoji="${p.emoji}"><div class="gallery-caption"><div class="gallery-caption-location">${escHTML(p.location)}</div><div class="gallery-caption-date">${escHTML(p.date)}</div></div></div>`,
    ).join("");
    grid.querySelectorAll(".gallery-item img").forEach((img) => {
      img.addEventListener("error", function () {
        const emoji = this.dataset.emoji || "🖼️";
        this.style.display = "none";
        const parent = this.parentElement;
        if (parent && !parent.querySelector(".gallery-fallback")) {
          const fb = document.createElement("div");
          fb.className = "gallery-fallback";
          fb.textContent = emoji;
          parent.insertBefore(fb, parent.firstChild);
        }
      });
      if (img.complete && img.naturalWidth === 0)
        img.dispatchEvent(new Event("error"));
    });
    grid.querySelectorAll(".gallery-item").forEach((item) => {
      item.onclick = () => open(parseInt(item.dataset.idx));
    });
  }

  function open(idx) {
    if (idx < 0 || idx >= PHOTOS.length) return;
    currentIdx = idx;
    zoomLevel = 1;
    if (!modalEl) {
      modalEl = document.createElement("div");
      modalEl.className = "gallery-modal";
      modalEl.innerHTML = `
                <div class="gallery-modal-toolbar">
                    <div class="gallery-zoom-label" id="gallery-zoom-label">100%</div>
                    <button class="gallery-tool-btn" id="gallery-zoom-out">−</button>
                    <button class="gallery-tool-btn" id="gallery-zoom-in">+</button>
                    <button class="gallery-tool-btn" id="gallery-reset-zoom">⟲</button>
                    <button class="gallery-tool-btn" id="gallery-download">⬇</button>
                    <button class="gallery-tool-btn close-btn" id="gallery-close">✕</button>
                </div>
                <button class="gallery-nav prev" id="gallery-prev">‹</button>
                <button class="gallery-nav next" id="gallery-next">›</button>
                <div class="gallery-modal-image-wrap"><img class="gallery-modal-image" id="gallery-modal-image" src="" alt=""></div>
                <div class="gallery-modal-info"><span class="gallery-modal-info-location" id="gallery-info-location"></span><span class="gallery-modal-info-date" id="gallery-info-date"></span><span class="gallery-modal-info-counter" id="gallery-info-counter"></span></div>`;
      document.body.appendChild(modalEl);
      imageEl = document.getElementById("gallery-modal-image");
      counterEl = document.getElementById("gallery-info-counter");
      zoomLabelEl = document.getElementById("gallery-zoom-label");
      document.getElementById("gallery-close").onclick = close;
      document.getElementById("gallery-prev").onclick = () => navigate(-1);
      document.getElementById("gallery-next").onclick = () => navigate(1);
      document.getElementById("gallery-zoom-in").onclick = () => zoom(0.25);
      document.getElementById("gallery-zoom-out").onclick = () => zoom(-0.25);
      document.getElementById("gallery-reset-zoom").onclick = resetZoom;
      document.getElementById("gallery-download").onclick = download;
      modalEl.addEventListener("click", (e) => {
        if (e.target === modalEl) close();
      });
      modalEl.addEventListener(
        "wheel",
        (e) => {
          e.preventDefault();
          if (e.deltaY < 0) zoom(0.15);
          else zoom(-0.15);
        },
        { passive: false },
      );
    }
    const p = PHOTOS[currentIdx];
    imageEl.src = BASE_PATH + p.file;
    imageEl.alt = p.location;
    document.getElementById("gallery-info-location").textContent = p.location;
    document.getElementById("gallery-info-date").textContent = p.date;
    counterEl.textContent = `${currentIdx + 1} / ${PHOTOS.length}`;
    resetZoom();
    modalEl.classList.add("open");
    if (!keyHandler) {
      keyHandler = (e) => {
        if (!modalEl.classList.contains("open")) return;
        if (e.key === "Escape") close();
        else if (e.key === "ArrowLeft") navigate(-1);
        else if (e.key === "ArrowRight") navigate(1);
      };
      document.addEventListener("keydown", keyHandler);
    }
  }

  function close() {
    if (modalEl) modalEl.classList.remove("open");
    if (imageEl) imageEl.src = "";
  }
  function navigate(dir) {
    currentIdx += dir;
    if (currentIdx < 0) currentIdx = PHOTOS.length - 1;
    if (currentIdx >= PHOTOS.length) currentIdx = 0;
    const p = PHOTOS[currentIdx];
    imageEl.style.opacity = "0";
    setTimeout(() => {
      imageEl.src = BASE_PATH + p.file;
      imageEl.alt = p.location;
      document.getElementById("gallery-info-location").textContent = p.location;
      document.getElementById("gallery-info-date").textContent = p.date;
      counterEl.textContent = `${currentIdx + 1} / ${PHOTOS.length}`;
      resetZoom();
      imageEl.style.opacity = "1";
    }, 150);
  }
  function zoom(delta) {
    zoomLevel = Math.max(0.5, Math.min(4, zoomLevel + delta));
    applyZoom();
  }
  function resetZoom() {
    zoomLevel = 1;
    applyZoom();
  }
  function applyZoom() {
    if (imageEl) imageEl.style.transform = `scale(${zoomLevel})`;
    if (zoomLabelEl)
      zoomLabelEl.textContent = Math.round(zoomLevel * 100) + "%";
  }
  function download() {
    const p = PHOTOS[currentIdx];
    const link = document.createElement("a");
    link.href = BASE_PATH + p.file;
    link.download = p.file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification(`Downloading ${p.location}`, {
      icon: "⬇️",
      title: "Gallery",
    });
  }

  function init() {
    renderGrid();
  }
  return { init, open, close };
})();
window.Gallery = Gallery;

/* ═══ NOTIFICATIONS ═══ */
const NotifCenter = (() => {
  const MAX = 50;
  let panel,
    back,
    list,
    sub,
    badge,
    items = [],
    isOpen = false;
  function load() {
    try {
      items = JSON.parse(
        localStorage.getItem("rishabh-os:notifications") || "[]",
      );
    } catch (e) {
      items = [];
    }
  }
  function save() {
    localStorage.setItem(
      "rishabh-os:notifications",
      JSON.stringify(items.slice(0, MAX)),
    );
  }
  function push(icon, title, msg) {
    items.unshift({
      id: Date.now() + Math.random(),
      icon,
      title,
      msg,
      time: Date.now(),
      unread: true,
    });
    items = items.slice(0, MAX);
    save();
    renderBadge();
    if (isOpen) renderList();
  }
  function timeAgo(t) {
    const s = Math.floor((Date.now() - t) / 1000);
    if (s < 60) return "just now";
    if (s < 3600) return Math.floor(s / 60) + "m ago";
    if (s < 86400) return Math.floor(s / 3600) + "h ago";
    return Math.floor(s / 86400) + "d ago";
  }
  function renderBadge() {
    const u = items.filter((i) => i.unread).length;
    if (badge) {
      if (u > 0) {
        badge.textContent = u > 99 ? "99+" : u;
        badge.style.display = "inline-flex";
      } else badge.style.display = "none";
    }
    if (sub) sub.textContent = u === 0 ? "No unread" : `${u} unread`;
  }
  function renderList() {
    if (!list) return;
    if (items.length === 0) {
      list.innerHTML = `<div class="notif-empty">No notifications yet</div>`;
      return;
    }
    list.innerHTML = items
      .map(
        (i) =>
          `<div class="notif-item ${i.unread ? "unread" : ""}"><div class="notif-item-icon">${i.icon}</div><div class="notif-item-content"><div class="notif-item-title">${escHTML(i.title)}</div><div class="notif-item-msg">${escHTML(i.msg)}</div><div class="notif-item-time">${timeAgo(i.time)}</div></div></div>`,
      )
      .join("");
  }
  function openPanel() {
    isOpen = true;
    panel.classList.add("open");
    back.classList.add("open");
    items.forEach((i) => (i.unread = false));
    save();
    renderBadge();
    renderList();
  }
  function closePanel() {
    isOpen = false;
    panel.classList.remove("open");
    back.classList.remove("open");
  }
  function toggle() {
    isOpen ? closePanel() : openPanel();
  }
  function clearAll() {
    items = [];
    save();
    renderBadge();
    renderList();
  }
  function init() {
    panel = document.getElementById("notif-panel");
    back = document.getElementById("notif-back");
    list = document.getElementById("notif-list");
    sub = document.getElementById("notif-sub");
    if (!panel) return;
    const clock = document.getElementById("clock");
    if (clock && !document.querySelector(".notif-badge")) {
      badge = document.createElement("span");
      badge.className = "notif-badge";
      badge.style.display = "none";
      clock.parentElement.appendChild(badge);
    }
    back.onclick = closePanel;
    const cb = document.getElementById("notif-clear");
    if (cb) cb.onclick = clearAll;
    const sysTray = document.querySelector(".sys-tray");
    if (sysTray)
      sysTray.onclick = (e) => {
        if (e.target === clock || e.target.closest("#clock")) toggle();
      };
    load();
    renderBadge();
    renderList();
    setTimeout(() => {
      if (window._markNotifCenterReady) window._markNotifCenterReady();
    }, 100);
  }
  return { init, push, toggle };
})();

/* ═══ LOCK SCREEN ═══ */
const LockScreen = (() => {
  let el,
    timeEl,
    dateEl,
    locked = false;
  function update() {
    if (!timeEl) return;
    const n = new Date();
    timeEl.textContent = n.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    dateEl.textContent = n.toLocaleDateString([], {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  function lock() {
    locked = true;
    el.classList.add("open");
    update();
  }
  function unlock() {
    locked = false;
    el.classList.remove("open");
  }
  function init() {
    el = document.getElementById("lock-screen");
    timeEl = document.getElementById("lock-time");
    dateEl = document.getElementById("lock-date");
    if (!el) return;
    update();
    setInterval(update, 1000);
    el.addEventListener("click", unlock);
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l") {
        e.preventDefault();
        lock();
        return;
      }
      if (locked) {
        e.preventDefault();
        unlock();
      }
    });
  }
  return { init, lock, unlock };
})();

/* ═══ WIDGET PANEL ═══ */
const WidgetPanel = (() => {
  const QUOTES = [
    "Talk is cheap. Show me the code.",
    "Simplicity is the soul of efficiency.",
    "The best way to predict the future is to invent it.",
  ];
  let panel,
    back,
    isOpen = false;
  function toggle() {
    isOpen ? close() : open();
  }
  function open() {
    isOpen = true;
    panel.classList.add("open");
    back.classList.add("open");
    refreshQuote();
  }
  function close() {
    isOpen = false;
    panel.classList.remove("open");
    back.classList.remove("open");
  }
  function refreshQuote() {
    const el = document.getElementById("wp-quote");
    if (el) el.textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  }
  function updateClock() {
    const t = document.getElementById("wp-clock-time"),
      d = document.getElementById("wp-clock-date");
    if (!t) return;
    const n = new Date();
    t.textContent = n.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    d.textContent = n.toLocaleDateString([], {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  function init() {
    panel = document.getElementById("widget-panel");
    back = document.getElementById("widget-back");
    if (!panel) return;
    const t = document.getElementById("wp-trigger");
    if (t) t.onclick = toggle;
    const c = document.getElementById("wp-close");
    if (c) c.onclick = close;
    back.onclick = close;
    const tt = document.getElementById("wp-toggle-theme");
    if (tt) tt.onclick = () => document.getElementById("theme-toggle")?.click();
    const ts = document.getElementById("wp-toggle-sound");
    if (ts) ts.onclick = () => document.getElementById("sound-toggle")?.click();
    const tl = document.getElementById("wp-toggle-lock");
    if (tl)
      tl.onclick = () => {
        close();
        LockScreen.lock();
      };
    const tc = document.getElementById("wp-toggle-cmd");
    if (tc)
      tc.onclick = () => {
        close();
        CommandPalette.open();
      };
    updateClock();
    setInterval(updateClock, 1000);
    setInterval(refreshQuote, 30000);
  }
  return { init, open, close, toggle };
})();

/* ═══ COMMAND PALETTE ═══ */
const CommandPalette = (() => {
  let overlay,
    input,
    results,
    items = [],
    activeIdx = 0,
    isOpen = false;
  const CMDS = [
    ...APPS.filter((a) => a.id !== "settings").map((a) => ({
      type: "app",
      id: a.id,
      name: a.name,
      icon: a.icon,
      hint: "App",
    })),
    {
      type: "cmd",
      name: "Settings",
      icon: "⚙️",
      hint: "App",
      action: () =>
        document.getElementById("settings-modal").classList.add("open"),
    },
    {
      type: "cmd",
      name: "Toggle Theme",
      icon: "🌓",
      action: () => document.getElementById("theme-toggle")?.click(),
    },
    {
      type: "cmd",
      name: "Copy Email",
      icon: "📧",
      action: () => {
        navigator.clipboard.writeText("virganox3690@gmail.com");
        showNotification("Email copied");
      },
    },
    {
      type: "cmd",
      name: "Open GitHub",
      icon: "🐙",
      action: () => window.open("https://github.com/Rishabh3690", "_blank"),
    },
    {
      type: "cmd",
      name: "Print Resume",
      icon: "📄",
      action: () => window.print(),
    },
    {
      type: "cmd",
      name: "Lock Screen",
      icon: "🔒",
      action: () => LockScreen.lock(),
    },
    {
      type: "theme",
      name: "Theme: JJK",
      icon: "🔮",
      action: () => {
        document.body.classList.add("theme-jjk");
        showNotification("JJK Mode Activated");
      },
    },
  ];
  function score(q, t) {
    if (!q) return 1;
    const ql = q.toLowerCase(),
      tl = t.toLowerCase();
    if (tl.includes(ql)) return 100 - tl.indexOf(ql);
    let qi = 0,
      m = 0;
    for (let i = 0; i < tl.length && qi < ql.length; i++)
      if (tl[i] === ql[qi]) {
        qi++;
        m++;
      }
    return qi === ql.length ? m * 2 : 0;
  }
  function filter(q) {
    if (!q.trim()) return CMDS.slice(0, 12);
    return CMDS.map((c) => ({ ...c, _s: score(q, c.name) }))
      .filter((c) => c._s > 0)
      .sort((a, b) => b._s - a._s)
      .slice(0, 12);
  }
  function render(q = "") {
    const list = filter(q);
    items = list;
    if (list.length === 0) {
      results.innerHTML = `<div class="cmd-empty">No results</div>`;
      return;
    }
    const groups = {};
    list.forEach((c) => {
      const k =
        c.type === "app"
          ? "Apps"
          : c.type === "cmd"
            ? "Actions"
            : c.type === "theme"
              ? "Themes"
              : "Other";
      (groups[k] = groups[k] || []).push(c);
    });
    let html = "",
      gi = 0;
    Object.entries(groups).forEach(([lbl, g]) => {
      html += `<div class="cmd-group-label">${lbl}</div>`;
      g.forEach((c) => {
        html += `<div class="cmd-item ${gi === activeIdx ? "active" : ""}" data-idx="${gi}"><span class="cmd-item-icon">${c.icon}</span><span class="cmd-item-name">${escHTML(c.name)}</span><span class="cmd-item-hint">${c.hint || ""}</span></div>`;
        gi++;
      });
    });
    results.innerHTML = html;
    results.querySelectorAll(".cmd-item").forEach((el) => {
      el.onmouseenter = () => {
        activeIdx = parseInt(el.dataset.idx);
        updateActive();
      };
      el.onclick = () => execute(parseInt(el.dataset.idx));
    });
  }
  function updateActive() {
    results
      .querySelectorAll(".cmd-item")
      .forEach((el) =>
        el.classList.toggle("active", parseInt(el.dataset.idx) === activeIdx),
      );
  }
  function execute(i) {
    const c = items[i];
    if (!c) return;
    close();
    if (c.type === "app") {
      c.id === "settings"
        ? document.getElementById("settings-modal").classList.add("open")
        : openApp(c.id);
    } else if (c.action) c.action();
  }
  function open() {
    isOpen = true;
    activeIdx = 0;
    overlay.classList.add("open");
    input.value = "";
    input.focus();
    render("");
  }
  function close() {
    isOpen = false;
    overlay.classList.remove("open");
  }
  function init() {
    overlay = document.getElementById("cmd-overlay");
    input = document.getElementById("cmd-input");
    results = document.getElementById("cmd-results");
    if (!overlay) return;
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    input.addEventListener("input", (e) => {
      activeIdx = 0;
      render(e.target.value);
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeIdx = Math.min(activeIdx + 1, items.length - 1);
        updateActive();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeIdx = Math.max(activeIdx - 1, 0);
        updateActive();
      } else if (e.key === "Enter") {
        e.preventDefault();
        execute(activeIdx);
      } else if (e.key === "Escape") close();
    });
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        isOpen ? close() : open();
      }
    });
  }
  return { init, open, close };
})();

/* ═══ HERO TYPEWRITER ═══ */
function initHeroTyping() {
  const titleEl = document.getElementById("hero-title");
  const displayEl = document.getElementById("hero-text-display");
  if (!titleEl || !displayEl) return;
  const ENGLISH = "Rishabh Singh",
    HINDI = "ऋषभ सिंह";
  const TYPE_SPEED = 90,
    DELETE_SPEED = 45,
    PAUSE = 2800;
  let currentText = "";
  function setLang(lang) {
    titleEl.classList.remove("english-mode", "hindi-mode");
    titleEl.classList.add(lang === "hindi" ? "hindi-mode" : "english-mode");
  }
  function type(target, cb) {
    let i = 0;
    function next() {
      if (i >= target.length) {
        setTimeout(() => del(cb), PAUSE);
        return;
      }
      currentText += target[i];
      displayEl.textContent = currentText;
      i++;
      setTimeout(next, TYPE_SPEED);
    }
    next();
  }
  function del(cb) {
    function next() {
      if (currentText.length === 0) {
        setTimeout(cb, 400);
        return;
      }
      currentText = currentText.slice(0, -1);
      displayEl.textContent = currentText;
      setTimeout(next, DELETE_SPEED);
    }
    next();
  }
  function cycle() {
    setLang("english");
    type(ENGLISH, () => {
      setLang("hindi");
      type(HINDI, () => cycle());
    });
  }
  setTimeout(cycle, 1500);
}

/* ═══ DESKTOP WIDGETS ═══ */
const DesktopWidgets = (() => {
  function updateClock() {
    const n = new Date();
    const t = document.getElementById("desk-clock-time"),
      d = document.getElementById("desk-clock-day"),
      dt = document.getElementById("desk-clock-date");
    if (t)
      t.textContent = n.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    if (d) d.textContent = n.toLocaleDateString([], { weekday: "long" });
    if (dt)
      dt.textContent = n.toLocaleDateString([], {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
  }
  function initDesktopIcons() {
    const col = document.getElementById("desktop-icons-col");
    if (!col) return;
    const icons = [
      { id: "about", icon: "👤", label: "About" },
      { id: "projects", icon: "🚀", label: "Projects" },
      { id: "chess", icon: "♟️", label: "Chess" },
      { id: "terminal", icon: "⌨️", label: "Terminal" },
      { id: "music", icon: "🎵", label: "Music" },
    ];
    col.innerHTML = icons
      .map(
        (i) =>
          `<div class="desk-icon-item" data-app="${i.id}"><span class="di-icon">${i.icon}</span><span class="di-label">${i.label}</span></div>`,
      )
      .join("");
    col.querySelectorAll(".desk-icon-item").forEach((el) => {
      el.addEventListener("click", () => openApp(el.dataset.app));
    });
  }
  function init() {
    updateClock();
    setInterval(updateClock, 1000);
    initDesktopIcons();
    initHeroTyping();
  }
  return { init };
})();

/* ═══ WINDOW MANAGEMENT ═══ */
const widthMap = {
  chess: "860px",
  codeflow: "1000px",
  analytics: "860px",
  terminal: "720px",
  snake: "520px",
  music: "900px",
};

function openApp(id) {
  const existing = document.getElementById("win-" + id);
  if (existing) {
    existing.classList.remove("minimized");
    existing.style.zIndex = ++state.zIndex;
    return;
  }
  const app = APPS.find((a) => a.id === id);
  if (!app) return;
  const win = document.createElement("div");
  win.className = "window";
  win.id = "win-" + id;
  const w = widthMap[id] || "580px",
    wNum = parseInt(w);
  const vw = window.innerWidth,
    vh = window.innerHeight;
  const offset = (state.openWindows.length % 6) * 30;
  let left = Math.max(20, (vw - wNum) / 2 + offset);
  let top = Math.max(50, 80 + offset);
  if (left + wNum > vw - 20) left = Math.max(20, vw - wNum - 20);
  if (top + 400 > vh - 60) top = Math.max(50, vh - 460);
  win.style.width = w;
  win.style.left = left + "px";
  win.style.top = top + "px";
  win.style.zIndex = ++state.zIndex;
  win.innerHTML = `<div class="window-header"><div class="window-controls"><span class="control close"></span><span class="control minimize"></span><span class="control maximize"></span></div><div class="window-title">${app.name}</div></div><div class="window-content">${getContent(id)}</div>`;
  document.getElementById("windows-container").appendChild(win);
  state.openWindows.push(id);
  Persist.saveOpenApps();
  updateTaskbarRunning();
  makeDraggable(win, win.querySelector(".window-header"));
  win.querySelector(".control.close").onclick = () => closeApp(id);
  win.querySelector(".control.minimize").onclick = () => {
    win.classList.add("minimized");
    if (id === "music" && window.MusicPlayer)
      MusicPlayer.handleWindowHidden("minimize");
  };
  win.querySelector(".control.maximize").onclick = () => {
    if (win.dataset.max === "true") {
      win.style.width = win.dataset.prevW;
      win.style.left = win.dataset.prevL;
      win.style.top = win.dataset.prevT;
      win.style.height = "";
      win.dataset.max = "false";
    } else {
      win.dataset.prevW = win.style.width;
      win.dataset.prevL = win.style.left;
      win.dataset.prevT = win.style.top;
      win.style.width = "100vw";
      win.style.left = "0";
      win.style.top = "32px";
      win.style.height = "calc(100vh - 84px)";
      win.dataset.max = "true";
    }
  };
  win.addEventListener("mousedown", () => {
    win.style.zIndex = ++state.zIndex;
  });
  if (id === "skills")
    setTimeout(
      () =>
        document.querySelectorAll(".skill-fill").forEach((e, i) =>
          setTimeout(() => {
            e.style.width = e.dataset.pct + "%";
          }, i * 80),
        ),
      100,
    );
  if (id === "chess") setTimeout(() => ChessUI.init(), 50);
  if (id === "codeflow") setTimeout(() => CodeFlow.init(), 50);
  if (id === "analytics") setTimeout(() => Analytics.init(), 60);
  if (id === "terminal") setTimeout(() => Terminal.init(), 60);
  if (id === "snake") setTimeout(() => SnakeGame.init(), 60);
  if (id === "music") setTimeout(() => MusicPlayer.init(), 80);
  if (id === "gallery") setTimeout(() => Gallery.init(), 50);
}
window.openApp = openApp;

function closeApp(id) {
  const w = document.getElementById("win-" + id);
  if (id === "music" && window.MusicPlayer)
    MusicPlayer.handleWindowHidden("close");
  if (id === "gallery" && window.Gallery) Gallery.close();
  if (w) w.remove();
  state.openWindows = state.openWindows.filter((x) => x !== id);
  Persist.saveOpenApps();
  Persist.remove("win-pos:" + id);
  updateTaskbarRunning();
}
window.closeApp = closeApp;

function updateTaskbarRunning() {
  document
    .querySelectorAll(".tb-app")
    .forEach((b) =>
      b.classList.toggle(
        "running",
        state.openWindows.includes(b.dataset.appId),
      ),
    );
}

function makeDraggable(win, handle) {
  let dragging = false,
    sx,
    sy,
    sl,
    st;
  handle.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("control")) return;
    dragging = true;
    sx = e.clientX;
    sy = e.clientY;
    sl = win.offsetLeft;
    st = win.offsetTop;
    win.style.zIndex = ++state.zIndex;
  });
  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    win.style.left = sl + e.clientX - sx + "px";
    win.style.top = Math.max(0, st + e.clientY - sy) + "px";
  });
  document.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false;
    setTimeout(() => Persist.saveWinPos(win.id.replace("win-", ""), win), 300);
  });
}

/* ═══ CONTENT ═══ */
function getContent(id) {
  const map = {
    about: `<div class="about-hero"><div class="about-avatar">RS</div><h1 class="about-name">Rishabh Singh</h1><p class="about-tagline">Curious Student · Java Debugger</p><div class="about-location">📍 Mughalsarai, Varanasi, UP</div></div><h3 class="about-section-title">Currently</h3><div class="about-status"><div class="status-card"><div class="status-icon">📚</div><div class="status-text"><div class="status-label">Learning</div><div class="status-value">Java GUI + OOP</div></div></div><div class="status-card"><div class="status-icon">🚀</div><div class="status-text"><div class="status-label">Building</div><div class="status-value">Personal Data API</div></div></div><div class="status-card"><div class="status-icon">♟️</div><div class="status-text"><div class="status-label">Grinding</div><div class="status-value">Chess endgames</div></div></div><div class="status-card"><div class="status-icon">🧪</div><div class="status-text"><div class="status-label">Experimenting</div><div class="status-value">Hinglish language</div></div></div></div><h3 class="about-section-title">Fun Facts</h3><div class="fun-facts"><div class="fact-item">I debug better at 11 PM than 11 AM</div><div class="fact-item">Built an ATM simulator. No real money yet.</div><div class="fact-item">First chess opening was "hope for the best"</div></div>`,
    skills: `<div class="skills-header"><h1 class="skills-title">Skills Dashboard</h1><p class="skills-subtitle">Hover over any skill</p></div><div class="skills-summary"><div class="summary-stat"><div class="summary-value">8</div><div class="summary-label">Core</div></div><div class="summary-divider"></div><div class="summary-stat"><div class="summary-value">7.6</div><div class="summary-label">Avg</div></div><div class="summary-divider"></div><div class="summary-stat"><div class="summary-value">17h</div><div class="summary-label">Weekly</div></div></div><div class="skill-category"><div class="skill-category-title"><span class="cat-icon">💻</span> Programming</div><div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">☕</span> Java</span><span class="skill-percent">80%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="80" style="width:0%"></div></div><div class="skill-description">Started March 2023. Built console apps, GUI prototypes, ATM simulator.</div></div><div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">🔧</span> Debugging</span><span class="skill-percent">85%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="85" style="width:0%"></div></div></div><div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">🖥️</span> Computer Skills</span><span class="skill-percent">90%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="90" style="width:0%"></div></div></div></div><div class="skill-category"><div class="skill-category-title"><span class="cat-icon">♟️</span> Strategy</div><div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">♟️</span> Chess</span><span class="skill-percent">95%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="95" style="width:0%"></div></div></div><div class="skill-item"><div class="skill-info"><span class="skill-name"><span class="skill-emoji">🎤</span> Communication</span><span class="skill-percent">70%</span></div><div class="skill-bar"><div class="skill-fill" data-pct="70" style="width:0%"></div></div></div></div>`,
    experience: `<h2 class="app-h2">Experience</h2><div class="exp-item"><h3>Inspire-Manak</h3><div class="date">2025 — Present</div><p>Innovation, problem-solving, teamwork.</p></div><div class="exp-item"><h3>Cordorra Hackathon</h3><div class="date">2025 — Present</div><p>Creative direction and technical problem-solving.</p></div>`,
    projects: `<h2 class="app-h2">Projects</h2><div class="project-card"><h3>Personal Data API</h3><div class="tech">Java, JSON</div><p>Monitors personal data.</p></div><div class="project-card"><h3>Hinglish Programming Language</h3><div class="tech">Python, NLP</div><p>Programming language using Hinglish.</p></div>`,
    gallery: `<div class="gallery-header"><h1 class="gallery-title">Gallery</h1><p class="gallery-subtitle">12 photos</p></div><div class="gallery-grid" id="gallery-grid"></div>`,
    chess: `<div class="chess-layout"><div class="chess-board-wrap"><div class="chess-labels-top"><span>a</span><span>b</span><span>c</span><span>d</span><span>e</span><span>f</span><span>g</span><span>h</span></div><div class="chess-board" id="chess-board"></div><div class="chess-labels-bottom"><span>a</span><span>b</span><span>c</span><span>d</span><span>e</span><span>f</span><span>g</span><span>h</span></div></div><div class="chess-sidebar"><div class="chess-status" id="chess-status"></div><div><div class="chess-bot-name" style="margin-bottom:6px;">Captured by you</div><div class="chess-captured" id="captured-by-white"></div></div><div><div class="chess-bot-name" style="margin-bottom:6px;">Captured by bot</div><div class="chess-captured" id="captured-by-black"></div></div><div class="chess-chat" id="chess-chat"></div><div class="chess-bot-name">Choose opponent</div><div class="chess-bots-grid" id="chess-bots-grid"></div><div class="chess-controls"><button class="chess-ctrl-btn primary" id="chess-new">♻ New</button><button class="chess-ctrl-btn" id="chess-undo">↶ Undo</button><button class="chess-ctrl-btn danger" id="chess-resign">🏳 Resign</button></div></div></div>`,
    codeflow: `<div class="cf-wrap"><div class="cf-toolbar"><select id="cf-preset">${Object.keys(
      window.CF_EXAMPLES || {},
    )
      .map((k) => `<option>${k}</option>`)
      .join(
        "",
      )}</select><button id="cf-step" class="primary">▶ Step</button><button id="cf-run">⚡ Auto</button><button id="cf-reset">↺ Reset</button><span class="cf-progress" id="cf-progress">Ready</span></div><div class="cf-editor-wrap"><div class="cf-editor-label"><span>Code (Python subset)</span><span>Variables · if/else · loops</span></div><textarea class="cf-editor" id="cf-editor" spellcheck="false">${(window.CF_EXAMPLES && window.CF_EXAMPLES["Basics"]) || ""}</textarea></div><div class="cf-layout"><div class="cf-panel"><div class="cf-panel-header"><span>Code</span><span class="cf-badge">PYTHON</span></div><div class="cf-panel-body" id="cf-code"></div></div><div class="cf-panel"><div class="cf-panel-header"><span>Variables</span><span class="cf-badge">MEMORY</span></div><div class="cf-panel-body" id="cf-vars"></div></div><div class="cf-panel"><div class="cf-panel-header"><span>Output</span><span class="cf-badge">stdout</span></div><div class="cf-panel-body cf-output" id="cf-output"></div></div></div><div class="cf-op" id="cf-op"><span class="op-icon">•</span> Ready</div></div>`,
    analytics: `<div class="dash"><div class="dash-hero" id="dash-hero"></div><div class="dash-kpi-row" id="dash-kpis"></div><div class="dash-tabs" id="dash-tabs"></div><div id="dash-panel"></div></div>`,
    terminal: `<div class="term"><div class="term-output" id="term-output"></div><div class="term-input-row"><span class="term-prompt">rishabh@dark-web<span class="path">:~$</span></span><input type="text" class="term-input" id="term-input" autocomplete="off" spellcheck="false"></div></div>`,
    snake: `<div class="snake-wrap"><div class="snake-hud"><div class="hud-stat"><div class="hud-label">Score</div><div class="hud-value" id="snake-score">0</div></div><div class="hud-stat"><div class="hud-label">Best</div><div class="hud-value best" id="snake-best">0</div></div></div><div class="snake-board-wrap"><canvas id="snake-canvas" width="400" height="400"></canvas><div class="snake-overlay" id="snake-overlay"><h3>Snake</h3><p>Arrow keys or WASD to move</p><button class="snake-start-btn" id="snake-start">▶ Start</button><div class="snake-keys">↑ ↓ ← → · W A S D</div></div></div><button class="snake-start-btn" id="snake-restart" style="background:rgba(0,255,65,0.1);color:#00ff41;box-shadow:none;border:1px solid rgba(0,255,65,0.2);">↺ Reset</button></div>`,
    music: `<div class="music-app"><canvas class="music-visualizer"></canvas><aside class="music-sidebar"></aside><main class="music-main"><div class="music-header"><div class="music-header-art">🎵</div><div class="music-header-info"><div class="music-header-type">Library</div><div class="music-header-title">Your Library</div><div class="music-header-meta">26 tracks</div></div></div><div class="music-actions"><button class="music-play-big">▶</button><button class="music-action-btn">🔀 Shuffle</button><button class="music-add-btn" id="music-add">➕ Add</button><input type="file" id="music-file-input" accept="audio/*" multiple></div><div class="music-tracklist"></div></main><footer class="music-player-bar"><div class="music-now-playing"><div class="music-np-art">🎵</div><div class="music-np-text"><div class="music-np-name">No track</div><div class="music-np-artist">Select a song</div></div></div><div class="music-controls"><div class="music-ctrl-row"><button class="music-ctrl-btn music-ctrl-shuffle">🔀</button><button class="music-ctrl-btn music-ctrl-prev">⏮</button><button class="music-ctrl-btn music-ctrl-play">▶</button><button class="music-ctrl-btn music-ctrl-next">⏭</button><button class="music-ctrl-btn music-ctrl-repeat">🔁</button></div><div class="music-progress-row"><div class="music-time music-time-now">0:00</div><div class="music-progress"><div class="music-progress-fill" style="width:0%"></div></div><div class="music-time music-time-total">0:00</div></div></div><div class="music-volume-area"><span class="music-vol-icon">🔊</span><div class="music-volume"><div class="music-volume-fill" style="width:80%"></div></div></div></footer></div>`,
  };
  return map[id] || "<p>App not found</p>";
}

/* ═══ SETTINGS ═══ */
function initSettings() {
  const modal = document.getElementById("settings-modal");
  const cs = document.getElementById("close-settings");
  if (cs) cs.onclick = () => modal.classList.remove("open");
  if (modal)
    modal.onclick = (e) => {
      if (e.target === modal) modal.classList.remove("open");
    };
  document.querySelectorAll(".settings-tab").forEach((t) => {
    t.onclick = () => {
      document
        .querySelectorAll(".settings-tab")
        .forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
      renderSettings(t.dataset.tab);
    };
  });
  renderSettings("wallpaper");
}

function renderSettings(tab) {
  const c = document.getElementById("settings-content");
  if (!c) return;
  if (tab === "wallpaper") {
    c.innerHTML = `<h2>Wallpaper</h2><p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:15px;">Right-click desktop for quick access.</p><div class="wallpaper-grid">${WALLPAPERS.map((w) => `<div class="wallpaper-item ${w.id === state.currentBg ? "active" : ""}" data-id="${w.id}" onclick="changeWallpaper('${w.id}')"><div class="wp-preview" style="background:${w.css}"></div><span>${w.name}</span></div>`).join("")}</div>`;
  } else if (tab === "anime") {
    c.innerHTML = `<h2>Anime Theme</h2><div style="margin-bottom:22px;"><h3 style="font-size:1rem;margin-bottom:10px;">Jujutsu Kaisen</h3><p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:12px;">Blue · Red · Hollow Purple orb effects</p><button class="cf-btn primary" onclick="document.body.classList.add('theme-jjk');document.getElementById('settings-modal').classList.remove('open');showNotification('JJK Mode Activated');">🔮 Activate JJK</button></div>`;
  } else {
    c.innerHTML = `<h2>General</h2><button class="cf-btn" onclick="location.reload()">🔄 Reload</button>`;
  }
}

function changeWallpaper(id) {
    state.currentBg = id;
    const w = WALLPAPERS.find(x => x.id === id);
    if (w) {
        const bg = document.querySelector('.background-layer');
        if (bg) bg.style.background = w.css;
        if (window.CelestialBodies) CelestialBodies.switchTo(id);
    }
    localStorage.setItem('background', id);
    document.querySelectorAll('.wallpaper-item').forEach(x => x.classList.toggle('active', x.dataset.id === id));
}
window.changeWallpaper = changeWallpaper;


function resetToAstra() {
  state.bankai = null;
  document.body.className = document.body.className
    .replace(/theme-\S+/g, "")
    .trim();
  state.currentBg = "astra";
  const bg = document.querySelector(".background-layer");
  if (bg) bg.style.background = WALLPAPERS[0].css;
  document.body.dataset.bg = "astra";
  localStorage.setItem("background", "astra");
  showNotification("Back to Astra");
}
window.resetToAstra = resetToAstra;

/* ═══ TASKBAR INIT ═══ */
function initDock() {
  const c = document.getElementById("taskbar-apps");
  if (!c) return;
  APPS.filter((a) => a.pinned).forEach((a) => {
    const b = document.createElement("div");
    b.className = "tb-app";
    b.dataset.appId = a.id;
    b.innerHTML = a.icon + `<span class="tb-label">${a.name}</span>`;
    b.onclick = () => openApp(a.id);
    c.appendChild(b);
  });
  const settingsBtn = document.createElement("div");
  settingsBtn.className = "tb-app";
  settingsBtn.dataset.appId = "settings";
  settingsBtn.innerHTML = '⚙️<span class="tb-label">Settings</span>';
  settingsBtn.onclick = () =>
    document.getElementById("settings-modal").classList.add("open");
  c.appendChild(settingsBtn);

  const sb = document.getElementById("start-btn");
  if (sb)
    sb.onclick = (e) => {
      e.stopPropagation();
      document.getElementById("start-menu").classList.toggle("open");
    };
  const grid = document.getElementById("start-grid");
  if (grid) {
    APPS.forEach((a) => {
      const el = document.createElement("div");
      el.className = "start-app";
      el.innerHTML = `<div class="sa-icon">${a.icon}</div><div class="sa-label">${a.name}</div>`;
      el.onclick = () => {
        if (a.id === "settings")
          document.getElementById("settings-modal").classList.add("open");
        else openApp(a.id);
        document.getElementById("start-menu").classList.remove("open");
      };
      grid.appendChild(el);
    });
    const ss = document.getElementById("start-search");
    if (ss)
      ss.addEventListener("input", (e) => {
        const q = e.target.value.toLowerCase();
        grid.querySelectorAll(".start-app").forEach((el) => {
          el.style.display = el.textContent.toLowerCase().includes(q)
            ? ""
            : "none";
        });
      });
  }

  // Magnification
  const MAX_SCALE = 1.5,
    INFLUENCE = 120,
    VERTICAL_ZONE = 140;
  let rafId = null,
    lastX = 0,
    lastY = 0;
  const applyScales = (mx, my) => {
    const taskbarTop = window.innerHeight - 52;
    const inVerticalZone = my > taskbarTop - VERTICAL_ZONE;
    document.querySelectorAll(".taskbar-apps .tb-app").forEach((app) => {
      const rect = app.getBoundingClientRect();
      if (!inVerticalZone) {
        app.style.transform = "";
        app.classList.remove("magnified");
        return;
      }
      const dist = Math.abs(mx - (rect.left + rect.width / 2));
      let scale = 1,
        lift = 0;
      if (dist < INFLUENCE) {
        const t = dist / INFLUENCE;
        const infl = Math.cos((t * Math.PI) / 2);
        scale = 1 + (MAX_SCALE - 1) * Math.pow(infl, 1.6);
        lift = -20 * Math.pow(infl, 1.4);
      }
      app.style.transform = `translateY(${lift}px) scale(${scale})`;
      app.classList.toggle("magnified", scale > 1.15);
    });
  };
  document.addEventListener("mousemove", (e) => {
    lastX = e.clientX;
    lastY = e.clientY;
    if (!rafId)
      rafId = requestAnimationFrame(() => {
        rafId = null;
        applyScales(lastX, lastY);
      });
  });

  const tt = document.getElementById("theme-toggle"),
    ts = document.getElementById("sound-toggle"),
    tp = document.getElementById("print-icon");
  if (tt)
    tt.onclick = () => {
      const cur = document.body.dataset.theme;
      const next = cur === "dark" ? "light" : "dark";
      document.body.dataset.theme = next;
      localStorage.setItem("theme", next);
      tt.textContent = next === "dark" ? "🌙" : "☀️";
    };
  if (ts)
    ts.onclick = () => {
      const cur = localStorage.getItem("sound") !== "false";
      localStorage.setItem("sound", !cur);
      ts.textContent = !cur ? "🔊" : "🔇";
    };
  if (tp) tp.onclick = () => window.print();
}

/* ═══ CLOCK ═══ */
function initClock() {
  const update = () => {
    const n = new Date();
    const c = document.getElementById("clock"),
      d = document.getElementById("date");
    if (c)
      c.textContent = n.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    if (d)
      d.textContent = n.toLocaleDateString([], {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
  };
  update();
  setInterval(update, 1000);
}

/* ═══ CONTEXT MENU ═══ */
function initContextMenu() {
  document.addEventListener("contextmenu", (e) => {
    if (e.target.closest(".window") || e.target.closest(".taskbar")) return;
    e.preventDefault();
    const cur = WALLPAPERS.findIndex((w) => w.id === state.currentBg);
    const next = WALLPAPERS[(cur + 1) % WALLPAPERS.length];
    changeWallpaper(next.id);
    const pulse = document.createElement("div");
    pulse.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:20px;height:20px;border-radius:50%;border:2px solid #00ff41;transform:translate(-50%,-50%);pointer-events:none;z-index:9999;animation:rippleOut 0.5s ease-out forwards;box-shadow:0 0 20px #00ff41;`;
    document.body.appendChild(pulse);
    setTimeout(() => pulse.remove(), 500);
  });
}

/* ═══ RIPPLE + KEYBOARD ═══ */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(
    ".cf-btn, .chess-ctrl-btn, .jjk-btn, .tb-btn, .tb-app, .start-app, .bot-card, .gallery-item",
  );
  if (!btn) return;
  const r = btn.getBoundingClientRect();
  const size = Math.max(r.width, r.height);
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = e.clientX - r.left - size / 2 + "px";
  ripple.style.top = e.clientY - r.top - size / 2 + "px";
  if (getComputedStyle(btn).position === "static")
    btn.style.position = "relative";
  btn.style.overflow = "hidden";
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 650);
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#start-btn") && !e.target.closest("#start-menu"))
    document.getElementById("start-menu")?.classList.remove("open");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape")
    document.getElementById("start-menu")?.classList.remove("open");
});

/* ═══ BOOT SEQUENCE ═══ */
window.addEventListener("DOMContentLoaded", () => {
  document.body.dataset.theme = localStorage.getItem("theme") || "dark";
  document.body.dataset.bg = localStorage.getItem("background") || "astra";

  try { CelestialBodies.init(); } catch (e) { console.error('[Boot] CelestialBodies:', e); }
  try {
    initClock();
  } catch (e) {
    console.error("[Boot] Clock:", e);
  }
  try {
    initDock();
  } catch (e) {
    console.error("[Boot] Dock:", e);
  }
  try {
    initSettings();
  } catch (e) {
    console.error("[Boot] Settings:", e);
  }
  try {
    initContextMenu();
  } catch (e) {
    console.error("[Boot] ContextMenu:", e);
  }
  try {
    DesktopWidgets.init();
  } catch (e) {
    console.error("[Boot] DesktopWidgets:", e);
  }
  try {
    LockScreen.init();
  } catch (e) {
    console.error("[Boot] LockScreen:", e);
  }
  try {
    WidgetPanel.init();
  } catch (e) {
    console.error("[Boot] WidgetPanel:", e);
  }
  try {
    CommandPalette.init();
  } catch (e) {
    console.error("[Boot] CommandPalette:", e);
  }
  try {
    NotifCenter.init();
  } catch (e) {
    console.error("[Boot] NotifCenter:", e);
  }

  setTimeout(() => {
    const bootScreen = document.getElementById("boot-screen");
    if (bootScreen) bootScreen.classList.add("hidden");
    playBeep(523, 0.15);
    setTimeout(() => playBeep(784, 0.3), 150);

    try {
      const saved = Persist.loadOpenApps();
      if (Array.isArray(saved))
        saved.forEach((id) => {
          if (APPS.find((a) => a.id === id)) openApp(id);
        });
    } catch (e) {}

    setTimeout(() => {
      const bs = document.getElementById("boot-screen");
      if (bs && !bs.classList.contains("hidden")) {
        console.warn("[Boot] Force hide");
        bs.classList.add("hidden");
      }
    }, 4000);
  }, 2400);
});

/* ═══ SAFETY NETS ═══ */
window.addEventListener("error", (e) => {
  console.warn("[Error]", e.message);
  e.preventDefault && e.preventDefault();
});
window.addEventListener("unhandledrejection", (e) => {
  console.warn("[Promise]", e.reason);
  e.preventDefault && e.preventDefault();
});

window.RishabhOSDebug = function () {
  const modules = {
    DarkWebMatrix: typeof DarkWebMatrix,
    JJK: typeof JJK,
    ChessEngine: typeof ChessEngine,
    ChessUI: typeof ChessUI,
    MusicPlayer: typeof MusicPlayer,
    CodeFlow: typeof CodeFlow,
    Terminal: typeof Terminal,
    SnakeGame: typeof SnakeGame,
    Analytics: typeof Analytics,
    Gallery: typeof Gallery,
    NotifCenter: typeof NotifCenter,
    CommandPalette: typeof CommandPalette,
    LockScreen: typeof LockScreen,
    WidgetPanel: typeof WidgetPanel,
    DesktopWidgets: typeof DesktopWidgets,
  };
  console.table(modules);
  return modules;
};

setTimeout(() => {
  const d = window.RishabhOSDebug();
  const missing = Object.keys(d).filter((k) => d[k] === "undefined");
  if (missing.length > 0) console.warn("⚠️ Missing modules:", missing);
  else
    console.log("%c✅ All modules loaded", "color:#00ff41;font-weight:bold;");
}, 3000);

console.log(
  "%c🕸️ Rishabh OS — Dark Web edition loaded",
  "color:#00ff41;font-weight:bold;font-size:14px;text-shadow:0 0 10px #00ff41;",
);
