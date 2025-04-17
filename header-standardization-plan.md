# Header Standardization Plan

Based on the thorough analysis in `header-analysis.md`, this document outlines specific CSS changes to implement consistent typography and alignment across all section headers.

## Global Typography Standardization

First, let's establish consistent global defaults in `global.css`:

```css
/* In global.css */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-primary);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.5em;
}

h1 {
  font-size: 4rem; /* 64px */
  line-height: 1.1;
}

h2 {
  font-size: 3rem; /* 48px */
}

h3 {
  font-size: 1.5rem; /* 24px */
}

/* Standard section header styles */
.section-header {
  text-align: left;
  margin-bottom: var(--spacing-xl);
  position: relative;
  padding: 0 var(--container-padding);
}

.section-header h2 {
  color: inherit;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
  position: relative;
}

.section-header .section-subheading {
  font-size: 1.5rem;
  font-weight: 500; /* Change from 400 to 500 for better consistency */
  line-height: 1.5;
  margin-bottom: 0;
  max-width: 700px;
}

/* Responsive adjustments for section headers */
@media (max-width: 991px) {
  .section-header h2 {
    font-size: 2.5rem;
  }
  
  .section-header .section-subheading {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 2rem;
  }
  
  .section-header .section-subheading {
    font-size: 1.125rem;
  }
}
```

## Navbar Alignment Standardization

To ensure all section headers align consistently with the navbar:

```css
/* In global.css */
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Standard section padding to ensure consistent spacing */
section {
  padding: var(--spacing-xxl) 0 0 0;
  margin: 0;
}

/* Ensure all section headers have the same padding */
.section-header {
  text-align: left;
  margin-bottom: var(--spacing-xl);
  position: relative;
  padding: 0 var(--container-padding);
}
```

## Section-Specific Typography Fixes

### Hero Section (hero.css)

```css
/* Keep responsive sizing with modified clamp values */
.hero-section h1 {
  font-size: clamp(3.5rem, 4vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  text-align: left;
}

.hero-subheading {
  font-size: clamp(1.25rem, 1.5vw, 1.5rem); /* Reduce max from 1.75rem to 1.5rem */
  line-height: 1.5;
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
}
```

### About Section (about.css)

```css
/* Reduce font size to match global standard */
.about-section h2 {
  color: var(--mg-dark-purple);
  margin-bottom: var(--spacing-xl);
  font-size: 3rem; /* Change from 3.5rem to 3rem */
  font-weight: 800; /* Change from 700 to 800 */
  text-align: left;
}
```

### Categories Section (categories.css)

```css
/* Keep the existing styles as they match the global standard */
.categories-section-desktop .section-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 60px;
  color: #fff;
  text-align: left;
  letter-spacing: -0.5px;
  position: relative;
  z-index: 3;
}

/* Standardize subheading size */
.categories-section-desktop .category-description-text {
  font-size: 1.5rem; /* Change from 1.75rem to 1.5rem */
  line-height: 1.4;
  margin-bottom: 30px;
  font-weight: 500; /* Change from 400 to 500 */
  color: var(--white);
}
```

### Why Nominate Section (why.css)

```css
/* Add explicit heading styles to match global standard */
.why-section h2 {
  color: var(--mg-dark-purple);
  font-size: 3rem;
  font-weight: 800;
  text-align: left;
}

/* Standardize benefit headings */
.benefit-card h3 {
  color: var(--mg-red);
  margin-top: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem; /* Change from 1.4rem to 1.5rem */
  font-weight: 700;
  position: relative;
}
```

### Judges Section (judges.css)

```css
/* Fix the broken CSS syntax and align with standards */
.judges-section h2,
.judges-section h3,
.judges-section .section-title,
.judges-section .subheading {
  color: var(--white) !important;
}

/* Add explicit heading styles and fix center alignment */
.judges-section .section-header {
  text-align: center; /* Maintain center alignment for this section */
}

.judges-section .section-header h2 {
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
}

/* Standardize subheading size */
.judges-section .section-subheading {
  font-size: 1.5rem; /* Change from 1.6rem to 1.5rem */
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
}

/* Fix judge card headings */
.judge-info-card h3 {
  color: var(--white);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem; /* Change from 1.75rem to 1.5rem */
  font-weight: 700;
  margin-top: var(--spacing-lg);
}
```

### Timeline Section (timeline.css)

```css
/* Add explicit heading styles to match global standard */
.timeline-section h2 {
  color: var(--white);
  font-size: 3rem;
  font-weight: 800;
  text-align: left;
}

/* Standardize timeline content headings */
.timeline-content h3 {
  color: var(--mg-dark-purple);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem; /* Already matching */
  font-weight: 700;
}
```

### FAQ Section (faq.css)

```css
/* Add explicit heading styles to match global standard */
.faq-section h2 {
  color: var(--mg-dark-purple);
  font-size: 3rem;
  font-weight: 800;
  text-align: left;
}

/* Standardize category titles */
.category-title {
  color: var(--mg-dark-purple);
  font-size: 1.5rem; /* Change from 1.75rem to 1.5rem */
  margin-bottom: var(--spacing-md);
  font-weight: 700;
}
```

## Implementation Steps

1. Start by updating the global.css file with the standardized typography and section header styles.
2. Update each section's CSS file with the specific changes outlined above.
3. Test the changes across different screen sizes to ensure responsive behavior.
4. Check for alignment with the navbar logo position across all sections.

## Expected Results

After implementing these changes, we should have:

1. **Consistent Header Sizes**:
   - All main section headers (h2): 3rem
   - All subheadings: 1.5rem
   - Hero h1 maintains responsive sizing with clamp

2. **Consistent Font Weights**:
   - Main headers: 800
   - Subheadings: 500
   - Content headers (h3): 700

3. **Consistent Alignment**:
   - Left-aligned headers in most sections
   - Center-aligned headers in Judges section (maintained for design reasons)
   - Consistent padding and container spacing

4. **Maintained Color Differentiation**:
   - Dark purple text on light backgrounds
   - White text on dark backgrounds
   - Accent colors for specific elements

These changes will create a cohesive typography system while respecting the existing design language and background color treatments.