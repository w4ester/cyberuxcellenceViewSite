# Navbar & CTA Buttons: Structure, Styling, and Interactivity

This document provides a clear mapping of all major CTA buttons (especially "Nominate Now") used throughout the Cyber UXcellence Awards project. It details their HTML usage, CSS selectors, and JavaScript connectors, with exact file paths and class names. This ensures safe, context-aware updates—no accidental breakage when refactoring!

---

## 1. Navbar "Nominate Now" Button

**HTML Location:**  
- `index.html`, inside the main navigation bar:
  ```html
  <div class="nav-links">
      ...
      <a href="#nominate" class="cta-button">NOMINATE NOW</a>
  </div>
  ```

**CSS Styling:**  
- File: `css/global.css`
- Selector: `.nav-links a.cta-button` (scoped ONLY to navbar)
  - Red background (`--mg-red`), white text
  - Compact, pill-shaped, uppercase, centered
  - No effect on other `.cta-button` instances

**JS Behavior:**  
- File: `js/main.js`
- Selector: `a[href="#nominate"], .cta-button`
  - Triggers the nomination modal
  - Safeguards prevent this logic from affecting sponsor buttons or unrelated CTAs

---

## 2. Hero Section "Nominate Now" CTA

**HTML Location:**  
- `sections/hero.html`
  ```html
  <div class="hero-buttons">
      <button id="nominate-trigger" class="cta-button">Nominate Now</button>
  </div>
  ```

**CSS Styling:**  
- File: `css/global.css` (global style)
- Selector: `.cta-button`
  - Large, pill-shaped, bold, bright red
- File: `css/hero.css` (may adjust spacing)

**JS Behavior:**  
- File: `js/main.js`
- Selector: `#nominate-trigger, .cta-button` (see above)

---

## 3. Timeline Section "Nominate Now" CTA

**HTML Location:**  
- `sections/timeline.html`
  ```html
  <a href="#nominate" class="cta-button">Nominate Now</a>
  ```

**CSS Styling:**  
- File: `css/global.css`
- Selector: `.cta-button` (global style)

**JS Behavior:**  
- File: `js/timeline.js`, `js/main.js`
- Click opens nomination modal

---

## 4. Award Categories "Nominate Now" Buttons (Per-Category)

**HTML Location:**  
- `sections/categories.html`, `sections/categories-mobile.html`
  ```html
  <a href="#nominate" class="cta-button nominate-btn">Nominate Now</a>
  ```

**CSS Styling:**  
- File: `css/global.css`
- Selector: `.cta-button` (global style)
- `.nominate-btn` may be targeted for category-specific tweaks

**JS Behavior:**  
- File: `js/categories.js`, `js/main.js`
- On click:  
  - Opens the nomination modal
  - Sets modal header to: `Nominate Now: [Category Name]` for context

---

## 5. Mobile Menu/Responsive "Nominate Now" Button

**HTML Location:**  
- `sections/categories-mobile.html`, possibly other mobile components
  ```html
  <div class="mobile-nominate-btn-container">
      <a href="#nominate" class="cta-button nominate-btn">Nominate Now</a>
  </div>
  ```

**CSS Styling:**  
- File: `css/global.css`
- Selector: `.mobile-nominate-btn-container .cta-button`

**JS Behavior:**  
- Same as Award Categories (category context used if present)

---

## 6. Sponsor CTA & Other Special Buttons

**HTML Location:**  
- `sections/sponsorship.html`
- Class: `.sponsor-cta-button` (NOT `.cta-button`)

**CSS Styling:**  
- File: `css/sponsorship.css`

**JS Behavior:**  
- Excluded from nomination/modal logic in `js/main.js`, `js/sponsorship.js`

---

## SAFE EDITING GUIDELINES

- **Navbar button:** Style ONLY via `.nav-links a.cta-button` for compact navbar appearance. Do NOT apply `.cta-button` global changes if you want only the navbar affected.
- **Hero/Timeline/Award Category buttons:** Style via `.cta-button` (global) or add `.nominate-btn` for category-specific tweaks.
- **JS logic:** Always excludes `.sponsor-cta-button` and only triggers modals for `.cta-button` or `a[href="#nominate"]`.
- **Award Categories:** Modal header dynamically set based on clicked category.

**Do not globally rename or alter `.cta-button` class without reviewing all above connections! Use context-specific selectors for safe changes.**

---

### Quick Reference Table

| Button Context      | HTML File/Section           | CSS Selector/Path                 | JS File(s)         | Special Logic                         |
|---------------------|----------------------------|------------------------------------|--------------------|---------------------------------------|
| Navbar CTA          | index.html (nav-links)     | .nav-links a.cta-button (global.css)| js/main.js         | Opens modal, navbar-only style        |
| Hero Section CTA    | sections/hero.html         | .cta-button (global.css, hero.css) | js/main.js         | Opens modal, large/primary style      |
| Timeline CTA        | sections/timeline.html     | .cta-button (global.css)           | js/timeline.js     | Opens modal                           |
| Award Categories    | categories.html, categories-mobile.html | .cta-button.nominate-btn (global.css) | js/categories.js   | Modal title includes category name    |
| Mobile CTA          | categories-mobile.html     | .mobile-nominate-btn-container .cta-button (global.css) | js/categories.js | Responsive, category context          |
| Sponsor Button      | sponsorship.html           | .sponsor-cta-button (sponsorship.css)| js/sponsorship.js  | Email link, never opens modal         |