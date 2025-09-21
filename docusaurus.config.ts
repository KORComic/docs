import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// // Note: For prism-react-renderer v1.x, need to import themes differently
// const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "KORComic",
  tagline: "A collection of comic plugins for KOReader.",
  favicon: "img/comic.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://korcomic.github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "KORComic", // Usually your GitHub org/user name.
  projectName: "Docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          id: "default",
          path: "apps/comicreader/docs",
          sidebarPath: "./sidebars/comicreader.ts",
          editUrl:
            "https://github.com/OGKevin/comicreader.koplugin/tree/main/docs",
          routeBasePath: "/comicreader.koplugin",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "comicmeta",
        path: "apps/comicmeta/docs",
        routeBasePath: "/comicmeta.koplugin",
        sidebarPath: "./sidebars/comicmeta.ts",
        editUrl:
          "https://github.com/KORComic/comicmeta.koplugin/tree/main/docs",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "KORComic",
      logo: {
        alt: "My Site Logo",
        src: "comic.ico",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "comicReader",
          docsPluginId: "default",
          position: "left",
          label: "ComicReader",
        },
        {
          type: "docSidebar",
          sidebarId: "comicMeta",
          docsPluginId: "comicmeta",
          position: "left",
          label: "ComicMeta",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://github.com/OGKevin/comicreader.koplugin",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Comicreader. Built with love.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
