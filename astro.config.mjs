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
        src: "./src/assets/logo.svg",
        replacesTitle: false,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/data-privacy-stack",
        },
      ],
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
          label: "About",
          items: [{ label: "Mission", slug: "about" }],
        },
        {
          label: "Community",
          items: [
            { label: "Contributing", slug: "community/contributing" },
            { label: "Governance", slug: "community/governance" },
          ],
        },
      ],
    }),
  ],
});
