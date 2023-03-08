export const countTime = (
  seconds: number,
  setSeconds: any,
  setMinutes: any
) => {
  setTimeout(() => {
    if (seconds < 59) {
      setSeconds((prev: number) => prev + 1);
    } else {
      setMinutes((prev: number) => prev + 1);
      setSeconds(0);
    }
  }, 1000);
};
