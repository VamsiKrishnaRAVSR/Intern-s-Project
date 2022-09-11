import { useMutation, useQuery } from "react-query";
import { USER_QUERY_CONSTANTS } from "../constants/queryConstants";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../services/user.services";

import { UserDetails, UserProps } from "../types/user.types";

export const useCreateUser = () => {
  return useMutation((data: UserProps) => createUser(data));
};

export const useUpdateUser = () => {
  return useMutation((data: UserDetails) => updateUser(data));
};

export const useGetUser = (id: number) => {
  return useQuery([USER_QUERY_CONSTANTS.GET_USER], () => getUser(id));
};

export const useGetUsers = () => {
  return useQuery([USER_QUERY_CONSTANTS.GET_USERS], () => getUsers());
};

export const useDeleteUser = () => {
  return useMutation((data: number) => deleteUser(data));
};
