import axios from "axios";
import { API_USER_ROUTES } from "../constants/APIConstants";
import { updatedUserDetails, userData, UserProps } from "../types/user.types";
import { sleep, updateURL } from "./common.services";

//export const updateURL = (url: string, id: number) => url.replace(":id", String(id));

const mockApiData = (props: updatedUserDetails | UserProps) => {
  return {
    id: props.id,
    name: props.name,
    email: props.email,
    role_type: props.role_type ? props.role_type : "enduser",
    password: "qwertyuiop",
    created_by: "admin@test.com",
    created_at: 1345679876543454,
    updated_by: "admin@test.com",
    updated_at: 1345679876543454,
  };
};

export const createUser = (data: UserProps) => {
  return sleep().then(() =>
    axios.post(API_USER_ROUTES.POST_USER, mockApiData(data))
  );
};

export const updateUser = (data: updatedUserDetails | userData) => {
  const updatedMockData = mockApiData(data);
  return sleep().then(() =>
    axios.put(updateURL(API_USER_ROUTES.PATCH_USER, data.id), updatedMockData)
  );
};

export const getUser = (id: number) => {
  return sleep().then(() =>
    axios.get(updateURL(API_USER_ROUTES.GET_USER, id)).then((data) => data.data)
  );
};

export const getUsers = () => {
  return sleep().then(() =>
    axios.get(API_USER_ROUTES.GET_USERS).then((data) => data.data)
  );
};

export const deleteUser = (id: number) => {
  return sleep().then(() =>
    axios.delete(updateURL(API_USER_ROUTES.DELETE_USER, id))
  );
};
