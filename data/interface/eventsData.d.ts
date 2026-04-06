export interface Event {
  coverImage: string;
  coverImageAlt?: string;

  images?: {
    src: string;
    alt?: string;
  }[];

  name: string;
  cardDescription: string;
  location: string;
  date: string;
  type: string; // Internal or External

  description?: string;
  learningObjectives?: string[];
  expectedOutcomes?: string[];
}

export default interface EventsData {
  events: Event[];
}
