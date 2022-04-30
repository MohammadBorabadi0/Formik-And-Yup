import React, { Fragment } from "react";

import { validationSchema } from "./validateSignup";
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

const radioOptions = [
  { value: "0", label: "زن" },
  { value: "1", label: "مرد" },
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
    <form onSubmit={handleSubmit}>
      <header className="header">
        <h2>فرم ثبت نام</h2>
      </header>
      <div className="form-control">
        <input
          type="text"
          placeholder="نام"
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && <span>{errors.name}</span>}
      </div>
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
          type="number"
          placeholder="شماره موبایل"
          name="mobile"
          id="mobile"
          value={values.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.mobile && touched.mobile && <span>{errors.mobile}</span>}
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
        <input
          type="password"
          placeholder="تکرار رمز عبور"
          name="confirmPassword"
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <span>{errors.confirmPassword}</span>
        )}
      </div>
      <div className="form-control">
        <div className="field">
          {radioOptions.map((item, index) => (
            <Fragment key={index}>
              <input
                type="radio"
                id={item.label}
                name="gender"
                value={item.value}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.gender === item.value}
              />
              <label htmlFor={item.label}>{item.label}</label>
            </Fragment>
          ))}
        </div>
        {errors.gender && touched.gender && <span>{errors.gender}</span>}
      </div>
      <div className="form-control">
        <select
          name="media"
          value={values.media}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {selectOptions.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
            </option>
          ))}
        </select>
        {errors.media && touched.media && <span>{errors.media}</span>}
      </div>
      <div className="form-control">
        <div className="field">
          <h3>علاقه مندی ها : </h3>
          {checkBoxOptions.map((item, index) => (
            <Fragment key={index}>
              <input
                type="checkbox"
                id={item.label}
                name="intrests"
                value={item.value}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.intrests.includes(item.value)}
              />
              <label htmlFor={item.label}>{item.label}</label>
            </Fragment>
          ))}
        </div>
        {errors.intrests && touched.intrests && <span>{errors.intrests}</span>}
      </div>
      <div className="form-control">
        <div className="field">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value={values.terms}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="terms">با قوانین و شرایط سایت موافقم.</label>
        </div>
        {errors.terms && touched.terms && <span>{errors.terms}</span>}
      </div>
      <div className="form-control">
        <button type="submit" disabled={!isValid}>
          ثبت نام
        </button>
      </div>
      <div className="field">
        قبلا ثبت نام کرده اید؟ <Link to="/login">ورود</Link>
      </div>
    </form>
  );
};

export default Signup;
