import React from 'react'
import ReactDOM from "react-dom/client";

interface Experiance {
  year: number;
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experiance[];
  education: string[];
}

const cvData: CVData = {
  photo:
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",
  name: "Jarek",
  lastName: "Leszko",
  position: "Developer",
  experience: [
    { year: 2023, description: "Loremi ipsum" },
    { year: 2021, description: "Dolor sit amet" },
  ],
  education: ["Academy", "University"],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main>
      <header>
        <h1>
          CV {cvData.name} {cvData.lastName}
        </h1>
      </header>
      <aside>
        <h2>Personal data</h2>
        <img
          src={cvData.photo}
          alt={`${cvData.name} ${cvData.lastName} profile photo`}
          width="400px"
          height="400px"
        />
        <p>
          {cvData.name} {cvData.lastName}
        </p>
        <small>{cvData.position}</small>
      </aside>
      <section>
        <h2>Experience</h2>
        <ul>
          {cvData.experience.map((exp) => (
            <li key={exp.year}>
              <strong>{exp.year}</strong> - {exp.description}
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {cvData.education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </section>
    </main>
  </React.StrictMode>
);
 