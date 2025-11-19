# Dublin Corner Lot

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

An Astro website for the [Dublin Corner Lot](https://dublincornerlot.org/) project — a small, static-first website with a few interactive patterns and transactional email.

## 💾 Is your website stuck in the 90's? 📠

Are you looking to supercharge your current website or build a brand new one from the ground up? From e-commerce to a simple blog to large-scale asset delivery web application, we can design and build whatever you need.

Let us build you an amazing web experience for you and your customers.

Check us out [https://www.cobaltweb.tech/](https://www.cobaltweb.tech/?utm_source=github&utm_medium=web&utm_campaign=github-repo)

## Project Features

- Astro (static site framework)
- Starwind UI (a design system component set)
- Tailwind CSS (utility-first CSS)
- Lenis (smooth scroll)
- Astro Icon (icon integration)
- Resend (transactional email provider)
- Starwind UI — component-driven system for accessible UI components
- Tailwind CSS — styles utilities and configuration in `src/styles/global.css`
- Lenis — smooth-scrolling for page anchors across the site
- Astro Icon — lightweight icon integrations
- Resend — used for sending transactional emails (volunteer or donation confirmations)

## File Structure (src/)

Below is an outline of the `src/` directory to help you navigate the project. (This is not a complete listing of every file and subfile, but should give you a clear map of the source layout.)

```
src/
	actions/ # Astro Actions directory
	assets/ # Media assets such as images
		images/
	components/ # Astro components
		sections/
		starwind/
	icons/ # SVG icons
	layouts/ # Base layout and meta for SEO
	lib/ # Site functions
	pages/ # Astro routes
		volunteer/
	styles/ # CSS directory
```

## Performance Enhancements

The website's efficiency is maximized with these built-in Astro integrations:

- [Asset Minification](https://github.com/PlayForm/Compress): By default Astro will perform basic minification of most assets. For optimal site performance, the generated HTML is minified after the build phase to further reduce file size and speed up load times.

- [Astro Compressor](https://github.com/sondr3/astro-compressor#readme): Automatically compresses Astro generated assets using brotli for smaller file sizes ensuring faster load times.

## Development Notes

- Configuration is handled at `astro.config.mjs` and the appropriate adapter is required for the serverless platform. [See Astro's documentation](https://docs.astro.build/en/getting-started/) for more info.
- Biome linter is configured for this project. [See their docs](https://biomejs.dev/) for more info.
- Tailwind is configured for the project and theme set in `/src/styles/global.css`.
- [Starwind UI](https://starwind.dev/docs/getting-started/) components are implemented under `src/components/starwind`. These are adapted to the site's theme.
- Envrionmental variables for Resend and Cloudflare Turnstile integrations are required to be set.

## Deployment

This Astro site works with any serverless platform (Cloudflare Workers, Vercel, Netlify, etc.) with the appropriate adapter by Astro.

## License

See `LICENSE` in the repo root for license details.

---
