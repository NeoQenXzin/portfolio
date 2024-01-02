import { defineConfig } from "astro/config";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio/" : "/";

export default defineConfig({
  site: "https://neoqenxzin.github.io/",
  base: "/portfolio/",
});
