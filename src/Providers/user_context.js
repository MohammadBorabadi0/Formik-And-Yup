import React, { createContext, useContext, useReducer } from "react";

// initialState
const initialState = {
  users: [],
};

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SEND_DATA": {
      const updatedUsers = [...state.users];
      updatedUsers.push({ id: new Date().getTime(), ...action.payload });
      return { ...state, users: updatedUsers };
    }
    default: {
      return state;
    }
  }
};

// Create Context
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

// Custom Hook
export const useUsers = () => useContext(UserContext);
