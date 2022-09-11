import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

import { usePostLogin } from "../../hooks/Login.hooks";
import { LoginProps } from "../../types/login.types";
import "./Login.css";

const Login = () => {
  const { mutate, isLoading, isError, error, isSuccess } = usePostLogin();
  const initialValues: LoginProps = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required().label("Email"),
    password: yup.string().required().label("Password"),
  });

  const onSubmit = (data: LoginProps) => {
    console.log(data);
    mutate(data);
  };
  // if (isLoading) {
  //   return <Loader />;
  // }

  if (isError) {
    console.log(error);
    const fn = () => toast(`${error}`);
    fn();
  }

  return (
    <div className="login">
      <h1>Welcome to Josh Library</h1>
      <ToastContainer />
      <div className="login_container">
        <div className="login_library_image">
          <img
            src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png"
            alt="library_Img"
            className="library_image"
          />

          <p>Get access to huge collection of Books</p>
        </div>
        <div className="formik_div">
          <h2>Please login to continue</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmit(values)}
          >
            <Form className="formik_container">
              <div className="login_container_field">
                <label htmlFor="email">Email</label>
                <br />
                <Field
                  placeholder="Enter Email"
                  type="text"
                  name="email"
                  id="email"
                />
                <ErrorMessage
                  className="error_msg"
                  component="p"
                  name="email"
                />
              </div>
              <div className="login_container_field">
                <label htmlFor="password">Password</label>
                <br />
                <Field
                  placeholder="Enter password"
                  type="password"
                  name="password"
                  id="password"
                />
                <ErrorMessage
                  className="error_msg"
                  component="p"
                  name="password"
                />
              </div>

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
