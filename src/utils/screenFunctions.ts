export   const handleChangeColor = (i: number, value:string[], word:string[]) => {
    if (i < value.length) {
      if (value[i] === word[i]) {
        return "ok";
      } else {
        return "error";
      }
    }
    return "";
  };