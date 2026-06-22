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
      // The marketing home lives at src/pages/index.astro (outside Starlight).
      // Everything below is Starlight-managed content with nav + search.
      sidebar: [
        {
          label: "Projects",
          items: [
            { label: "Overview", slug: "projects" },
            { label: "Presidio", slug: "projects/presidio" },
          ],
        },
        {
          label: "Blog",
          items: [{ label: "All posts", slug: "blog" }],
        },
        {
          label: "About",
          items: [{ label: "Mission", slug: "about" }],
        },
        {
          label: "Community",
          items: [{ label: "Contributing", slug: "community/contributing" }],
        },
        {
          label: "Governance",
          items: [{ label: "Overview", slug: "community/governance" }],
        },
      ],
    }),
  ],
});
