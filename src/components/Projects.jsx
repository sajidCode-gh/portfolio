import "./projects.css";
import weather from "../assets/weather-app.png";
import mars from "../assets/gotomars.png";
import search from "../assets/pwi-search.png";
import recipe from "../assets/recipe-app.png";
import tailwind from "../assets/tailwindcss.png";
import dipsip from "../assets/dipsip.png";

function Projects() {
  return (
    <div className="section">
      <section className="container projects">
        <h1>Projects</h1>
        <p>
          These are some of my favorite cool looking and mobile responsive
          projects. For more projects please checkout my github.{" "}
        </p>
        <div className="projects-grid">
          <div className="project">
            <div className="project-img">
              <img src={weather} alt="img" />
            </div>
            <div className="project-content">
              <div className="head-flex">
                <h3>Weather App</h3>
                <div className="btns-flex">
                  <a
                    href="https://github.com/sajidCode-gh/SC-Apps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    href="https://sajidcode-gh.github.io/SC-Apps/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <p>
                This app is connected to weather API that lets users search the
                weather information by city name.
              </p>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={mars} alt="img" />
            </div>
            <div className="project-content">
              <div className="head-flex">
                <h3>GoToMars</h3>
                <div className="btns-flex">
                  <a
                    href="https://github.com/sajidCode-gh/GoToMars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    href="https://sajidcode-gh.github.io/GoToMars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <p>
                This is a sci-fi website where users can book flights to mars.
                It has amazing UI with cool hover animations.
              </p>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={search} alt="img" />
            </div>
            <div className="project-content">
              <div className="head-flex">
                <h3>PWI Search</h3>
                <div className="btns-flex">
                  <a
                    href="https://github.com/sajidCode-gh/PWI-search"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    href="https://sajidCode-gh.github.io/PWI-search/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <p>
                Its a landing page that I built for my upwork client from PWI.
                It is minimilistic design page.{" "}
              </p>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={recipe} alt="img" />
            </div>
            <div className="project-content">
              <div className="head-flex">
                <h3>Recipe App</h3>
                <div className="btns-flex">
                  <a
                    href="https://github.com/sajidCode-gh/Recipe-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    href="https://sajidCode-gh.github.io/Recipe-App/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <p>
                This app is connected to recipe API that lets users search their
                favorite recipes by name.{" "}
              </p>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={tailwind} alt="img" />
            </div>
            <div className="project-content">
              <div className="head-flex">
                <h3>Tailwindcss</h3>
                <div className="btns-flex">
                  <a
                    href="https://github.com/sajidCode-gh/App-Developer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    href="https://sajidcode-gh.github.io/App-Developer/src/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <p>
                iIts tailwindCSS project with nice animations and hover effects.
              </p>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={dipsip} alt="img" />
            </div>
            <div className="project-content">
              <div className="head-flex">
                <h3>DipSip</h3>
                <div className="btns-flex">
                  <a
                    href="https://github.com/sajidCode-gh/DipSip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    href="https://sajidCode-gh.github.io/DipSip/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <p>
                Showcasing coffe products. technologies:
                <br />
                HTML, SASS, JS, GSAP, Gulp{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
