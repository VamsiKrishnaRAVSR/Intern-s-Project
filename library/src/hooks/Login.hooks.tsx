import { useMutation } from "react-query";
import { loginService } from "../services/login.services";

// export const useLogin = () => {
//   return useMutation(loginService.post,{
//     onError:(err) =>{
//       console.log(err)
//     }
//   });
// };

export const usePostLogin = () => {
  return useMutation(loginService, {
    onError: (err) => console.log(err),
  });
};
