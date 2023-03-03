import { useGlobalContext } from "../../context/GlobalContext";

export const Retry = () => {
  const { setWordScreenIndex, setPoints } = useGlobalContext() as any;

  const handleRetry = () => {
    setWordScreenIndex(0);
    setPoints(0);
  };
  return (
    <div>
      YOU WIN! <button onClick={handleRetry}>RETRY</button>
    </div>
  );
};
