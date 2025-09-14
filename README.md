# Makhana Nation - Premium Fox Nuts Website

A fully responsive, modern website showcasing premium fox nuts (makhana) with a clean black & white design.

## Features

###  Design
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Black & White Theme**: High contrast for maximum readability
- **Clean Typography**: Inter font family for modern look
- **Smooth Animations**: CSS transitions and JavaScript effects

###  Home Section
- **Parallax Effect**: Product image moves and blurs on scroll
- **Pop Animation**: Initial image load with scale animation
- **Brand Content**: Logo and about us description

###  Nutritional Benefits
- **Animated Image**: Bowl of fox nuts with scroll-triggered animation
- **Benefits List**: Detailed nutritional information
- **Interactive Chart**: Canvas-based pie chart showing nutritional distribution

###  Recipes Section
- **Auto-scrolling Carousel**: Shows 3 recipes at a time (9 total)
- **Hover Effects**: Description popup on hover
- **Click to Open**: External links to recipe websites
- **Responsive**: Adapts to different screen sizes

###  Contact Section
- **Contact Form**: Full Name, Email, Description fields
- **Email Integration**: mailto functionality
- **Google Maps**: Embedded map with company location
- **Form Validation**: Required field validation

###  Navigation
- **Fixed Header**: Stays visible while scrolling
- **Smooth Scrolling**: Animated navigation between sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Translucent Effect**: Header becomes translucent after home section

## File Structure

`
MakhanaNationCursor/
 index.html          # Main HTML file
 style.css           # All CSS styles
 script.js           # JavaScript functionality
 assets/             # Image assets folder
    fox-nuts-main.jpg
    fox-nuts-bowl.jpg
    recipe1-9.jpg
 README.md           # This file
`

## How to Run Locally

### Method 1: Direct File Opening
1. Navigate to the project folder
2. Double-click on index.html
3. The website will open in your default browser

### Method 2: Local Server (Recommended)
1. Open terminal/command prompt in the project directory
2. Run one of these commands:

**Python 3:**
`ash
python -m http.server 8000
`

**Python 2:**
`ash
python -m SimpleHTTPServer 8000
`

**Node.js (if you have it installed):**
`ash
npx http-server
`

**PHP (if you have it installed):**
`ash
php -S localhost:8000
`

3. Open your browser and go to http://localhost:8000

### Method 3: Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click on index.html
3. Select "Open with Live Server"

## Browser Compatibility

-  Chrome 60+
-  Firefox 55+
-  Safari 12+
-  Edge 79+
-  Mobile browsers (iOS Safari, Chrome Mobile)

## Technical Details

### CSS Features
- CSS Grid and Flexbox for layouts
- CSS Custom Properties (variables)
- CSS Animations and Transitions
- Media Queries for responsiveness
- Backdrop-filter for glass effects

### JavaScript Features
- Intersection Observer API for scroll animations
- Canvas API for nutrition chart
- Event delegation for performance
- Smooth scrolling navigation
- Form validation and submission

### Performance Optimizations
- Optimized images (placeholder images included)
- Efficient CSS selectors
- Minimal JavaScript footprint
- Smooth 60fps animations

## Customization

### Colors
The website uses a black & white color scheme. To change colors, modify the CSS variables in style.css:

`css
:root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --accent-color: #333333;
}
`

### Content
- Update text content in index.html
- Replace placeholder images in ssets/ folder
- Modify recipe links in script.js
- Update contact information and map location

### Animations
- Adjust animation durations in CSS
- Modify scroll trigger points in JavaScript
- Customize carousel timing

## Image Requirements

Replace the placeholder images with actual photos:

### Main Images
- ox-nuts-main.jpg: 600x500px, high-quality product image
- ox-nuts-bowl.jpg: 500x400px, bowl of fox nuts

### Recipe Images
- ecipe1-9.jpg: 300x200px each, various recipe photos
- All images should be optimized for web (compressed)

## Contact Form

The contact form uses mailto: functionality. For production use, consider:
- Server-side form processing
- Email service integration (SendGrid, Mailgun, etc.)
- Form validation and spam protection

## License

This project is created for Makhana Nation. All rights reserved.

## Support

For technical support or customization requests, please contact the development team.

---

**Note**: This website is designed to showcase the premium fox nuts brand with a focus on health, nutrition, and modern web design principles.
