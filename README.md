# Safdar Search Bar

A simple Google Search clone UI built with HTML and CSS.

## Features

- Responsive navbar with links and sign-in button
- Central search bar with icons for search, voice, and image search
- Language selection links
- Footer with advertising, business, privacy, and settings links
- Modern, dark-themed design using Poppins and Arial fonts

## Folder Structure

index.html style.css README.md .vscode/ settings.json assets/ more-appls.svg safdar-logo-color.svg safdar-logo.svg safdar-mic.svg safdar-search-icon.svg safdar-searchByImage.svg

## Usage

1. Open `index.html` in your browser to view the search bar UI.
2. All styling is handled in `style.css`.
3. SVG icons are stored in the `assets/` folder.

## Development

- Uses [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for local development (`.vscode/settings.json` sets port to 5502).
- Search submit and "I'm Feeling Lucky" are handled in `js/search.js`.

## Tests

```bash
npm install
npm test          # vitest unit + dom tests
npm run test:e2e  # playwright (needs port 5502 free)
```

## License

This project is for educational/demo purposes.