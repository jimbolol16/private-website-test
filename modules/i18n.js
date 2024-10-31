/**
 * buildModule to drop nuxti18n middleware in order to handle it by our i18n custom middleware
 */
export default function () {
  this.nuxt.hook("modules:done", () => {
    const indexOf = this.options.router.middleware.indexOf("nuxti18n");
    this.options.router.middleware.splice(indexOf, 1);
  });
}
