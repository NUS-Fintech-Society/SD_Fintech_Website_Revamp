export interface HomeData {
  partnersImages: PartnersImage[];
  journey: JourneyYear[];
}

interface JourneyYear {
  image: {
    src: string;
    alt: string;
  };
  academicYear: string;
  description: string;
}

interface PartnersImage {
  alt: string;
  src: string;
}
