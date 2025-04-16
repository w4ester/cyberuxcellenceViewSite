# AFewMoreUpdatesStill.md

## 1. Change Font Color of "Categories" and "Why Nominate" Sections

- **Locate HTML:**  
  - `sections/categories.html`
  - `sections/why.html`
- **Update CSS:**  
  - Edit `css/categories.css` and `css/why.css`
  - Example for headings or section text:
    ```css
    /* css/categories.css */
    .categories-section h2, .categories-section h3 {
      color: #YOUR_DESIRED_COLOR;
    }
    /* css/why.css */
    .why-section h2, .why-section h3 {
      color: #YOUR_DESIRED_COLOR;
    }
    ```
  - Adjust selectors as needed based on existing markup.

---

## 2. Comment Out "Sponsorship" from NavHeader

- **Find navigation markup:**  
  - Likely in `index.html` or a nav partial in `sections/`.
- **Comment out the Sponsorship link:**
  ```html
  <!-- <li><a href="#sponsorship">Sponsorship</a></li> -->
  ```

---

## 3. Make "Contact Us About Sponsorship" Button

- **Decide placement:**  
  - Commonly in the sponsorship section or footer.
- **Add button HTML:**
  ```html
  <button class="contact-sponsorship-btn">Contact Us About Sponsorship</button>
  ```
- **Style the button:**  
  - Add to `css/sponsorship.css` or `css/global.css`:
    ```css
    .contact-sponsorship-btn {
      background: #f60;
      color: #fff;
      padding: 0.75em 1.5em;
      border-radius: 4px;
      border: none;
      font-size: 1rem;
      cursor: pointer;
    }
    ```
- **(Optional) Add link or modal for contact.**

---

## 4. Rename and Match Button Sizes ("Visit Mindgrub" → "Visit Us Mindgrub")

- **Find the button HTML:**  
  - Update text:
    ```html
    <button class="visit-mindgrub-btn">Visit Us Mindgrub</button>
    ```
- **Ensure size consistency:**  
  - Use a shared class or set explicit width:
    ```css
    .visit-mindgrub-btn, .contact-sponsorship-btn {
      min-width: 200px; /* Or use flex/grid for equal sizing */
    }
    ```

---

## 5. Show LinkedIn Logo in Footer

- **Locate footer HTML:**  
  - Typically in `index.html` or a footer partial.
- **Replace placeholder with LinkedIn logo:**
  - Use `assets/images/icons/linkedin.svg` or similar.
    ```html
    <a href="https://www.linkedin.com/company/mindgrub/" target="_blank" rel="noopener">
      <img src="assets/images/icons/linkedin.svg" alt="LinkedIn" />
    </a>
    ```

---

## 6. Update the Favicon

- **Replace favicon file:**  
  - Use new favicon in `assets/images/` or project root.
- **Update `<head>` in `index.html`:**
  ```html
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <!-- Or .ico/.png as appropriate -->
  ```

---

## 7. Animate All Trophies Sequentially (Cool UX Effect)

- **Identify trophy SVGs:**  
  - Likely in `assets/images/Custom Icon Exports/Dark Purple/SVG/`
- **Update HTML:**  
  - Add all trophy SVGs in the desired section (e.g., categories).
  - Give each a class `trophy-icon`.
- **Add CSS for animation:**  
  - Example:
    ```css
    .trophy-icon {
      transition: transform 0.5s;
    }
    .trophy-icon.animate {
      transform: translateY(-20px) scale(1.1) rotate(-10deg);
      /* Or your preferred animation */
    }
    ```
- **Add JavaScript to animate one-by-one:**
  - Example (in `js/categories.js` or similar):
    ```js
    const trophies = document.querySelectorAll('.trophy-icon');
    trophies.forEach((trophy, i) => {
      setTimeout(() => {
        trophy.classList.add('animate');
      }, i * 500); // Stagger by 0.5s each
    });
    ```
  - Adjust timing and animation as desired.

---

## Architecture Diagram

```mermaid
graph TD
    A[Find Relevant Section/Component] --> B[Update Markup & Classes]
    B --> C[Edit CSS for Styles]
    B --> D[Edit JS for Animations (if needed)]
    D --> E[Test in Browser]
```

---