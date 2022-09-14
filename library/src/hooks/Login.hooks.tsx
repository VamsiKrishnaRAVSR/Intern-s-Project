import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/login.services";

// export const useLogin = () => {
//   return useMutation(loginService.post,{
//     onError:(err) =>{
//       console.log(err)
//     }
//   });
// };

export const usePostLogin = () => {
  const navigate = useNavigate();
  return useMutation(loginService, {
    onSuccess: () => navigate("/book"),
    onError: (err) => console.log(err),
  });
};
