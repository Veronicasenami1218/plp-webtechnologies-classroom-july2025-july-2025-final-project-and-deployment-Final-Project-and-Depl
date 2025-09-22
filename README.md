# Personal Portfolio Website

A clean, responsive, and accessible personal portfolio to showcase your background, skills, projects, and contact information.

## Live Demo

- URL: https://your-live-site-url.com  
  (Replace with the deployed link after publishing.)

## Purpose

This project presents a professional online presence with a focus on clarity, performance, and usability. It highlights who you are, what you do, and how to get in touch.

## Pages Included

- Home (`html/index.html`)
- About (`html/about.html`)
- Skills (`html/skills.html`)
- Projects (`html/projects.html`)
- Contact (`html/contact.html`)
- Extras: Form page (`html/form.html`)

## Features

- Responsive design for mobile, tablet, and desktop
- Interactive navigation menu
- Smooth scroll navigation between sections/pages
- Subtle animations and transitions for better UX
- Client-side form validation on contact/form pages
- Basic SEO files: `robots.txt` and `sitemap.xml`

## Tech Stack

- HTML5, CSS3, JavaScript (Vanilla)
- No build tools or server required

## Project Structure

```
First Hackathon/
├─ .vscode/
│  └─ settings.json
├─ css/
│  └─ style.css
├─ html/
│  ├─ index.html        # Home
│  ├─ about.html        # About
│  ├─ skills.html       # Skills
│  ├─ projects.html     # Projects
│  ├─ contact.html      # Contact
│  └─ form.html         # Additional form page
├─ images/              # Logos, icons, and images
│  ├─ background.jpeg
│  ├─ icon-*.png
│  ├─ logo.png
│  └─ me.png
├─ js/
│  └─ main.js
├─ VERONICA CURRICULUM VITAE.pdf
├─ robots.txt
├─ sitemap.xml
└─ README.md
```

## Local Development

You can run the project locally in a few ways. No backend is required.

### Option A: Open directly in a browser

- Double-click `html/index.html` to open it in your default browser.
- For best results with routing and assets, use Option B or C.

### Option B: VS Code Live Server (Recommended)

1. Open the project folder in VS Code.
2. Install the "Live Server" extension (by Ritwick Dey).
3. Right-click `html/index.html` and select "Open with Live Server".

### Option C: Simple local server (Python)

From the project root, serve files locally (Python 3):

```
# Windows / macOS / Linux
python -m http.server 5500
```

Then open: http://localhost:5500/html/index.html

## How to Update the Live URL

- After you deploy (e.g., Netlify, GitHub Pages, Vercel), replace the placeholder in the "Live Demo" section with your production URL.

## Contact & Licensing

- Content and design © Veronica Tankpinu.
- Feel free to adapt this structure for your needs.
