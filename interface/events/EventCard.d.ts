import { Event } from '@data/interface/eventsData';

export default interface EventCardProps extends Event {
  type?: string;
}

export interface PastEventCardProps extends Event {
  type?: string;
  onClick?: () => void;
}
