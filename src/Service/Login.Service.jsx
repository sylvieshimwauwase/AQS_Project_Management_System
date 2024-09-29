import http from "../AxiosInstint";

class loginDataService {
    login(data) {
      return http.post("/login", data);
    }
    signup(data) {
      return http.post("/register", data);
    }
    // update(id, data) {
    //   return http.put(`/users/${id}`, data);
    // }
    // getSingle(id) {
    //   return http.get(`/users/${id}`);
    // }
  }
  
  const loginService = new loginDataService();
  export default loginService;