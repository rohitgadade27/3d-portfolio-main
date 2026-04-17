import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>GTasteriX IT Services Pvt. Ltd.</h5>
              </div>
              <h3>Sep 2025 – Present</h3>
            </div>
            <p>
              Contribute to the development of scalable enterprise web applications using React.js, JavaScript, Node.js, and MongoDB.
              Build reusable UI components, implement business logic for end-to-end workflows, and participate in code reviews
              and performance optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>IT ASAP</h5>
              </div>
              <h3>Sep 2024 – Aug 2025</h3>
            </div>
            <p>
              Planned and delivered responsive websites and web applications with optimized performance and accessibility.
              Built and enhanced features for school platforms, order management systems, and admin dashboards,
              integrating REST APIs, authentication, and payment gateways.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Project-based work</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Delivered full-stack and frontend solutions focused on usability, performance, and secure integrations.
              Worked on order management systems, payment-enabled applications, and school management platforms.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
