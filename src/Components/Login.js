import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form>
      <header className="header">
        <h2>فرم ورود</h2>
      </header>
      <div className="form-control">
        <input type="email" placeholder="ایمیل" name="email" id="email" />
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
        <div className="field">
          <input type="checkbox" name="remmember" id="remmember" />
          <label htmlFor="remmember">مرا به خاطر بسپار</label>
        </div>
      </div>
      <div className="form-control">
        <Link to="#">بازیابی رمز</Link>
      </div>
      <div className="form-control">
        <button type="submit">ورود</button>
      </div>
      <div className="field">
        هنوز ثبت نام نکرده اید؟ <Link to="/">ثبت نام کنید</Link>
      </div>
    </form>
  );
};

export default Login;
