# Award Categories Section - Adjustment Guide

This document provides detailed instructions on how to customize and modify the Award Categories section of the Cyber UXcellence Awards website.

## Table of Contents
- [File Structure](#file-structure)
- [Basic Structure](#basic-structure)
- [Common Adjustments](#common-adjustments)
  - [Changing Category Names](#changing-category-names)
  - [Adjusting Category Descriptions](#adjusting-category-descriptions)
  - [Modifying Icons](#modifying-icons)
  - [Changing the Default Active Category](#changing-the-default-active-category)
- [Visual Customizations](#visual-customizations)
  - [Adjusting the Size of the Categories Panel](#adjusting-the-size-of-the-categories-panel)
  - [Changing Colors](#changing-colors)
  - [Modifying Spacing and Typography](#modifying-spacing-and-typography)
- [Functional Adjustments](#functional-adjustments)
  - [Nomination Button Visibility](#nomination-button-visibility)
  - [Animation and Transition Effects](#animation-and-transition-effects)
- [Mobile Responsiveness](#mobile-responsiveness)
- [Troubleshooting](#troubleshooting)

## File Structure

The Award Categories section is implemented across three main files:

```
/sections/categories.html    - HTML structure
/css/categories.css          - Styling and layout
/js/categories.js            - Interactive functionality
```

## Basic Structure

The section consists of two main components:

1. **Left Column**: Contains the category icon, description text, and nomination button
2. **Right Column**: Contains the list of award categories with highlighting for the active category

## Common Adjustments

### Changing Category Names

To update or add new award categories:

1. Open `/sections/categories.html`
2. Locate the `categories-list` div
3. Modify the `<h3>` text within each `category-item` div
4. Ensure each category item has the necessary data attributes:
   - `data-category`: Unique identifier (e.g., "mobile-security")
   - `data-icon`: Icon filename (e.g., "icon-mobile-security.svg")
   - `data-description`: Category description text
   - `data-note`: Optional note text (shown underneath description)
   - `data-nominate`: Whether to show nomination button ("true" or "false")

Example:
```html
<div class="category-item" data-category="new-category" data-icon="icon-new-category.svg" data-description="Description of new category" data-note="" data-nominate="true">
  <h3>New Category Name</h3>
  <div class="divider"></div>
</div>
```

### Adjusting Category Descriptions

Category descriptions are stored in the `data-description` attribute of each category item. To change a description:

1. Find the relevant category item in `/sections/categories.html`
2. Update the `data-description` attribute with the new text

### Modifying Icons

1. Add your new icon SVG file to `/assets/images/`
2. Update the `data-icon` attribute of the relevant category item in `/sections/categories.html`

### Changing the Default Active Category

To change which category is selected by default:

1. Open `/sections/categories.html`
2. Find the currently active category (has the `active` class)
3. Remove the `active` class from this element
4. Add the `active` class to your desired default category

Example:
```html
<!-- Change from this -->
<div class="category-item active" data-category="data-viz">

<!-- To this -->
<div class="category-item" data-category="data-viz">
<!-- ... -->
<div class="category-item active" data-category="mobile-security">
```

## Visual Customizations

### Adjusting the Size of the Categories Panel

To change the size of the categories panel:

1. Open `/css/categories.css`
2. Find the `.categories-list` selector
3. Modify these properties:
   - `width`: Controls the overall width (e.g., `700px`)
   - `max-width`: Should match the width
   - `padding`: Controls the internal spacing (e.g., `50px`)

To make category items larger:

1. In the same file, find the `.category-item` selector
2. Adjust these properties:
   - `padding`: Controls vertical space (e.g., `20px 0`)
   - `margin-bottom`: Controls spacing between items

3. For larger text, modify the `.category-item h3` selector:
   - `font-size`: Controls text size (e.g., `2rem`)

Example:
```css
.categories-list {
  width: 700px;
  max-width: 700px;
  padding: 50px;
}

.category-item {
  padding: 20px 0;
  margin-bottom: 30px;
}

.category-item h3 {
  font-size: 2rem;
}
```

### Changing Colors

To adjust the color scheme:

1. Open `/css/categories.css`
2. For the panel background, find `.categories-list` and change:
   - `background-color`: Controls the panel color (e.g., `rgba(230, 220, 255, 0.9)`)

3. For active category highlighting, find `.category-item.active h3` and change:
   - `color`: Controls the text color (e.g., `#FF5A5F`)

4. For the active indicator bar, find `.category-item.active::before` and change:
   - `background-color`: Controls the bar color (e.g., `#FF5A5F`)

5. For the nomination button, find `.nominate-btn` and change:
   - `background-color`: Controls the button color (e.g., `#FF5A5F`)

### Modifying Spacing and Typography

To adjust the spacing and typography:

1. For general section spacing, modify `.categories-section` properties:
   - `padding`: Controls top/bottom space (e.g., `120px 0`)

2. For heading size, modify `.section-title` properties:
   - `font-size`: Controls title size (e.g., `5rem`)
   - `margin-bottom`: Controls space below title

3. For description text, modify `.category-description-text` properties:
   - `font-size`: Controls text size (e.g., `2rem`)
   - `line-height`: Controls line spacing

## Functional Adjustments

### Nomination Button Visibility

To control which categories show a nomination button:

1. In `/sections/categories.html`, set the `data-nominate` attribute to:
   - `"true"` to show the button
   - `"false"` to hide the button

### Animation and Transition Effects

To adjust animations and transitions:

1. Open `/css/categories.css`
2. Find the `@keyframes fadeIn` rule to modify the animation
3. To change transition speed, search for `transition` properties and adjust the timing values

4. To modify JavaScript animations, open `/js/categories.js` and look for:
   - Timeout values (e.g., `setTimeout(() => {...}, 200)`)
   - Opacity/transform changes for animation effects

## Mobile Responsiveness

To adjust mobile breakpoints and styling:

1. Open `/css/categories.css`
2. Find the media query sections:
   ```css
   @media (max-width: 991px) {
     /* Tablet styles */
   }

   @media (max-width: 768px) {
     /* Mobile styles */
   }
   ```

3. Modify the CSS properties within these blocks to adjust mobile appearance

For example, to make text smaller on mobile:
```css
@media (max-width: 768px) {
  .category-item h3 {
    font-size: 1.25rem;
  }
}
```

## Troubleshooting

**Issue**: Categories don't change when clicked
- Check the JavaScript console for errors
- Verify that each category has a unique `data-category` attribute
- Ensure the JavaScript file is properly loaded

**Issue**: Icons not displaying
- Verify the icon path in `data-icon` attributes
- Check that the SVG files exist in the assets directory
- Try using the browser's developer tools to inspect the image request

**Issue**: Nomination button not showing/hiding correctly
- Verify that `data-nominate` attributes are set correctly
- Check the JavaScript that controls visibility in `/js/categories.js`

---

For any additional customization needs, you can directly modify the source files or contact the development team.
