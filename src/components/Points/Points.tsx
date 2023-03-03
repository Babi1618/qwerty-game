import { useGlobalContext } from "../../context/GlobalContext";

export const Points = () => {
  const { points } = useGlobalContext() as any;
  return <div>Points: {points}</div>;
};
