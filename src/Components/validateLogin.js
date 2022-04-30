import * as yup from "yup";

export const validationSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل خود را وارد کنید"),
  password: yup
    .string()
    .required("لطفا رمز عبور را وارد کنید")
    .min(4, "رمز عبور باید بیشتر از 4 کاراکتر باشد"),
  remmember: yup.bool(),
});
