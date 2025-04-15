# Cyber UXcellence Awards Website

This repository contains the front-end implementation for the Cyber UXcellence Awards website, celebrating excellence in cybersecurity product user experience and design.

## Project Structure

```
cyber-uxcellence/
│
├── index.html                   ← Main page with layout structure
├── css/
│   ├── global.css               ← Shared styles (fonts, layout, buttons, variables)
│   ├── hero.css                 ← Hero section styles
│   ├── about.css                ← About section styles
│   ├── categories.css           ← Categories section styles
│   ├── why.css                  ← Why Nominate section styles
│   ├── judges.css               ← Judges section styles
│   ├── timeline.css             ← Timeline section styles
│   ├── faq.css                  ← FAQ section styles
│   ├── sponsorship.css          ← Sponsorship section styles
│
├── js/
│   ├── main.js                  ← Loads modules dynamically
│   ├── hero.js                  ← Hero section functionality
│   ├── about.js                 ← About section functionality
│   ├── categories.js            ← Categories section functionality
│   ├── why.js                   ← Why Nominate section functionality
│   ├── judges.js                ← Judges section functionality
│   ├── timeline.js              ← Timeline section functionality
│   ├── faq.js                   ← FAQ section functionality
│   ├── sponsorship.js           ← Sponsorship section functionality
│
├── sections/
│   ├── hero.html                ← Hero section HTML
│   ├── about.html               ← About section HTML
│   ├── categories.html          ← Categories section HTML
│   ├── why.html                 ← Why Nominate section HTML
│   ├── judges.html              ← Judges section HTML
│   ├── timeline.html            ← Timeline section HTML
│   ├── faq.html                 ← FAQ section HTML
│   ├── sponsorship.html         ← Sponsorship section HTML
│
└── assets/
    └── images/                  ← Image assets
        ├── logo-white.svg       ← Logo for dark backgrounds
        ├── shield-icon.svg      ← Shield icon for hero background
        ├── categories/          ← Category-specific images
        └── icons/               ← UI icons
```

## Implementation Approach

This project uses a modular approach with the following characteristics:

1. **Separation of Concerns**: Each section has its own HTML, CSS, and JavaScript files
2. **Progressive Enhancement**: Core content works without JavaScript, enhanced with JS
3. **Performance Focus**: Minimal dependencies, optimized assets
4. **Accessibility**: WCAG 2.1 AA compliance, semantic HTML
5. **Responsive Design**: Mobile-first approach with responsive breakpoints

## Technology Stack

- Vanilla JavaScript (ES6+)
- CSS3 with custom properties (variables)
- HTML5 semantic elements
- HubSpot Form integration for nominations

## Brand Guidelines

The site follows the Cyber UXcellence Awards brand guidelines with:

- **Typography**: Inter (primary) and Roboto Mono (secondary) fonts
- **Colors**: Dark purple, orange/red, light purple, and white as primary palette
- **Patterns**: Diagonal lines and dot grid for texture
- **Icons**: Line-style icons with consistent visual language

## Development Setup

1. Clone the repository
2. Open `index.html` in a modern browser
3. No build process required for local development

## Deployment

The site is designed to be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.). 

## Browser Support

The site is compatible with:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Android Chrome)

## Contributors

- Developed by Mindgrub
