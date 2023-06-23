# Currcash Docs | Astro

<a href="https://github.com/currcash/currcash" target="_blank">Currcash</a> Documentation

### [Homepage](https://currcashdocs.surge.sh/)

## Tools

<img
  src="https://astro.build/favicon.svg"
  height="64px"
  width="64px"
  alt="Astro"
/>

<img
  src="https://www.typescriptlang.org/icons/icon-144x144.png?v=8944a05a8b601855de116c8a56d3b3ae"
  height="64px"
  width="64px"
  alt="TypeScript"
/>

<img
  src="https://preactjs.com/assets/app-icon.png"
  height="64px"
  width="64px"
  alt="Preact"
/>


## Basics Template

```
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

## 🚀 Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page
is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put
any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 📄 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:8080`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into
our [Discord server](https://astro.build/chat).
