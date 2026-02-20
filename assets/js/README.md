# JavaScript Implementation - main.js

Tiny, robust JavaScript for smooth scrolling, active nav highlighting, and mobile navigation.

## Features

### 1. Smooth Scrolling
- Works with all anchor links (`href="#section"`)
- Respects sticky header offset (80px)
- Skips empty hashes (`#`, `#!`)
- Auto-closes mobile nav after clicking

**Implementation:**
```javascript
// Automatically applied to all anchor links
<a href="#contact">Contact</a>
```

### 2. Active Nav Highlighting
- Highlights nav links based on scroll position
- Throttled for performance (100ms)
- Adds `.active` class to current section link
- Shows visual indicator (cyan underline)

**CSS Classes:**
```css
nav a.active          /* Active link state */
nav a.active::after   /* Cyan underline indicator */
```

### 3. Mobile Nav Toggle
- Auto-creates hamburger button on mobile
- Slide-in navigation drawer from right
- Click outside to close
- Auto-close on window resize to desktop
- Animated hamburger icon (transforms to X)

**Breakpoint:** 768px

## File Size
- **JavaScript:** ~4KB unminified
- **Zero dependencies**
- **No jQuery required**

## Performance Optimizations

### Throttling
Scroll events are throttled to fire max every 100ms:
```javascript
throttle(highlightActiveNav, 100)
```

### Event Delegation
- Minimal event listeners
- Efficient DOM queries
- No memory leaks

### Debounced Resize
Window resize events debounced to 250ms.

## Browser Support
- All modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills for smooth scroll)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Usage

### Basic HTML Structure
```html
<header>
    <nav>
        <h1>Site Name</h1>
        <div>
            <!-- Mobile toggle button auto-created here -->
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
</header>

<section id="about">...</section>
<section id="services">...</section>
<section id="contact">...</section>
```

The JavaScript will:
1. Add `.nav-links` class to the `<div>`
2. Create hamburger button (`.nav-toggle`)
3. Enable smooth scrolling on all links
4. Highlight active section

### Manual Toggle Button (Optional)
If you prefer to manually add the toggle button:
```html
<nav>
    <h1>Site Name</h1>
    <button class="nav-toggle" aria-label="Toggle navigation">
        <span class="nav-toggle-icon"></span>
        <span class="nav-toggle-icon"></span>
        <span class="nav-toggle-icon"></span>
    </button>
    <div class="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
    </div>
</nav>
```

## Customization

### Adjust Header Offset
Change the offset for sticky header:
```javascript
const headerOffset = 80; // Change to your header height
```

### Throttle Timing
Adjust scroll performance:
```javascript
throttle(highlightActiveNav, 100) // Change 100 to your preference
```

### Mobile Breakpoint
Modify in CSS:
```css
@media (max-width: 768px) {
    /* Change 768px to your breakpoint */
}
```

### Nav Drawer Width
Change mobile nav width:
```css
.nav-links {
    width: 280px; /* Adjust as needed */
}
```

## Debugging

### Enable Console Logging
Uncomment debug lines (add to code):
```javascript
console.log('Scrolling to:', target);
console.log('Active section:', sectionId);
```

### Check Active States
Inspect elements for:
- `.nav-links.active` (mobile nav open)
- `.nav-toggle.active` (hamburger active)
- `nav a.active` (current nav link)

## Common Issues

### Smooth Scroll Not Working
**Solution:** Ensure sections have `id` attributes matching anchor links.

### Active Highlight Not Working
**Solution:** Ensure sections have `<section id="...">` tags, not just divs.

### Mobile Menu Not Appearing
**Solution:** Check CSS is loaded and breakpoint is correct (768px).

### Multiple Active Links
**Solution:** Check for duplicate section IDs.

## Accessibility

### Keyboard Navigation
- Tab through nav links
- Enter to activate links
- Escape to close mobile menu (can be added)

### ARIA Attributes
```html
<button aria-label="Toggle navigation" aria-expanded="false">
```

### Screen Readers
- Semantic HTML (`<nav>`, `<header>`)
- Clear link text
- Proper heading hierarchy

## Code Structure

```
main.js
├── smoothScroll()           // Smooth anchor link scrolling
├── highlightActiveNav()     // Active section highlighting
├── throttle()               // Performance optimization
├── mobileNavToggle()        // Mobile menu functionality
└── init()                   // Initialize all features
```

## Dependencies
**None.** Vanilla JavaScript only.

## Minification
To minify for production:
```bash
# Using terser
npx terser assets/js/main.js -o assets/js/main.min.js -c -m

# Update HTML to use minified version
<script src="assets/js/main.min.js"></script>
```

## Future Enhancements (Optional)
- [ ] Add escape key to close mobile nav
- [ ] Add focus trap for mobile nav
- [ ] Add smooth scroll polyfill for IE11
- [ ] Add loading animation
- [ ] Add scroll-to-top button

## File Info
- **Size:** ~4KB (raw) / ~1.5KB (minified + gzipped)
- **Lines:** ~150
- **Functions:** 5
- **Events:** 3 listeners (click, scroll, resize)
