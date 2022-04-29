import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import HandymanTwoToneIcon from "@mui/icons-material/HandymanTwoTone";
import MarkEmailUnreadTwoToneIcon from "@mui/icons-material/MarkEmailUnreadTwoTone";
import "./header.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const header = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const [scroll, setScroll] = useState(0);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    // ScrollTrigger.create({
    //   trigger: document.body,
    //   start: "top top",
    //   onUpdate: (self) =>
    //     self.direction === 1 ? setHide(true) : setHide(false),
    // });

    gsap.fromTo(header.current, { height: "0%" }, { height: "3.2rem" });
  }, []);
  return (
    <header className={hide ? "hide header" : "header"} ref={header}>
      <nav className="container">
        <Link to="/">
          <HomeTwoToneIcon fontSize="large" /> <span>Home</span>
        </Link>
        <Link to="/projects">
          <WorkTwoToneIcon fontSize="large" /> <span>Projects</span>
        </Link>
        <Link to="/skills">
          <HandymanTwoToneIcon fontSize="large" /> <span>Skills</span>
        </Link>
        <Link to="/contact">
          <MarkEmailUnreadTwoToneIcon fontSize="large" /> <span>Contact</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
