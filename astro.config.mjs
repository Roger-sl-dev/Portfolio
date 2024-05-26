import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import mask from '@alpinejs/mask'

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(mask), tailwind(), react()]
});