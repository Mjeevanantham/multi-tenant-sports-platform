/// <reference types="astro/client" />
import type { TenantConfig } from './config/tenants';

declare namespace App {
  interface Locals {
    tenant: TenantConfig;
  }
}

