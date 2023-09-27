interface Event {
  coverImage: {
    src: string;
    alt: string;
  };
  name: string;
  cardDescription: string;
  location: string;
  date: string;
}

export interface EventsData {
  events: Event[];
}

