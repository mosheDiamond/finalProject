import React, { createContext, useContext, useState } from "react";

const CurrenUserInfoContext = createContext();

export function CurrenUserInfoProvider({ children }) {
  const [currenUserInfoState, setCurrenUserInfoState] = useState(null);

  const value = {
    currenUserInfoState,
    setCurrenUserInfoState,
  };

  return <CurrenUserInfoContext.Provider value={value}>{children}</CurrenUserInfoContext.Provider>;
}

export function useCurrenUserInfo() {
  return useContext(CurrenUserInfoContext);
}