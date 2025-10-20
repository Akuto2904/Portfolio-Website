// ==========================================
// Smooth Scrolling for Navigation Links
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// ==========================================
// Active Navigation Link on Scroll
// ==========================================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    // Add shadow to navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ==========================================
// Scroll Animations
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==========================================
// Contact Form Handling
// ==========================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // TODO: Replace this with your actual form submission logic
        // Options:
        // 1. Use a service like FormSpree (https://formspree.io/)
        // 2. Use EmailJS (https://www.emailjs.com/)
        // 3. Connect to your own backend API
        
        // Example with FormSpree:
        // fetch('https://formspree.io/f/YOUR_FORM_ID', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name: name,
        //         email: email,
        //         subject: subject,
        //         message: message
        //     })
        // })
        // .then(response => {
        //     if (response.ok) {
        //         showMessage('Message sent successfully! I will get back to you soon.', 'success');
        //         contactForm.reset();
        //     } else {
        //         showMessage('Oops! Something went wrong. Please try again.', 'error');
        //     }
        // })
        // .catch(error => {
        //     showMessage('Oops! Something went wrong. Please try again.', 'error');
        // });
        
        // Simulated success message (remove this when you implement actual form submission)
        showMessage('Form submission is not yet configured. Please add your email service integration.', 'error');
        
        // For demonstration purposes, log the form data
        console.log('Form Data:', { name, email, subject, message });
    });
}

// ==========================================
// Helper Functions
// ==========================================

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type;
    
    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = '';
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==========================================
// Typing Effect for Hero Section (Optional)
// ==========================================

// Uncomment this section if you want a typing effect for your title
/*
const typingText = document.querySelector('.hero-section h2');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
}
*/

// ==========================================
// Project Card Click Tracking (Optional)
// ==========================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Only track if not clicking on a button
        if (!e.target.closest('.btn')) {
            const projectTitle = this.querySelector('h4').textContent;
            console.log('Project viewed:', projectTitle);
            // You can add analytics tracking here
        }
    });
});

// ==========================================
// Back to Top Button (Optional Enhancement)
// ==========================================

// Create back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

// Add styles for back to top button
const style = document.createElement('style');
style.textContent = `
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    
    .back-to-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    .back-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }
    
    @media (max-width: 768px) {
        .back-to-top {
            width: 40px;
            height: 40px;
            bottom: 20px;
            right: 20px;
            font-size: 1.2rem;
        }
    }
`;
document.head.appendChild(style);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll to top on click
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// Console Message
// ==========================================

console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cInterested in the code? Check out the source on GitHub!', 'font-size: 14px; color: #764ba2;');

