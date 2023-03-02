import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useState,
  } from "react";
  export const GlobalContext = createContext({});
  
  export const GlobalContextProvider = (props: PropsWithChildren) => {
    const hello = "ciao";

  
    return (
      <GlobalContext.Provider
        value={{
          hello,
 
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
  };
  export const useGlobalContext = () => {
    return useContext(GlobalContext);
  };
  