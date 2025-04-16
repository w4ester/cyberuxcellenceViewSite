# Make Changes Now: Section-by-Section Update Playbook for LLM

This document provides clear rules and step-by-step directions for an LLM (or developer) to systematically update the Cyber UXcellence Awards project, following each section-specific markdown plan. Each referenced markdown file contains precise instructions and the paths to the files that need changes.

---

## 1. **Section Spacing Consistency**

- **Reference:** `section-spacing-architecture.md`
- **Action:**  
  - Review the spacing for each major section (Hero, About, Why, Categories, etc.).
  - Standardize or document top and bottom paddings as outlined.
  - Update section CSS files and variables as described.  
- **Files to Update:**  
  - `css/hero.css`, `css/about.css`, `css/why.css`, `css/categories.css`, `css/global.css`

---

## 2. **About Section Content & Movement**

- **Reference:** `AboutSection.md`
- **Action:**  
  - Ensure About section content matches the current program messaging.
  - Remove any negative margin, extra movement, or non-standard paddings from the About section.
  - Align the About section to use only standard section spacing as prescribed.
- **Files to Update:**  
  - `css/about.css`
  - About section markup in `sections/about.html` or main layout.

---

## 3. **Why Nominate Your Product Cards**

- **Reference:** `WhyNominateYourProduct.md`
- **Action:**  
  - Refactor the "Why Nominate Your Product" section to use nearly black cards with white font per the brand guide.
  - Implement the new `.benefit-card` styles and ensure all cards use the correct markup and color variables.
  - Confirm icons and text are visually accessible and align with the brand.
- **Files to Update:**  
  - `css/why.css`
  - Section markup in `sections/why.html` or main layout.
  - Color variables in `css/global.css` if needed.

---

## 4. **General Execution Rules**

- **Follow each referenced markdown file exactly.**
- **For every section:**  
  - Read the corresponding markdown plan thoroughly.
  - Make the changes in the file paths specified.
  - Use the variable system from `css/global.css` for all colors and spacing.
  - Maintain brand consistency by cross-referencing `/assets/images/Cyber-UXcellence-Award-Brand-Guidelines.pdf`.
- **Test after each section update for layout, color, and spacing consistency.**
- **Comment code with section and change references as needed for traceability.**

---

## 5. **Referenced Markdown Plans**

- `section-spacing-architecture.md`
- `AboutSection.md`
- `WhyNominateYourProduct.md`

---

**Ready, set, update:**  
Apply these rules section by section and consult the markdown documentation for precise, brand-aligned implementation.