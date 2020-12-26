export default function ({ $axios, redirect, app: { store, i18n } }) {
  $axios.setBaseURL(process.env.serverUrl)
  $axios.onError(error => {
    console.log(error);
    if (error.response.status === 500) {
      redirect('/sorry')
    }
    else if (error.response.status === 401) {
      redirect("/cabinet")
    }
  })
  $axios.interceptors.request.use(
    function (config) {
      config.headers.Authorization =
        "Bearer " + localStorage.getItem("user");
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  $axios.setHeader("Content-Type", "application/x-www-form-urlencoded")
}