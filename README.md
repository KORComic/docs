# KORComic Documentation

A comprehensive documentation site for KORComic - a collection of comic plugins for KOReader, built with [Docusaurus](https://docusaurus.io/).

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run start
```

This command starts a local development server at <http://127.0.0.1:3000>. Most changes are reflected live without having to restart the server.

> **Security Note**: The development server has known moderate severity vulnerabilities in its webpack-dev-server dependency. These vulnerabilities could potentially expose source code to malicious websites. For security:
>
> - Only use the development server in trusted environments

### Build

Build the documentation for production:

```bash
npm run build
```

This generates static content in the `build` directory that can be served using any static hosting service.

### Serve Production Build

To preview the production build locally:

```bash
npm run serve
```

This starts a local server at <http://127.0.0.1:3000> to serve the production
build. The production build does not use webpack-dev-server and is not
affected by the development server vulnerabilities.

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Serve Built Site Locally

To test the production build locally:

```bash
npm run serve
```

## 📚 Project Structure

```text
docs/
├── apps/                      # Git submodules of individual apps
│   └── comicreader/           # ComicReader plugin (git submodule)
│       ├── docs/              # ComicReader documentation
│       │   ├── docs/          # Markdown documentation files
│       │   ├── src/           # React components and pages
│       │   ├── static/        # Static assets (images, etc.)
│       │   ├── docusaurus.config.ts  # App-specific Docusaurus config
│       │   └── package.json   # App-specific dependencies
│       └── src/               # Plugin source code
├── build/                     # Generated static site (after build)
├── src/                       # Global site components and styles
├── static/                    # Global static assets
├── sidebars/                  # Sidebar configurations for each app
├── docusaurus.config.ts       # Main Docusaurus configuration
└── package.json              # Root dependencies and scripts
```

## 📝 Available Scripts

| Script                       | Description                           |
| ---------------------------- | ------------------------------------- |
| `npm run start`              | Start development server              |
| `npm run build`              | Build for production                  |
| `npm run serve`              | Serve production build locally        |
| `npm run clear`              | Clear Docusaurus cache                |
| `npm run typecheck`          | Run TypeScript type checking          |
| `npm run swizzle`            | Eject/customize Docusaurus components |
| `npm run write-translations` | Generate translation files            |
| `npm run write-heading-ids`  | Add heading IDs to markdown files     |

## 🚀 Deployment

This documentation site is automatically deployed to GitHub Pages using GitHub Actions. The deployment is triggered on:

- Push to the main branch

The site is available at: `https://korcomic.github.io/docs`

## 🛠️ Configuration

The main configuration is in `docusaurus.config.ts`. Key settings include:

- **Site metadata**: Title, tagline, favicon
- **URL configuration**: Base URL for GitHub Pages
- **Theme configuration**: Light/dark mode, navbar, footer
- **Plugin configuration**: Documentation paths, sidebar configurations

## 📖 Documentation Content

The documentation covers:

- **ComicReader Plugin**: Enhanced comic reading experience for KOReader
  - Installation guide
  - Configuration options
  - Supported file formats
  - Usage instructions

### Adding Documentation

To add new documentation for a specific app:

1. The app should be added as a git submodule under `apps/{APP_NAME}/`
2. Create documentation files in `apps/{APP_NAME}/docs/`
3. Update the sidebar configuration in `sidebars/{APP_NAME}.ts`

For example, the ComicReader documentation:

- Git submodule: `apps/comicreader/`
- Documentation files: `apps/comicreader/docs/docs/`
- Sidebar config: `sidebars/comicreader.ts`

## 🔗 Related Links

- [KOReader](https://github.com/koreader/koreader) - The e-book reader platform
- [ComicReader Plugin Repository](https://github.com/OGKevin/comicreader.koplugin)
- [Docusaurus Documentation](https://docusaurus.io/docs)

---

Built with ❤️ using [Docusaurus](https://docusaurus.io/)
