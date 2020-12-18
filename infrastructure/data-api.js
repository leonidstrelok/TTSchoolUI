const url ="https://localhost:5001"
export default {
    auth:{
        login: url+"/connect/token", // POST
        registration: url+"/api/account", // POST
        logout: url+"/api/logout" // POST
    },
    lessons:{
        getAllLessons: url+"/api/shared", // GET
        getByIdLesson: url+"/api/shared/getByIdBusyHoursLesson/"
    }
}