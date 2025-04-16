Below are individual section‐focused Markdown “files” you can drop into your repo. Each one includes:

1. **Prompt** for the LLM: what to do  
2. **Plan** outline: how to approach  
3. **Checklist**: the exact items to implement, with boxes to check off  

```markdown
<!-- file: 4_16_25_NavBar.md -->

# NavBar Section

## Prompt
You are an LLM tasked with updating the **NavBar** on our site.  
1. Review the checklist below.  
2. Draft a step‑by‑step plan for implementing each change.  
3. As you apply each update in code, mark the box from `[ ]` to `[x]`.  

## Plan
- [ ] Inspect current `NavBar` markup & CSS.  
- [ ] Identify where the “Nominate Now” button should live.  
- [ ] Adjust padding around the logo wordmark.  
- [ ] Re‑add missing “Nominate” button if removed.  
- [ ] Test responsiveness in desktop & mobile.  

## Checklist
- [ ] Nominate now Button add to navbar  
- [ ] More padding for logo word mark for Powered by Mindgrub in Nav  
- [ ] Make sure to re‑add the Nominate button in the Navbar  
```

```markdown
<!-- file: 4_16_25_Hero.md -->

# Hero Section

## Prompt
You are an LLM tasked with updating the **Hero** section.  
1. Review the checklist below.  
2. Create a plan for each item.  
3. Check off items as you complete them.  

## Plan
- [ ] Open `hero.html` and `hero.css`.  
- [ ] Add “See Categories” button without overshadowing “Nominate Now.”  
- [ ] Emphasize “Nominate Now” visually.  
- [ ] Verify mobile stacking and spacing.  

## Checklist
- [ ] Add “see categories” button  
- [ ] Emphasize Nominate Now button  
- [ ] Ensure “See Categories” doesn’t overtake “Nominate Now”  
```

```markdown
<!-- file: 4_16_25_About.md -->

# About Section

## Prompt
You are an LLM tasked with refining the **About** section.  
1. Review the checklist below.  
2. Plan out each CSS/HTML tweak.  
3. Check off items as they are done.  

## Plan
- [ ] Center the white highlight down the middle of the purple background.  
- [ ] Close any gaps—make the purple extend full‑height.  
- [ ] Style CEO banner and remove extra white space.  

## Checklist
- [ ] White Highlight is centered in About section  
- [ ] Close gaps so purple background spans full height  
- [ ] Make CEO banner flush, closing white gap  
```

```markdown
<!-- file: 4_16_25_AwardCategories.md -->

# Awards Category Section

## Prompt
You are an LLM tasked with aligning the **Awards Category** section.  
1. Review the checklist below.  
2. Draft a plan for padding and alignment fixes.  
3. Mark items done as you code them.  

## Plan
- [ ] Inspect `categories.css` for padding rules.  
- [ ] Adjust left alignment of text and icons.  
- [ ] Verify consistency across all category cards.  

## Checklist
- [ ] Padding matching for Award Categories section  
- [ ] Left-align copy and left-align icon for each category  
```

```markdown
<!-- file: 4_16_25_WhyNominate.md -->

# Why Nominate Section

## Prompt
You are an LLM tasked with cleaning up the **Why Nominate** section.  
1. Read the checklist.  
2. Plan removal and style changes.  
3. Check off changes as you implement.  

## Plan
- [ ] Remove all subheadings.  
- [ ] Remove the “Nominate” button here only.  
- [ ] Apply purple background with white stripe down the middle.  
- [ ] Convert “Media and Exposure” text into a call‑out.  

## Checklist
- [ ] Remove subheadings  
- [ ] Remove Nominate button from this section  
- [ ] Purple with white light down the middle styling  
- [ ] Change “Media and Exposure” to a call‑out style  
```

```markdown
<!-- file: 4_16_25_Judges.md -->

# Judges Section

## Prompt
You are an LLM tasked with updating the **Meet the Judges** grid.  
1. Review checklist.  
2. Plan grid and header tweaks.  
3. Tick off as you finish each.  

## Plan
- [ ] Move subheader up one line.  
- [ ] Change background to dark purple cards.  
- [ ] Ensure judge images/text align in a grid.  

## Checklist
- [ ] Move “Meet the Judges” subheader up one line  
- [ ] Change Nearly Black to our dark purple card style  
- [ ] Verify grid layout and shared folder assets  
```

```markdown
<!-- file: 4_16_25_Timeline.md -->

# Timeline Section

## Prompt
You are an LLM tasked with updating the **Timeline** section.  
1. Review checklist.  
2. Plan date text swap.  
3. Check off once done.  

## Plan
- [ ] Locate date strings in `timeline.html`.  
- [ ] Replace “April 14, 2025” with “April 24, 2025.”  
- [ ] Confirm CSS for date styling.  

## Checklist
- [ ] Change “April 14, 2025” to “April 24, 2025”  
```

```markdown
<!-- file: 4_16_25_Sponsorship.md -->

# Sponsorship Banner

## Prompt
You are an LLM tasked with refining the **Sponsorship** section.  
1. Review checklist.  
2. Plan link and button updates.  
3. Mark each item as you apply it.  

## Plan
- [ ] Update heading text.  
- [ ] Remove “Visit Mindgrub” button.  
- [ ] Center “Contact Us” button.  

## Checklist
- [ ] Change “Learn more about Mindgrub” to “Learn About Sponsorship Opportunities…”  
- [ ] Remove “Visit Mindgrub” button  
- [ ] Center “Contact Us” button  
```

```markdown
<!-- file: 4_16_25_Footer.md -->

# Footer Section

## Prompt
You are an LLM tasked with polishing the **Footer**.  
1. Review checklist.  
2. Plan logo swap and CTA.  
3. Tick off each change in code.  

## Plan
- [ ] Swap vertical logo for white horizontal logo.  
- [ ] Add LinkedIn icon + “Follow us” CTA.  
- [ ] Remove “email” and “website” text, replace with big “Visit Mindgrub” button.  

## Checklist
- [ ] Use white horizontal logo (not vertical)  
- [ ] Add “Follow us” CTA with LinkedIn logo  
- [ ] Remove “email” and “website” text  
- [ ] Add big “Visit Mindgrub” button aligned and styled  
```

```markdown
<!-- file: 4_16_25_GlobalNotes.md -->

# Additional Global Notes

## Prompt
You are an LLM tasked with enforcing **site‑wide** style rules.  
1. Review the global checklist.  
2. Plan CSS/HTML audit.  
3. Check off items as completed.  

## Plan
- [ ] Audit all section headings for font/size consistency in `global.css`.  
- [ ] Remove subheadings wherever indicated.  
- [ ] Ensure no white font appears on orange buttons.  

## Checklist
- [ ] Remove subheadings in all indicated sections  
- [ ] White highlight centered down the middle for About, Why Nominate, FAQ  
- [ ] Hero section: add “See Categories,” emphasize “Nominate Now”  
- [ ] Sponsorship: move big button to footer, remove from section  
- [ ] Audit fonts & sizes across all modular CSS/JS  
- [ ] Ensure no white text on orange buttons  
```

---

**Next step:** drop each of these `.md` files into your docs folder. Your LLM agent can then load each, read the prompt, follow the plan, and check off the list as it implements the changes.