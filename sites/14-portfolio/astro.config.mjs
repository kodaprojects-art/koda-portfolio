import { defineConfig } from 'astro/config';

export default defineConfig({
  // Production URL (canonical and Open Graph URLs).
  site: 'https://koda-portfolio-two.vercel.app',
  output: 'static',
  // Generate responsive srcset (WebP) for every <Image>; layout styles stay in site CSS.
  image: { layout: 'constrained', responsiveStyles: false },
});
