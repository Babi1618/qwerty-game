import { useGlobalContext } from "../../context/GlobalContext";

export const Points = () => {
  const { points } = useGlobalContext() as any;
  return (
    <div>
      <div className="title">Points</div>
      <div>{points}</div>
    </div>
  );
};
