import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import React from "react";
import { Button } from "reactstrap";
import "./commonBook.css";

const CommonBook = (props: any) => {
  const { initialValues, onSubmit } = props;

  const validationSchema = yup.object().shape({
    name: yup.string().required().label("Name"),
    price: yup.string().required().label("price"),
    category: yup.string().required().label("Category"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="form-item-container">
            <label htmlFor="name">Enter Name of the Book</label>
            <Field type="text" name="name" />
            <ErrorMessage className="error-message" component="p" name="name" />
          </div>
          <div className="form-item-container">
            <label htmlFor="prize">Enter Prize of the Book</label>
            <Field type="text" name="prize" id="prize" />
            <ErrorMessage
              className="error-message"
              component="p"
              name="prize"
            />
          </div>
          <div className="form-item-container">
            <label htmlFor="category">
              Enter which category this book belongs to?
            </label>
            <Field type="text" name="category" id="category" />
            <ErrorMessage
              className="error-message"
              component="p"
              name="category"
            />
          </div>
          <div className="submit-button">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CommonBook;
