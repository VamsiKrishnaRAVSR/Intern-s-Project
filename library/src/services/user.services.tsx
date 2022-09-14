import axios from "axios";
import { API_USER_ROUTES } from "../constants/APIConstants";
import { UserDetails, UserProps } from "../types/user.types";
import { sleep, updateURL } from "./common.services";

//export const updateURL = (url: string, id: number) => url.replace(":id", String(id));

export const createUser = (data: UserProps) => {
  return sleep().then(() => axios.post(API_USER_ROUTES.POST_USER, data));
};

export const updateUser = (data: UserDetails) => {
  return sleep().then(() => axios.put(API_USER_ROUTES.PATCH_USER, data));
};

export const getUser = (id: number) => {
  sleep().then(() => axios.get(updateURL(API_USER_ROUTES.GET_USER, id)));
};

export const getUsers = () => {
  sleep().then(() => axios.get(API_USER_ROUTES.GET_USERS));
};

export const deleteUser = (id: number) => {
  return sleep().then(() =>
    axios.delete(updateURL(API_USER_ROUTES.DELETE_USER, id))
  );
};
