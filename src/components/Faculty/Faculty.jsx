import React from "react";
import "./Faculty.css";
import img1 from "../../assets/staff1.jpeg";
import img2 from "../../assets/staff2.jpeg";
import img3 from "../../assets/staff3.jpeg";
import img4 from "../../assets/staff4.jpeg";
import img5 from "../../assets/staff5.jpg";
import img6 from "../../assets/staff6.webp";

const faculty = [
  {
    img: img1,
    name: "Dr. John Wicker",
    title: "Database Administrator Instructor",
  },
  { img: img2, name: "Charles Nguyen", title: "Cloud Engineering Lecturer" },
  { img: img3, name: "Paul Patel", title: "Systems & Server Administrator" },
  { img: img4, name: "Joshua Higgins", title: "Infrastructure & Networking" },
  { img: img5, name: "Tasha Williams", title: "Cybersecurity Specialist" },
  { img: img6, name: "Prof. Daniel Kim", title: "Program Coordinator" },
];

const Faculty = () => {
  return (
    <section className="faculty">
      <div className="faculty-grid">
        {faculty.map((f, i) => (
          <figure className="faculty-card" key={i}>
            <img src={f.img} alt={`${f.name} photo`} />
            <figcaption className="faculty-caption">
              <strong className="faculty-name">{f.name}</strong>
              <span className="faculty-title">{f.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Faculty;
