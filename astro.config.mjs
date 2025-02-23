// @ts-check
import { defineConfig } from 'astro/config';

import unocssAstro from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    unocssAstro({
      configFile: './unocss.config.ts',
      injectReset: true,
    }),
  ]
});
