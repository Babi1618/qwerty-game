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
  // const arrayWords = ["QWE", "W", "E", "R"];
  const [arrayWords, setArrayWords] = useState([""]);
  const [letterScreenIndex, setLetterScreenIndex] = useState<number>(0);
  const [value, setValue] = useState<string[]>([]);
  const [wordScreenIndex, setWordScreenIndex] = useState<number>(0);
  const [word, setWord] = useState(arrayWords[0].split(""));
  const [points, setPoints] = useState(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [greatOpen, setGreatOpen] = useState<boolean>(false);

  useEffect(() => {
    if (wordScreenIndex < arrayWords.length) {
      setWord(arrayWords[wordScreenIndex].split(""));
    }
  }, [wordScreenIndex, arrayWords]);

  useEffect(() => {
    changeLetter(word, letterScreenIndex);
  }, [letterScreenIndex]);

  const changeLetter = useCallback(
    (arr: string[], letterScreenIndex: number) => {
      if (arr.length === letterScreenIndex && arr.length !== 0) {
        setGreatOpen(true);
        setLetterScreenIndex(0);
        setValue([]);
        setTimeout(() => {
          if (wordScreenIndex <= arrayWords.length - 1) {
            setWordScreenIndex((prev: number) => prev + 1);
          }
          setGreatOpen(false);
        }, 1000);
      }
    },
    []
  );
  const fetchWord = async () => {
    const w = await fetch("https://random-word-api.herokuapp.com/word").then(
      (res) => res.json()
    );
    return w;
  };
  const getWords = async () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      const res = await fetchWord();
      // console.log(res)
      result.push(res[0].toUpperCase().split("")[0]);
      // result.push(res[0].toUpperCase())
    }
    setArrayWords(result);
  };

  useEffect(() => {
    if (wordScreenIndex === 0) {
      getWords();
    }
  }, [wordScreenIndex]);

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
        setArrayWords
        // word, setWord
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
