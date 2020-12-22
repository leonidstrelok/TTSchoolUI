export default {
    auth:{
        login: "/connect/token", // POST
        registration: "/api/Account", // POST
        logout: "/api/logout", // POST
        check:"/connect/userinfo" //GET
    },
    lessons:{
        getAllLessons: "/api/shared", // GET
        getByIdLesson: "/api/shared/getByIdBusyHoursLesson/"
    }
}