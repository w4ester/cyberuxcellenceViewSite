# How to Make Changes Per Section - Cyber UXcellence Awards Website

This guide explains how to make changes to each section of the Cyber UXcellence Awards website. The site uses a modular architecture with separate HTML, CSS, and JavaScript files for each section.

## Table of Contents
- [General Architecture](#general-architecture)
- [Making Common Changes](#making-common-changes)
- [Section-Specific Guides](#section-specific-guides)
  - [Hero Section](#hero-section)
  - [About Section](#about-section)
  - [Categories Section](#categories-section)
  - [Why Nominate Section](#why-nominate-section)
  - [Judges Section](#judges-section)
  - [Timeline Section](#timeline-section)
  - [FAQ Section](#faq-section)
  - [Sponsorship Section](#sponsorship-section)
- [Working with Assets](#working-with-assets)
- [Deployment](#deployment)

## General Architecture

The website follows a modular structure:

```
cyber-uxcellence/
│
├── index.html                   ← Main page with layout structure
├── css/
│   ├── global.css               ← Shared styles
│   ├── [section].css            ← Section-specific styles
│
├── js/
│   ├── main.js                  ← Loads modules dynamically
│   ├── [section].js             ← Section-specific functionality
│
├── sections/
│   ├── [section].html           ← Section-specific HTML
│
└── assets/
    └── images/                  ← Image assets
```

Each section has three corresponding files:
1. `sections/[section].html` - Contains the HTML markup for the section
2. `css/[section].css` - Contains the section-specific styles
3. `js/[section].js` - Contains the section-specific JavaScript functionality

## Making Common Changes

### Updating Text Content

1. Identify which section the text belongs to (e.g., hero, about, categories)
2. Open the corresponding HTML file in the `sections/` directory
3. Locate and modify the text content within the appropriate HTML tags

### Updating Styles

1. Identify which section needs style changes
2. Open the corresponding CSS file in the `css/` directory
3. Locate and modify the relevant CSS rules

### Updating Functionality

1. Identify which section needs functionality changes
2. Open the corresponding JavaScript file in the `js/` directory
3. Modify the functionality while maintaining the module export structure

## Section-Specific Guides

### Hero Section

**Files:**
- `sections/hero.html`
- `css/hero.css`
- `js/hero.js`

**Common Changes:**
- **Main Heading:** Edit the `<h1>` element in `hero.html`
- **Subheading:** Edit the paragraph with class `hero-subheading`
- **Buttons:** Edit the `cta-button` or `learn-more-button` content to change button text
- **Background:** To change the background pattern, modify the CSS variables in `hero.css`

### About Section

**Files:**
- `sections/about.html`
- `css/about.css`
- `js/about.js`

**Common Changes:**
- **Section Title:** Edit the `<h2>` element in `about.html`
- **Description:** Edit the paragraphs within the `about-content` div
- **Key Points:** Edit the list items within the `checkmark-list` element
- **Mindgrub Link:** Update the URL in the anchor tag with class `mindgrub-link`

### Categories Section

**Files:**
- `sections/categories.html`
- `css/categories.css`
- `js/categories.js`

**Common Changes:**
- **Adding/Removing Categories:**
  1. In `categories.html`, duplicate or remove a `category-item` div within the `categories-list`
  2. Update the data attributes: `data-category`, `data-icon`, `data-note`, and `data-nominate`
  3. Add the category description in the `categoryDescriptions` object in `categories.js`

- **Changing Category Icons:**
  1. Add the new icon SVG to `assets/images/`
  2. Update the `data-icon` attribute in the corresponding `category-item` div

- **Updating Description Text:**
  1. Update the text in the `categoryDescriptions` object in `categories.js`

- **Changing the Layout:**
  1. Modify the flex properties in `.categories-container` in `categories.css`

### Why Nominate Section

**Files:**
- `sections/why.html`
- `css/why.css`
- `js/why.js`

**Common Changes:**
- **Section Title:** Edit the `<h2>` element in `why.html`
- **Subheading:** Edit the paragraph with class `section-subheading`
- **Benefit Cards:** Each benefit is wrapped in a `benefit-card` div
  - To add a new benefit: Copy an existing benefit card and update its content and icon
  - To remove a benefit: Delete the corresponding `benefit-card` div

### Judges Section

**Files:**
- `sections/judges.html`
- `css/judges.css`
- `js/judges.js`

**Common Changes:**
- **Adding/Removing Judges:**
  1. In `judges.html`, duplicate or remove a `judge-card` div within the `judges-grid`
  2. Update the image src, name, title, and bio

- **Updating Judge Photos:**
  1. Add the new photo to `assets/images/Judges Headshots/`
  2. Update the `src` attribute in the corresponding `<img>` tag

- **Changing the Layout:**
  1. Modify the grid properties in `.judges-grid` in `judges.css`

### Timeline Section

**Files:**
- `sections/timeline.html`
- `css/timeline.css`
- `js/timeline.js`

**Common Changes:**
- **Adding/Removing Timeline Events:**
  1. In `timeline.html`, duplicate or remove a `timeline-item` div
  2. Update the date, title, and description

- **Updating Event Dates:**
  1. Find the relevant `timeline-date` element and update the text

- **Changing Timeline Style:**
  1. Modify the timeline styles in `timeline.css`, particularly the `.timeline-item:before` and `.timeline-item:after` selectors

### FAQ Section

**Files:**
- `sections/faq.html`
- `css/faq.css`
- `js/faq.js`

**Common Changes:**
- **Adding/Removing FAQ Items:**
  1. In `faq.html`, duplicate or remove an `accordion-item` div
  2. Update the question (`accordion-header`) and answer (`accordion-content`)

- **Organizing FAQ Categories:**
  1. FAQ items are grouped by categories within `faq-category` divs
  2. To add a new category, duplicate a `faq-category` div and update its heading and accordion items

### Sponsorship Section

**Files:**
- `sections/sponsorship.html`
- `css/sponsorship.css`
- `js/sponsorship.js`

**Common Changes:**
- **Updating Sponsorship Packages:**
  1. Each package is wrapped in a `sponsor-package` div
  2. Update the package title, price, and feature list as needed

- **Changing Contact Information:**
  1. Find the contact information in the `sponsor-contact` div and update as needed

## Working with Assets

### Adding New Images

1. Place new images in the appropriate subdirectory within `assets/images/`:
   - Category icons: `assets/images/`
   - Judge photos: `assets/images/Judges Headshots/`
   - Brand assets: `assets/images/Logo Exports/`

2. Reference the images using relative paths, e.g.:
   ```html
   <img src="assets/images/icon-mobile-security.svg" alt="Mobile Security Icon">
   ```

### Using SVG Icons

The site uses SVG icons for various elements. To add or replace an icon:

1. Add the SVG file to `assets/images/`
2. Reference it in the HTML:
   ```html
   <img src="assets/images/your-icon.svg" alt="Description">
   ```

## Deployment

The site is designed to be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

1. Ensure all changes are tested locally first
2. Commit changes to version control
3. Deploy using your preferred hosting platform's workflow

---

For any additional questions or assistance, please contact the development team at [development@mindgrub.com](mailto:development@mindgrub.com).
