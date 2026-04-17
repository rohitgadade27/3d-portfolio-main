import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ROHIT
              <br />
              <span>GADADE</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Frontend Developer</h3>
            <br />
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">React</div>
              <div className="landing-h2-2">JavaScript</div>
            </h2>
            <br />
            <br />
            <h2>
              <div className="landing-h2-info">UI</div>
              <div className="landing-h2-info-1">Web</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
