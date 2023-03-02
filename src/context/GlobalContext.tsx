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
  const word = arrayWords[wordScreenIndex].split("");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    console.log(word);
    changeLetter(word, letterScreenIndex);
  }, [value]);

  const changeLetter = (arr: string[], letterScreenIndex: number) => {
    if (arr.length === letterScreenIndex) {
      setTimeout(() => {
        setValue([]);
        setLetterScreenIndex(0);
        if (wordScreenIndex <= arrayWords.length - 1) {
          setWordScreenIndex((prev: number) => prev + 1);
        }
      }, 1000);
    }
  };
  const handleChangeColor = (i: number) => {
    if (i < value.length) {
      if (value[i] === word[i]) {
        return "ok";
      } else {
        return "error";
      }
    }
    return "";
  };
  
  return (
    <GlobalContext.Provider
      value={{
        word,
        letterScreenIndex,
        setLetterScreenIndex,
        value,
        setValue,
        wordScreenIndex,
        arrayWords,
        points,
        setPoints,
        handleChangeColor,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
