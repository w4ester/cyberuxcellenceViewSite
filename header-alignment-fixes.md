# Header Alignment Fixes

This document provides specific CSS fixes to address alignment issues between section headers and the navbar. These fixes complement the typographic standardization outlined in `header-standardization-plan.md`.

## Alignment Issues Identified

From our analysis, we found these key issues:

1. Some sections have inconsistent container padding
2. The judges section uses a different alignment approach (centered)
3. Mobile alignment differs from desktop in some sections
4. Section header padding varies between sections

## Global Fixes for Navbar-Section Header Alignment

Add these styles to `global.css` to create a consistent baseline:

```css
/* Standardize container for proper alignment with navbar */
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  box-sizing: border-box;
}

/* Consistent section header padding to align with navbar */
.section-header {
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
  margin-bottom: var(--spacing-xl);
  position: relative;
}

/* Ensure no unnecessary wrapper divs add offset */
.section-header h2,
.section-header .section-title {
  margin-left: 0;
  padding-left: 0;
}
```

## Section-Specific Alignment Fixes

### Hero Section

```css
/* Ensure proper alignment with navbar in hero section */
.hero-section .container {
  padding-left: var(--container-padding);
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.hero-content {
  max-width: 900px;
  text-align: left;
  margin-left: 0; /* Ensure no auto margin shifts alignment */
}
```

### About Section

```css
/* Fix about section header alignment */
.about-section .container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Override any centering for larger screens */
@media (min-width: 992px) {
  .about-section h2 {
    text-align: left;
  }
}

/* Mobile-specific alignment */
@media (max-width: 991px) {
  .about-section h2 {
    text-align: center;
  }
}
```

### Categories Section

```css
/* Ensure proper alignment with navbar */
.categories-section-desktop .container {
  position: relative;
  z-index: 2;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Remove any extra padding in section title */
.categories-section-desktop .section-title {
  padding-left: 0;
}
```

### Judges Section (Special Case - Centered)

```css
/* Fix the broken CSS and maintain centered alignment */
.judges-section .section-header {
  text-align: center;
  width: 100%;
  padding: 0 var(--container-padding);
  margin-left: auto;
  margin-right: auto;
  max-width: var(--container-max-width);
  box-sizing: border-box;
}

/* Remove any conflicting styles */
.judges-section .container,
.judges-section .section-header {
  margin-left: auto;
  width: 100%;
  max-width: var(--container-max-width);
}
```

### Timeline Section

```css
/* Ensure consistent width and padding */
.timeline-section .container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Fix any timeline-specific padding issues */
.timeline-section .section-header {
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
}
```

### FAQ Section

```css
/* Ensure proper alignment with navbar */
.faq-section .container {
  position: relative;
  z-index: 1;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Remove any extra padding in section title */
.faq-section .section-header {
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
}
```

## Implementation Approach

1. **Start with Container Fixes**: Apply the global container and section-header fixes first
2. **Apply Section-Specific Fixes**: Implement individual section fixes as needed
3. **Test Alignment**: Check alignment with the navbar across all screen sizes
4. **Mobile Adjustments**: Fine-tune mobile-specific alignment issues

## Responsive Alignment Considerations

```css
/* Global responsive alignment adjustments */
@media (max-width: 768px) {
  /* Standardize mobile container padding */
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
  
  /* Adjust section header padding to match */
  .section-header {
    padding-left: 16px;
    padding-right: 16px;
  }
  
  /* Only center if design requires it */
  .about-section h2 {
    text-align: center;
  }
}
```

## Measuring Proper Alignment

To verify proper alignment:

1. Headers should align with the navbar logo's left edge (except for Judges section)
2. Section containers should have consistent horizontal padding
3. Content within sections should maintain this alignment
4. Mobile views should maintain consistent padding/alignment or follow section-specific design requirements

These fixes will create visual consistency throughout the site while maintaining the essential character of each section.