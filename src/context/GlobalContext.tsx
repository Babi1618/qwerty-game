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
  const arrayWords = ["QWE", "W", "E", "R"];
  const [letterScreenIndex, setLetterScreenIndex] = useState<number>(0);
  const [value, setValue] = useState([]);
  const [wordScreenIndex, setWordScreenIndex] = useState(0);
  const arr = arrayWords[wordScreenIndex].split("");

  useEffect(() => {
    if (arr.length === letterScreenIndex) {
      setTimeout(() => {
        setValue([]);
        setLetterScreenIndex(0);
        console.log(wordScreenIndex, arrayWords.length)
        if (wordScreenIndex <= arrayWords.length - 1) {
          setWordScreenIndex((prev: number) => prev + 1);
        }
      }, 1000);
    }
  }, [value]);

  return (
    <GlobalContext.Provider
      value={{
        arr,
        letterScreenIndex,
        setLetterScreenIndex,
        value,
        setValue,
        wordScreenIndex,
        arrayWords,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
