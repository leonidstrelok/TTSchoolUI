export default async function ({ store, redirect, route }) {
    if (route.path == "/callback") {
      let redirectPath = await store.dispatch("oidc/oidcSignInCallback");
      redirect(redirectPath);
    }
  }