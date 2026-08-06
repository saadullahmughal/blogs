# M. Saadullah Zafar's Blog — Codebase 📁

This repository contains the source code for the personal website and technical blog of **M. Saadullah Zafar**.

The project is built with [Astro](https://astro.build/) using the [AstroPaper](https://github.com/satnaing/astro-paper) theme template.

---

## 💻 Tech Stack & Environment

- **Node.js**: `v24`
- **Package Manager**: `pnpm`
- **Framework**: [Astro](https://astro.build/)
- **Template**: [AstroPaper](https://github.com/satnaing/astro-paper)
- **Language**: [TypeScript](https://www.typescriptlang.org/) *(Strict Mode)*
- **Linter / Formatter**: [Biome](https://biomejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

## ⚡ Local Development

### 1. Setup

Ensure Node.js `v24` and `pnpm` are installed on your machine, then install project dependencies:

```bash
pnpm install
```

### 2. Running Dev Server

Start the Astro development server locally:

```bash
pnpm dev
```

Or run the server in background mode:

```bash
astro dev --background
```

Useful background dev server commands:
- `astro dev status` — Check background server status
- `astro dev logs` — View server logs
- `astro dev stop` — Stop background server

### 3. Build & Inspection

To type-check and generate the static production build:

```bash
pnpm build
```

To run Biome linting and code formatting checks:

```bash
pnpm exec biome check .
```

---

## 📁 Repository Structure

```bash
.
├── public/                # Static assets and site favicon
├── src/
│   ├── assets/            # Icons and graphics
│   ├── components/        # Reusable UI components (Header, Footer, Socials, etc.)
│   ├── content/           # Blog posts and content collections (src/content/posts/)
│   ├── layouts/           # Page layout templates
│   ├── pages/             # Route entries (src/pages/index.astro main landing)
│   ├── styles/            # Tailwind CSS and global styling configuration
│   ├── types/             # TypeScript type definitions
│   └── config.ts          # Resolved configuration defaults
├── astro-paper.config.ts  # Site configuration (author, title, socials, features)
├── biome.json             # Biome linter and formatter configuration
├── tsconfig.json          # TypeScript compiler configuration (strict mode)
└── astro.config.ts        # Astro framework configuration
```

---

## 📜 Credits & License

- **Theme Template**: Built on top of [AstroPaper](https://github.com/satnaing/astro-paper) by [Sat Naing](https://satnaing.dev).
- **License**: Continued under the original [MIT License](LICENSE), retaining copyright for Sat Naing and adding M. Saadullah Zafar.
