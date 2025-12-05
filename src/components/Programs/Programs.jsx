import React from "react";
import "./Programs.css";
import program_1 from "../../assets/database_admin.jpg";
import program_2 from "../../assets/Cloud_Engineer.webp";
import program_3 from "../../assets/server_admin.webp";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <h4>Database Admin</h4>
        <figcaption className="caption">
          Prepare to design, implement, and maintain relational and NoSQL
          databases. Graduates are prepared for roles such as Database
          Administrator, Database Developer, or Data Analyst.
        </figcaption>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <h4>Cloud Engineer</h4>
        <figcaption className="caption">
          ain skills to architect, deploy, and manage cloud-native
          infrastructure and applications. Covers major cloud platforms ,
          containers, IaC, CI/CD pipelines, and cloud security best practices.
        </figcaption>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <h4>Database Admin</h4>

        <figcaption className="caption">
          Learn to deploy, configure, and maintain server systems and network
          services across Linux and Windows. Topics include virtualization,
          system monitoring, automation scripting, and security hardening.
        </figcaption>
      </div>
    </div>
  );
};

export default Programs;
