// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://dataprivacystack.org",
  integrations: [
    starlight({
      title: "Data Privacy Stack",
      description:
        "Open-source building blocks for detecting, anonymizing, and protecting sensitive data.",
      logo: {
        src: "./src/assets/dps-mark.png",
        replacesTitle: false,
      },
      favicon: "/favicon.png",
      social: {
        github: "https://github.com/data-privacy-stack",
      },
      customCss: ["./src/styles/tokens.css"],
      head: [
        { tag: "link", attrs: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
        { tag: "link", attrs: { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true } },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
          },
        },
      ],
      // The marketing home lives at src/pages/index.astro (outside Starlight).
      // Everything below is Starlight-managed content with nav + search.
      sidebar: [
        {
          label: "Blog",
          autogenerate: { directory: "blog" },
        },
        // Back to the main site
        { label: "← Data Privacy Stack", link: "/" },
      ],
    }),
  ],
});
