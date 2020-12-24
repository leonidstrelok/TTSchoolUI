export default {
    auth: {
        login: "/connect/token", // POST
        registration: "/api/Account", // POST
        logout: "/api/logout", // POST
        check: "/connect/userinfo", //GET,
        changePassword: "/api/Account/forgotPassword/",
        forgotPassword: "/api/Account/forgotPassword/",
    },
    lessons: {
        getAllLessons: "/api/shared", // GET
        getByIdLesson: "/api/Student/getLessonByDay/",
        registrateTime: "/api/Student"
    }
}