# Why Nominate Your Product Section – Visual and Implementation Plan

## Objective

**Upgrade the "Why Nominate Your Product" section to use 'nearly black' cards with white font, matching the Cyber UXcellence brand guide.**  
The goal is to move from the current flat, open layout to a set of visually distinct, dark cards for each benefit, as shown in the preferred design.

---

## Desired Result

- Each benefit (e.g., "Industry Recognition & Credibility", "Media Exposure & Visibility") appears in a card with:
    - **Background:** Nearly black color (`--mg-nearly-black` from brand guide / global.css)
    - **Text:** White (`--white` from brand guide / global.css)
    - **Rounded corners** and **consistent padding**
    - Brand icons remain visible and clear (use white or light accent icons)
- Card grid is responsive and maintains spacing/gap between cards.

---

## Brand Colors (from Brand Guide)

- **Nearly Black:** `#231F20` (CSS variable: `--mg-nearly-black`)
- **White:** `#FFFFFF` (CSS variable: `--white`)

---

## Implementation Plan

### 1. **CSS Changes**

**File:** `css/why.css`

- Add or update a card class for the benefit cards:
    ```css
    .benefit-card {
      background: var(--mg-nearly-black);
      color: var(--white);
      border-radius: 16px;
      padding: var(--spacing-lg);
      box-shadow: 0 2px 8px rgba(44,33,90,0.08); /* Optional subtle shadow */
      display: flex;
      flex-direction: column;
      min-height: 240px;
      transition: transform 0.2s;
    }
    .benefit-card:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 6px 24px rgba(44,33,90,0.14);
    }
    .benefit-card h3, .benefit-card p, .benefit-card svg, .benefit-card img {
      color: var(--white);
      fill: var(--white);
    }
    ```

- Remove or override any previous background or color rules that keep the card light or transparent.

### 2. **HTML/Section Markup Changes**

**File:** `sections/why.html` (or in your main page where this section is included)

- Ensure each benefit is wrapped in a `.benefit-card` div.
- Check that the layout grid (e.g., `.benefits-grid`) is present and uses `gap: 40px;` or a spacing variable for consistent spacing.

**Example:**
```html
<div class="why-section">
  <div class="container">
    <div class="benefits-grid">
      <div class="benefit-card">
        <!-- Icon SVG or IMG -->
        <h3>Industry Recognition &amp; Credibility</h3>
        <p>Stand out as a leader in cybersecurity UX and earn validation from industry experts and peers. Winning reinforces your product’s reputation for innovation, trustworthiness, and real-world effectiveness.</p>
      </div>
      <!-- Repeat for each benefit -->
    </div>
  </div>
</div>
```

### 3. **Paths to Change**

- **Section Markup:**  
  - `sections/why.html` (or equivalent HTML in main layout)
- **Section CSS:**  
  - `css/why.css`
- **Brand Colors Reference:**  
  - `/assets/images/Cyber-UXcellence-Award-Brand-Guidelines.pdf`
- **Global Color Variables:**  
  - `css/global.css` (for --mg-nearly-black, --white)

---

## 4. Brand Consistency

- Confirm colors match those set in `/assets/images/Cyber-UXcellence-Award-Brand-Guidelines.pdf` and `css/global.css`.
- Use only these variables for background and text color to ensure maintainability.

---

## 5. Responsive/Tuning

- Test the grid/cards on desktop and mobile.
- Adjust `min-height` and `padding` as needed for best appearance across devices.

---

## 6. Rollback

- To revert to the old style, remove the `.benefit-card` background and color assignments.

---

## Summary Table

| What to Change                 | Path                       | What to Do                       |
|------------------------------- |--------------------------- |----------------------------------|
| Card background/text color     | css/why.css                | Update `.benefit-card` styles    |
| Card markup/wrapping           | sections/why.html          | Wrap each benefit in `.benefit-card` |
| Brand color variables          | css/global.css             | Ensure `--mg-nearly-black`/`--white` |
| Reference brand guide          | assets/images/Cyber-UXcellence-Award-Brand-Guidelines.pdf | Verify color values              |