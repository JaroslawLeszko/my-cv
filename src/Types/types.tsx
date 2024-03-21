export interface Experiance {
  year: number;
  description: string;
}

export interface CVPersonal {
  photo: string;
  name: string;
  lastName: string;
  position: string;
}

export interface CVDetails {
  experience: Experiance[];
  education: string[];
}

export interface CVData {
  personal: CVPersonal;
  details: CVDetails;
}
