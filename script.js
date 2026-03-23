// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveNav() {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// Mobile menu toggle (if needed in future)
// Can be extended when adding a hamburger menu for mobile

// Add fade-in animation for elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.value-card, .criteria-card, .involvement-card, .manifesto-section');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Track external link clicks (for analytics if needed)
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('External link clicked:', link.href);
        // Can be extended with analytics tracking
    });
});

// Email signup form handling
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('email-signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const emailInput = signupForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            const button = signupForm.querySelector('button');

            // Disable button during submission
            button.disabled = true;
            button.textContent = 'Subscribing...';

            try {
                // TODO: Replace this with your actual email service integration
                // Examples:
                // - Mailchimp: https://mailchimp.com/help/add-a-signup-form-to-your-website/
                // - ConvertKit: https://convertkit.com/features/forms
                // - Buttondown: https://buttondown.email/

                // For now, store locally (replace with actual API call)
                console.log('Email signup:', email);

                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Show success message
                showSignupSuccess(signupForm);
                emailInput.value = '';

            } catch (error) {
                console.error('Signup error:', error);
                button.textContent = 'Try Again';
                alert('There was an error signing up. Please try again or join our Discord directly.');
            } finally {
                button.disabled = false;
                button.textContent = 'Subscribe';
            }
        });
    }
});

function showSignupSuccess(form) {
    // Check if success message already exists
    let successMsg = form.parentElement.querySelector('.signup-success');

    if (!successMsg) {
        successMsg = document.createElement('div');
        successMsg.className = 'signup-success';
        successMsg.innerHTML = '✓ Success! You\'ll be notified about upcoming events and updates.';
        form.parentElement.insertBefore(successMsg, form.nextSibling);
    }

    successMsg.classList.add('show');

    // Hide after 5 seconds
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 5000);
}
