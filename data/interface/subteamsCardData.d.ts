export interface SubteamsCardInterface {
    name: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
}

export default interface SubteamsCardData {
    cardData: SubteamsCardInterface[];
}
