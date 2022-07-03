import http from "../http-common";
const accessToken = sessionStorage.getItem("token");

class AdminDataService {
  getAllAdminSurveys() {
    return http.get("/user/allsurveys");
  }
}
export default new AdminDataService();