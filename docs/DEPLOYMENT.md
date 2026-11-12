# Deployment

## Current status

The website is static and is prepared for the confirmed public GitHub repository. GitHub Pages is suitable for the static HTML/CSS/JavaScript website; its local image assets are committed with the site. Production custom-domain and UltraHost deployment details remain unconfirmed, so those configurations must not be guessed.

## Intended Git flow

- Public GitHub repository: `Emmanuel-Q/ELISHGANDY-LIMITED-COMPANY`.
- `main` is the confirmed publishing branch.
- Enable GitHub Pages in repository **Settings → Pages**, selecting deployment from `main` and the repository root.
- The project-site URL will be `https://emmanuel-q.github.io/ELISHGANDY-LIMITED-COMPANY/` after Pages is enabled and deployed.
- All site navigation, CSS, JavaScript and image references use paths relative to their HTML pages, so the repository subpath does not break them.
- Public repository and Pages content is public. Do not commit credentials, private company documents, or unpublished information.

## Before enabling automation

1. Confirm the repository contains the intended files and maintain review before production updates.
2. Obtain the exact SSH hostname, port, deployment username, and document-root paths from cPanel.
3. Confirm SSH/SFTP capability, key format, host-key fingerprint, and preview-subdomain availability with the hosting provider.
4. Create a dedicated deploy key; install its public key in cPanel and store the private key only as a protected GitHub Actions secret.
5. Use separate preview and production paths and secrets. Never put secret values in this repository or logs.
6. Confirm a backup and rollback plan before production deployment.
7. Prefer a staged upload and a verified switch/backup strategy. Do not run destructive sync or delete unrelated hosting files.

## Manual upload and verification

Upload only approved static site files to the confirmed document root using the hosting provider's secure SFTP/SSH process. Verify HTTPS, all pages, CSS/JS, images, navigation, and forms after upload. Preserve a dated copy of the previous production files for rollback.

## Rollback

If verification fails, restore the previous verified site files from the backup using the hosting control panel or provider-supported method, then verify HTTPS and key pages again. Do not delete the failed deployment until the restored site is confirmed.

## GitHub Pages

GitHub Pages is appropriate for this static site on a public repository. Enable publishing from `main` at the repository root in Settings → Pages and wait for the Pages deployment to complete. Confirm the generated project-site URL, HTTPS, all page routes, assets, and responsive navigation. Canonical and Open Graph domain placeholders must be updated after choosing a production domain.

## GitHub Actions / UltraHost

No UltraHost deploy workflow is included until the actual deployment implementation and account capabilities are verified. Do not enable any production deployment until the host settings and paths are confirmed.
