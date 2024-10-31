/**
 * Monkey patch nuxt i18n middleware to handle 301 redirections on root domain,
 * taking care of setting the right locale before redirecting it
 */
export default async function ({ isHMR, app, route, redirect, req, store }) {
  // Disable on hot module reload
  if (isHMR) {
    return;
  }

  // Check if we are on server side rendering and we can infer the country from x-vercel-ip-country header
  const ipCountry = req?.headers["x-vercel-ip-country"];
  if (ipCountry && !store.state.site.targetDomain) {
    const localeMetadata = app.i18n.locales.find(
      (i) => i.code === app.i18n.locale
    );
    const targetCountry = (ipCountry || "").toLowerCase();
    const currentCountry = (localeMetadata?.country || "").toLowerCase();

    // Set target domain with ipCountry value if is different from current one
    if (targetCountry !== currentCountry) {
      const ipCountryCode = app.i18n.locales.find(
        (i) => i.code === targetCountry
      );

      // Set the target domain
      store.dispatch(
        "site/SET_TARGET_DOMAIN",
        ipCountryCode?.code || localeMetadata.code
      );
      store.dispatch("site/SET_DISPLAY_BANNER", true);
    }
  }

  let [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(
    route
  );

  // This means that is a rootRedirect
  if (status === 999) {
    const finalLocale = app.i18n.getBrowserLocale();
    status = 301; // Set the status code as 301
    redirectPath = `/${finalLocale}`; // Set the right path
    await app.i18n.setLocale(finalLocale); // Set the language accordingly
  }

  // Handle the redirection as normal
  if (status && redirectPath) {
    const query = preserveQuery ? route.query : undefined;
    redirect(status, redirectPath, query);
  }
}
