import React, { useEffect, useState } from "react";
import PCWorks from "../src/app/PC/Works/Works";
import SPWorks from "../src/app/SP/Works/Works";

const Works = () => {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 960);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <React.Fragment>{isWide ? <PCWorks /> : <SPWorks />}</React.Fragment>;
};

export default Works;
