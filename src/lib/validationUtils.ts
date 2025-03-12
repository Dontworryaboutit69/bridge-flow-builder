
/**
 * Validation utility functions for form inputs
 */

/**
 * Validates if a string is a valid URL
 * Requires http:// or https:// and a domain with at least one dot
 */
export const isValidUrl = (url: string): boolean => {
  if (!url) return true; // Allow empty values (not required)
  const pattern = /^(https?:\/\/)?(www\.)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
  return pattern.test(url);
};

/**
 * Validates if a string is a valid email address
 */
export const isValidEmail = (email: string): boolean => {
  if (!email) return true; // Allow empty values (not required)
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

/**
 * Validates if a string only contains letters, spaces, hyphens, and apostrophes
 * (appropriate for city names, person names, etc.)
 */
export const isValidTextOnly = (text: string): boolean => {
  if (!text) return true; // Allow empty values (not required)
  const pattern = /^[A-Za-z\s\-']+$/;
  return pattern.test(text);
};

/**
 * Format website input to ensure it has http:// prefix
 */
export const formatWebsiteUrl = (url: string): string => {
  if (!url) return '';
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};
