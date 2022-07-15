import { EventsData } from '@data/interface/eventsData';

const eventsData: EventsData = {
    events: [
        {
            name: 'Machine Learning',
            coverImage: {
                src: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
                alt: 'random image 1',
            },
            cardDescription:
                'This is a description that is test to appear on the cards',
            popupDescription:
                'This is a lengthier description that appears in the popup',
            location: 'Kent Ridge MRT',
            date: new Date("2019-09-16").toString(),

        },

        {
            name: 'Hello Learning',
            coverImage: {
                src: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
                alt: 'random image 1',
            },
            cardDescription:
                'This is a description that is supposed to appear on the cards',
            popupDescription:
                'This is a lengthier description that appears in the popup',
            location: 'Kent Ridge MRT',
            date: new Date("2019-05-16").toString(),
        },

        {
            name: 'Machine Learning',
            coverImage: {
                src: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
                alt: 'random image 1',
            },
            cardDescription:
                'This is a description that is supposed to appear on the cards',
            popupDescription:
                'This is a lengthier description that appears in the popup',
            location: 'Kent Ridge MRT',
            date: new Date("2019-05-16").toString(),
        },

    ],
};

export default eventsData;
