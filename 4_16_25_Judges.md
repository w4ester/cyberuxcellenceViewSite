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
