# Mutual Thriving Landing Page

This is the GitHub Pages landing page for the Mutual Thriving movement.

## 🌱 About

Mutual Thriving offers a practical framework to help with navigating life in a way that maximizes win/win dynamics between self and others.

The site will be available at: `https://mutualthriving.org` (custom domain)

## 🚀 Deployment

### Custom Domain Setup

This site uses the custom domain **mutualthriving.org** hosted with world4you.com.

**For complete DNS and domain setup instructions, see: [DOMAIN_SETUP.md](DOMAIN_SETUP.md)**

Quick setup:
1. Configure A records in world4you.com DNS (see DOMAIN_SETUP.md for exact IPs)
2. Push CNAME file to GitHub (already created)
3. Configure custom domain in GitHub Pages settings
4. Enable HTTPS after DNS propagates

## 📁 File Structure

```
mutualthriving.github.io/
├── index.html          # Main landing page
├── manifesto.html      # Full manifesto page
├── styles.css          # Styling and responsive design
├── script.js           # Interactive features
├── CNAME               # Custom domain configuration
├── DOMAIN_SETUP.md     # Domain setup instructions
├── README.md           # This file
└── LICENSE             # License file
```

## 🎨 Customization

### Colors

Colors are defined as CSS variables in `styles.css` (lines 8-22). You can easily customize the color scheme by modifying these values:

```css
:root {
    --primary-color: #2d6a4f;
    --primary-dark: #1b4332;
    --primary-light: #40916c;
    --secondary-color: #52b788;
    --accent-color: #74c69d;
    /* ... */
}
```


## 📝 To-Do
- [ ] Configure actual contact email
- [ ] Set up analytics (optional)

## 🤝 Contributing

This is part of the Mutual Thriving organization. For contributions or questions, please join our [Discord](https://discord.gg/qJwfgx29BF) or contact us at contact@mutualthriving.org.
