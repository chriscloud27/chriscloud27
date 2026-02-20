# CSS Design System Reference

This CSS design system is based on the brand colors defined in `/content/selling-personal-brand-colors.md`.

## Brand Colors

### Primary Palette

| Variable | Value | Purpose |
|----------|-------|---------|
| `--color-deep-tech-blue` | `#0B1F3A` | Strategic depth, trust, architecture thinking |
| `--color-electric-cyan` | `#00E5FF` | Innovation, AI-native systems, technical precision |
| `--color-graphite` | `#1A1A1A` | Stability, professionalism, focus |
| `--color-white` | `#FFFFFF` | Clarity, structure, minimalism |

### Semantic Mapping

```css
--color-primary: var(--color-deep-tech-blue);
--color-accent: var(--color-electric-cyan);
--color-text: var(--color-graphite);
--color-background: var(--color-white);
```

## Typography

### Font Families

```css
--font-family-primary: -apple-system, BlinkMacSystemFont, 'SF Pro', 'Inter', 'Segoe UI', Roboto, sans-serif;
--font-family-mono: 'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace;
```

### Font Sizes

| Variable | Value | Use Case |
|----------|-------|----------|
| `--font-size-xs` | `0.75rem` (12px) | Small text, captions |
| `--font-size-sm` | `0.875rem` (14px) | Secondary text |
| `--font-size-base` | `1rem` (16px) | Base body text |
| `--font-size-lg` | `1.125rem` (18px) | Large body text |
| `--font-size-xl` | `1.25rem` (20px) | Subheadings |
| `--font-size-2xl` | `1.5rem` (24px) | H4 |
| `--font-size-3xl` | `1.875rem` (30px) | H3 |
| `--font-size-4xl` | `2.25rem` (36px) | H2 |
| `--font-size-5xl` | `3rem` (48px) | H1, Hero |
| `--font-size-6xl` | `3.75rem` (60px) | Large displays |

## Spacing System

| Variable | Value | Pixels |
|----------|-------|--------|
| `--spacing-xs` | `0.25rem` | 4px |
| `--spacing-sm` | `0.5rem` | 8px |
| `--spacing-md` | `1rem` | 16px |
| `--spacing-lg` | `1.5rem` | 24px |
| `--spacing-xl` | `2rem` | 32px |
| `--spacing-2xl` | `3rem` | 48px |
| `--spacing-3xl` | `4rem` | 64px |
| `--spacing-4xl` | `5rem` | 80px |
| `--spacing-5xl` | `6rem` | 96px |

## Component Classes

### Buttons

```html
<!-- Primary Button -->
<a href="#" class="btn btn--primary">Click Me</a>

<!-- Secondary Button -->
<a href="#" class="btn btn--secondary">Learn More</a>

<!-- Large Button -->
<a href="#" class="btn btn--primary btn--large">Get Started</a>
```

### Sections

```html
<!-- Regular Section -->
<section class="section">
  <div class="container">
    <!-- Content -->
  </div>
</section>

<!-- Primary Background Section -->
<section class="section section--primary">
  <div class="container">
    <!-- Content -->
  </div>
</section>

<!-- Alternate Background Section -->
<section class="section section--alt">
  <div class="container">
    <!-- Content -->
  </div>
</section>
```

### Cards

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

## Utility Classes

### Text Alignment

- `.text-center` - Center align text
- `.text-primary` - Primary color text
- `.text-accent` - Accent color text

### Backgrounds

- `.bg-primary` - Primary background color
- `.bg-accent` - Accent background color

### Spacing Utilities

Margin top: `.mt-0` through `.mt-5`  
Margin bottom: `.mb-0` through `.mb-5`

## Color Usage Guidelines

### Deep Tech Blue (#0B1F3A)
**Use for:**
- Primary backgrounds (hero sections, headers, footers)
- Navigation areas
- Large sections conveying depth and stability
- Main headlines

**Avoid:**
- Small text on white background (low contrast)

### Electric Cyan (#00E5FF)
**Use for:**
- Call-to-action buttons
- Accent elements and highlights
- Hover effects
- Links and interactive elements
- Icons and diagrams

**Avoid:**
- Large background areas
- Body text

### Graphite (#1A1A1A)
**Use for:**
- Body text on light backgrounds
- Secondary headlines
- UI structure elements

**Avoid:**
- Primary headlines (use Deep Tech Blue instead)

### White (#FFFFFF)
**Use for:**
- Main content backgrounds
- Text on dark backgrounds
- Creating breathing room between sections

## Responsive Breakpoints

- **Mobile:** `max-width: 480px`
- **Tablet:** `max-width: 768px`
- **Desktop:** `1200px` max-width container

## Design Principles

Based on the brand guidelines:

1. **Minimalistic** - Clean, technical, precise, calm
2. **Structured** - Clear lines, organized layouts, generous whitespace
3. **Professional** - Technical authority without playfulness
4. **Modern** - AI-native, future-oriented aesthetic

## Reference Aesthetics

The design draws inspiration from:
- Stripe
- Linear
- Vercel
- Supabase
- OpenAI

## Example Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <section class="hero">
        <div class="container">
            <h1>Your Headline</h1>
            <p>Your message here.</p>
            <a href="#contact" class="btn btn--primary btn--large">Get Started</a>
        </div>
    </section>
    
    <section class="section">
        <div class="container">
            <h2 class="text-center">Section Title</h2>
            <div class="card">
                <h3>Card Title</h3>
                <p>Card content.</p>
            </div>
        </div>
    </section>
</body>
</html>
```

## Performance Optimizations

The CSS includes:
- System font stack (no external font loading)
- CSS variables for easy theming
- Minimal shadow calculations
- Smooth transitions with hardware acceleration
- Mobile-first responsive design
- Optimized for GitHub Pages static hosting
