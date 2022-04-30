import * as yup from "yup";

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const validationSchema = yup.object({
  name: yup
    .string()
    .required("نام خود را وارد کنید")
    .min(3, "نام نباید کمتر از 3 حرف باشد"),
  email: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل خود را وارد کنید"),
  mobile: yup
    .string()
    .required("شماره موبایل خود را وارد کنید")
    .matches(phoneRegExp, "شماره موبایل صحیح نیست"),
  gender: yup.string().required("جنسیت خود را وارد کنید"),
  password: yup
    .string()
    .required("لطفا رمز عبور را وارد کنید")
    .min(4, "رمز عبور باید بیشتر از 4 کاراکتر باشد"),
  confirmPassword: yup
    .string()
    .required("لطفا تکرار رمز عبور را وارد کنید")
    .oneOf(
      [yup.ref("password"), null],
      "رمز عبور و تکرار آن با هم همخوانی ندارند"
    ),
  media: yup.string().required("این فیلد الزامی است"),
  intrests: yup
    .array()
    .min(1, "حداقل یکی از این موارد را انتخاب کنید")
    .required("حداقل یکی از این موارد را انتخاب کنید"),
  terms: yup.bool().oneOf([true], "قوانین و شرایط سایت را قبول کنید"),
});
