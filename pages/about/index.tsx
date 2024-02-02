// library
import Image from 'next/image';
import Head from 'next/head';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

// code
import MaxWidth from '@components/layout/MaxWidth';
import SectionHeader from '@components/layout/SectionHeader';
import Title from '@components/aboutus/Title';
import ExcoCard from '@components/aboutus/ExcoCard';
import { fetchExcoData } from '@data/mockFetch';
import { useEffect, useState } from 'react';
import { EXCO_ENUM } from '@data/excoEnum';
import SmallerTitle from '@components/aboutus/SmallerTitle';
import AdvisorCard from '@components/aboutus/AdvisorCard';
import Lightbulb from '@components/aboutus/Lightbulb';
import Mountain from '@components/aboutus/Mountain';
import Feather from '@components/aboutus/Feather';

const AboutPage = () => {
  const [excoData, setExcoData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { categories } = await fetchExcoData();
        setExcoData(categories);
      } catch (error) {
        // Handle error if needed
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>About • NUS Fintech Society</title>
        <link rel="icon" href="../images/FintechSocietyLogo.png" />
      </Head>

      <MaxWidth>
        <div className="mb-8 mt-3 flex flex-wrap text-[24.48px] font-bold leading-8 text-[#002750] sm:ml-4">
          <div className="relative h-[52px] w-[68.88px] sm:h-[139px] sm:w-[184px]">
            <Image src="/images/about/main_icon.jpg" alt="Logo" layout="fill" />
          </div>
          <h1 className="ml-4 mt-3 border-b-2 border-[#002750] sm:ml-6 sm:mt-10 sm:border-b-4 sm:text-6xl sm:leading-[4.538rem]">
            About Us
          </h1>
        </div>
        <div className="grid gap-x-8 rounded-b-[143px] lg:grid-cols-2">
          <div className="flex justify-center pb-4">
            {/* landing bg */}
            <div className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
              <Image
                src="/images/soc-bg.jpg"
                alt="Insert Photo Here"
                height={500}
                width={500}
                className="crop-photo rounded-3xl"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center lg:mt-28">
            <Box
              boxShadow="lg"
              p="6"
              rounded="xl"
              bg="white"
              width={{ base: '100%', md: '75vw', xl: '100%' }}
              height={{ base: '100%', md: '90%', lg: '80%' }}
            >
              <Tabs size="xs">
                <TabList>
                  <Tab>
                    <h2 className="whitespace-nowrap text-xs font-bold sm:text-lg">
                      <div className="mr-2 flex items-center sm:mr-4">
                        <div className="mx-2">
                          {/* Feather Icon */}
                          <Feather />
                        </div>
                        Our History
                      </div>
                    </h2>
                  </Tab>
                  <Tab>
                    <h2 className="text-xs font-bold sm:text-lg">
                      <div className="mr-2 flex items-center sm:mr-4">
                        <div className="mx-2">
                          <Mountain />
                        </div>
                        Mission
                      </div>
                    </h2>
                  </Tab>
                  <Tab>
                    <h2 className="text-xs font-bold sm:text-lg">
                      <div className="mr-2 flex items-center sm:mr-4">
                        <div className="mx-2">
                          <Lightbulb />
                        </div>
                        Vision
                      </div>
                    </h2>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p>
                      NUS Fintech Society was founded in 2018 in collaboration
                      with NUS Fintech Lab under the NUS School of Computing. We
                      identify ourselves as Fintech enthusiasts looking for
                      opportunities to learn and grow our knowledge, skills and
                      network in the Fintech space.
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                      To educate students with Fintech knowledge through events
                      and industry projects, and connect and establish
                      relationships with industry partners.
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                      To be the leading student-led Fintech Club known for
                      incubating industry-ready Fintech talents and
                      industry-grade financial digital transformation projects.
                    </p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </div>
        </div>

        <div className="pt-12">
          <SectionHeader
            color="blue"
            title="Meet the EXCO"
            subtitle="Dedicated and Committed"
          />
        </div>

        <Title title="ADVISORS" />

        {excoData && <AdvisorCard data={excoData[EXCO_ENUM.ADVISOR].people} />}

        <Title title="PRESIDENT" />

        {excoData && <ExcoCard data={excoData[EXCO_ENUM.PRESIDENT].people} />}

        <Title title="TECHNOLOGY WING" />

        {excoData && <ExcoCard data={excoData[EXCO_ENUM.TECHWING].people} />}

        <SmallerTitle title="MACHINE LEARNING" />

        {excoData && <ExcoCard data={excoData[EXCO_ENUM.ML].people} />}

        <SmallerTitle title="BLOCKCHAIN" />

        {excoData && <ExcoCard data={excoData[EXCO_ENUM.BLOCKCHAIN].people} />}

        <SmallerTitle title="QUANT" />

        {excoData && <ExcoCard data={excoData[EXCO_ENUM.QUANT].people} />}

        <SmallerTitle title="SOFTWARE DEVELOPMENT" />

        {excoData && <ExcoCard data={excoData[EXCO_ENUM.SD].people} />}

        <Title title="OPERATIONS WING" />

        {excoData && <ExcoCard data={excoData[EXCO_ENUM.OPSWING].people} />}

        <SmallerTitle title="EXTERNAL RELATIONS" />

        {excoData && <ExcoCard data={excoData[EXCO_ENUM.ER].people} />}

        <SmallerTitle title="INTERNAL AFFAIRS" />

        {excoData && <ExcoCard data={excoData[EXCO_ENUM.IA].people} />}
      </MaxWidth>
    </>
  );
};

export default AboutPage;
