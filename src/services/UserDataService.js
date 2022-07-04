import http from "../http-common";
const accessToken = sessionStorage.getItem("token");

class UserDataService {
  createUser(userData) {
    return http.post(`/auth/register`, userData);
  }
  getAllUsers() {
    return http.get("/user/alladmins",{
      headers: {
        'x-access-token': accessToken
      }
    });
  }
}
export default new UserDataService();