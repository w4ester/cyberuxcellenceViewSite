# About Section: Content, Movement Changes, and Spacing

## 1. **Section Purpose**

The About section of the Cyber UXcellence Awards site highlights what sets winning cybersecurity products apart.

## 2. **Current Content (for This Awards Program)**

These awards highlight cybersecurity products that excel in:

- **Usability** – Intuitive design that simplifies security, not complicates it
- **Adoption** – Seamless user experiences that drive engagement and minimize friction
- **Impact** – UX that enhances security outcomes and business efficiency

---

## 3. **Section Movement / Positioning Changes**

- **All movement (e.g., shifting, negative margins, unusual padding) should be removed from the About section.**
    - The About section should use only standard, consistent section spacing and alignment as defined in the spacing architecture documentation.
    - Remove any custom negative `margin` or non-standard paddings that cause the About section to move up, down, or overlap with other sections.
    - Ensure `.about-section` in `css/about.css` uses only:
      ```css
      padding: var(--spacing-xxl) 0 var(--spacing-xl);
      margin: 0;
      ```
    - This keeps the section in the standard page flow, ensures professional consistency, and avoids visual misalignment.

---

## 4. **How to Change About Section Spacing/Positioning**

- **Check and update:**  
  - `css/about.css` (line 9)
- **Remove or set to zero:**  
    - Any negative `margin-top` or `margin-bottom` on `.about-section`
    - Any custom movement utilities applied to this section

---

## 5. **Reference**

- See `section-spacing-architecture.md` for the project-wide approach to section spacing and how to standardize it.