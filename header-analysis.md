# Header Analysis Across Sections

## Global Typography (global.css)

### Default Settings
- **h1**: 4rem (64px), line-height 1.1, font-weight 800
- **h2**: 3rem (48px), font-weight 800
- **h3**: 1.5rem (24px), font-weight 800
- **h4**: 1.25rem (20px), font-weight 800
- **h5/h6**: 1rem (16px), font-weight 800

### Section Headers (global)
- `.section-header h2`: 3rem, font-weight 800, line-height 1.2
- `.section-header .section-subheading`: 1.25rem, font-weight 400, line-height 1.5

## Header Comparison Table

| Section       | Global CSS (Size & Font) | Section-specific CSS (Size & Font) | Font Color | Background Color | Alignment | Aligned with Navbar Logo |
|---------------|--------------------------|-----------------------------------|------------|------------------|-----------|--------------------------|
| Hero          | h1: 4rem, font-weight 800 | h1: clamp(3.5rem, 4vw, 5rem), font-weight 800, line-height 1.1 | White (#FFFFFF) | Dark Purple (#2C215A) | Left | Yes |
| About         | h2: 3rem, font-weight 800 | h2: 3.5rem, font-weight 700 | Dark Purple (#2C215A) | Purple-White Gradient | Left (center on mobile) | Yes |
| Categories    | h2: 3rem, font-weight 800 | .section-title: 3rem, font-weight 800, letter-spacing -0.5px | White (#FFFFFF) | Dark Purple (#2C215A) | Left | Yes |
| Why Nominate  | h2: 3rem, font-weight 800 | Only responsive sizes defined in why.css | Dark Purple (#2C215A) | Light Purple Gradient | Left | Yes |
| Judges        | h2: 3rem, font-weight 800 | Only responsive sizes defined in judges.css | White (#FFFFFF) !important | Red Gradient Background | Center | Yes |
| Timeline      | h2: 3rem, font-weight 800 | Only responsive sizes defined in timeline.css | White (#FFFFFF) | Dark Purple (#2C215A) | Left | Likely yes |
| FAQ           | h2: 3rem, font-weight 800 | Not explicitly defined in faq.css | Dark Purple (#2C215A) | Light Purple Gradient | Left | Likely yes |

## SubHeader Comparison Table

| Section       | Global CSS (Size & Font) | Section-specific CSS (Size & Font) | Font Color | Background Color | Alignment | Aligned with Navbar Logo |
|---------------|--------------------------|-----------------------------------|------------|------------------|-----------|--------------------------|
| Hero          | subheading: 1.25rem, font-weight 400 | .hero-subheading: clamp(1.25rem, 1.5vw, 1.75rem), line-height 1.5 | White (#FFFFFF) | Dark Purple (#2C215A) | Left | Yes |
| About         | h3: 1.5rem, font-weight 800 | .about-intro: 1.5rem, line-height 1.5, font-weight 500 | Nearly Black (#231F20) | Purple-White Gradient | Left | Yes |
| Categories    | h3: 1.5rem, font-weight 800 | .category-description-text: 1.75rem, line-height 1.4, font-weight 400 | White (#FFFFFF) | Dark Purple (#2C215A) | Left | Yes |
| Why Nominate  | h3: 1.5rem, font-weight 800 | .benefit-card h3: 1.4rem, font-weight 700 | Red (#D12C31) | Light Purple Gradient | Left | Yes |
| Judges        | h3: 1.5rem, font-weight 800 | .section-subheading: 1.6rem, line-height 1.2<br>.judge-info-card h3: 1.75rem, font-weight 700 | White (#FFFFFF) | Red Gradient Background | Center | Yes |
| Timeline      | h3: 1.5rem, font-weight 800 | .timeline-content h3: 1.5rem, font-weight 700 | Dark Purple (#2C215A) | White content cards | Left | Likely yes |
| FAQ           | h3: 1.5rem, font-weight 800 | .category-title: 1.75rem, font-weight 700 | Dark Purple (#2C215A) | Light Purple Gradient | Left | Likely yes |

## Typography Summary

### Hero Section
- **Main section header**: Inter, 42-60pt (clamp(3.5rem, 4vw, 5rem)), Bold (800), White (#FFFFFF), Dark Purple Background (#2C215A)
- **Subheader**: Inter, 15-21pt (clamp(1.25rem, 1.5vw, 1.75rem)), Regular (400), White (#FFFFFF), Dark Purple Background (#2C215A)
- **Body text**: Inter, 16pt (1rem), Regular (400), White (#FFFFFF)

### About Section
- **Main section header**: Inter, 42pt (3.5rem), Bold (700), Dark Purple (#2C215A), Purple-White Gradient Background
- **Subheader**: Inter, 18pt (1.5rem), Medium (500), Nearly Black (#231F20), Purple-White Gradient Background
- **Body text**: Inter, 15-18pt (1.25rem), Regular (400), Nearly Black (#231F20)

### Award Categories Section
- **Main section header**: Inter, 36pt (3rem), Bold (800), White (#FFFFFF), Dark Purple Background (#2C215A)
- **Subheader**: Inter, 21pt (1.75rem), Regular (400), White (#FFFFFF), Dark Purple Background (#2C215A)
- **Body text**: Inter, 16pt (1rem), Regular (400), White (#FFFFFF)
- **Category titles**: Inter, 21pt (1.75rem), Semi-Bold (600), Dark Purple (#2C215A), Light Purple Background (rgba(226, 218, 255, 0.9))

### Why Nominate Section
- **Main section header**: Inter, 36pt (3rem), Bold (800), Dark Purple (#2C215A), Light Purple Gradient Background
- **Subheader**: Inter, 17pt (1.4rem), Bold (700), Red (#D12C31), Light Purple Gradient Background
- **Body text**: Inter, 16pt (1rem), Regular (400), White (#FFFFFF)

### Judges Section
- **Main section header**: Inter, 36pt (3rem), Bold (800), White (#FFFFFF), Red Gradient Background
- **Subheader**: Inter, 19pt (1.6rem), Regular (400), White (#FFFFFF), Red Gradient Background
- **Judge names**: Inter, 21pt (1.75rem), Bold (700), White (#FFFFFF), Dark Purple card background
- **Body text**: Inter, 16pt (1rem), Regular (400), Light white (rgba(255, 255, 255, 0.8))

### Timeline Section
- **Main section header**: Inter, 36pt (3rem), Bold (800), White (#FFFFFF), Dark Purple Background (#2C215A)
- **Timeline event titles**: Inter, 18pt (1.5rem), Bold (700), Dark Purple (#2C215A), White card background
- **Body text**: Inter, 16pt (1rem), Regular (400), Dark gray (#444)

### FAQ Section
- **Main section header**: Inter, 36pt (3rem), Bold (800), Dark Purple (#2C215A), Light Purple Gradient Background
- **Category titles**: Inter, 21pt (1.75rem), Bold (700), Dark Purple (#2C215A), Light Purple Gradient Background
- **Question text**: Inter, 13pt (1.1rem), Semi-Bold (600), Dark Purple (#2C215A), White background (rgba(255, 255, 255, 0.9))
- **Body text**: Inter, 16pt (1rem), Regular (400), Dark (implied)

## Section-Specific Typography Sources

1. **Hero**: Custom sizing in hero.css with responsive clamp functions
2. **About**: Custom header size (3.5rem) in about.css
3. **Categories**: Custom title styling with letter-spacing in categories.css
4. **Why Nominate**: Only responsive breakpoints defined in why.css (falls back to global)
5. **Judges**: Centered alignment and !important white color override in judges.css
6. **Timeline**: Custom styling for timeline event titles in timeline.css
7. **FAQ**: Custom category and question title styling in faq.css

## Key Inconsistencies

### Size Variations
- **h2 elements**: Global default is 3rem, but About section uses 3.5rem
- **h3 elements**: Global default is 1.5rem, but sections range from 1.4rem to 1.75rem

### Text Alignment
- Most sections: Left-aligned
- Judges section: Center-aligned
- About: Left-aligned (center on mobile)

### Font Weights
- h2 elements: Global default is 800, but About uses 700
- h3 elements: Global default is 800, but section-specific CSS varies from 400-700

## Recommendations for Standardization
1. Standardize h2 sizes across all sections (suggest 3rem/48px)
2. Create unified responsive breakpoints and size reductions
3. Standardize text alignment (consider maintaining section-specific alignments where appropriate)
4. Maintain color differences based on section background for readability
5. Align all section headers with the navbar logo position