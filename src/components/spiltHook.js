import { useMemo } from "react";

const useSplitWords = (text) => {
  const words = useMemo(() => {
    return text.split(" ").map((word, index) => ({
      word,
      id: index,
    }));
  }, [text]);

  return words;
};

export default useSplitWords;
