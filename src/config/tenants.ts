export interface TenantConfig {
  id: string;
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  footerBackground: string;
  fontFamily: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
  companyLinks: {
    about?: string;
    blogs?: string;
    contact?: string;
    careers?: string;
    partner?: string;
  };
  footerText: string;
}

export const tenants: Record<string, TenantConfig> = {
  parkwood: {
    id: 'parkwood',
    name: 'Parkwood Play',
    logo: '/logo.svg',
    primaryColor: '#38B000',
    secondaryColor: '#E0F7FA',
    accentColor: '#FFD700',
    textColor: '#1F2937',
    backgroundColor: '#FFFFFF',
    footerBackground: '#1F2937',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    socialLinks: {
      instagram: '#',
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
    companyLinks: {
      about: '/about',
      blogs: '/blogs',
      contact: '/contact',
      careers: '/careers',
      partner: '/partner',
    },
    footerText: '© 2025 Techmash Solutions Pvt. Ltd. All Rights Reserved.',
  },
  // Example second tenant for white-labeling
  sportshub: {
    id: 'sportshub',
    name: 'Sports Hub',
    logo: '/logo-sportshub.svg',
    primaryColor: '#2563EB',
    secondaryColor: '#DBEAFE',
    accentColor: '#F59E0B',
    textColor: '#1F2937',
    backgroundColor: '#FFFFFF',
    footerBackground: '#1E3A8A',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    socialLinks: {
      instagram: '#',
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
    companyLinks: {
      about: '/about',
      blogs: '/blogs',
      contact: '/contact',
      careers: '/careers',
      partner: '/partner',
    },
    footerText: '© 2025 Sports Hub Inc. All Rights Reserved.',
  },
};

export function getTenant(tenantId: string = 'parkwood'): TenantConfig {
  return tenants[tenantId] || tenants.parkwood;
}

