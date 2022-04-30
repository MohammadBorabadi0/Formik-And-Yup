import React from "react";
import { Link } from "react-router-dom";

import { validationSchema } from "./validateLogin";
import { useFormik } from "formik";

// initialValues
const initialValues = {
  email: "",
  password: "",
  remmember: false,
};

const Login = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    touched,
  } = formik;
  return (
    <form onSubmit={handleSubmit}>
      <header className="header">
        <h2>فرم ورود</h2>
      </header>
      <div className="form-control">
        <input
          type="email"
          placeholder="ایمیل"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <span>{errors.email}</span>}
      </div>
      <div className="form-control">
        <input
          type="password"
          placeholder="رمز عبور"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <span>{errors.password}</span>}
      </div>
      <div className="form-control">
        <div className="field">
          <input
            type="checkbox"
            name="remmember"
            id="remmember"
            value={values.remmember}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="remmember">مرا به خاطر بسپار</label>
        </div>
      </div>
      <div className="form-control">
        <Link to="#">بازیابی رمز</Link>
      </div>
      <div className="form-control">
        <button type="submit" disabled={!isValid}>
          ورود
        </button>
      </div>
      <div className="field">
        هنوز ثبت نام نکرده اید؟ <Link to="/">ثبت نام کنید</Link>
      </div>
    </form>
  );
};

export default Login;
