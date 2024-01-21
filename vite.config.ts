import { defineConfig } from "@solidjs/start/config";

import styleX from "./vite-stylex-plugin/index.mjs";
// import pre from "./vite-stylex-plugin/pre.mjs";

// @ts-ignore
// import styleXPlugin from "vite-plugin-stylex";

export default defineConfig({
  plugins: [
    // { ...pre(), enforce: "pre" },
    // @ts-ignore
    { ...styleX(), enforce: "pre" },
    // styleXPlugin(),
  ],
  // dev: { headers: { "Cache-Control": "public, max-age=0" } },
  // preview: { headers: { "Cache-Control": "public, max-age=600" } },
});
