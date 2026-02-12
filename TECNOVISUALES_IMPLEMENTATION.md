# TECNOVISUALES — Implementation Master Plan
## For Claude Code Execution — Sprint-Based Approach

---

## DECISIONS CONFIRMED
- **Logo:** Create from scratch (text-based, cinematographic)
- **Videos:** Has some material, needs editing → launch with video placeholders
- **Stack:** Astro + Tailwind CSS + GSAP
- **Language:** English first, bilingual (EN/ES)
- **Domain:** tecnovisuales.com (purchased)
- **Repo:** github.com/chuchurex/tecnovisuales (empty, ready)

---

## MARKET RESEARCH — UPDATED FEB 2026

### Competitive Landscape Summary

**CBRA Films** (cbrafilms.com) — 14 years, ~4 employees, ~$431K revenue
- Services: Corporate video, chroma key, streaming, brand content
- Strengths: Technology, chroma studio, streaming capability
- Weaknesses: Generic WordPress site, SEO-heavy but poor design, no podcast offering
- Instagram: 2,589 followers (low engagement)
- **Opportunity for Tecnovisuales:** Their site looks dated. No cinematic feel. No podcast or 3D real estate.

**FeriaPixel** (feriapixel.cl) — Since 2012, 1-person + freelancers
- Services: Corporate video, animation, events, photography
- Strengths: Excellent SEO (ranks #1 for many keywords), clear process, 100% remote pre/post
- Weaknesses: Basic web design, repetitive SEO copy, no premium feel, no streaming/podcast/3D
- **Opportunity for Tecnovisuales:** FeriaPixel dominates search but their site feels like a template. Their copy is heavily keyword-stuffed. A premium site with real cinematic quality would stand apart immediately.

**El Encanto Pictures** (elencantopictures.com) — Las Condes, Santiago
- Services: TV commercials, ad films, 3D animation, production services
- Strengths: Cinematic quality, Latin American network, strong directorial roster
- Weaknesses: Very niche (advertising only), unprofessional tone (heavy Mexican slang), Jimdo-based English site
- **Opportunity for Tecnovisuales:** They're the closest in "cinematic feel" but their branding is chaotic and they don't serve corporate clients directly.

**Key Gap in Market:** NO competitor offers all 6 services (corporate video + podcasts + events + social content + streaming + 3D real estate) with a premium cinematic brand and a world-class website. This is Tecnovisuales' whitespace.

### Competitive Positioning Matrix

```
                    PREMIUM FEEL
                         ↑
                         |
    El Encanto ●         |         ● TECNOVISUALES (target)
    (chaotic brand)      |           (premium + integral)
                         |
    ─────────────────────┼──────────────────→ INTEGRAL SERVICE
                         |
    CBRA Films ●         |         
    (generic)            |         
                         |
    FeriaPixel ●         |
    (SEO-strong,         |
     basic design)       |
```

---

## SPRINT PLAN FOR CLAUDE CODE

### ⚡ SPRINT 0 — Project Setup (5 min)
**Goal:** Astro project initialized, configured, pushed to GitHub

Tasks:
1. `npm create astro@latest tecnovisuales`
2. Install Tailwind CSS integration
3. Configure `astro.config.mjs` (i18n: en/es)
4. Configure `tailwind.config.mjs` with brand colors & fonts
5. Create `src/styles/global.css` with CSS variables & base styles
6. Create basic `Layout.astro` with SEO meta tags
7. Push to GitHub

**Files created:**
- astro.config.mjs
- tailwind.config.mjs
- src/styles/global.css
- src/layouts/Layout.astro
- package.json (with dependencies)

---

### ⚡ SPRINT 1 — Navigation + Footer (10 min)
**Goal:** Site-wide nav and footer working on all pages

Tasks:
1. `Nav.astro` — Sticky, transparent on hero → solid on scroll, mobile hamburger
2. `Footer.astro` — Contact info, social links, WhatsApp CTA, Santiago map embed
3. `MobileMenu.astro` — Full-screen overlay menu

**Nav links (EN):**
- Services (dropdown) | Portfolio | About | Contact | ES/EN toggle

**Footer sections:**
- Logo + tagline
- Quick Links
- Services list
- Contact: Santiago, Chile | info@tecnovisuales.com | WhatsApp
- Social: Instagram, LinkedIn, Vimeo, YouTube
- © 2026 Tecnovisuales

---

### ⚡ SPRINT 2 — Homepage Hero + Services Section (15 min)
**Goal:** Above-the-fold impact + services grid

**Hero:**
- Full-viewport height
- Video background placeholder (dark cinematic gradient for now)
- Headline: "Cinematic Production. Global Vision."
- Subheadline: "15 years crafting visual stories that move audiences and build brands."
- CTAs: "View Our Work" | "Start a Project"
- Scroll indicator animation

**Services Grid (6 cards):**
1. Corporate Film — "Brand stories told with cinematic craft"
2. Podcasts & Interviews — "Multi-camera studio production"
3. Corporate Events — "Live multi-camera coverage & streaming"
4. Social Media Content — "Scroll-stopping content for brands"
5. Live Streaming — "Professional broadcast for hybrid events"
6. 3D Real Estate — "Immersive virtual tours & 360° experiences"

Each card: dark background, icon/number, title, one-line description, hover reveal

---

### ⚡ SPRINT 3 — Homepage: Portfolio + Stats + Process (15 min)
**Goal:** Social proof and methodology sections

**Featured Portfolio (4-6 items):**
- Grid layout with hover video preview placeholders
- Category tags
- Placeholder projects with cinematic placeholder images

**Stats Bar:**
- 15+ Years of Experience
- 200+ Projects Delivered
- 8 Countries
- 50+ Corporate Clients

**Process Section (3 steps, animated on scroll):**
1. Pre-Production — "Strategy, scripting, storyboarding. We plan every frame."
2. Production — "Cinema-grade cameras, professional lighting, expert crews."
3. Post-Production — "Color grading, sound design, motion graphics. Polished to perfection."

---

### ⚡ SPRINT 4 — Homepage: Testimonials + CTA + Full Page Assembly (10 min)
**Goal:** Complete homepage assembled

**Testimonials:**
- Client logo bar (placeholder logos)
- 2-3 quote cards with name, title, company

**Final CTA:**
- "Let's Create Something Extraordinary"
- "Tell us about your next project and let's bring your vision to life."
- Button: "Get in Touch" → /contact
- WhatsApp floating button

**Assembly:** Wire all sections into `index.astro`

---

### ⚡ SPRINT 5 — Service Pages (20 min)
**Goal:** All 6 service detail pages

Each service page follows a template:
1. Hero with service title + cinematic background
2. What We Offer (3-4 bullet features)
3. Our Process (tailored to service)
4. Equipment/Technology used
5. FAQ section (3-4 questions)
6. CTA → Contact

**Pages to create:**
- `/services/corporate-film`
- `/services/podcasts`
- `/services/events`
- `/services/social-media`
- `/services/streaming`
- `/services/real-estate-3d`
- `/services/` (index with grid)

---

### ⚡ SPRINT 6 — Portfolio + About + Contact Pages (15 min)
**Goal:** All remaining pages

**Portfolio (`/portfolio`):**
- Filterable grid by category
- Each item: thumbnail, title, category, year
- Click → modal or detail view with description

**About (`/about`):**
- Founder story + 15 years narrative
- Mission/Vision/Values
- Equipment showcase (camera list, tech)
- Team section (placeholder)

**Contact (`/contact`):**
- Contact form (Name, Email, Company, Service dropdown, Message)
- WhatsApp direct link
- Email: info@tecnovisuales.com
- Location: Santiago, Chile
- Google Maps embed

---

### ⚡ SPRINT 7 — i18n Spanish Version (15 min)
**Goal:** Full Spanish translation

- Create `/es/` routes for all pages
- Language switcher in nav
- All copy translated
- SEO meta tags in Spanish
- hreflang tags

---

### ⚡ SPRINT 8 — Polish + Deploy (10 min)
**Goal:** Production-ready

- Responsive testing (mobile, tablet, desktop)
- Performance optimization (lazy loading, image optimization)
- SEO: sitemap.xml, robots.txt, structured data
- Open Graph images
- Favicon
- 404 page
- Push to GitHub
- Deploy instructions for Vercel/Netlify

---

## COMPLETE SITE COPY — ENGLISH

### Homepage

**Hero:**
- H1: "Cinematic Production. Global Vision."
- Sub: "15 years crafting visual stories that move audiences and build brands."
- CTA1: "View Our Work"
- CTA2: "Start a Project"

**Services Section:**
- Section title: "What We Create"
- Section sub: "From corporate films to immersive 3D experiences — we bring the full power of cinema to every project."

| # | Service | Tagline | Description |
|---|---------|---------|-------------|
| 01 | Corporate Film | Brand stories told with cinematic craft | We produce brand films, documentaries, and institutional videos that elevate your message with Hollywood-level production quality. |
| 02 | Podcasts & Interviews | Multi-camera studio production | Professional podcast recording with cinema-grade cameras, studio lighting, and broadcast-quality audio. From recording to final edit. |
| 03 | Corporate Events | Live multi-camera coverage | Full event documentation with multiple cameras, professional editing, and same-day highlight reels. |
| 04 | Social Media Content | Scroll-stopping content for brands | Reels, shorts, and branded content designed for LinkedIn, Instagram, and YouTube — produced with cinematic quality. |
| 05 | Live Streaming | Professional broadcast for hybrid events | Broadcast-grade live streaming for corporate events, product launches, webinars, and hybrid conferences. |
| 06 | 3D Real Estate | Immersive virtual tours & 360° | Matterport scans, 3D walkthroughs, drone footage, and cinematic property videos for real estate developers. |

**Stats:**
- "15+ Years" — "of international audiovisual experience"
- "200+ Projects" — "delivered across industries"
- "8 Countries" — "where we've produced content"
- "50+ Clients" — "from Fortune 500 to innovative startups"

**Process:**
- Section title: "Our Process"
- Section sub: "Every project follows our proven three-phase approach."
- Phase 1: "Pre-Production" — "Strategy, scripting, storyboarding, location scouting. We plan every frame before the cameras roll."
- Phase 2: "Production" — "Cinema-grade cameras, professional lighting, expert crews, and cutting-edge technology on set."
- Phase 3: "Post-Production" — "Color grading, sound design, motion graphics, and meticulous editing. Polished to perfection."

**Testimonials:**
- Section title: "Trusted by Industry Leaders"
- Testimonial 1: "Tecnovisuales transformed our corporate communications. The cinematic quality of their work is unmatched in Chile." — [Client Name], [Title], [Company]
- Testimonial 2: "From concept to final delivery, their process was seamless. The results exceeded our expectations." — [Client Name], [Title], [Company]
- Testimonial 3: "Their podcast studio setup is world-class. We've produced 50+ episodes with them and the quality is consistently outstanding." — [Client Name], [Title], [Company]

**Final CTA:**
- H2: "Let's Create Something Extraordinary"
- Sub: "Tell us about your next project and let's bring your vision to life."
- CTA: "Get in Touch"

### About Page

**Hero:**
- H1: "15 Years of Visual Storytelling"
- Sub: "From international productions to Santiago's corporate scene — we bring world-class audiovisual expertise to every project."

**Story Section:**
- Title: "Our Story"
- Copy: "Tecnovisuales was born from a simple conviction: businesses deserve the same cinematic quality reserved for film and television. With 15 years of international experience spanning 8 countries, we've produced everything from corporate documentaries to live broadcast events. Now based in Santiago, Chile, we bring that global perspective to the local market — combining cutting-edge technology with masterful storytelling to create content that truly moves audiences."

**Values:**
- "Technical Excellence" — "We invest in the best equipment and constantly push the boundaries of what's possible in corporate production."
- "Visual Narrative" — "Every project tells a story. We don't just capture footage — we craft narratives that connect with audiences."
- "Reliability" — "15 years of on-time, on-budget delivery. Our clients trust us with their most important projects."
- "Innovation" — "From 3D virtual tours to AI-enhanced workflows — we're always exploring what's next in visual production."

**Equipment/Technology:**
- Cinema cameras (RED, ARRI, Blackmagic)
- Professional drones (DJI Inspire, Mavic 3 Pro)
- Matterport Pro3 for 3D scanning
- Broadcast-grade streaming hardware
- Professional audio (Sennheiser, Rode, Neumann)
- Full lighting kits (ARRI, Aputure)
- Post-production suite (DaVinci Resolve, Premiere Pro, After Effects)

### Contact Page

**Hero:**
- H1: "Start Your Project"
- Sub: "Tell us about your vision. We'll get back to you within 24 hours."

**Form fields:**
- Name (required)
- Email (required)
- Company
- Phone / WhatsApp
- Service interested in (dropdown: Corporate Film, Podcasts, Events, Social Media, Streaming, 3D Real Estate, Other)
- Project description (textarea)
- Estimated budget range (dropdown: Under $1M CLP, $1-3M CLP, $3-5M CLP, $5M+ CLP, Not sure yet)
- Submit: "Send Message"

**Contact Info:**
- Email: info@tecnovisuales.com
- WhatsApp: +56 9 XXXX XXXX
- Location: Santiago, Chile
- Response time: Within 24 hours

---

## COMPLETE SITE COPY — ESPAÑOL

### Homepage

**Hero:**
- H1: "Producción Cinematográfica. Visión Global."
- Sub: "15 años creando historias visuales que mueven audiencias y construyen marcas."
- CTA1: "Ver Nuestro Trabajo"
- CTA2: "Iniciar un Proyecto"

**Servicios:**
- Título: "Lo Que Creamos"
- Sub: "Desde videos corporativos hasta experiencias 3D inmersivas — llevamos todo el poder del cine a cada proyecto."

| # | Servicio | Tagline | Descripción |
|---|---------|---------|-------------|
| 01 | Video Corporativo | Historias de marca con calidad cinematográfica | Producimos videos institucionales, documentales de marca y comerciales que elevan tu mensaje con calidad de producción de nivel Hollywood. |
| 02 | Podcasts y Entrevistas | Producción multicámara en estudio | Grabación profesional de podcasts con cámaras de cine, iluminación de estudio y audio de calidad broadcast. Desde la grabación hasta la edición final. |
| 03 | Eventos Corporativos | Cobertura multicámara en vivo | Documentación completa de eventos con múltiples cámaras, edición profesional y resúmenes del mismo día. |
| 04 | Contenido para Redes | Contenido que detiene el scroll | Reels, shorts y contenido de marca diseñado para LinkedIn, Instagram y YouTube — producido con calidad cinematográfica. |
| 05 | Streaming en Vivo | Transmisión profesional para eventos híbridos | Streaming de calidad broadcast para eventos corporativos, lanzamientos de producto, webinars y conferencias híbridas. |
| 06 | Inmobiliario 3D | Tours virtuales inmersivos y 360° | Escaneos Matterport, recorridos 3D, tomas con drone y videos cinematográficos de propiedades para desarrolladoras inmobiliarias. |

**Estadísticas:**
- "15+ Años" — "de experiencia audiovisual internacional"
- "200+ Proyectos" — "entregados en múltiples industrias"
- "8 Países" — "donde hemos producido contenido"
- "50+ Clientes" — "desde Fortune 500 hasta startups innovadoras"

**Proceso:**
- Título: "Nuestro Proceso"
- Sub: "Cada proyecto sigue nuestro enfoque probado de tres fases."
- Fase 1: "Pre-Producción" — "Estrategia, guión, storyboard, scouting de locaciones. Planificamos cada cuadro antes de encender las cámaras."
- Fase 2: "Producción" — "Cámaras de cine, iluminación profesional, equipos expertos y tecnología de punta en set."
- Fase 3: "Post-Producción" — "Corrección de color, diseño de sonido, motion graphics y edición meticulosa. Pulido a la perfección."

**CTA Final:**
- H2: "Creemos Algo Extraordinario"
- Sub: "Cuéntanos sobre tu próximo proyecto y hagamos realidad tu visión."
- CTA: "Contáctanos"

### Página Nosotros

**Hero:**
- H1: "15 Años de Narrativa Visual"
- Sub: "De producciones internacionales al mundo corporativo de Santiago — traemos experiencia audiovisual de clase mundial a cada proyecto."

**Nuestra Historia:**
- "Tecnovisuales nació de una convicción simple: las empresas merecen la misma calidad cinematográfica reservada para el cine y la televisión. Con 15 años de experiencia internacional en 8 países, hemos producido desde documentales corporativos hasta eventos de transmisión en vivo. Ahora basados en Santiago, Chile, traemos esa perspectiva global al mercado local — combinando tecnología de punta con narrativa magistral para crear contenido que verdaderamente mueve audiencias."

### Página Contacto

**Hero:**
- H1: "Inicia Tu Proyecto"
- Sub: "Cuéntanos tu visión. Te respondemos en menos de 24 horas."

**Campos del formulario:**
- Nombre (requerido)
- Email (requerido)
- Empresa
- Teléfono / WhatsApp
- Servicio de interés (dropdown)
- Descripción del proyecto (textarea)
- Rango de presupuesto estimado (dropdown: Menos de $1M CLP, $1-3M CLP, $3-5M CLP, $5M+ CLP, Aún no lo sé)
- Enviar: "Enviar Mensaje"

---

## DESIGN SYSTEM

### Colors (CSS Variables)
```css
:root {
  --color-black: #0A0A0A;
  --color-black-light: #141414;
  --color-gold: #C8A455;
  --color-gold-light: #D4B76A;
  --color-gold-dark: #A8883D;
  --color-cream: #F0ECE4;
  --color-cream-dark: #D9D3C7;
  --color-gray: #8A8580;
  --color-gray-light: #B0ABA5;
  --color-gray-dark: #5A5550;
  --color-white: #FAFAF8;
}
```

### Typography
- **Display/Headlines:** Cormorant Garamond (serif, elegant, cinematic)
- **Body/UI:** Outfit (sans-serif, clean, modern)
- **Accent/Numbers:** Outfit Medium or Cormorant SC

### Tailwind Config Extensions
```js
colors: {
  brand: {
    black: '#0A0A0A',
    'black-light': '#141414',
    gold: '#C8A455',
    'gold-light': '#D4B76A',
    'gold-dark': '#A8883D',
    cream: '#F0ECE4',
    gray: '#8A8580',
    white: '#FAFAF8',
  }
},
fontFamily: {
  display: ['Cormorant Garamond', 'Georgia', 'serif'],
  body: ['Outfit', 'system-ui', 'sans-serif'],
}
```

---

## GEMINI DESIGN PROMPT

Use this prompt with Gemini Pro to generate the visual design system and page mockup descriptions:

```
You are a world-class web designer specializing in premium audiovisual production companies. Design a complete visual system and page layouts for TECNOVISUALES — a premium cinematographic production company based in Santiago, Chile.

BRAND IDENTITY:
- Name: Tecnovisuales
- Tagline EN: "Cinematic Production. Global Vision."
- Tagline ES: "Producción Cinematográfica. Visión Global."
- Industry: Premium audiovisual production (corporate film, podcasts, events, streaming, social media, 3D real estate)
- Positioning: Premium, cinematic, technological, 15 years experience
- Target: Large corporations, tech startups, personal brands

COLOR PALETTE:
- Primary Black: #0A0A0A (backgrounds, depth)
- Gold/Amber: #C8A455 (accents, CTAs, highlights)
- Warm Cream: #F0ECE4 (text on dark, light sections)
- Medium Gray: #8A8580 (secondary text, borders)
- Light sections use cream backgrounds, dark sections use near-black

TYPOGRAPHY:
- Display: Cormorant Garamond — elegant serif for headlines
- Body: Outfit — clean modern sans-serif
- The contrast between serif headlines and sans body creates a "cinema meets tech" feeling

AESTHETIC DIRECTION:
- Think: high-end Hollywood post-production house meets Scandinavian minimalism
- Dark, cinematic backgrounds with subtle film grain texture
- Gold accents used sparingly for maximum impact
- Generous whitespace (or "darkspace")
- Large typography with dramatic scale contrast
- Horizontal lines and geometric dividers as design elements
- Subtle parallax on scroll
- Video/image thumbnails with cinematic aspect ratios (2.39:1 or 16:9)
- Hover states that reveal motion/video
- NO generic stock photo feel — everything should feel "behind the camera"

DESIGN REFERENCES (style, not content):
- Territory Studio (territorystudio.com) — dark, cinematic, immersive
- Framestore (framestore.com) — elegant portfolio presentation
- The Mill (themill.com) — premium production company feel
- BUT adapted for a smaller, more personal company — warm, not cold

PAGES TO DESIGN:
1. HOMEPAGE — Full-screen video hero → services grid → featured portfolio → stats bar → process timeline → testimonials → final CTA → footer
2. SERVICE DETAIL PAGE — Hero with service title → features → process → equipment → FAQ → CTA
3. PORTFOLIO PAGE — Filterable grid with hover video previews
4. ABOUT PAGE — Founder story → values → equipment showcase → team
5. CONTACT PAGE — Split layout: form on left, contact info on right

SPECIFIC DESIGN ELEMENTS NEEDED:
- Logo concept: Clean, modern wordmark "TECNOVISUALES" — suggest a treatment using Cormorant Garamond or a custom geometric approach. The "T" and "V" could form a subtle camera/lens/frame shape. Minimal, works on dark and light backgrounds.
- Navigation: Transparent overlay on hero, solid on scroll, language toggle (EN/ES)
- Service cards: Dark cards with gold number, serif title, sans description, subtle border
- Portfolio grid: Masonry or uniform grid, cinematic aspect ratios, category filter pills
- Stats section: Large serif numbers with gold accent, small sans labels
- Process timeline: Horizontal 3-step with connecting line, icons, animated on scroll
- Testimonial cards: Dark background, gold quotation mark, cream text
- Footer: Multi-column, dark, with subtle gold accent line at top
- Mobile: Full-screen hamburger menu with large links, same cinematic feel

For each page, describe:
1. Layout structure (sections, grid, spacing)
2. Visual hierarchy (what draws the eye first, second, third)
3. Animation suggestions (scroll reveals, hovers, transitions)
4. Specific design details (borders, shadows, textures, spacing values)
5. Mobile adaptations

Output as detailed design specifications that a developer can implement directly in code.
```

---

## CLAUDE CODE EXECUTION PROMPT

When ready to start coding, use this prompt in Claude Code:

```
I need you to build the TECNOVISUALES website — a premium cinematographic production company. 

CRITICAL: Work in SHORT SPRINTS. Complete one sprint fully before moving to the next. Push to GitHub after each sprint so we don't lose progress.

REPO: github.com/chuchurex/tecnovisuales (already created, empty)
STACK: Astro + Tailwind CSS
LANGUAGE: English first, bilingual EN/ES

Read the file TECNOVISUALES_IMPLEMENTATION.md in this project for:
- Complete sprint breakdown (Sprint 0 through Sprint 8)
- All site copy in English and Spanish
- Design system (colors, typography, tailwind config)
- Page structure and sections

START WITH SPRINT 0: Project setup, install dependencies, configure Astro + Tailwind, push initial commit.

Then proceed sprint by sprint, confirming completion before moving on.

Design aesthetic: Dark cinematic (think Hollywood post-production studio). 
Colors: Black #0A0A0A, Gold #C8A455, Cream #F0ECE4, Gray #8A8580
Fonts: Cormorant Garamond (display) + Outfit (body)
```

---

*This document contains everything needed to execute the project. Copy it to the repo before starting Claude Code.*
