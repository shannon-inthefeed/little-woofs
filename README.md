# LittleWoofs Dog Walking Services — Website

**Andrea Littlewood · Thamesmead, Barking & Dagenham**

A complete static HTML website for LittleWoofs dog walking services.

---

## 📁 File structure

```
littlewoofs/
├── index.html          ← Homepage
├── about.html          ← About Andrea
├── services.html       ← Services & Pricing
├── faq.html            ← Frequently Asked Questions
├── testimonials.html   ← Client Reviews
├── gallery.html        ← Photo Gallery
├── onboarding.html     ← How It Works
├── contact.html        ← Contact & Enquiry Form
├── css/
│   └── style.css       ← All shared styles
├── js/
│   └── components.js   ← Shared nav, footer & WhatsApp button
└── images/             ← Put all images here (see below)
    ├── caricature.jpg          ← Hero image (the cartoon illustration)
    ├── andrea-photo.jpg        ← About page photo
    ├── MDWA_Certificate_of_Achievement.png
    └── walk-01.jpg ... etc     ← Gallery photos
```

---

## ✅ To-do before launch (all marked with ✏️ in the HTML)

### Required
- [ ] Add `images/caricature.jpg` — the cartoon illustration (hero image)
- [ ] Add real email address — already set to `littlewoofs24@gmail.com` ✅
- [ ] Add real WhatsApp number — already set to `07810 350376` ✅
- [ ] Set exact service prices (currently showing suggested prices)
- [ ] Connect the contact form to a real handler (see below)

### Strongly recommended
- [ ] Replace placeholder testimonials with real quotes from your 5 clients
- [ ] Add a real photo of Andrea (about page + hero)
- [ ] Fill in the FAQ answers marked as ✏️ (cancellation policy, payment method, hours)
- [ ] Add insurance provider name
- [ ] Add gallery photos (minimum 6 — pull from Facebook)

### Optional upgrades
- [ ] Add a DBS check number
- [ ] Add pet first aid certificate
- [ ] Add downloadable PDF service agreement (link from onboarding.html)
- [ ] Add specific postcodes to the service area

---

## 📬 Connecting the contact form

The form in `contact.html` currently shows a fake success message.  
To make it actually send emails, choose one of these free options:

### Option 1 — Formspree (easiest, free)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID
3. In `contact.html`, find the `<form id="contactForm">` tag and add `action="https://formspree.io/f/YOUR_ID" method="POST"`
4. Remove the `addEventListener` JavaScript block at the bottom of the page

### Option 2 — Netlify Forms (if hosting on Netlify)
1. Add `data-netlify="true"` to the `<form>` tag
2. Netlify handles the rest automatically

---

## 🌐 Hosting on GitHub Pages (free)

1. Push this folder to your GitHub repository
2. Go to **Settings → Pages**
3. Set Source to `main` branch, root folder `/`
4. Your site will be live at `https://yourusername.github.io/littlewoofs/`

For a custom domain (e.g. `littlewoofs.co.uk`):
1. Buy the domain from a registrar (Namecheap, Google Domains)
2. Add a `CNAME` file to this folder containing just your domain
3. Update DNS settings at your registrar to point to GitHub

---

## 🎨 Colour palette (from the caricature image)

| Name | Hex | Used for |
|------|-----|----------|
| Grass green | `#4A9B3C` | Primary brand colour, buttons, accents |
| Sky blue | `#5BA8D4` | Secondary, trust bar, badges |
| Coral pink | `#E8726A` | Testimonials, warm accents |
| Sandy brown | `#C4956A` | Soft background tones |
| Dark green | `#1C2E20` | Text, footer, dark sections |
| Cream | `#FDF8F0` | Section backgrounds |

---

## 📞 Contact details (already in the site)

- **WhatsApp / Phone:** 07810 350376
- **Email:** littlewoofs24@gmail.com
- **Facebook:** [facebook.com/LittleWoofsThamesmead](https://www.facebook.com/LittleWoofsThamesmead/)

---

*Built with plain HTML, CSS and vanilla JavaScript — no frameworks, no build tools. Just open any `.html` file in a browser and it works.*
