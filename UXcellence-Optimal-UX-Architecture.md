# Cyber UXcellence Awards: Optimal UX Architecture Plan

## Guiding Principles

- All section updates are driven by markdown documentation.
- Brand guide (colors, typography, spacing) is the single source of truth for all visuals.
- Section-by-section consistency and modularity.
- Responsive, accessible, and visually cohesive experience.

---

## 1. Spacing & Layout Standardization

- **All main sections** (Hero, About, Why, Categories, etc.) use `padding: var(--spacing-xxl) 0` (default `80px` top/bottom) as defined in `css/global.css`.
- **Hero section** may use `calc(var(--spacing-xxl)*1.5)` for emphasis.
- **No negative margins or ad-hoc spacing**; remove from all sections (especially About, Categories).
- **Global spacing variables** (`--spacing-xxl`, `--spacing-xl`, etc.) are the authoritative source. Changing these in `:root` updates the whole site.

### Mermaid Diagram: Spacing Architecture

```mermaid
graph TD
  A[:root spacing vars (css/global.css)]
  A --> B1[hero.css .hero-section]
  A --> B2[about.css .about-section]
  A --> B3[why.css .why-section]
  A --> B4[categories.css .categories-section]
  B1 -->|should use|A
  B2 -->|should use|A
  B3 -->|should use|A
  B4 -->|should use|A
```

---

## 2. About Section

- **Content**: Focuses on Usability, Adoption, Impact (see AboutSection.md).
- **CSS**: `.about-section` uses only:
  ```css
  padding: var(--spacing-xxl) 0 var(--spacing-xl);
  margin: 0;
  ```
- **Remove** any negative margins or non-standard paddings.
- **HTML**: Ensure About section content and structure matches the program messaging.

---

## 3. Why Nominate Your Product Section

- **Cards**: Each benefit is a `.benefit-card` with:
  - `background: var(--mg-nearly-black)` (`#231F20`)
  - `color: var(--white)`
  - `border-radius: 16px`
  - `padding: var(--spacing-lg)`
  - Responsive grid with consistent `gap: 40px` (or spacing variable)
- **Icons**: White or light-accent, brand-aligned
- **HTML**: Each benefit wrapped in `.benefit-card` inside `.benefits-grid`
- **CSS**: Remove old backgrounds/colors, use new variable-based system
- **Accessibility**: Ensure contrast (dark cards, white text, accessible icons)

---

## 4. Categories, Hero, and Other Sections

- **Categories**: Remove negative margins. Standardize to section spacing architecture.
- **Hero**: For extra emphasis, use larger padding via variable multiplier.
- **All Other Sections**: Audit for legacy, hardcoded, or ad-hoc spacing and refactor to use global variables.

---

## 5. Implementation & Testing

- **Colors and Typography**: Must match `/assets/images/Cyber-UXcellence-Award-Brand-Guidelines.pdf` and variables in `css/global.css`
- **Comment changes** in code with references to markdown guides for traceability.
- **Test visually** (desktop and mobile) after each section update for:
  - Section alignment/spacing
  - Card/content appearance
  - Font/color correctness
  - Responsive layout
  - Accessibility (contrast, semantic HTML)

---

## 6. Documentation & Maintainability

- **All deviations from guides** must be documented in code comments and markdown.
- **All core changes must be explainable by reference to the markdown documentation.**
- **Rollback**: Any style changes are reversible via the variable system.

---

## Summary Table: Section-By-Section Update Matrix

| Section     | Main File(s)                  | What to Update                          | Guide Reference          |
|-------------|-------------------------------|-----------------------------------------|-------------------------|
| Hero        | css/hero.css                  | Standardize spacing, use variables      | section-spacing-architecture.md|
| About       | css/about.css, sections/about.html | Remove movement, update to standard spacing and content | AboutSection.md               |
| Why Nominate| css/why.css, sections/why.html| Card/grid redesign, coloring, icons     | WhyNominateYourProduct.md      |
| Categories  | css/categories.css            | Remove negative margin, standard spacing| section-spacing-architecture.md|
| Global      | css/global.css                | Update/add spacing/color variables      | section-spacing-architecture.md, brand guide |