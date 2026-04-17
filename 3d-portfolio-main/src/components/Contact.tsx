import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/rohit-gadade-"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — rohit-gadade-
              </a>
            </p>
            <h4>Email</h4>
            <p>rgadade75@gmail.com</p>
            <h4>Phone</h4>
            <p>+91 7558397248</p>
            <h4>Location</h4>
            <p>Pune – 411058, India</p>
            <h4>Education</h4>
            <p>
              B.E. Engineering, Savitribai Phule Pune University — 2024
            </p>
            <p>
              Diploma in  Engineering, Maharashtra State Board of Technical Education — 2021
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/rohitgadade27"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-gadade-"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rohit Gadade</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
