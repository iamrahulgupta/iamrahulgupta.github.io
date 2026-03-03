# iamrahulgupta.github.io

Professional portfolio website for Rahul Gupta, Senior Software Engineer specializing in distributed systems, DNS security, and performance engineering.

**Live:** [iamrahulgupta.github.io](https://iamrahulgupta.github.io)

---

## 🎯 Overview

A modern, fully responsive portfolio showcasing 13+ years of backend engineering experience with focus on:
- Distributed Systems & System Architecture
- DNS Security (DoT, DoH, ODoH protocols)
- High-throughput telecom infrastructure
- C/C++ systems programming & Go backend services
- Performance optimization and debugging

Features include:
- ✨ **Responsive Design** - Mobile-first approach, works on all device sizes
- 🌓 **Dark Mode** - Theme toggle with automatic persistence
- ⚡ **Performance Optimized** - Critical CSS, lazy loading, smooth animations
- ♿ **Accessible** - WCAG compliant, semantic HTML, ARIA labels
- 📱 **Mobile Menu** - Hamburger navigation for small screens
- 🔍 **SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data
- 📊 **Analytics Ready** - Google Analytics integration template

---

## 📁 Repository Structure

```
iamrahulgupta.github.io/
├── index.html              # Main HTML document with all content
├── css/
│   └── style.css          # Complete stylesheet with responsive media queries
├── js/
│   ├── main.ts            # TypeScript entry point
│   └── modules/
│       ├── analytics.ts   # Google Analytics event tracking
│       ├── navigation.ts  # Mobile menu & smooth scrolling logic
│       ├── scroll.ts      # Fade-in animations & navbar behavior
│       ├── theme.ts       # Dark/light mode toggle
│       └── timestamp.ts   # Dynamic timestamp display
├── src/                   # TypeScript source (compiles to js/)
│   ├── main.ts
│   └── modules/
│       ├── analytics.ts
│       ├── navigation.ts
│       ├── scroll.ts
│       ├── theme.ts
│       └── timestamp.ts
├── assets/
│   ├── icons/             # SVG icons
│   └── images/            # Portfolio images
├── resume/
│   └── Rahul_Gupta_Resume.pdf
├── tsconfig.json          # TypeScript configuration
├── package.json           # Node.js dependencies & scripts
├── README.md              # This file
├── PERFORMANCE_ANALYSIS.md # Performance metrics & optimization notes
└── .gitignore            # Git ignore rules
```

---

## 📄 File Descriptions

### HTML Structure (`index.html`)
Main document containing:
- **Header/Navigation** - Sticky navbar with dark mode toggle and mobile menu
- **Hero Section** - Introduction with social links (GitHub, LinkedIn, Email)
- **Metrics Section** - Key achievements (13+ years, DNS security, throughput)
- **About Section** - Professional background & focus areas
- **Selected Systems Work** - Project highlights (ODoH, DoT, Telecom CDRs)
- **Core Expertise** - Technology & skill summary
- **Experience Timeline** - Career progression (2012-2025)
- **Contact CTA** - Call-to-action for opportunities
- **Footer** - Copyright & tagline

**Commented Sections (ready to uncomment):**
- Engineering Philosophy section
- Currently Exploring section
- Hero diagram visualization

### CSS Styling (`css/style.css`)
- **Color System** - CSS variables for light/dark mode theming
- **Base Styles** - Typography, spacing, animations
- **Components** - Header, navigation, buttons, cards, timeline
- **Responsive Breakpoints:**
  - Mobile: ≤479px (extra small devices)
  - Mobile: 480px-767px (standard mobile)
  - Tablet: 768px-1199px (tablets & small laptops)
  - Desktop: ≥1200px (desktops & large displays)

### JavaScript Modules

**`modules/theme.ts`** - Dark/Light Mode
- Toggles between light and dark color schemes
- Persists preference to localStorage
- Smooth color transitions

**`modules/scroll.ts`** - Scroll Animations & Navbar
- Fade-in animations for sections on scroll
- Navbar shrink effect on page scroll
- Intersection Observer for performance

**`modules/navigation.ts`** - Navigation & Mobile Menu
- Mobile hamburger menu toggle with animated icon
- Smooth scroll to section anchors
- Active link highlighting based on scroll position
- Auto-close menu on link click or outside click
- **Note:** Compile TypeScript before testing changes: `npm run build`

**`modules/analytics.ts`** - Analytics Tracking
- Google Analytics event integration template
- Ready for custom event tracking

**`modules/timestamp.ts`** - Dynamic Timestamp
- Updates "Last Updated" date on resume button
- Displays current month/year dynamically

**`main.ts`** - Entry Point
- Initializes all modules on DOMContentLoaded
- Uses requestIdleCallback for non-critical scripts
- Fallback setTimeout for older browsers

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Modern web browser for testing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iamrahulgupta/iamrahulgupta.github.io.git
   cd iamrahulgupta.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Compile TypeScript (if needed)**
   ```bash
   npm run build
   # or watch mode for development
   npm run watch
   ```

---

## 🧪 Testing Locally

### Option 1: Using npx serve (Recommended)

```bash
npx serve .
```

This starts a local dev server. Open the URL shown in terminal (typically `http://localhost:3000`).

### Option 2: Using Python (Built-in)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

### Option 3: Using Node.js with http-server

```bash
npm install -g http-server
http-server -p 8000
```

Then open: `http://localhost:8000`

### Option 4: Using VSCode Live Server Extension

1. Install "Live Server" extension in VSCode
2. Right-click on `index.html` → "Open with Live Server"
3. Browser opens automatically at `http://localhost:5500`

---

## ✅ Testing Checklist

After running locally, verify these features:

### 🎨 Visual & Layout
- [ ] Page loads without errors in browser console (F12)
- [ ] All text is readable with proper contrast
- [ ] Images/icons load correctly
- [ ] Spacing and alignment look proper on desktop
- [ ] No horizontal scrolling on any screen size

### 📱 Responsive Design
- [ ] **Mobile (320px-480px)**: No layout breaks, hamburger menu appears
- [ ] **Tablet (768px-1024px)**: 2-column metrics, full nav visible
- [ ] **Desktop (1200px+)**: 4-column metrics, optimal spacing
- [ ] **Resize Test**: Drag browser edge to test fluid resizing

### 🌓 Dark Mode
- [ ] Click theme toggle button (top right)
- [ ] Colors change appropriately (white→dark gray text, etc.)
- [ ] All sections remain readable in both modes
- [ ] Refresh page → dark mode preference persists

### 📱 Mobile Menu
- [ ] On mobile (< 768px width), hamburger menu appears
- [ ] Click hamburger → menu slides open with smooth animation
- [ ] Menu closes when clicking a link
- [ ] Menu closes when clicking outside
- [ ] Links work and scroll to correct sections

### 🔗 Navigation
- [ ] All navigation links work (Overview, Systems Work, Career)
- [ ] Smooth scroll animation on link click
- [ ] Active link highlighting as you scroll sections
- [ ] Resume button opens PDF in new tab

### 📊 Content
- [ ] All 7 main sections visible: Hero, Metrics, About, Projects, Expertise, Experience, Contact
- [ ] Timeline items display correctly (4 positions shown)
- [ ] Social icons (GitHub, LinkedIn, Email) are clickable
- [ ] Resume button text shows "View Resume"

### ⚡ Performance
- [ ] Page loads in < 2 seconds
- [ ] Animations are smooth (no jank)
- [ ] Scroll animation works without lag
- [ ] No console errors or warnings

### ♿ Accessibility
- [ ] Tab navigation works through all interactive elements
- [ ] Screen reader friendly (test with Chrome DevTools)
- [ ] Buttons have proper ARIA labels
- [ ] Color contrast meets WCAG standards

---

## 🛠 Development Workflow

### TypeScript Development
Source files are in `src/` directory. After editing:

1. Build once:
   ```bash
   npm run build
   ```

2. Or watch for changes:
   ```bash
   npm run watch
   ```

3. Compiled files appear in `js/` directory

### Manual CSS Updates
Edit `css/style.css` directly and refresh browser to see changes.

### Adding New Sections
1. Add HTML markup in `index.html`
2. Add CSS in `css/style.css` with mobile-first responsive breakpoints
3. Add JavaScript in `src/modules/` if needed
4. Compile TypeScript: `npm run build`

---

## 📋 SEO & Metadata

The site includes:
- Meta tags for og (OpenGraph) - for LinkedIn/Facebook previews
- Twitter Card meta tags
- JSON-LD structured data for rich snippets
- Canonical URL specification
- Semantic HTML5 markup

---

## 🎓 Future Enhancements

Ready-to-uncomment sections in `index.html`:

1. **Engineering Philosophy** (line ~381)
   - Add your design principles and philosophy

2. **Currently Exploring** (line ~388)
   - Add emerging technologies you're learning (eBPF, distributed tracing, etc.)

3. **Hero System Diagram** (line ~305)
   - Uncomment to show DNS/ODoH architecture diagram

---

## 📧 Contact & Attribution

- **Portfolio**: [iamrahulgupta.github.io](https://iamrahulgupta.github.io)
- **GitHub**: [github.com/iamrahulgupta](https://github.com/iamrahulgupta)
- **LinkedIn**: [linkedin.com/in/iamrahulgupta](https://linkedin.com/in/iamrahulgupta)
- **Email**: mailgupta.rahul@gmail.com

---

## 📄 License

This portfolio website is personal property. All rights reserved.

Last updated: March 2026