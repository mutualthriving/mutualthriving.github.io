# Google Forms Email Integration Guide

This guide shows you how to set up Google Forms to collect email signups for the Mutual Thriving newsletter.

## Step 1: Create Your Google Form

1. **Go to:** https://forms.google.com
2. **Click:** The "+" button to create a blank form
3. **Set the title:** "Mutual Thriving Newsletter Signup"
4. **Add a description (optional):**
   ```
   Stay updated on upcoming events, new formats, and community news from Mutual Thriving.
   ```

## Step 2: Configure the Email Question

1. **Click on "Untitled Question"**
2. **Enter question text:** "Email address"
3. **Change question type:** Select "Short answer" from the dropdown
4. **Click the ⋮ (three dots) menu** on the question
5. **Select "Response validation"**
6. **Configure validation:**
   - Dropdown 1: "Text"
   - Dropdown 2: "Email"
   - Error message: "Please enter a valid email address"
7. **Toggle "Required" ON** (bottom right of the question)

## Step 3: Configure Form Settings

1. **Click the Settings gear icon** (top right)
2. **Under "General" tab:**
   - Check ✓ "Limit to 1 response" (prevents duplicate signups)
   - Optionally check ✓ "Collect email addresses" (Google will ask for sign-in)
3. **Under "Presentation" tab:**
   - Customize confirmation message: "Thank you! You'll receive updates about Mutual Thriving events and news."

## Step 4: Customize Appearance (Optional)

1. **Click the Palette icon** (top right)
2. **Choose a theme color:** Use `#2d6a4f` (your primary green color)
3. **Select a background style** that matches your site

## Step 5: Get the Form Link

### Option A: Direct Link (Recommended for Mobile)
1. **Click "Send"** button (top right)
2. **Click the link icon** (🔗)
3. **Check "Shorten URL"**
4. **Copy the link** - looks like: `https://forms.gle/xxxxx`

**Use this link in your HTML forms!**

### Option B: Embedded Form (For Desktop)
1. **Click "Send"** button (top right)
2. **Click the embed icon** (< >)
3. **Copy the iframe code**
4. **Paste into your HTML** where you want the form to appear

## Step 6: Update Your Website

Once you have your Google Form link, update the website:

### For Direct Link (Simple Button):
Replace the current form in `index.html` and `manifesto.html` with a button:

```html
<div class="email-signup">
    <h3>Stay Updated</h3>
    <p>Get notified about upcoming events, new formats, and community updates.</p>
    <a href="YOUR_GOOGLE_FORMS_LINK" target="_blank" class="btn btn-primary">Subscribe to Updates</a>
    <p class="signup-note">We respect your privacy. Unsubscribe anytime.</p>
</div>
```

### For Embedded Form (Shows form on page):
Replace the form section with the iframe Google provides.

## Step 7: View Responses

1. **In your Google Form**, click the "Responses" tab
2. **Click the Google Sheets icon** to create a spreadsheet of responses
3. You'll get a spreadsheet with all email signups that updates automatically

## Sending Updates to Your List

When you want to send an update:

### Option 1: Manual Email (Simple)
1. Open your responses spreadsheet
2. Copy all email addresses
3. Use your email client's BCC field to send updates
4. Keep your list private by using BCC!

### Option 2: Use Mailchimp/ConvertKit (Later)
1. Export emails from Google Sheets (CSV)
2. Import into a proper email service
3. Send professional newsletters

### Option 3: Google Apps Script (Advanced)
You can write a script to automatically send emails from the spreadsheet, but this requires coding.

## Best Practices

- **Never share the email list publicly** - privacy is important
- **Include an unsubscribe option** in every email you send
- **Don't spam** - only send meaningful updates (events, major announcements)
- **Use BCC** when sending manual emails to protect privacy

## Troubleshooting

**Form not submitting?**
- Check that email validation is set correctly
- Make sure the form is set to accept responses

**Can't see responses?**
- Click the "Responses" tab in your form
- Create a linked spreadsheet if you haven't already

**Want to customize more?**
- Google Forms has themes, custom images, and more in the customization panel

---

Ready to integrate? Just paste your Google Form link and I'll update the website code!
