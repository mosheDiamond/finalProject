import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const CurrenUserInfoContext = createContext();

export function CurrenUserInfoProvider({ children }) {
  const [currenUserInfoState, setCurrenUserInfoState] = useState(null);

  const value = {
    currenUserInfoState,
    setCurrenUserInfoState,
  };

  useEffect(()=>{
    setCurrenUserInfoState(null);
  },[])

  return <CurrenUserInfoContext.Provider value={value}>{children}</CurrenUserInfoContext.Provider>;
}

export function useCurrenUserInfo() {
  return useContext(CurrenUserInfoContext);
}