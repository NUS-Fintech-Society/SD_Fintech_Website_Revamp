import type { StaticImageData } from 'next/image';
// Photos live in public/images/events/<event slug>/: photo-01, photo-02… in gallery order, and poster.<ext>.
import chainlinkPhoto01 from '@/public/images/events/chainlink-internet-of-blockchains/photo-01.jpg';
import chainlinkPhoto02 from '@/public/images/events/chainlink-internet-of-blockchains/photo-02.jpg';
import chainlinkPoster from '@/public/images/events/chainlink-internet-of-blockchains/poster.png';
import summitPhoto01 from '@/public/images/events/nus-fintech-summit-2026/photo-01.jpg';
import summitPhoto02 from '@/public/images/events/nus-fintech-summit-2026/photo-02.jpg';
import summitPhoto03 from '@/public/images/events/nus-fintech-summit-2026/photo-03.jpg';
import summitPhoto04 from '@/public/images/events/nus-fintech-summit-2026/photo-04.jpg';
import summitPhoto05 from '@/public/images/events/nus-fintech-summit-2026/photo-05.jpg';
import summitPhoto06 from '@/public/images/events/nus-fintech-summit-2026/photo-06.jpg';
import summitPhoto07 from '@/public/images/events/nus-fintech-summit-2026/photo-07.jpg';
import summitPhoto08 from '@/public/images/events/nus-fintech-summit-2026/photo-08.jpg';
import summitPhoto09 from '@/public/images/events/nus-fintech-summit-2026/photo-09.jpg';
import summitPhoto10 from '@/public/images/events/nus-fintech-summit-2026/photo-10.jpg';
import summitPhoto11 from '@/public/images/events/nus-fintech-summit-2026/photo-11.jpg';
import tensorplexPoster from '@/public/images/events/tensorplex-distributed-mind/poster.png';

export type EventFormat = 'Workshop' | 'Talk' | 'Summit' | 'Social';
/** `poster`: a text poster, shown whole on blue-tint instead of cropped to the frame. */
export type Photo = { src: StaticImageData; alt: string; poster?: boolean };

export type SocietyEvent = {
  slug: string;
  name: string;
  /** ISO with +08:00. Upcoming vs past uses `end`. */
  start: string;
  end: string;
  /** Times not known yet: show dates only. */
  datesOnly?: boolean;
  venue: { name: string; address: string };
  format: EventFormat;
  rsvp: { state: 'open' | 'closed' | 'none'; url?: string };
  /** Partner names, shown as text. Known limit: once a partners list exists (with the Partners page), show the partner's logo instead. */
  coHosts: string[];
  about: string[];
  learn?: string[];
  recap?: string[];
  cover?: Photo;
  gallery: Photo[];
};

const summitCover = { src: summitPhoto04, alt: 'Participants in the auditorium during a panel discussion' };
const tensorplexGroup = { src: tensorplexPoster, alt: 'Poster for Architects of a Distributed Mind, a workshop with Tensorplex Labs, Wed 8 Oct 2025, 6:30pm, SR2 COM1 02-04', poster: true };
const chainlinkGroup = { src: chainlinkPhoto01, alt: "Participants standing in front of the workshop's title slide" };

export const events: SocietyEvent[] = [
  {
    slug: 'nus-fintech-summit-2026',
    name: 'NUS Fintech Summit 2026',
    start: '2026-01-05T00:00:00+08:00',
    end: '2026-01-09T23:59:59+08:00',
    datesOnly: true,
    venue: { name: 'MPH, COM3', address: 'National University of Singapore' },
    format: 'Summit',
    rsvp: { state: 'none' },
    coHosts: [],
    about: [
      'A five-day hackathon with workshops, panel discussions and a demo day, where student teams build fintech solutions and present them to industry judges.',
    ],
    recap: [
      'NUS FinTech Society successfully concluded the 5th edition of its annual flagship event, and its most ambitious yet. What started as a student hackathon has grown into one of Southeast Asia\'s most internationally diverse student FinTech competitions.',
      'This year centred on the XRP Ledger (XRPL) by Ripple, challenging teams to build Minimum Viable Products that solve real financial problems, from payments and decentralised identity to Real-World Asset tokenisation and RLUSD integration.',
      'There were hiccups and plenty of room to improve, but the outcome was an event that felt closer to the real industry than any previous year. The organisers came away with a newfound respect for everyone working behind the scenes in this ecosystem.'
    ],
    cover: summitCover,
    gallery: [
      { src: summitPhoto01, alt: 'Teams talking over lunch at their laptops during the hackathon' },
      { src: summitPhoto02, alt: 'The panel discussion on stablecoins, with three panellists on stage under the speaker slide' },
      { src: summitPhoto03, alt: 'The panel discussion seen from the side, next to a Ripple banner' },
      summitCover,
      { src: summitPhoto05, alt: 'Participants at the lunch buffet' },
      { src: summitPhoto06, alt: 'Students talking with a partner at a booth' },
      { src: summitPhoto07, alt: 'Two students presenting their project to judges in a seminar room' },
      { src: summitPhoto08, alt: 'A team working through their project on laptops' },
      { src: summitPhoto09, alt: 'Judges at their table, one asking a team a question into a microphone' },
      { src: summitPhoto10, alt: 'A team presenting their project on stage to the judges' },
      { src: summitPhoto11, alt: 'Group photo of participants, judges and organisers' },
    ],
  },
  {
    slug: 'tensorplex-distributed-mind',
    name: 'Architects of a Distributed Mind: Incentivizing Collective Intelligence',
    start: '2025-10-08T18:30:00+08:00',
    end: '2025-10-08T19:30:00+08:00',
    venue: { name: 'SR2, COM1 02-04', address: 'National University of Singapore' },
    format: 'Workshop',
    rsvp: { state: 'none' },
    coHosts: ['Tensorplex Labs'],
    about: [
      'A workshop by Tensorplex Labs on the Bittensor ecosystem, featuring Bittensor co-founder Jake Steeves, introducing students to decentralized AI networks and how they can participate in and get paid to build open-source AI.',
      'Tensorplex Labs, a company building in the Bittensor ecosystem, organized this workshop on behalf of Bittensor. Bittensor\'s co-founder Jake Steeves participated to introduce Bittensor as a decentralized AI network framed as an open, incentivized competition where students can directly participate and get paid to build open-source AI.',
    ],
    learn: [
      'Understanding Decentralized Intelligence Markets: how Bittensor frames "intelligence" as a commodity, how models are evaluated peer-to-peer, and how the TAO token is used to reward contributions',
      'Hands-on with Subnet Design & Economics: how subnets are created, governed, and economically structured (incentive distribution, performance evaluation, validators vs miners).',
      'Model Fine-Tuning & State-of-the-Art Agent Repositories: exposure to submitting or adapting agent repos and fine-tuning models to compete meaningfully in a subnet.',
      'Integrating DeFi Tools for AI Ecosystems: understanding products like liquid staking, staking derivatives (stTAO), and DeFi/financial infrastructure built around AI contributions.',
    ],
    cover: tensorplexGroup,
    gallery: [
      tensorplexGroup
    ],
  },
  {
    slug: 'chainlink-internet-of-blockchains',
    name: 'Navigating the Future with the Internet of Blockchains',
    start: '2025-09-10T15:00:00+08:00',
    end: '2025-09-10T17:00:00+08:00',
    venue: { name: 'Seminar Room 12, COM3-01-21', address: 'National University of Singapore' },
    format: 'Workshop',
    rsvp: { state: 'none' },
    coHosts: ['Chainlink Labs'],
    about: [
      'An interactive workshop for students, run with Chainlink Labs. It covered the basics of blockchain, how it is used across industries, and the idea of an Internet of Blockchains: many blockchains that work together.',
      'Through technical walkthroughs, case studies and a Q&A with people working in the field, the session showed how Chainlink connects blockchains with each other and with real-world data.',
    ],
    learn: [
      'Blockchain fundamentals: consensus mechanisms, smart contracts and decentralisation.',
      'Real-world blockchain use cases in different sectors.',
      "Cross-chain interoperability, and the challenges it addresses in today's fragmented blockchain landscape.",
      "Chainlink's decentralised technologies, including oracles, data feeds and the Cross-Chain Interoperability Protocol (CCIP).",
      'Ways to get involved in Web3 through student research, projects and community-building.',
    ],
    cover: chainlinkGroup,
    gallery: [
      chainlinkGroup,
      { src: chainlinkPhoto02, alt: 'The speaker presenting a slide on smart contracts and token transfers' },
      {
        src: chainlinkPoster,
        alt: 'Workshop poster',
      },
    ],
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
