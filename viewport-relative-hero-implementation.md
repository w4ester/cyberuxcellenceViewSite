# Viewport-Relative Hero Implementation Guide

This guide provides detailed instructions for implementing the viewport-relative sizing approach for your hero section. This approach will make your hero section responsive on screens of all sizes, including very large (30+ inch) monitors.

## Changes to Make in hero.css

Below are the specific changes you should make to your `hero.css` file:

### 1. Update the Hero Background Icon

Replace the current fixed-size background icon code:

```css
.hero-section .hero-bg-icon {
  position: absolute; /* Position relative to the hero section */
  bottom: -50px;
  right: 0;
  transform: rotate(-45deg); /* Fixed at this angle - no rotation */
  width: 600px; /* Enlarged */
  height: 600px; /* Enlarged */
  background-image: url('../assets/images/Custom Icon Exports/White/SVG/Best Overall UX in Cybersecurity-white.svg');
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 0; /* Placed below content */
  opacity: 0.4; /* Slightly muted to match mockup */
  pointer-events: none; /* Ensures icon doesn't interfere with interactions */
  
  /* Fix to ensure icon stays contained within section when scrolling */
  will-change: transform; /* Optimize for transform changes */
  backface-visibility: hidden; /* Prevent any rendering glitches */
}
```

With this viewport-relative version:

```css
.hero-section .hero-bg-icon {
  position: absolute;
  bottom: max(-50px, -2.5vw); /* Scale bottom position with viewport */
  right: max(0px, -2vw); /* Scale right position with viewport */
  transform: rotate(-45deg);
  width: min(600px, 35vw); /* Responsive width: smaller of 600px or 35% of viewport width */
  height: min(600px, 35vw); /* Maintain aspect ratio */
  background-image: url('../assets/images/Custom Icon Exports/White/SVG/Best Overall UX in Cybersecurity-white.svg');
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 0;
  opacity: 0.4;
  pointer-events: none;
  will-change: transform;
  backface-visibility: hidden;
}
```

### 2. Make the Hero Headline Text Responsive

Replace the current fixed-size hero heading:

```css
.hero-section h1 {
  font-size: 4.5rem; /* Scaled down the font size */
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  text-align: left;
}
```

With this responsive version:

```css
.hero-section h1 {
  font-size: clamp(3.5rem, 4.5vw, 6rem); /* Responsive font size */
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  text-align: left;
}
```

### 3. Make the Subheading Responsive

Replace:

```css
.hero-subheading {
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
}
```

With:

```css
.hero-subheading {
  font-size: clamp(1.25rem, 1.5vw, 1.75rem); /* Responsive font size */
  line-height: 1.5;
  margin-bottom: var(--spacing-lg);
  max-width: min(600px, 50vw); /* Responsive max-width */
}
```

### 4. Update the Container for Better Large Screen Proportions

Add this to your existing media queries section or create a new one:

```css
/* For large screens */
@media (min-width: 1920px) {
  .hero-section .container {
    max-width: min(var(--container-max-width), 80%); /* More proportional container width */
    padding: 0 clamp(var(--container-padding), 3vw, 48px); /* Responsive padding */
  }
  
  /* Slightly increase icon opacity for better visibility on large screens */
  .hero-section .hero-bg-icon {
    opacity: 0.45;
  }
}

/* For ultra-wide screens */
@media (min-width: 2560px) {
  .hero-section .container {
    max-width: min(var(--container-max-width), 70%); /* Better proportions for ultra-wide */
  }
  
  /* Adjust icon positioning for ultra-wide displays */
  .hero-section .hero-bg-icon {
    opacity: 0.5; /* Increase visibility slightly */
    width: min(800px, 32vw); /* Cap at 800px but scale with viewport */
    height: min(800px, 32vw);
  }
}
```

### 5. Optimize Vertical Spacing

Update:

```css
.hero-section {
  position: relative;
  background-color: var(--mg-dark-purple);
  color: var(--white);
  padding: calc(var(--spacing-xxl) * 1.5) 0; /* Using variable multiplier for emphasis */
  overflow: hidden; /* Important - keeps the background icon contained */
  min-height: calc(90vh - var(--nav-height));
  display: flex;
  align-items: center;
  /* Remove any top margin to eliminate gap */
  margin-top: 0;
  z-index: 1; /* Ensure proper stacking context */
}
```

With:

```css
.hero-section {
  position: relative;
  background-color: var(--mg-dark-purple);
  color: var(--white);
  padding: clamp(calc(var(--spacing-xxl) * 1.25), 10vh, calc(var(--spacing-xxl) * 2.5)) 0; /* Responsive padding */
  overflow: hidden;
  min-height: clamp(550px, calc(90vh - var(--nav-height)), 1000px); /* Min and max height constraints */
  display: flex;
  align-items: center;
  margin-top: 0;
  z-index: 1;
}
```

## Implementation Steps

1. Make a backup of your current `hero.css` file
2. Implement each section of changes sequentially
3. Test on different screen sizes after each change
4. Pay special attention to how the hero section scales on very large monitors

## Expected Results

After implementation, you should see:

1. The background icon scales proportionally to the viewport width, maintaining visual connection at all screen sizes
2. Text size adjusts fluidly but stays within reasonable bounds
3. Spacing and proportions remain balanced across all screen sizes
4. The hero section makes better use of space on ultra-wide screens without elements appearing too small

## Potential Adjustments

You may need to fine-tune these values based on:

- Your specific brand requirements
- How the site appears on your actual monitors
- The max-width you want for the content on ultra-wide screens

The benefit of using functions like `min()`, `max()`, and `clamp()` is that they provide controlled scaling that won't break your design on any screen size.