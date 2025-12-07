# TypeScript Linter Notes

## False Positive Errors

The TypeScript linter may show errors about `class` vs `className` in `.astro` files. These are **false positives** and can be safely ignored.

### Why?

- **Astro uses `class`** (not `className`) - this is correct syntax for Astro components
- TypeScript's strict mode incorrectly checks Astro files as if they were React/JSX files
- The code is functionally correct and will compile/build successfully

### Example False Positive

```
Property 'class' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'. 
Did you mean 'className'?
```

This error appears because TypeScript expects React's `className`, but Astro correctly uses HTML's `class` attribute.

### Solution

These errors do not affect:
- Build process
- Runtime functionality
- Code correctness

The Astro compiler handles `.astro` files correctly regardless of these TypeScript warnings.

If you want to suppress these warnings in your IDE, you can:
1. Configure your IDE to ignore TypeScript errors in `.astro` files
2. Add `// @ts-ignore` comments (not recommended as it clutters code)
3. Wait for better Astro/TypeScript integration in future versions

