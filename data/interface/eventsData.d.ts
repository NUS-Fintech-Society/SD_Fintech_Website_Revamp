export default interface EventsData {
  events: Event[];
}

interface Event {
  coverImage: {
    src: string;
    alt: string;
  };
  name: string;
  cardDescription: string;
  location: string;
  date: string;
  type: string; // Internal or External
}


