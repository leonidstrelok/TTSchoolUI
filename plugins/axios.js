export default function ({ $axios, redirect, app: { store, i18n } }) {
    $axios.setBaseURL(process.env.serverUrl)
    $axios.onError(error => {
      if (error.response.status === 500) {
        redirect('/sorry')
      }
      else {
        // console.log(error)
      }
    })
    $axios.interceptors.request.use(
      function (config) {
        config.headers.Authorization =
          "Bearer " + store.getters["oidc/oidcAccessToken"];
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }