# Personal Portfolio — Nguyễn Trung
# Design System & Build Instructions for Claude Code

> **Phong cách**: Dark developer aesthetic · Tối giản có chiều sâu · Editorial precision
> **Lấy cảm hứng từ**: resend.com — dark background, code snippets, monospace accents, glowing CTAs

---

## 👤 Thông tin cá nhân

```
Name:       Nguyễn Trung
Role:       Full-Stack Developer · UI/UX Designer
Bio:        Mã Nguồn Trong Tay, Định Hướng Tương Lai
Email:      ntrungz0704@gmail.com
GitHub:     https://github.com/ntrungz0704
LinkedIn:   https://www.linkedin.com/in/npham-thanh-trung-dev/
```

### Tech Stack
```
Languages:  HTML · CSS · JavaScript · PHP · MySQL
Frameworks: React
Design:     Photoshop · Figma · Illustrator · CapCut
```

### Projects
```
1. PC PRO
   Mô tả: Nền tảng thương mại điện tử chuyên về linh kiện và thiết bị máy tính,
           cho phép người dùng tìm kiếm, so sánh và mua sắm linh kiện PC dễ dàng.
   Tech:   PHP · MySQL · HTML · CSS · JavaScript
   Link:   #

2. CineFast
   Mô tả: Ứng dụng web xem phim trực tuyến tốc độ cao với giao diện tối giản,
           hỗ trợ tìm kiếm phim, phân loại theo thể loại và phát streaming mượt mà.
   Tech:   React · Node.js · REST API · MySQL
   Link:   #

3. Portfolio
   Mô tả: Trang web portfolio cá nhân được thiết kế theo phong cách developer dark aesthetic,
           showcase các dự án và kỹ năng với hiệu ứng animation tinh tế.
   Tech:   HTML · CSS · JavaScript
   Link:   #
```

---

## 🎨 Design System

### Color Palette

```css
--bg-base:        #0a0a0a;   /* near-black background */
--bg-surface:     #111111;   /* card / section surface */
--bg-elevated:    #1a1a1a;   /* hover states, inputs */
--border:         #222222;   /* subtle dividers */
--border-muted:   #1c1c1c;   /* very subtle lines */

--text-primary:   #f0f0f0;   /* headings */
--text-secondary: #888888;   /* body / descriptions */
--text-muted:     #444444;   /* placeholders, labels */

--accent:         #ffffff;   /* primary CTA, highlights */
--accent-glow:    rgba(255,255,255,0.06);

--green:          #22c55e;   /* available badge */
--amber:          #f59e0b;   /* warnings */

/* Code syntax colors */
--code-bg:        #0d0d0d;
--code-keyword:   #e879f9;   /* purple — const, import */
--code-string:    #86efac;   /* green — strings */
--code-comment:   #444444;   /* grey — comments */
--code-number:    #60a5fa;   /* blue — numbers */
--code-fn:        #f97316;   /* orange — function names */
```

### Typography

```css
/* Display — Headlines */
font-family: 'DM Sans', sans-serif;
font-weight: 600-700;
letter-spacing: -0.03em;

/* Body */
font-family: 'DM Sans', sans-serif;
font-size: 15px;
line-height: 1.7;
color: #888888;

/* Mono — Code & badges */
font-family: 'JetBrains Mono', monospace;
font-size: 13px;
```

**Type Scale**
```
11px  — labels, badges (--text-xs)
13px  — secondary body (--text-sm)
15px  — primary body (--text-base)
18px  — subheadings (--text-lg)
24px  — section titles (--text-xl)
36px  — hero sub-headline (--text-2xl)
56px  — hero headline (--text-3xl)
72px  — display statement (--text-4xl)
```

### Components

#### Button Primary
```css
background: #ffffff;
color: #000000;
padding: 10px 20px;
border-radius: 8px;
font-size: 14px;
font-weight: 500;
transition: opacity 0.15s ease;
/* hover: opacity 0.88 */
```

#### Button Ghost
```css
background: transparent;
color: #888888;
border: 1px solid #222222;
padding: 10px 20px;
border-radius: 8px;
font-size: 14px;
/* hover: border #444, color #f0f0f0 */
```

#### Card
```css
background: #111111;
border: 1px solid #1c1c1c;
border-radius: 12px;
padding: 24px;
transition: border-color 0.2s, transform 0.2s;
/* hover: border #2a2a2a, translateY(-2px) */
```

#### Code Block
```css
background: #0d0d0d;
border: 1px solid #1c1c1c;
border-radius: 10px;
padding: 20px 24px;
font-family: 'JetBrains Mono', monospace;
font-size: 13px;
line-height: 1.7;
/* ::before content: '● ● ●', color: #2a2a2a */
```

#### Badge / Tag
```css
display: inline-flex;
padding: 4px 10px;
border-radius: 99px;
background: #1a1a1a;
border: 1px solid #222;
font-size: 11px;
color: #888;
font-family: monospace;
```

### Motion

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* duration: 0.5s ease, stagger: 0ms / 80ms / 160ms */

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
/* dùng cho: green dot trong Available badge */

/* Scroll reveal: IntersectionObserver → add class .visible */
.reveal { opacity: 0; transform: translateY(20px); transition: 0.6s ease; }
.reveal.visible { opacity: 1; transform: none; }
```

---

## 📐 Page Sections

### 1. Navigation — Sticky, backdrop-blur
```
Left:  "Nguyễn Trung"  (font-weight 600, color #f0f0f0)
Right: Work · About · Contact · [GitHub ↗]

height: 56px
border-bottom: 1px solid #111111
backdrop-filter: blur(12px)
background: rgba(10,10,10,0.8)
position: sticky, top: 0, z-index: 100
```

### 2. Hero Section
```
[● Available for work]  ← badge pill, green dot pulse

Nguyễn Trung,          ← clamp(48px, 7vw, 72px), weight 600
làm những điều         ← letter-spacing: -0.03em
tuyệt vời.             ← color: #f0f0f0

Mã Nguồn Trong Tay, Định Hướng Tương Lai.   ← 18px, #888, max-w 480px
Full-Stack Developer & UI/UX Designer.

[Get in touch →]  [View Work]

RIGHT SIDE — Floating code card:
┌─────────────────────────────────┐
│ ● ● ●                           │
│                                 │
│  const developer = {            │
│    name: "Nguyễn Trung",        │
│    role: "Full-Stack & UI/UX",  │
│    stack: ["React", "PHP",      │
│            "Figma", "MySQL"],   │
│    available: true,             │
│  };                             │
│                                 │
│  // Mã nguồn trong tay,         │
│  // định hướng tương lai. ✓     │
└─────────────────────────────────┘

Background: #0a0a0a + radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.03), transparent 70%)
```

### 3. Tech Stack Strip
```
Label: "TECHNOLOGIES I WORK WITH"  — 11px mono, #444, letter-spacing 0.1em

Badges (flex wrap, gap 8px, opacity 0.5, hover opacity 1):
HTML · CSS · JavaScript · PHP · MySQL · React
Photoshop · Figma · Illustrator · CapCut
```

### 4. Featured Projects — 2-col grid desktop, 1-col mobile
```
Mỗi card gồm:
┌──────────────────────────────────┐
│  [Preview area: bg #0d0d0d,      │
│   height 180px, border-radius 8] │
│   → hiển thị project name lớn   │
│     dạng code/text placeholder   │
├──────────────────────────────────┤
│  Tên Project                     │
│  Mô tả ngắn 2 dòng               │
│  [PHP] [MySQL] [JS]  badges      │
│  View project ↗                  │
└──────────────────────────────────┘

Projects: PC PRO · CineFast · Portfolio
Hover: translateY(-2px), border #333
```

### 5. About / Philosophy — Alternating blocks
```
BLOCK 1 — "First-class development experience"
Left:  Text về approach kỹ thuật của Trung
       "Tôi tin rằng code tốt không chỉ chạy được —
        nó phải dễ đọc, dễ mở rộng, và dễ bàn giao."
Right: Code snippet về clean code philosophy

BLOCK 2 — "Design meets engineering"
Left:  Code snippet về UI workflow (Figma → code)
Right: Text về việc bridge gap giữa design & dev
```

### 6. Contact CTA — Full-width card
```
background: #111111
border: 1px solid #1c1c1c
border-radius: 16px
padding: 80px 40px
text-align: center

"Hãy cùng xây dựng điều gì đó."   ← 48px, weight 600
"Tôi đang tìm kiếm dự án thú vị và cơ hội hợp tác mới."  ← #888

[Send me an email →]   [GitHub ↗]

Icons: GitHub · LinkedIn
Links:
  Email:    ntrungz0704@gmail.com
  GitHub:   https://github.com/ntrungz0704
  LinkedIn: https://www.linkedin.com/in/npham-thanh-trung-dev/
```

### 7. Footer
```
Left:  "Nguyễn Trung"
Right: © 2025 · Designed & built by Nguyễn Trung

font-size: 13px, color: #444
border-top: 1px solid #111
padding: 32px 0
```

---

## 🛠 Build Instructions for Claude Code

```
Read this entire CLAUDE.md file and create index.html following ALL requirements exactly.

TASK: Create a complete single-file portfolio website for Nguyễn Trung.

OUTPUT: One file — index.html — with embedded <style> and <script>.

STRICT RULES:
- Dark theme only: bg #0a0a0a, NO light mode, NO theme toggle
- Fonts via Google Fonts CDN: DM Sans + JetBrains Mono
- NO external JS frameworks (no jQuery, no React, no Tailwind)
- NO Bootstrap or any CSS framework
- Pure HTML + CSS + vanilla JS only
- All animations via CSS @keyframes
- Scroll reveal via IntersectionObserver API
- Responsive: works on 375px, 768px, 1280px+
- All 7 sections in order as specified above
- All personal info from this file (name, email, github, linkedin, projects)
- Meta tags: title, description, og:title, og:description

QUALITY BAR:
- Looks like a real production portfolio, not a template
- Every element has intentional spacing and sizing
- Code blocks have syntax highlighting using <span> with colors
- Hero layout is split: text left, code card right (on desktop)
- Tech badges are subtle, not overwhelming
```

---

## ✅ Pre-launch Checklist

- [ ] Tên "Nguyễn Trung" đúng ở Nav + Hero + Footer
- [ ] Email `ntrungz0704@gmail.com` link đúng (`mailto:`)
- [ ] GitHub link đúng: `https://github.com/ntrungz0704`
- [ ] LinkedIn link đúng: `https://www.linkedin.com/in/npham-thanh-trung-dev/`
- [ ] 3 projects hiển thị: PC PRO · CineFast · Portfolio
- [ ] Responsive trên mobile 375px
- [ ] Không còn `[placeholder]` hay `Lorem ipsum` nào
- [ ] Meta tags đầy đủ
- [ ] Animations hoạt động khi scroll

---

*CLAUDE.md · Portfolio Design System · Nguyễn Trung · 2025*
