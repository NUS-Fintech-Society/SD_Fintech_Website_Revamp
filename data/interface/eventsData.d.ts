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
}

export default interface EventsData {
  events: Event[];
}
