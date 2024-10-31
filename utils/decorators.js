/**
 * Disable function on development environment. This is useful to avoid make api calls against
 * billable services
 * @param {Function} callback
 * @returns function execution
 */
const disableOnEnvironment = (
  callback,
  environments = ["development", "staging"]
) => {
  const innerFunction = (fn) => {
    if (environments.indexOf(process.env.NUXT_APP_ENVIRONMENT) !== -1) {
      fn = callback;
    }

    /**
     * Return decorated function with variable number of arguments
     */
    return function (...args) {
      return fn(...args);
    };
  };

  return innerFunction;
};

export { disableOnEnvironment };
