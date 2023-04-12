import AxiosClient from "../USERApi/AxiosClient";
export const UserApi = {
  login(params) {
    const url = "api/auth/login";
    return AxiosClient.post(url, params);
  },
  SignUp(params) {
    const url = "api/auth/register";
    return AxiosClient.post(url, params);
  },
};
