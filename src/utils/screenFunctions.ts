export const handleChangeColor = (
  i: number,
  value: string[],
  word: string[],
  greatOpen: boolean
) => {
  if (greatOpen) {
    return "ok";
  } else {
    if (i < value.length) {
      if (value[i] === word[i]) {
        return "ok";
      } else {
        return "error";
      }
    }
  }
  return "";
};
