import "./about.css";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import resume from "../assets/resume.pdf";
import line from "../assets/headerLine.svg";
import photo from "../assets/my-photo.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function About() {
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  useEffect(() => {
    const element = el.current;
    tl.current = gsap
      .timeline()
      .fromTo(q("h1"), { y: 20, opacity: 0 }, { opacity: 1, y: 0 })
      .fromTo(q("h2"), { y: 20, opacity: 0 }, { opacity: 1, y: 0 })
      .fromTo(q("p"), { y: 20, opacity: 0 }, { opacity: 1, y: 0 })
      .fromTo(q("img"), { y: 20, opacity: 0 }, { opacity: 1, y: 0 }, "-=100%");

    gsap.fromTo(
      element.querySelector("img"),
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: element.querySelector("img"),
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);
  // const handleLoad = () => tl.current.play();
  return (
    <div className="section">
      <section className="container about" ref={el}>
        <div className="my-photo">
          <img src={photo} />
        </div>
        <div className="content">
          <h1>MUHAMMAD SAJID</h1>
          <h2>
            Frontend Developer <img className="line" src={line} />
          </h2>
          <p>
            As a Front-end web developer, I love to find quality solutions for
            the web using best practices and like to to create websites that are
            easy to use and performant{" "}
          </p>
          <p>
            I have huge passion for learning new technologies, experimenting,
            and enjoying working on real world projects. Let’s connect and make
            your idea a reality.
          </p>

          <a href={resume} className="btn-resume" download>
            <CloudDownloadOutlinedIcon /> Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
