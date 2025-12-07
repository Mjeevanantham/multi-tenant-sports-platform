/// <reference types="astro/client" />

// Suppress TypeScript errors for Astro's class attribute
// Astro uses 'class' (not 'className') which is correct HTML syntax
// This is a known limitation: TypeScript checks Astro files as React/JSX

// Extend React types to accept 'class' for Astro compatibility
declare namespace React {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    class?: string;
  }
  
  interface SVGProps<T> extends React.SVGAttributes<T>, React.Attributes {
    class?: string;
  }
  
  interface ButtonHTMLAttributes<T> extends React.HTMLAttributes<T> {
    class?: string;
  }
  
  interface ImgHTMLAttributes<T> extends React.HTMLAttributes<T> {
    class?: string;
  }
  
  interface FormHTMLAttributes<T> extends React.HTMLAttributes<T> {
    class?: string;
  }
  
  interface InputHTMLAttributes<T> extends React.HTMLAttributes<T> {
    class?: string;
  }
  
  interface AnchorHTMLAttributes<T> extends React.HTMLAttributes<T> {
    class?: string;
  }
  
  interface DetailedHTMLProps<E extends HTMLAttributes<T>, T> extends HTMLAttributes<T> {
    class?: string;
  }
}

