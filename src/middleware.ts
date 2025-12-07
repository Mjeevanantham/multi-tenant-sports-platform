import { defineMiddleware } from 'astro/middleware';
import { getTenant } from './config/tenants';

export const onRequest = defineMiddleware((context, next) => {
  // Get tenant from query param, cookie, or subdomain (default to parkwood)
  const tenantId = context.url.searchParams.get('tenant') || 
                   context.cookies.get('tenant')?.value || 
                   'parkwood';
  
  const tenant = getTenant(tenantId);
  context.locals.tenant = tenant;
  
  return next();
});

