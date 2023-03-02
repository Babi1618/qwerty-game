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
  const arrayWords = ["QWERERE", "CIAO"];
  const arr = arrayWords[0].split("");
  const [letterScreenIndex, setLetterScreenIndex] = useState<number>(0);
  const [letterKey, setLetterKey] = useState("");
  const [value, setValue]=useState([])
  const [wordScreenIndex, setWordScreenIndex] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        arr,
        // arrayWords,
        letterScreenIndex,
        setLetterScreenIndex,
        letterKey,
        setLetterKey,
        // wordScreenIndex,
        // setWordScreenIndex,
        value, setValue
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
