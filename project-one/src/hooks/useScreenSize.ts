import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    console.log("cehcking screensize", window.screen.width);
    if (window.screen.width <= 520) {
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

  console.log("checking is mobile", isMobile);

  return { isMobile };
};

export default useScreenSize;
