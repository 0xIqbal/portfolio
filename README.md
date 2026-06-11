# Iqbal Bin Hafiz Portfolio

Modern, fully responsive personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, React Icons, Typewriter Effect, and EmailJS.

## Folder Structure

```text
portfolio/
├─ public/
│  ├─ favicon.svg
│  └─ profile-placeholder.svg
├─ src/
│  ├─ assets/
│  │  └─ resume-placeholder.txt
│  ├─ components/
│  │  ├─ About.jsx
│  │  ├─ Certificates.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Education.jsx
│  │  ├─ Experience.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Hero.jsx
│  │  ├─ LoadingScreen.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ ParticleBackground.jsx
│  │  ├─ Projects.jsx
│  │  ├─ ScrollToTop.jsx
│  │  ├─ SectionHeading.jsx
│  │  └─ Skills.jsx
│  ├─ data/
│  │  └─ portfolioData.js
│  ├─ hooks/
│  │  ├─ useActiveSection.js
│  │  └─ useScrollReveal.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ .gitignore
├─ index.html
├─ package.json
├─ postcss.config.cjs
├─ tailwind.config.js
└─ vite.config.js
```

## Installation

1. Install dependencies.

```bash
npm install
```

2. Run the development server.

```bash
npm run dev
```

## EmailJS Setup

Create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

### Vercel

- Push the project to GitHub.
- Import the repository in Vercel.
- Set the build command to `npm run build`.
- Set the output directory to `dist`.

### GitHub Pages

- Install a GitHub Pages deploy tool if needed.
- Set the Vite base path to the repository name when deploying under a subpath.
- Run the build and publish the `dist` folder.

## Resume

Replace the placeholder file in `src/assets/resume-placeholder.txt` with your actual resume PDF and update the download link in the hero section if you want a real CV download.

## Profile Photo

Add your profile picture as `public/profile.jpg`. The hero section will use that file automatically and fall back to the placeholder image if it is missing.

## Cover Photo

Add a cover/background image to the hero section as `public/cover.png`. The image will display behind the Welcome section with a dark overlay for text readability. The hero will fall back to the gradient background if the file is missing.
