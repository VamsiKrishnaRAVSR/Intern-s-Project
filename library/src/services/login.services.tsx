import axios from "axios";
import { API_USER_ROUTES } from "../constants/APIConstants";
import { LoginProps } from "../types/login.types";
import { sleep } from "./common.services";

// class Login {
//   post(payload: LoginProps): Promise<LoginSuccessResponse> {
//     return axios.post(API_USER_ROUTES.LOGIN_USER, payload);
//   }
// }

export const loginService = (data: LoginProps) => {
  return sleep().then(() => axios.post(API_USER_ROUTES.LOGIN_USER, data));
};

// export const loginService = new Login();
