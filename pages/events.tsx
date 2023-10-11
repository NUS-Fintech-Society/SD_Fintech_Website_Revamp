// type
import type { NextPage } from 'next';
import { EventsData } from '@data/interface/eventsData';

// library
import Head from 'next/head';

// code
import Events from '@components/events';
import { fetchEventsData } from '@data/mockFetch';

const EventsPage: NextPage<EventsData> = () => {
  return (
    <>
      <Head>
        <title>NUS Fintech Society</title>
        <link rel="icon" href="/images/FintechSocietyLogo.png" />
      </Head>
      <Events />
    </>
  );
};

export async function getStaticProps() {
  const { events } = await fetchEventsData();

  return {
    props: {
      events,
    },
  };
}

export default EventsPage;
