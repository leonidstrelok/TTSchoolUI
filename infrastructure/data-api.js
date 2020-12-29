export default {
    auth: {
        getUserInfo: "/connect/userinfo", //GET,
        login: "/connect/token", // POST
        registration: "/api/Account", // POST
        logout: "/api/logout", // POST
        changePassword: "/api/Account/changePassword",
        forgotPassword: "/api/Account/forgotPassword/",
    },
    lessons: {
        getAdminLessons: "/api/Teacher", // GET
        getUserLessons: "/api/Student", // GET
        cancelLesson: "/api/Student/cancelLesson", // GET
        getAllLessons: "/api/shared", // GET
        getLessonById: "/api/Shared/getByIdBusyHoursLesson/",
        registrateTime: "/api/Student",
        registrateTimeAdmin: "/api/Teacher",
        cancelLessonAdmin: "/api/Teacher/cancelLesson",

    }
}