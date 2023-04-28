import { useEffect, useState } from "react";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    setIsMobile(query.matches);

    const listener = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    query.addEventListener("change", listener);

    return () => {
      query.removeEventListener("change", listener);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
