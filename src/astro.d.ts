/// <reference types="astro/client" />

// Suppress TypeScript errors for Astro's class attribute
// Astro uses 'class' (not 'className') which is correct HTML syntax
declare global {
  namespace astroHTML.JSX {
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

