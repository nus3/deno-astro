import { defineConfig } from "npm:astro@2.8.1/config";
import deno from "npm:@astrojs/deno@4.2.0";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
});
