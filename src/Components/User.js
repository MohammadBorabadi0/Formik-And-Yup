import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

// Context
import { useUsers } from "../Providers/user_context";

const User = () => {
  const { users } = useUsers();
  const currentUser = users[users.length - 1];
  const history = useHistory();

  useEffect(() => {
    if (!users.length) {
      history.push("/");
    }
  }, []);

  if (currentUser)
    return (
      <div className="result">
        <h2>سلام {currentUser.name}</h2>
        <h4>ایمیل : {currentUser.email}</h4>
        <p>شماره موبایل : {currentUser.mobile}</p>
        <div className="field">
          <h4>علاقه مندی ها :</h4>
          {currentUser.intrests.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    );
};

export default User;
