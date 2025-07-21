// src/oktaConfig.ts
export const oktaConfig = {
  issuer: `https://${import.meta.env.VITE_OKTA_DOMAIN}/oauth2/default`,
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID || "",
  redirectUri:
    import.meta.env.VITE_OKTA_REDIRECT_URI ||
    `${window.location.origin}/login/callback`,
  scopes: ["openid", "profile", "email"],
};