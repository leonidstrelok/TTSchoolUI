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
        getUserLessons: "/api/Student", // GET
        cancelLesson: "/api/Student/cancelLesson", // GET
        getAllLessons: "/api/shared", // GET
        getByIdLesson: "/api/Shared/getByIdBusyHoursLesson/",
        registrateTime: "/api/Student"
    }
}