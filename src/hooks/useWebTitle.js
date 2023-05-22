import { useEffect } from "react";

export const useWebTitle = (title) => {
  useEffect(() => {
    document.title = `ActionZone- ${title}`;
  }, [title]);
};
