# Architectural Decision: Awards Category Text Color Fix

## Context
The Awards Category Text (category titles within the right panel of the Categories section) was previously set to a dark purple (`var(--mg-dark-purple)`), which was not legible on the light purple box background. This caused accessibility and UX issues, as users could not easily read the category names.

## Brand Requirement
The user requested the use of the Brand Guide's "Light Purple" for the Awards Category Text. According to `css/global.css`, the variable is:
```
--mg-light-purple: #AF92F8;
```

## Solution

**Change the text color of the category titles (`.category-item h3`) to use the brand's Light Purple.**

### Before
```css
.categories-section-desktop .category-item h3 {
  color: var(--mg-dark-purple);
}
```

### After
```css
.categories-section-desktop .category-item h3 {
  color: var(--mg-light-purple);
}
```

This update ensures optimal contrast and brand consistency.

## Visual Overview

```mermaid
flowchart TD
    A[Category Text (h3) uses dark purple] -->|Low contrast| B[Unreadable on light purple box]
    B -->|Update color| C[Category Text uses brand light purple (#AF92F8)]
    C -->|High contrast| D[Accessible & visually consistent]
```

## Implementation Scope

- **File:** `css/categories.css`
- **Selector:** `.categories-section-desktop .category-item h3`
- **Variable:** `var(--mg-light-purple)`

## Rationale

- Improves accessibility and readability.
- Adheres to brand guidelines.
- Provides a visually appealing and consistent UI.

---

*Prepared by Will, Software Architecture Expert*