import { CVDetails } from "../Types/types";
import "./Details.scss";

type Props = {
  data: CVDetails;
};

export const Details = ({ data: { education, experience } }: Props) => {
  return (
    <>
      <section className="cv-details">
        <h2>Experience</h2>
        <ul>
          {experience.map((exp) => (
            <li key={exp.year}>
              <strong>{exp.year}</strong> - {exp.description}
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </section>
    </>
  );
};
