# File Paths for Hero Section Changes

To implement the viewport-relative sizing for your hero section, you need to edit the following file:

## Primary File to Edit:

```
css/hero.css
```

This is the main CSS file containing all the hero section styles that need to be modified. All the changes detailed in `hero-section-specific-changes.md` should be applied to this file.

## Reference Files (No Changes Needed):

```
sections/hero.html
```

This contains the HTML structure of your hero section. No changes are needed to this file as we're only modifying the CSS styling.

```
css/global.css
```

This contains your global variables and styles. We reference these in our CSS changes (like `var(--container-max-width)`), but no changes are needed to this file.

## Implementation Process:

1. Create a backup of `css/hero.css`
2. Open `css/hero.css` in your editor
3. Make the specific changes outlined in `hero-section-specific-changes.md`
4. Test the changes on different screen sizes, particularly large monitors
5. If needed, fine-tune the viewport percentages to get the exact scaling you want

No changes to HTML structure or other CSS files are required for this approach.