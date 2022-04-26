import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import HandymanTwoToneIcon from "@mui/icons-material/HandymanTwoTone";
import MarkEmailUnreadTwoToneIcon from "@mui/icons-material/MarkEmailUnreadTwoTone";
import "./header.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useState } from "react";
const Header = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [scroll, setScroll] = useState(0);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      onUpdate: (self) =>
        self.direction === 1 ? setHide(true) : setHide(false),
    });
  }, []);
  return (
    <header className={hide ? "hide header" : "header"}>
      <nav className="container">
        <a href="#home">
          <HomeTwoToneIcon fontSize="large" /> <span>Home</span>
        </a>
        <a href="#projects">
          <WorkTwoToneIcon fontSize="large" /> <span>Projects</span>
        </a>
        <a href="#skills">
          <HandymanTwoToneIcon fontSize="large" /> <span>Skills</span>
        </a>
        <a href="#contact">
          <MarkEmailUnreadTwoToneIcon fontSize="large" /> <span>Contact</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
