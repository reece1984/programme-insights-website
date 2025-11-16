# Programme Insights Marketing Website

A complete, professional B2B SaaS marketing website for Programme Insights, built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

## 🎨 Design Philosophy

- **Enterprise-Grade**: Designed to look like a UK management consultancy (Deloitte/Arup/Turner & Townsend), not a startup
- **No Gradients**: Clean, flat design with solid colors only
- **Professional Color Scheme**:
  - Navy Primary (#1e3a5f) - Main brand color
  - Dark Navy (#152844) - Darker sections
  - Teal Accent (#0f766e) - CTAs and highlights
  - Light Grey (#f8f9fa) - Section backgrounds
  - Medium Grey (#e5e7eb) - Borders and subtle elements
- **Typography**: Merriweather (serif) for headlines, Inter (sans-serif) for body text
- **Generous White Space**: Professional spacing throughout
- **Subtle Animations**: Understated Framer Motion scroll effects (desktop only)
- **Minimal Shadows**: Only shadow-sm and shadow-md for depth

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Fixed header with scroll behavior
│   │   └── Footer.tsx          # 4-column footer
│   ├── ui/
│   │   ├── Button.tsx          # Primary/secondary button variants
│   │   ├── Card.tsx            # Clean card component
│   │   ├── Badge.tsx           # Status badges (available/coming-soon)
│   │   └── Container.tsx       # Max-width container
│   └── sections/
│       ├── Hero.tsx            # Full viewport hero with trust bar
│       ├── ProblemStatement.tsx # 3-column problem layout
│       ├── PlatformOverview.tsx # Platform introduction
│       ├── ModuleCard.tsx      # Reusable module card
│       ├── Modules.tsx         # All 5 module cards
│       ├── TechnologySecurity.tsx # 2-column security/tech
│       ├── Credibility.tsx     # 3-column credentials
│       ├── SocialProof.tsx     # Metrics grid (2x2)
│       ├── Resources.tsx       # 3 resource cards
│       └── FinalCTA.tsx        # Bottom CTA section
├── pages/
│   ├── Home.tsx               # Homepage with all sections
│   └── FAQ.tsx                # FAQ page with accordion
├── App.tsx                    # Routes and layout
├── main.tsx                   # Entry point with Router
└── index.css                  # Tailwind v4 config and custom styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
cd "c:\Users\james\OneDrive\Documents\JR Automations (OneDrive)\programme-insights-website"
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Key Features

### Home Page Sections (in order)

1. **Hero** - Full viewport with headline, subheading, dual CTAs, and trust bar
2. **Problem Statement** - 3 key challenges facing programme directors
3. **Platform Overview** - Introduction to the integrated platform
4. **Modules** - 5 detailed module cards with alternating layouts:
   - Gateway Success (Available Now)
   - Baseline Success (Q2 2025)
   - Tender Success (Q2 2025)
   - Risk Success (Q3 2025)
   - Business Case Success (Q3 2025)
5. **Technology & Security** - 2-column security and technology features
6. **Credibility** - Sector experience, programme scale, professional standards
7. **Social Proof** - 4 key metrics in grid layout
8. **Resources** - 3 clickable resource cards
9. **Final CTA** - Call to action before footer

### FAQ Page

- Professional FAQ layout with accordion functionality
- 8 detailed questions covering:
  - Security and data residency
  - Comparison to traditional consultants
  - IPA Scout technology
  - Modular approach
  - Implementation timeline
  - NISTA/PAR experience
  - Consulting firm relationships
  - Data ownership

### Header

- Fixed position with scroll behavior (transparent → white)
- Desktop navigation with links to Platform, Modules, Security, FAQ
- Mobile hamburger menu
- "Schedule Consultation" CTA button

### Footer

- 4-column layout: Company, Platform, Resources, Legal
- Copyright and tagline
- All module links

## 🎨 Design Tokens

### Colors (Tailwind v4 Theme)

```css
--color-navy-primary: #1e3a5f
--color-dark-navy: #152844
--color-teal-accent: #0f766e
--color-light-grey: #f8f9fa
--color-medium-grey: #e5e7eb
```

### Typography

```css
--font-family-serif: 'Merriweather', Georgia, serif
--font-family-sans: 'Inter', system-ui, sans-serif
```

### Custom CSS Classes

- `.section-padding` - Consistent section padding (4rem/6rem)
- `.container-custom` - Max-width container with padding
- `.heading-xl` - Extra large headings (responsive)
- `.heading-lg` - Large headings (responsive)
- `.heading-md` - Medium headings (responsive)
- `.heading-sm` - Small headings (responsive)
- `.body-lg` - Large body text (responsive)
- `.body-base` - Base body text (responsive)
- `.bg-pattern` - Subtle grid pattern for hero

## 🔧 Technical Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **React Router 7** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS (using @tailwindcss/postcss)
- **Framer Motion 12** - Animation library
- **Lucide React** - Icon library

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px
- Stack columns on mobile
- Adjust font sizes (e.g., 56px→36px headlines on mobile)
- Mobile hamburger menu in header
- Reduced animations on mobile (via Framer Motion viewport settings)

## ✨ Animation Details

- Subtle fade-in and slide-up on scroll (0.5s duration)
- Only on desktop (viewport settings prevent on mobile)
- No animations on hero section
- Staggered delays for grid items (0.1s increments)

## 🎯 SEO & Meta

- Semantic HTML structure
- Proper heading hierarchy
- Meta description in index.html
- Descriptive page title

## 📝 Content Highlights

### Value Proposition
"Enterprise Assurance for Major UK Infrastructure Programmes"

### Target Audience
Programme directors managing £100M+ infrastructure delivery

### Key Differentiators
- UK Data Residency
- Same technology as IPA Scout
- 20+ years PMO expertise
- Modular approach (start with one, add others)
- Continuous intelligence vs. point-in-time assessments

### Trust Signals
- 3 programmes £750M+
- 7 programmes in pilot
- 50+ assessment criteria
- 85%+ accuracy rate
- 3-month reduction in gateway prep time

## 🚢 Deployment

The website is ready for deployment to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist` folder or connect to Git
- **GitHub Pages**: Deploy `dist` folder to gh-pages branch
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket

## 📊 Build Output

Production build creates optimized assets:
- Minified HTML, CSS, and JavaScript
- Code splitting for optimal loading
- Gzipped assets (CSS ~4.5KB, JS ~120KB)

## 🔐 Security Considerations

- No external dependencies with known vulnerabilities
- All Google Fonts loaded over HTTPS
- No inline scripts (CSP-friendly)
- No API keys or secrets in frontend code

## 🎯 Next Steps

To make the website fully functional:

1. **Connect CTA Buttons**: Link "Schedule Consultation" buttons to booking system
2. **Add Analytics**: Install Google Analytics or similar
3. **Contact Form**: Build contact/consultation request form
4. **Resource Links**: Create and link actual resource documents
5. **Favicon**: Replace default Vite favicon with Programme Insights logo
6. **Images**: Add real screenshots for module placeholders
7. **Platform Diagram**: Create visual diagram for Platform Overview section

## 💡 Usage Tips

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import in `src/pages/Home.tsx`
3. Add to render order
4. Use existing patterns for consistency

### Modifying Colors

Update the `@theme` section in `src/index.css`:

```css
@theme {
  --color-navy-primary: #1e3a5f;
  /* other colors */
}
```

### Adding Navigation Links

Update `navLinks` array in `src/components/layout/Header.tsx`

### Customizing Animations

Modify the `fadeInUp` object in section components:

```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};
```

## 📞 Support

For questions or issues with the website codebase, refer to:
- React documentation: https://react.dev
- Tailwind CSS v4: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

**Built with professionalism and attention to detail for Programme Insights.**
