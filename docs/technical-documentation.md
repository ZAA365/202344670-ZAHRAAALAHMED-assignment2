# Technical Documentation

## Project Info
- **Name**: Personal Portfolio Website
- **Technologies**: HTML, CSS, JavaScript
- **Features**: Dark/Light mode toggle, responsive design
- **Design Inspiration**: Apple.com - minimal, elegant, premium feel

## File Structure
- `index.html` - Main page
- `css/styles.css` - All styling with theme support
- `js/script.js` - Theme toggle functionality
- `assets/images/` - Project screenshots

## Core Features

### 1. Theme Switching System
**HTML:** Button with `id="theme-toggle"`
**JavaScript:** Adds/removes `dark-mode` class on click
**CSS:** Different styles for `.dark-mode` class

### 2. Page Sections
- Header with name (Hero Header: Gradient background, 56px bold title)
- Sticky Navigation: Glass morphism effect, animated underline hover
- About me introduction: Profile card with centered content
- Projects table with images: Clean table layout with hoverable images
- Contact Form: Apple-style inputs with focus states

### 3. Color Themes
**Light Mode:**
- Background: Pure white (#ffffff)
- Text: Off-black (#1d1d1f)
- Header Gradient: #f5f5f7 → #ffffff
- Accent: Purple (#8100cc, #a310f8)
- Navigation: White with 0.9 opacity + blur


**Dark Mode:**
- Background: Pure black (#000000)
- Text: Off-white (#f5f5f7)
- Header Gradient: #1a1a1a → #000000
- Accent: Light purple (#a310f8)
- Navigation: Black with 0.85 opacity + blur

## Setup Instructions
1. Clone/download all files maintaining folder structure
2. Ensure image paths match: `assets/images/project1.png`
3. Open `index.html` in any modern browser
3. Click "🌙 Dark Mode" to test dark/light themes
5. Resize browser to test responsive breakpoints


## Known Issues
- Inline styles (`style="color: green"`) may not change in dark mode
- Form has no validation

## Browser Support
Google Chrome
Mozilla Firefox
Microsoft Edge
Safari - backdrop-filter works with -webkit prefix
Requires JavaScript enabled for theme toggle and Modern CSS support for grid/flexbox

## Personal Reflection
"I learned so much from this redesign, Apple's website looks simple but there's actually so much detail the spacing, the typography, the subtle shadows. My portfolio went from looking like a class exercise to feeling like a real professional site. Super proud of the frosted glass navigation and dark mode especially!"
— Zahraa AL-Ahmed, CS Student at KFUPM