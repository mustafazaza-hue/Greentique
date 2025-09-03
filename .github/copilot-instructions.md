# Copilot Instructions for Greentique E-Commerce

## Project Overview
- **Greentique** is a React-based e-commerce web app using Vite for fast builds and TailwindCSS for styling.
- The main entry point is `src/main.jsx`, which loads `App.jsx` and sets up routing and layout.
- UI is organized into `Components` (reusable UI) and `Pages` (route-level views).
- Routing is handled via React Router (see `App.jsx` and `src/Pages/`).
- State management is local/component-based; no Redux or Context API is present by default.

## Key Patterns & Conventions
- **Component Structure:**
  - `src/Components/` contains shared UI (e.g., `Navbar`, `Footer`, `Loading`).
  - `src/Pages/` contains route-level pages (e.g., `Home`, `Cart`, `Login`).
  - Use functional components and hooks (e.g., `useState`, `useEffect`).
- **Styling:**
  - TailwindCSS utility classes are used throughout for layout and design.
  - No CSS-in-JS or SCSS; global styles in `src/index.css`.
- **Icons:**
  - Font Awesome is used for all icons (see imports in components like `Navbar.jsx`).
- **Routing:**
  - Use `NavLink` and `Link` from React Router for navigation.
  - Route paths are relative (e.g., `to="cart"` or `to="/"`).
- **Assets:**
  - Images and SVGs are in `src/assets/`.

## Developer Workflows
- **Install dependencies:**
  - `npm install`
- **Start development server:**
  - `npm run dev` (Vite dev server)
- **Build for production:**
  - `npm run build`
- **Preview production build:**
  - `npm run preview`
- **No test scripts or test framework are present by default.**

## Integration & External Dependencies
- **API calls** are made using Axios (see usage in page components).
- **Forms** use Formik for state and Yup for validation.
- **Fontsource** is used for custom fonts.

## Examples & Best Practices
- Follow the pattern in `Navbar.jsx` for:
  - Responsive design (Tailwind breakpoints, conditional rendering)
  - Icon usage (FontAwesome)
  - Navigation (React Router's `NavLink`)
- Place new shared UI in `src/Components/`, and new pages in `src/Pages/`.
- Use Tailwind utility classes for all styling.

## File/Directory Reference
- `src/Components/` — shared UI components
- `src/Pages/` — route-level pages
- `src/assets/` — static assets (SVG, images)
- `src/index.css` — global styles
- `vite.config.js` — Vite configuration

---
If you add new conventions or workflows, update this file to keep AI agents productive.
