export default {
    auth: {
        login: "/connect/token", // POST
        registration: "/api/Account", // POST
        logout: "/api/logout", // POST
        check: "/connect/userinfo", //GET,
        changePassword: "/api/Account/changePassword",
        forgotPassword: "/api/Account/forgotPassword/",
    },
    lessons: {
        getAdminLessons: "/api/Student", // GET
        getUserLessons: "/api/Student", // GET
        cancelLesson: "/api/Student/cancelLesson", // GET
        getAllLessons: "/api/shared", // GET
        getByIdLesson: "/api/Shared/getByIdBusyHoursLesson/",
        registrateTime: "/api/Student"
    }
}