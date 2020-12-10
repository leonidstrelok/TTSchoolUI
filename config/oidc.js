export const oidcSettings = {
    authority: process.env.serverUrl,
    client_id: "TTSchool.API",
    redirect_uri: `${process.env.localUrl}callback`,
    post_logout_redirect_uri: process.env.localUrl,
    response_type: "code",
    scope: "TTSchoolAPIAPI openid profile offline_access",
    automaticSilentRenew: true,
    silentRequestTimeout: 100,
  }