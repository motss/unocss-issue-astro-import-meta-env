import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import transformerHash from 'unocss-transformer-hash';

console.debug(import.meta.env);

export default defineConfig({
  presets: [
    presetIcons(),
    presetUno({
      dark: 'media',
      variablePrefix: 'as-',
    }),
    presetTypography(),
  ],
  transformers: [
    { enabled: true, fn: transformerDirectives() },
    {
      enabled: import.meta.env.NODE_ENV !== 'development',
      fn: transformerHash(),
    },
    { enabled: false, fn: transformerVariantGroup() },
  ]
    .filter((n) => n.enabled)
    .map((n) => n.fn),
});
