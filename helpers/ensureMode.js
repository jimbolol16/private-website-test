import TypeDetect from "type-detect";

const defaultReturn = (pluginType) => {
  switch (pluginType) {
    case "function":
      return null;
    case "object":
      return {};
    case "undefined":
      return {};
    default:
      return null;
  }
};

const onBoth = (pluginType, plugin, ...args) => {
  switch (pluginType) {
    case "function":
      return plugin(...args);
    case "object":
      return plugin[args[0]] || {};
    default:
      return defaultReturn(pluginType);
  }
};
/**
 * Check if plugin is running on "mode" side before running it. This is needed specifically
 * for inject plugins into nuxt context which must be executed on computed properties,
 * because they are rendered on the server side.
 *
 * It is not enough to set the plugin mode on nuxt.config.js and it is needed to wrap the real call to avoid errors due to SSR
 */
export default (mode, plugin, ...args) => {
  const pluginType = TypeDetect(plugin).toLowerCase();

  if (
    (process.client && mode === "client") ||
    (process.server && mode === "server") ||
    mode === "both"
  ) {
    return onBoth(pluginType, plugin, ...args);
  }

  return defaultReturn(pluginType);
};
