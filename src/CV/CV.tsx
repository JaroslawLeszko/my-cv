import { Details } from "../Details/Details";
import { Header } from "../Header/Header";
import { Personal } from "../Personal/Personal";
import { CVData } from "../Types/types";
import "./CV.scss";

const cvData: CVData = {
  personal: {
    photo:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",
    name: "Jarek",
    lastName: "Leszko",
    position: "Developer",
  },
  details: {
    experience: [
      {
        year: 2023,
        description: "Loremi ipsum nnnnnnnnnn dd ddddddddd rrrrrrrrrrrrrrrd",
      },
      { year: 2021, description: "Dolor sit amet" },
    ],
    education: ["Academy", "University"],
  },
};

export const CV = () => {
  return (
    <>
      <main className="cv-main">
        <Header data={cvData.personal} />
        <Personal data={cvData.personal} />
        <Details data={cvData.details} />
      </main>
    </>
  );
};
