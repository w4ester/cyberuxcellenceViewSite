# Categories Menu Fixes Plan

## Current Issues Identified

1. **Red Indicator Positioning Issue**:
   - In desktop version, the red indicator bar for the active category is positioned at `left: -40px`
   - When viewed at tablet sizes (between desktop and mobile), the indicator can go outside the container
   - This happens because the tablet view (max-width: 1024px) reduces the container padding to 16px, but the indicator position doesn't adjust accordingly

2. **Inconsistent Padding in Category Menu**:
   - The desktop version appears to have inconsistent spacing for categories
   - Need to ensure even padding for each category item

## Proposed Solutions

### 1. Fix Red Indicator Positioning

The active indicator for categories is created with this CSS:
```css
.categories-section-desktop .category-item.active::before {
  content: '';
  position: absolute;
  left: -40px;
  top: 0;
  bottom: 0;
  width: 6px;
  background-color: var(--mg-red);
  border-radius: 3px;
}
```

The issue is that the `left: -40px` value doesn't adapt to different screen sizes. We need to:

1. Make the positioning responsive by using a different approach
2. Ensure the red indicator stays within the container at all screen sizes
3. Add specific adjustments for the tablet breakpoint (1024px-992px)

### 2. Standardize Category Padding

Current category styling:
```css
.categories-section-desktop .category-item {
  margin-bottom: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 15px 0;
  position: relative;
}
```

We need to:
1. Ensure consistent vertical spacing between categories
2. Add proper responsive padding that works at all screen sizes

## Implementation Plan

I'll update the CSS in `css/categories.css` to:

1. **Modify the active indicator positioning**:
   ```css
   .categories-section-desktop .category-item.active::before {
     left: 0; /* Change from -40px to 0 */
     transform: translateX(-100%); /* Position it outside the element */
     margin-left: -10px; /* Add space between indicator and text */
   }
   ```

2. **Add responsive adjustments for tablet view**:
   ```css
   @media (max-width: 1024px) and (min-width: 992px) {
     .categories-section-desktop .category-item.active::before {
       margin-left: -6px; /* Smaller margin for tablet view */
     }
   }
   ```

3. **Standardize category item spacing**:
   ```css
   .categories-section-desktop .category-item {
     padding: 18px 0; /* Even padding top/bottom */
     margin-bottom: 0; /* Remove margin, use padding instead */
   }
   
   .categories-section-desktop .category-item:last-child {
     padding-bottom: 0; /* No padding at bottom of last item */
   }
   ```

These changes will:
- Keep the red indicator properly aligned at all screen sizes
- Ensure consistent spacing between category items
- Maintain the current look and feel while fixing the positioning issues