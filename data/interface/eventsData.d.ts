export interface EventsData {
    events: Event[]
}


interface Event {
    coverImage: {
        src: string;
        alt: string;
    };
    name: string;
    cardDescription: string;
    popupDescription: string;
    location: string;
    date: string;
}
