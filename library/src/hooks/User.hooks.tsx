import { useMutation, useQuery, useQueryClient } from "react-query";
import { string } from "yup";
import { USER_QUERY_CONSTANTS } from "../constants/queryConstants";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../services/user.services";

import {
  updatedUserDetails,
  userData,
  UserDetails,
  UserProps,
} from "../types/user.types";

export const useCreateUser = () => {
  const queryClient: any = useQueryClient();
  return useMutation((data: UserProps) => createUser(data), {
    onSuccess: (data) => {
      queryClient.setQueriesData(
        [USER_QUERY_CONSTANTS.GET_USERS],
        (oldData: userData[]) => {
          return [...oldData, data.data];
        }
      );
    },
  });
};

export const useUpdateUser = () => {
  const queryClient: any = useQueryClient();
  return useMutation(
    (data: updatedUserDetails | userData) => updateUser(data),
    {
      onSuccess: (data, variables) => {
        queryClient.setQueriesData(
          [USER_QUERY_CONSTANTS.GET_USERS],
          (oldData: userData[]) => {
            const updatedData = oldData?.map((ele: userData) => {
              if (String(ele.id) === String(variables.id)) {
                return data.data;
              } else {
                return ele;
              }
            });
            return updatedData;
          }
        );
      },
    }
  );
};
export const useGetUser = (id: number) => {
  return useQuery([USER_QUERY_CONSTANTS.GET_USER], () => getUser(id));
};

export const useGetUsers = () => {
  return useQuery([USER_QUERY_CONSTANTS.GET_USERS], () => getUsers());
};

export const useDeleteUser = () => {
  const queryClient: any = useQueryClient();
  return useMutation((data: number) => deleteUser(data), {
    onSuccess: (data, variables) => {
      queryClient.setQueriesData(
        [USER_QUERY_CONSTANTS.GET_USERS],
        (oldData: userData[]) =>
          oldData.filter((ele) => String(variables) !== String(ele.id))
      );
    },
  });
};
