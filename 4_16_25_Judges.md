<!-- file: 4_16_25_Judges.md -->

# Judges Section

## Prompt
You are an LLM tasked with updating the **Meet the Judges** grid.  
1. Review checklist.  
2. Plan grid and header tweaks.  
3. Tick off as you finish each.  

## Plan
- [ ] Move subheader to one line.  
- [x] Change card background from nearly black and use dark purple brand guide.  
- [ ] Ensure judge images/text align in a grid (this is for future update do not do now, repeat you will be told when to do this not now...).  

## Checklist
- [ ] Move “Meet the Judges” subheader to be one line  


## What Has Been Done (as of this update)
- Updated the Judges section card backgrounds to use the brand dark purple color.
- Ensured the "Meet the Judges" subheading is rendered on a single line in HTML and tried multiple CSS approaches to force it to stay one line responsively.
- Attempted to force the "Meet the Judges" headline (h2) to stay on one line at desktop widths, and documented all CSS/HTML fixes attempted in the section below (see "Tried but not working yet").

## What Will Be Revisited Later
- Will return to solve the issue of forcing the "Meet the Judges" headline to always display one long line at all desktop/tablet widths without breaking, once other priority updates are finished.
- May further explore flexbox/grid layout, advanced responsive typography, or structural changes to the container/header if needed.
- Will retest and refine after other layout/design changes are complete to ensure heading/subheading display remains optimal and on-brand.



## Tried but not working yet

### Heading on One Line Attempts
- **white-space: nowrap** on `.judges-section .section-header h2`:
  ```css
  .judges-section .section-header h2 {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 600px) {
    .judges-section .section-header h2 {
      white-space: normal;
      font-size: 2rem;
    }
  }
  ```
- **Forcing container/header width to 100vw**:
  ```css
  .judges-section .container, .judges-section .section-header {
    max-width: 100vw;
    width: 100vw;
    margin-left: calc(-1 * (100vw - 100%) / 2);
    text-align: center;
    box-sizing: border-box;
  }
  ```

### Subheading on One Line Attempts
- **white-space: nowrap** and responsive font-size on `.judges-section .section-subheading`:
  ```css
  .judges-section .section-subheading {
    display: block;
    font-size: 1.6rem;
    line-height: 1.2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 100vw;
  }
  @media (max-width: 768px) {
    .judges-section .section-subheading {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 480px) {
    .judges-section .section-subheading {
      font-size: 0.95rem;
    }
  }
  ```

- [x] Change Nearly Black to  dark purple card style from brand guide
