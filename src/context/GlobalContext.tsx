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
  const [value, setValue] = useState<string[]>([]);
  const [wordScreenIndex, setWordScreenIndex] = useState<number>(0);
  const word = arrayWords[wordScreenIndex]
    ? arrayWords[wordScreenIndex].split("")
    : [];
  const [points, setPoints] = useState(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [greatOpen, setGreatOpen] = useState<boolean>(false);

  useEffect(() => {
    changeLetter(word, letterScreenIndex);
  }, [value]);

  const changeLetter = useCallback(
    (arr: string[], letterScreenIndex: number) => {
      if (arr.length === letterScreenIndex) {
        setGreatOpen(true);
        setTimeout(() => {
          setValue([]);
          setLetterScreenIndex(0);
          if (wordScreenIndex <= arrayWords.length - 1) {
            setWordScreenIndex((prev: number) => prev + 1);
          }
          setGreatOpen(false);
        }, 1000);
      }
    },
    []
  );

  return (
    <GlobalContext.Provider
      value={{
        word,
        letterScreenIndex,
        setLetterScreenIndex,
        value,
        setValue,
        wordScreenIndex,
        setWordScreenIndex,
        arrayWords,
        points,
        setPoints,
        // handleChangeColor,
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        greatOpen,
        setGreatOpen,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
