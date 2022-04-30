import React, { Fragment } from "react";

import { validationSchema } from "./validate";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const selectOptions = [
  { value: "", label: "از چه طریقی با ما آشنا شدید ؟" },
  { value: "اینستاگرام", label: "اینستاگرام" },
  { value: "تلگرام", label: "تلگرام" },
  { value: "گوگل", label: "گوگل" },
];

const checkBoxOptions = [
  { value: "جاوا", label: "جاوا" },
  { value: "پایتون", label: "پایتون" },
];

// initialValues
const initialValues = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  gender: "",
  media: "",
  intrests: [],
  terms: false,
};

const Signup = () => {
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
    <form>
      <header className="header">
        <h2>فرم ثبت نام</h2>
      </header>
      <div className="form-control">
        <input type="text" placeholder="نام" name="name" id="name" />
      </div>
      <div className="form-control">
        <input type="email" placeholder="ایمیل" name="email" id="email" />
      </div>
      <div className="form-control">
        <input
          type="number"
          placeholder="شماره موبایل"
          name="mobile"
          id="mobile"
        />
      </div>
      <div className="form-control">
        <input
          type="password"
          placeholder="رمز عبور"
          name="password"
          id="password"
        />
      </div>
      <div className="form-control">
        <input
          type="password"
          placeholder="تکرار رمز عبور"
          name="confirmPassword"
          id="confirmPassword"
        />
      </div>
      <div className="form-control">
        <div className="field">
          <input type="radio" id="female" name="gender" />
          <label htmlFor="female">زن</label>
          <input type="radio" id="male" name="gender" />
          <label htmlFor="male">مرد</label>
        </div>
      </div>
      <div className="form-control">
        <select name="media">
          {selectOptions.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <div className="field">
          <h3>علاقه مندی ها : </h3>
          {checkBoxOptions.map((item, index) => (
            <Fragment key={index}>
              <input type="checkbox" id={item.label} name="intrests" />
              <label htmlFor={item.label}>{item.label}</label>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="form-control">
        <div className="field">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">با قوانین و شرایط سایت موافقم.</label>
        </div>
      </div>
      <div className="form-control">
        <button type="submit">ثبت نام</button>
      </div>
      <div className="field">
        قبلا ثبت نام کرده اید؟ <Link to="/login">ورود</Link>
      </div>
    </form>
  );
};

export default Signup;
