export default async function ({ app, store, redirect, route }) {
    console.log(app);
    if (route.path == "/callback") {
        var redirectPath = await store.dispatch("oidc/oidcSignInCallback");
        redirect(redirectPath);
    }
}