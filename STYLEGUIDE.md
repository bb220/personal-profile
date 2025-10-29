# Brandon Bellero Personal Website - Style Guide

## Design Philosophy

This website embodies a **literary aesthetic** inspired by classic book design and typography. The design prioritizes readability, elegance, and timelessness over trends. It evokes the feeling of reading a well-crafted book, with careful attention to typography, spacing, and hierarchy.

---

## Color Palette

### Primary Colors

- **Ink** (`#111`) - Primary text color, deep charcoal black
- **Paper** (`#faf8f4`) - Background color, warm off-white reminiscent of aged paper
- **Accent** (`#7a6f5a`) - Muted olive-brown for links and subtle highlights

### Supporting Colors

- **Divider** (`#ded6c8`) - Soft beige for horizontal rules
- **Muted Text** (`#666`) - Medium gray for dates and secondary information
- **Subtle Text** (`#555`) - Slightly darker gray for blockquotes

### Color Usage Guidelines

- Use **Ink** for all primary text and headings
- Use **Paper** as the background throughout the site
- Use **Accent** for all interactive elements (links, buttons)
- Links should have a subtle underline using `color-mix(in srgb, var(--accent) 60%, transparent)`
- On hover, the underline becomes fully opaque
- Never use pure black (`#000`) or pure white (`#fff`)

---

## Typography

### Font Families

1. **EB Garamond** - Primary body text font
   - Classic serif typeface
   - Excellent readability for long-form content
   - Used for: Body text, paragraphs, descriptions

2. **Merriweather** - Display and emphasis font
   - Bold serif typeface
   - Used for: Roman numerals, section titles, project titles, dates, navigation
   - Weight: 700 (Bold)

3. **Playfair Display** - Decorative font
   - Elegant italic serif
   - Used for: Chapter titles, drop caps
   - Style: Italic

### Type Scale

- **Body Text**: 22px (20px on mobile)
- **Chapter Titles**: 2rem (32px)
- **Roman Numerals**: 1.25rem (20px)
- **Section Titles**: 1.15rem (18.4px)
- **Small Text**: 0.95rem (15.2px)
- **Drop Cap**: 3.35rem (53.6px) - 2.5rem on mobile

### Line Height

- **Body Text**: 1.5 (comfortable reading)
- **Post Content**: 1.6 (slightly more spacious for long-form)
- **Drop Cap**: 0.9 (tight for visual impact)

### Font Weights

- **Regular**: 400 (body text)
- **Bold**: 700 (headings, emphasis, navigation)

### Typography Guidelines

- Use **drop caps** for the first paragraph of major sections
- Apply **letter-spacing** of 0.06em to roman numerals for elegance
- Keep **text-align: left** for body content (never justify on small screens)
- Use **text-indent: 0** (no paragraph indentation)
- Maintain generous **margins between paragraphs** (1.5rem)

---

## Layout & Spacing

### Container Widths

- **Maximum Content Width**: 720px (`--max`)
- **Post Content Width**: 65ch (optimal reading line length)
- **Menu Panel Width**: min(300px, 80vw)

### Spacing System

- **Section Margins**: 7vh vertical spacing between major sections
- **Project Margins**: 2.25rem top, 0.6rem bottom for titles
- **Paragraph Spacing**: 1.5rem bottom margin
- **Header Padding**: 3vh top, 4vh bottom
- **Body Padding**: 0 horizontal, 6vw horizontal, 12vh bottom (10vh on mobile)

### Responsive Breakpoints

- **Mobile**: max-width 640px
  - Reduce font size to 20px
  - Reduce drop cap to 2.5rem
  - Adjust padding to 0 6vw 10vh

---

## Components

### Navigation Header

- **Position**: Top of page, centered
- **Layout**: Flexbox with space-between
- **Name Style**: Merriweather Bold, 1.1rem, letter-spacing 0.02em
- **Hover Effect**: Opacity 0.7 (no underline)
- **Menu Icon**: 24x24px hamburger icon
- **Menu Panel**: Slides in from right with fade overlay

### Menu Panel

- **Background**: Paper color with subtle shadow
- **Animation**: 0.3s slide-in from right
- **Overlay**: rgba(0, 0, 0, 0.3) backdrop
- **Links**: Merriweather Bold, 1.5rem
- **Spacing**: 1.5rem between items

### Section Headers

- **Structure**: Roman numeral + Chapter title
- **Alignment**: Center
- **Roman Numeral**: Merriweather Bold, uppercase, letter-spaced
- **Chapter Title**: Playfair Display Italic, 2rem
- **Spacing**: 0.35rem between numeral and title, 2.75rem below

### Project/Post Cards

- **Title**: Merriweather Bold, 1.15rem, underlined
- **Title Link**: Ink color with subtle underline
- **Date**: Merriweather Bold, 1.05rem, gray (#666)
- **Description**: EB Garamond, regular weight
- **Spacing**: 1.25rem top margin per card

### Links

- **Default**: Accent color with 60% opacity underline
- **Hover**: Full opacity underline
- **Title Links**: Ink color with subtle underline
- **More Links**: Smaller (0.95rem), accent color

### Horizontal Rules

- **Style**: 1px solid line
- **Color**: #ded6c8 (soft beige)
- **Spacing**: 4vh top and bottom margins

### Footer

- **Alignment**: Center
- **Opacity**: 0.7
- **Spacing**: 1.25rem top, 3rem bottom
- **Content**: Copyright symbol + year + name

---

## Blog Post Styling

### Post Header

- **Title**: Merriweather Bold, 2rem, left-aligned
- **Date**: Merriweather Bold, 1.15rem, gray
- **Tags**: Rounded pills with 15% accent background
- **Spacing**: 3rem below header

### Post Body

- **Drop Cap**: First letter of first paragraph, Playfair Display Italic
- **Headings**: Merriweather Bold, hierarchical sizing (2rem, 1.5rem, 1.25rem)
- **Images**: Rounded corners (0.5rem), subtle shadow, centered
- **Image Captions**: Italic, gray, 0.95rem, centered
- **Lists**: Outside positioning, 2rem left padding
- **Blockquotes**: 3px left border (accent), italic, indented 1.5rem
- **Code**: 10% accent background, rounded, monospace font
- **Links**: Accent color with underline

---

## Interactions & Animations

### Hover States

- **Links**: Underline opacity increases from 60% to 100%
- **Navigation**: Opacity reduces to 0.7
- **Buttons**: Opacity reduces to 0.7

### Menu Animations

- **Overlay**: 0.2s fade-in
- **Panel**: 0.3s slide-in from right
- **Easing**: ease-out for smooth, natural motion

### Transitions

- **Duration**: 0.2s for most interactions
- **Property**: opacity, border-color
- **Easing**: Default (ease)

---

## Accessibility

- **Semantic HTML**: Use proper heading hierarchy (h1, h2, h3)
- **ARIA Labels**: All icon buttons have descriptive labels
- **Focus States**: Maintain visible focus indicators
- **Color Contrast**: All text meets WCAG AA standards
- **Link Targets**: External links open in new tabs with rel="noopener"

---

## Content Guidelines

### Writing Style

- Professional yet approachable tone
- Clear, concise descriptions
- Focus on substance over decoration

### Section Structure

- Use roman numerals for major sections (I, II, III, IV)
- Use descriptive chapter titles in italic
- Maintain consistent hierarchy throughout

### Image Guidelines

- Use high-quality images with appropriate alt text
- Optimize images for web (< 500KB when possible)
- Include descriptive captions in italic below images
- Maintain consistent border-radius (0.5rem)

---

## Technical Notes

### CSS Custom Properties

\`\`\`css
:root {
  --ink: #111;
  --paper: #faf8f4;
  --accent: #7a6f5a;
  --max: 720px;
}
\`\`\`

### Layout Method Priority

1. **Flexbox** for most layouts (header, navigation, alignment)
2. **CSS Grid** only when necessary for complex 2D layouts
3. **Block** for content flow

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS custom properties required
- Flexbox required
- color-mix() function for subtle color variations

---

## Design Principles

1. **Readability First** - Every design decision prioritizes comfortable reading
2. **Timeless Over Trendy** - Classic typography and restrained color palette
3. **Content-Focused** - Design serves the content, never overshadows it
4. **Generous Spacing** - White space is a design element, not wasted space
5. **Subtle Interactions** - Hover states and animations are understated
6. **Consistent Hierarchy** - Clear visual structure guides the reader
7. **Literary Aesthetic** - Evokes the experience of reading a well-designed book
