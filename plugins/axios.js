export default function ({ $axios, $config }, inject) {
  // Create a custom axios instance
  const createClient = (baseUrl) => {
    return $axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };

  // Set baseURL for internal API
  const client = createClient($config.baseURL);

  // Set baseURL for gateway api
  const gatewayClient = createClient($config.gatewayUri);

  // Set baseURL for backend api
  const backendClient = createClient($config.backendURL);

  // Inject to context as $api
  inject("api", client);

  // Inject to context as $gatewayApi
  inject("gatewayApi", gatewayClient);

  // Inject to context as $gatewayApi
  inject("backendApi", backendClient);
}
