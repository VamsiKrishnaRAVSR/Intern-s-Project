import React from "react";
import { useParams } from "react-router-dom";
import { useGetUser } from "../../hooks/User.hooks";

const User = () => {
  const params = useParams();
  const { id } = params;
  const { isLoading, data } = useGetUser(id);
  console.log(data);

  return <div>{id}</div>;
};

export default User;
