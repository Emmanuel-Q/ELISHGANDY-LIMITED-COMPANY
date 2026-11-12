# ELISHGANDY LIMITED COMPANY

A responsive static corporate website for ELISHGANDY LIMITED COMPANY, built with semantic HTML, CSS, and vanilla JavaScript. It can be served by GitHub Pages or cPanel shared hosting.

## Local preview

Serve this folder with any static file server (for example, `py -m http.server 8000`) and open `http://localhost:8000`. No build step, package installation, database, or Node.js runtime is required in production. Illustrative photographs are local WebP assets; Google Fonts are optional and have system-font fallbacks.

## Project structure

- Root HTML files: corporate pages and homepage.
- `services/`: services overview and eight division pages.
- `css/styles.css`: design tokens, components, responsive layouts, and motion.
- `js/`: navigation, progressive enhancement, and contact form feedback.
- `docs/`: architecture, design, content, SEO, deployment, and launch guidance.

## Git workflow

The website is being prepared for the confirmed public GitHub repository on the `main` branch. Relative page and asset URLs support GitHub Pages project-site paths. Never commit hosting secrets, private keys, or non-public company documents.

## Deployment

The files are ordinary static assets. GitHub Pages can publish the public repository from `main` and the repository root; the Pages site must still be enabled in repository settings. Alternatively, the files can be uploaded to the verified UltraHost cPanel document root. No deployment automation is activated. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Accuracy and launch

Only company facts included in the approved project brief are published. Contact details, domain, capability statement, project evidence, certifications, and other unverified items remain identified as pending. Do not publish placeholder values as real company information.

Illustrative Unsplash photographs are stored locally in `assets/images/` under descriptive WebP filenames, avoiding runtime image-host dependencies. Meaningful images also have descriptive `alt` text for assistive technology; the filename alone is not an accessible alternative. The site discloses that these are illustrative photos and not company projects. Images remain subject to the Unsplash License.
