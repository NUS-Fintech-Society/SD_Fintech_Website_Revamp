import { EventsData } from '@data/interface/eventsData';

const eventsData: EventsData = {
    events: [
        {
            name: 'Event 1',
            coverImage: {
                src: '/images/events/event1.jpg',
                alt: 'random image 1',
            },
            cardDescription:
                'This is a description that is test to appear on the cards',
            popupDescription:
                'This is a lengthier description that appears in the popup',
            location: 'Kent Ridge MRT',
            date: new Date("2022-07-18").toString(),

        },

        {
            name: 'Event 2',
            coverImage: {
                src: '/images/events/event2.jpg',
                alt: 'random image 1',
            },
            cardDescription:
                'This is a description that is supposed to appear on the cards',
            popupDescription:
                'This is a lengthier description that appears in the popup',
            location: 'Kent Ridge MRT',
            date: new Date("2022-09-25").toString(),
        },

        {
            name: 'Event 3',
            coverImage: {
                src: '/images/events/event3.jpeg',
                alt: 'random image 1',
            },
            cardDescription:
                'This is a description that is supposed to appear on the cards',
            popupDescription:
                'This is a lengthier description that appears in the popup',
            location: 'Kent Ridge MRT',
            date: new Date("2022-11-09").toString(),
        },

    ],
};

export default eventsData;
