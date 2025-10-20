# Portfolio Website Template

A modern, responsive portfolio website template built with HTML5, CSS3, JavaScript, and Bootstrap 5. This template is designed to showcase your programming projects and personal information in a professional manner.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Bootstrap 5**: Built with the latest Bootstrap framework
- **Easy Customization**: Clearly marked sections with TODO comments for easy personalization
- **Smooth Scrolling**: Enhanced navigation with smooth scroll effects
- **Interactive Elements**: Hover effects, animations, and transitions
- **Project Showcase**: Dedicated section to display your programming projects
- **Contact Form**: Ready-to-use contact form (requires backend integration)
- **Social Media Integration**: Links to your social profiles

## Sections

1. **Navigation Bar**: Fixed navigation with smooth scrolling
2. **Hero Section**: Eye-catching introduction with profile picture and social links
3. **About Section**: Space to tell your story and share your background
4. **Skills Section**: Showcase your technical skills and technologies
5. **Projects Section**: Display your programming projects with images and descriptions
6. **Contact Section**: Contact information and form for visitors to reach you
7. **Footer**: Copyright and social media links

## Getting Started

### 1. Download/Clone the Files

Make sure you have all three files:
- `index.html`
- `styles.css`
- `script.js`

### 2. Customize Your Information

Open `index.html` and look for comments starting with `<!-- TODO: -->`. These mark all the areas you need to customize:

#### Personal Information to Update:

- **Line 79-80**: Your social media links (Twitter, Email)
- **Line 101-115**: Your bio and about information
- **Line 117**: Link to resume/CV file
- **Line 256-341**: Your projects (see instructions below)
- **Line 364-376**: Your contact information (email, location, phone)
- **Line 467**: Copyright year and name
- **Line 471-474**: Footer social media links

### 3. Adding Your Projects

To add a project, copy one of the existing project card templates (lines 256-280) and modify:

```html
<div class="col-lg-4 col-md-6">
    <div class="project-card">
        <div class="project-image">
            <!-- Replace with your project screenshot -->
            <img src="path/to/your/image.jpg" alt="Project Name">
            <div class="project-overlay">
                <!-- Add links to live demo and GitHub repo -->
                <a href="https://your-demo-link.com" class="btn btn-light btn-sm me-2" target="_blank">
                    <i class="bi bi-eye"></i> Demo
                </a>
                <a href="https://github.com/yourusername/repo" class="btn btn-dark btn-sm" target="_blank">
                    <i class="bi bi-github"></i> Code
                </a>
            </div>
        </div>
        <div class="project-content">
            <!-- Update project title and description -->
            <h4>Your Project Title</h4>
            <p>Brief description of your project, what it does, and the problem it solves.</p>
            <!-- Update technology tags -->
            <div class="project-tags">
                <span class="badge bg-primary">Technology 1</span>
                <span class="badge bg-primary">Technology 2</span>
                <span class="badge bg-primary">Technology 3</span>
            </div>
        </div>
    </div>
</div>
```

You can add as many projects as you want by copying and pasting this structure.

### 4. Update Your Profile Picture

Replace the placeholder image URL on line 58:
```html
<img src="your-profile-picture.jpg" alt="Profile Picture" class="profile-image">
```

Place your image file in the same directory as `index.html` or provide the full path/URL.

### 5. Configure the Contact Form

The contact form is currently set up with client-side validation only. To make it functional, you need to integrate it with a backend service:

#### Option 1: FormSpree (Recommended for beginners)
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form and get your form ID
4. In `script.js` (around line 99), uncomment the FormSpree code and add your form ID:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
})
.then(response => {
    if (response.ok) {
        showMessage('Message sent successfully! I will get back to you soon.', 'success');
        contactForm.reset();
    } else {
        showMessage('Oops! Something went wrong. Please try again.', 'error');
    }
})
.catch(error => {
    showMessage('Oops! Something went wrong. Please try again.', 'error');
});
```

#### Option 2: EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Follow their documentation to set up email sending
3. Update the form handling code in `script.js`

#### Option 3: Your Own Backend
If you have your own backend API, update the fetch URL to point to your endpoint.

### 6. Add Your Resume

1. Place your resume PDF file in the same directory as `index.html`
2. Update the link on line 117:
```html
<a href="your-resume.pdf" class="btn btn-primary btn-lg" download>
    <i class="bi bi-download me-2"></i>Download Resume
</a>
```

## Customization Tips

### Changing Colors

The color scheme is defined in `styles.css` using CSS variables (lines 6-12):

```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    --dark-color: #212529;
    --light-color: #f8f9fa;
    --text-color: #333;
    --transition: all 0.3s ease;
}
```

Change these values to customize the color scheme throughout the site.

### Changing Fonts

To use a different font, add a Google Fonts link in the `<head>` section of `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Name&display=swap" rel="stylesheet">
```

Then update the font-family in `styles.css` (line 24):

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

### Modifying Animations

All animations are defined in `styles.css` (lines 486-515). You can adjust timing, distance, and effects to your preference.

## File Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript (ES6+)**: Interactive functionality
- **Bootstrap 5.3.2**: Responsive framework
- **Bootstrap Icons**: Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select your main branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [https://www.netlify.com/](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site will be live instantly

### Option 3: Vercel (Free)
1. Go to [https://vercel.com/](https://vercel.com/)
2. Import your project from GitHub
3. Deploy with one click

## Tips for Success

1. **Use High-Quality Images**: Make sure your profile picture and project screenshots are clear and professional
2. **Write Compelling Descriptions**: Take time to write engaging project descriptions that highlight your skills
3. **Keep It Updated**: Regularly update your portfolio with new projects and skills
4. **Test Responsiveness**: Check your site on different devices and screen sizes
5. **Optimize Performance**: Compress images and minimize code for faster loading
6. **Add Analytics**: Consider adding Google Analytics to track visitors
7. **SEO Optimization**: Update meta tags and descriptions for better search engine visibility

## Troubleshooting

### Images Not Showing
- Check file paths are correct
- Ensure images are in the same directory or provide full path
- Verify image file extensions match the HTML

### Form Not Working
- Make sure you've integrated a backend service (FormSpree, EmailJS, etc.)
- Check browser console for errors
- Verify your form service credentials

### Styling Issues
- Clear browser cache
- Check that `styles.css` is properly linked in `index.html`
- Verify Bootstrap CDN links are working

## License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## Support

If you encounter any issues or have questions, please refer to the official documentation:
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)

---