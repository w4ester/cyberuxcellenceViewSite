# Specific Changes Needed for Viewport-Relative Hero Sizing

To implement the viewport-relative sizing approach for your hero section, these are the **exact lines** that need to be changed in your `hero.css` file. I'll show the current code and the specific replacement code:

## 1. Hero Background Icon

**Current Code (Lines 37-54)**:
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

**Viewport-Relative Replacement**:
```css
.hero-section .hero-bg-icon {
  position: absolute;
  bottom: max(-50px, -2.5vw); /* Viewport-relative positioning */
  right: max(0px, -2vw); /* Viewport-relative positioning */
  transform: rotate(-45deg);
  width: min(600px, 35vw); /* KEY CHANGE: Responsive width */
  height: min(600px, 35vw); /* KEY CHANGE: Responsive height */
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

## 2. Hero Heading Text

**Current Code (Lines 72-78)**:
```css
.hero-section h1 {
  font-size: 4.5rem; /* Scaled down the font size */
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  text-align: left;
}
```

**Viewport-Relative Replacement**:
```css
.hero-section h1 {
  font-size: clamp(3.5rem, 4.5vw, 6rem); /* KEY CHANGE: Responsive font size */
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  text-align: left;
}
```

## 3. Hero Subheading

**Current Code (Lines 84-89)**:
```css
.hero-subheading {
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
}
```

**Viewport-Relative Replacement**:
```css
.hero-subheading {
  font-size: clamp(1.25rem, 1.5vw, 1.75rem); /* KEY CHANGE: Responsive font size */
  line-height: 1.5;
  margin-bottom: var(--spacing-lg);
  max-width: min(600px, 50vw); /* KEY CHANGE: Responsive max-width */
}
```

## 4. Hero Section Vertical Spacing

**Current Code (Lines 5-17)**:
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

**Viewport-Relative Replacement**:
```css
.hero-section {
  position: relative;
  background-color: var(--mg-dark-purple);
  color: var(--white);
  padding: clamp(calc(var(--spacing-xxl) * 1.25), 10vh, calc(var(--spacing-xxl) * 2.5)) 0; /* KEY CHANGE: Responsive padding */
  overflow: hidden;
  min-height: clamp(550px, calc(90vh - var(--nav-height)), 1000px); /* KEY CHANGE: Min and max height */
  display: flex;
  align-items: center;
  margin-top: 0;
  z-index: 1;
}
```

## 5. Add Large Screen Container Adjustments

**New Media Query to Add (After Line 165)**:
```css
/* For large screens */
@media (min-width: 1920px) {
  .hero-section .container {
    max-width: min(var(--container-max-width), 80%); /* More proportional width */
    padding: 0 clamp(var(--container-padding), 3vw, 48px); /* Responsive padding */
  }
}

/* For ultra-wide screens */
@media (min-width: 2560px) {
  .hero-section .container {
    max-width: min(var(--container-max-width), 70%); /* Better ultra-wide proportions */
  }
  
  /* Adjust icon for ultra-wide displays */
  .hero-section .hero-bg-icon {
    opacity: 0.5; /* Slightly increased visibility */
    width: min(800px, 32vw); /* Larger but still proportional */
    height: min(800px, 32vw);
  }
}
```

## Key CSS Functions Used

1. **`min(value1, value2)`**: Uses whichever is smaller between the two values
   - Example: `width: min(600px, 35vw)` means "use 600px unless 35% of viewport width is smaller"

2. **`max(value1, value2)`**: Uses whichever is larger between the two values
   - Example: `bottom: max(-50px, -2.5vw)` means "use -50px unless -2.5% of viewport width is larger"

3. **`clamp(min, preferred, max)`**: Keeps a value between min and max, using preferred when possible
   - Example: `font-size: clamp(3.5rem, 4.5vw, 6rem)` means "use 4.5vw for font size, but never smaller than 3.5rem or larger than 6rem"

These changes work together to maintain proportional scaling across all screen sizes while preserving your design's visual integrity, particularly for the connection between the hero text and background icon.