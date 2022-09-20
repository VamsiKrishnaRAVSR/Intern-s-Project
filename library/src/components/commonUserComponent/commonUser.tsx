import { Formik } from "formik";
import * as yup from "yup";

import React, { useState } from "react";
import { Button } from "reactstrap";
import "./commonUser.css";

const CommonUser = (props: any) => {
  const { initialValues, onSubmit, setFieldsBlur, fieldsBlur } = props;
  const [button] = useState(fieldsBlur);
  // console.log(button);

  const validationSchema = yup.object().shape({
    name: yup.string().required().label("Name"),
    email: yup.string().email().required().label("E-mail"),
    role: yup.string().required().nullable().label("Role type"),
  });
  // console.log(setFieldsBlur);

  const css = fieldsBlur ? "remove-borders" : "";

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Enter Name of the User</label>
            <br />
            <input
              className={`${css}`}
              disabled={fieldsBlur}
              id="name"
              type="text"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="user-error">{formik.errors.name}</p>
            ) : (
              <p></p>
            )}
            <label htmlFor="email">Enter Email of the User</label>
            <br />
            <input
              className={`${css}`}
              disabled={fieldsBlur}
              id="email"
              type="text"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="user-error">{formik.errors.email}</p>
            ) : (
              <p></p>
            )}
            <label htmlFor="role">Enter Role</label>
            <br />
            <input
              className={`${css}`}
              disabled={fieldsBlur}
              id="role"
              type="role"
              {...formik.getFieldProps("role")}
            />
            {formik.touched.role && formik.errors.role ? (
              <p className="user-error">{formik.errors.role}</p>
            ) : (
              <p></p>
            )}
            <Button type="submit">Submit</Button>
            {button && (
              <Button onClick={() => setFieldsBlur(false)}>Edit</Button>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CommonUser;
