/// <reference types="astro/client" />

// Suppress TypeScript errors for Astro's class attribute
declare namespace JSX {
  interface IntrinsicElements {
    [elem: string]: any;
  }
}

