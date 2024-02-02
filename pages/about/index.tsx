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
        <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[20px] font-semibold leading-6 text-black sm:text-[32px] sm:leading-[3rem]">
            QUANT
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-x-5 sm:gap-x-16">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] leading-tight shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/about/quant1.jpg"
                  alt="Insert Photo Here"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="mt-2 flex justify-center text-[5.48px] font-normal text-black sm:mt-6 sm:text-xl">
              Co-Director
            </h3>
            <h3 className="flex justify-center pb-4 text-[6.67px] font-bold text-black sm:text-xl">
              Justin Leng
            </h3>
          </div>

          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] leading-tight shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/about/quant2.jpg"
                  alt="Insert Photo Here"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="mt-2 flex justify-center text-[5.48px] font-normal text-black sm:mt-6 sm:text-xl">
              Co-Director
            </h3>
            <h3 className="flex justify-center text-[6.67px] font-bold text-black sm:text-xl">
              Hur Sinhaeng (Claire)
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[26.68px] font-bold leading-8 text-black sm:text-[40px] sm:leading-[3rem]">
            OPERATIONS WING
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] leading-tight shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/about/op-wing.jpg"
                  alt="Insert Photo Here"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="mt-2 flex justify-center text-[5.48px] font-normal text-black sm:mt-6 sm:text-xl">
              Vice President (OPS)
            </h3>
            <h3 className="flex justify-center pb-4 text-[6.67px] font-bold text-black sm:text-xl">
              Darren
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[20px] font-semibold leading-6 text-black sm:text-[32px] sm:leading-[3rem]">
            EXTERNAL RELATIONS
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-x-5 sm:gap-x-16">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] leading-tight shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/about/er1.jpg"
                  alt="Insert Photo Here"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="mt-2 flex justify-center text-[5.48px] font-normal text-black sm:mt-6 sm:text-xl">
              Co-Director
            </h3>
            <h3 className="flex justify-center pb-4 text-[6.67px] font-bold text-black sm:text-xl">
              Elicia
            </h3>
          </div>

          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] leading-tight shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/about/er2.jpg"
                  alt="Insert Photo Here"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="mt-2 flex justify-center text-[5.48px] font-normal text-black sm:mt-6 sm:text-xl">
              Co-Director
            </h3>
            <h3 className="flex justify-center text-[6.67px] font-bold text-black sm:text-xl">
              Jasper
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[20px] font-semibold leading-6 text-black sm:text-[32px] sm:leading-[3rem]">
            INTERNAL AFFAIRS
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-x-5 sm:gap-x-16">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] leading-tight shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/about/ia1.jpg"
                  alt="Insert Photo Here"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="mt-2 flex justify-center text-[5.48px] font-normal text-black sm:mt-6 sm:text-xl">
              Co-Director
            </h3>
            <h3 className="flex justify-center pb-4 text-[6.67px] font-bold text-black sm:text-xl">
              James
            </h3>
          </div>

          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] leading-tight shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/about/ia2.jpg"
                  alt="Insert Photo Here"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="mt-2 flex justify-center text-[5.48px] font-normal text-black sm:mt-6 sm:text-xl">
              Co-Director
            </h3>
            <h3 className="flex justify-center text-[6.67px] font-bold text-black sm:text-xl">
              Jin
            </h3>
          </div>
        </div>
      </MaxWidth>
    </>
  );
};

export default AboutPage;
