import type { TenantConfig } from '../../config/tenants';

export function generateThemeCSS(tenant: TenantConfig): string {
  return `
    :root {
      --color-primary: ${tenant.primaryColor};
      --color-secondary: ${tenant.secondaryColor};
      --color-accent: ${tenant.accentColor};
      --color-text: ${tenant.textColor};
      --color-bg: ${tenant.backgroundColor};
      --color-footer-bg: ${tenant.footerBackground};
      --font-family: ${tenant.fontFamily};
    }
  `;
}

