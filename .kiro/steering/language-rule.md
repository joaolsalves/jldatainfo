---
inclusion: fileMatch
fileMatchPattern: "pages/en/**"
---

# Language Rule — English Version

Everything created or modified under the `pages/en/` path must be entirely in English.

This includes, without exception:
- All visible text: headings, paragraphs, labels, buttons, links, tags and placeholders
- Alt text for images
- Pre-filled message strings in URLs (e.g. WhatsApp `?text=` parameter)
- `aria-label`, `title`, and other accessibility attributes
- Meta tags: `<title>`, `<meta name="description">`, etc.
- Any `<noscript>` fallback content

Code comments and technical annotations may remain in Portuguese.
