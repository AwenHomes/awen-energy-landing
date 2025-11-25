/**
 * Shared constants used throughout the application
 * Centralizes common values for easier maintenance and consistency
 */

export const COMPANY = {
  name: 'Awen Energy LLC',
  email: 'info@awenenergy.com',
  domain: 'https://awenenergy.com',
  tagline: 'Solar Warranty Recovery Service',
  description: 'Helping homeowners recover manufacturer warranties and get their solar systems fixed—even when their installer is gone.',
} as const;

export const CONTACT = {
  email: 'info@awenenergy.com',
  serviceArea: 'Nationwide Service',
} as const;

export const PRICING = {
  assessment: 0,
  claimPrep: 500,
  successFeePercent: 10,
} as const;
