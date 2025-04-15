First Update Used 2.5 Gemini Pro RooCode:
 path '/Users/willf/cyberuxcellence-clean_localTESTCopy/newVersionCyberUXcellence/css/global.css'

Identify the Control: The height of the navbar is controlled by the CSS variable --nav-height defined in css/global.css (line 55). It's currently set to 72px.
Modify the Height: We will increase the value of --nav-height in css/global.css from 72px to 76px.
Impact:
This change will make the entire navigation bar slightly taller (by 4px).
The body has padding-top: var(--nav-height); (line 81), which will automatically adjust to the new height.
The logo elements should automatically center vertically within the slightly taller navbar.
graph TD A[Goal: Increase Navbar Height for Logo Space] --> B[Locate `--nav-height` in `css/global.css` (line 55)]; B --> C[Change value from `72px` to `76px`]; C --> D[Result: Slightly taller navbar, more vertical space for logo]; D --> E[Verify: Body padding & logo alignment update automatically];
Are you happy with this updated plan to increase the navbar height to 76px?

fix was in 
path '/Users/willf/cyberuxcellence-clean_localTESTCopy/newVersionCyberUXcellence/css/global.css'

Line 55 /* Navigation height for proper spacing */
  /*--nav-height: 72px;*/
    --nav-height: 76x; /* Adjusted for better visibility */