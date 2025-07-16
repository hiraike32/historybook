import React, { useEffect, useState } from "react";
import PCAbout from "../src/app/PC/About/About";
import SPAbout from "../src/app/SP/About/About";

const About = () => {
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

  return <React.Fragment>{isWide ? <PCAbout /> : <SPAbout />}</React.Fragment>;
};

export default About;
