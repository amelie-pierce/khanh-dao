import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    console.log("on resizing");
    if (window.innerWidth <= 430) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
};

export default useScreenSize;
