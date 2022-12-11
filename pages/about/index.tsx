// library
import Image from 'next/image';
import Head from 'next/head';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

// code
import MaxWidth from '@components/layout/MaxWidth';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About • NUS Fintech Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MaxWidth>
        <div className="mt-3 mb-8 flex flex-wrap text-[24.48px] font-bold leading-8 text-[#002750] sm:ml-4">
          <div className="relative h-[52px] w-[68.88px] sm:h-[139px] sm:w-[184px]">
            <Image src='/images/main_icon.jpg' alt='Logo' layout="fill" />
          </div>
          <h1 className="ml-4 mt-3 border-b-2 border-[#002750] sm:mt-10 sm:ml-6 sm:border-b-4 sm:text-6xl sm:leading-[4.538rem]">
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
              boxShadow="2xl"
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
                          <svg
                            width="24"
                            height="26"
                            viewBox="0 0 24 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.298 7.18749C10.3752 10.6436 6.93108 14.8107 3.6037 19.279C3.26123 17.7978 3.07832 16.3857
                            3.4169 14.8699L4.05902 15.4476C4.09794 15.3834 4.13686 15.3489 4.13297 15.3192C3.90725 13.7146 4.32366
                            12.3865 5.11756 11.1423C6.14599 9.52724 7.29266 8.0394 8.54224 6.6987L8.34377 8.60944C9.20772 5.46931
                            11.3481 4.23498 13.4263 2.88709L13.3446 4.86202L13.5041 4.97558C13.7804 2.50692 15.1931 1.71202 16.7926
                            1.12448C19.0148 0.29007 21.2486 -0.238223 23.5719 0.107389C23.6926 0.107389 23.8132 0.166637 24
                            0.21601C23.5291 0.788738 23.1049 1.31209 22.6729 1.82064C21.1359 3.72262 19.8414 5.91632 18.8357
                            8.32307C18.3433 9.35542 17.7972 10.3451 17.2012 11.2855C17.0236 11.5644 16.779 11.7621 16.5046
                            11.8483C15.3371 12.1989 14.1696 12.4951 13.0021 12.8901L15.8781 13.4776C15.8198 13.6038 15.7506
                            13.7214 15.6718 13.8282C14.5043 15.2699 13.3018 16.7017 12.1226 18.1483C11.9561 18.3592 11.7562
                            18.5228 11.5362 18.6283C11.3161 18.7339 11.0809 18.7789 10.8461 18.7605C10.1979 18.7188 9.54847
                            18.7188 8.90028 18.7605L10.7527 19.5505C10.6383 19.6511 10.5187 19.7418 10.3947 19.8221C8.66364
                            20.6027 6.78623 20.6957 5.01249 20.0887C4.89913 20.0611 4.78236 20.0658 4.67063 20.1025C4.5589
                            20.1393 4.455 20.207 4.36647 20.301C3.413 21.6439 2.479 23.0066 1.57613 24.399C1.29593 24.8285
                            1.08578 25.263 0.579861 25.2729C0.396951 25.2729 0.217934 25.4605 0 25.5148C4.3037 18.8518 9.09069 12.7158 14.298 7.18749Z"
                              fill="#002750"
                            />
                          </svg>
                        </div>
                        Our History
                      </div>
                    </h2>
                  </Tab>
                  <Tab>
                    <h2 className="text-xs font-bold sm:text-lg">
                      <div className="mr-2 flex items-center sm:mr-4">
                        <div className="mx-2">
                          <svg
                            width="28"
                            height="22"
                            viewBox="0 0 28 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.2602 10.9791L15.2355 14.8547L9.50019 6.83191V3.69801L16.0129 3.59354L14.4154 1.79677L16.0129
                          0H8.66413V6.83191L0 22H28L18.2602 10.9791ZM9.50019 0.799145H14.197L13.313 1.77588L14.2024 2.78917L9.47889
                          2.86752L9.50019 0.799145ZM9.12742 7.93922L12.9935 19.2631L15.1982 16.4321L18.3081 12.4573L25.9125 21.0651H1.62419L9.12742 7.93922Z"
                              fill="#002750"
                            />
                          </svg>
                        </div>
                        Mission
                      </div>
                    </h2>
                  </Tab>
                  <Tab>
                    <h2 className="text-xs font-bold sm:text-lg">
                      <div className="mr-2 flex items-center sm:mr-4">
                        <div className="mx-2">
                          <svg
                            width="19"
                            height="22"
                            viewBox="0 0 19 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.73924 17.9029C6.73081 17.7879 6.73081 17.6725 6.73924 17.5575C6.9962 15.8262 6.22532 14.4445 5.23118
                            13.1429C5.00792 12.8564 4.80994 12.5657 4.56983 12.3004C1.9539 8.95147 3.90005 3.36998 8.69803 2.75496C9.69811
                            2.61926 10.7163 2.73559 11.66 3.09338C12.6037 3.45117 13.443 4.03909 14.1018 4.80371C14.7605 5.56834 15.2177
                            6.48544 15.432 7.47169C15.6462 8.45795 15.6106 9.4821 15.3284 10.4511C15.0698 11.1861 14.6942 11.8745 14.2163
                            12.4899C13.5634 13.4251 12.8262 14.3055 12.4218 15.3923C12.2991 15.6984 12.2293 16.0232 12.2154 16.3527C12.1944
                            17.4648 12.2154 18.5811 12.2154 19.6932C12.1911 19.942 12.0993 20.1794 11.95 20.3798C11.3097 21.3361 10.4083 21.5972
                            9.27092 21.5383C8.91109 21.552 8.55263 21.4867 8.22077 21.3469C7.8889 21.2072 7.59169 20.9964 7.35004 20.7295C7.14022
                            20.5466 6.9758 20.3174 6.86979 20.0601C6.76378 19.8028 6.71909 19.5243 6.73924 19.2467C6.78979 18.8044 6.73924 18.3536
                            6.73924 17.9029ZM9.89436 11.757C9.89436 11.5295 9.89436 11.3694 9.92385 11.2136C9.94507 10.9097 10.0861 10.6267 10.316
                            10.4268C10.5459 10.2269 10.8458 10.1266 11.1497 10.1478C11.4536 10.169 11.7366 10.3101 11.9364 10.54C12.1363 10.7699
                            12.2366 11.0697 12.2154 11.3736C12.1991 11.6668 12.0688 11.9419 11.8523 12.1402C11.6359 12.3386 11.3504 12.4444 11.057
                            12.4352C10.6989 12.4352 10.6358 12.5573 10.6358 12.8859C10.6568 13.6231 10.6358 14.3602 10.6358 15.0974C10.6358 15.2322
                            10.7748 15.4808 10.8337 15.4765C11.1202 15.4513 11.5204 15.7082 11.6762 15.2996C12.1906 14.119 12.8715 13.0182 13.6982
                            12.0308C14.3142 11.2786 14.7042 10.3671 14.8229 9.4022C14.9485 8.34847 14.7594 7.28114 14.2794 6.33472C13.7994 5.3883
                            13.05 4.60514 12.1256 4.08394C11.2012 3.56274 10.1432 3.32682 9.08499 3.40592C8.02676 3.48501 7.01561 3.87558 6.17898
                            4.5284C3.9843 6.24286 3.35664 9.58333 5.18906 11.9255C6.0582 12.9353 6.76842 14.0716 7.29528 15.2954C7.32435 15.3476
                            7.36417 15.3929 7.4121 15.4285C7.46003 15.4641 7.51498 15.4891 7.5733 15.5018C8.29784 15.6156 8.36103 15.5524 8.36103
                            14.8194V12.5068C7.18997 12.3256 6.73924 11.9676 6.76451 11.2767C6.78162 10.9924 6.90036 10.7236 7.09909 10.5195C7.29782
                            10.3153 7.56329 10.1894 7.84711 10.1647C8.52953 10.1141 8.87495 10.5353 9.11085 11.719C9.20352 11.719 9.30041 11.7527
                            9.39729 11.757C9.49418 11.7612 9.68795 11.757 9.91121 11.757H9.89436ZM11.4488 16.9256C11.5456 16.2011 11.5456 16.2011
                            10.8843 16.2011H7.93557C7.78392 16.2011 7.63228 16.2011 7.47642 16.2264V16.9256H11.4488ZM9.04766 12.4815C9.04766 13.4377
                            9.04766 14.3518 9.04766 15.2701C9.04766 15.3544 9.27092 15.4934 9.39729 15.4976C9.52366 15.5018 9.89857 15.6535 9.907
                            15.2996C9.92806 14.3687 9.907 13.4377 9.907 12.4815H9.04766ZM7.46799 17.6923L7.49748 18.2778H11.474V17.6923H7.46799ZM7.49327
                            19.6005H11.4698V19.015H7.49327V19.6005ZM8.10828 20.384L8.05773 20.5357C8.28563 20.6606 8.52934 20.7541 8.78227 20.8137C9.23722
                            20.8601 9.7048 20.8137 10.164 20.8348C10.3198 20.8511 10.4768 20.8159 10.6107 20.7345C10.7446 20.6531 10.8481 20.53 10.9053
                            20.384H8.10828ZM8.37788 11.5379C8.33575 11.1167 8.24729 10.8934 7.91451 10.885C7.8579 10.8798 7.80084 10.8871 7.74738 10.9065C7.69391
                            10.9258 7.64536 10.9567 7.60516 10.9969C7.56496 11.0371 7.5341 11.0856 7.51476 11.1391C7.49542 11.1925 7.48809 11.2496 7.49327 11.3062C7.49327
                            11.6685 7.75865 11.778 8.05773 11.7275C8.17568 11.7317 8.29363 11.5927 8.37788 11.5379ZM10.8337 11.7612C11.255 11.7612 11.5414 11.6306 11.4867
                            11.2852C11.4526 11.1925 11.3965 11.1095 11.323 11.0434C11.2496 10.9773 11.1612 10.9302 11.0654 10.906C10.7074 10.8555 10.5978 11.1462 10.6231
                            11.441C10.6484 11.5716 10.7874 11.6896 10.8337 11.7612Z"
                              fill="#002750"
                            />
                            <path
                              d="M5.43762 3.11298L4.4519 1.42801L5.05428 1.06152L6.04421 2.7465L5.43762 3.11298Z"
                              fill="#002750"
                            />
                            <path
                              d="M1.45266 14.4909L1.10303 13.9011L2.78801 12.9238L3.14606 13.5178L1.45266 14.4909Z"
                              fill="#002750"
                            />
                            <path
                              d="M17.877 13.9012L17.54 14.5078L15.855 13.5221L16.192 12.9197L17.877 13.9012Z"
                              fill="#002750"
                            />
                            <path
                              d="M13.551 3.10456L12.957 2.76335L13.9301 1.07837L14.5367 1.41115L13.551 3.10456Z"
                              fill="#002750"
                            />
                            <path
                              d="M1.09888 5.0002L1.45272 4.40625L3.1377 5.38354L2.80913 5.98592L1.09888 5.0002Z"
                              fill="#002750"
                            />
                            <path
                              d="M16.1836 5.99013L15.8381 5.38775L17.5231 4.40625L17.877 4.99599L16.1836 5.99013Z"
                              fill="#002750"
                            />
                            <path
                              d="M18.9553 9.76866H17.0682C16.946 9.11994 16.9629 9.09888 17.5652 9.09888H18.433C19.048 9.09888 19.048 9.09888 18.9553 9.76866Z"
                              fill="#002750"
                            />
                            <path
                              d="M9.80179 1.91666H9.18677V0H9.80179V1.91666Z"
                              fill="#002750"
                            />
                            <path
                              d="M0.0583866 9.75602C-0.059562 9.12415 -0.0427122 9.09888 0.530181 9.09888H1.44007C2.01717 9.09888 2.02981 9.09888 1.91608 9.75602H0.0583866Z"
                              fill="#002750"
                            />
                          </svg>
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
          <div className="flex w-full flex-wrap rounded-[10px] bg-black p-3 sm:rounded-[20px] sm:p-6">
            <h2 className="text-center font-bold text-white sm:text-3xl">
              Meet The EXCO
            </h2>
            <h3 className="mt-1 ml-auto max-w-lg text-right text-xs text-white sm:text-lg">
              Dedicated and Committed
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center p-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[26.68px] font-bold leading-8 text-black sm:text-[40px] sm:leading-[3rem]">
            ADVISOR
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="relative h-[119px] w-[119px] rounded-[7.58px] sm:h-[337px] sm:w-[337px] sm:rounded-[21px]">
            <Image
              src="/images/exco/advisor.jpg"
              alt="Insert Photo Here"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex justify-center p-[6.7px] sm:p-[19px]">
          <div className="h-[51.52px] w-[118.92px] items-center justify-center rounded-[6.5px] bg-[#161B50] sm:h-[146px] sm:w-[337px] sm:rounded-[18px]">
            <h3 className="mt-2 flex justify-center text-[6.5px] font-normal leading-[0.5rem] text-white sm:mt-6 sm:text-[18px] sm:leading-[1.375rem] ">
              Advisor
            </h3>
            <h3 className="flex justify-center  pb-1 text-[6.5px] font-normal leading-[0.5rem] text-white sm:pb-4  sm:text-[18px] sm:leading-[1.375rem]">
              A/Prof. (Practice)
            </h3>
            <h3 className="flex justify-center text-[10.83px] font-normal leading-[0.813rem] text-white sm:text-[30px] sm:leading-[2.25rem]">
              Keith Carter
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[26.68px] font-bold leading-8 text-black sm:text-[40px] sm:leading-[3rem]">
            CO-PRESIDENTS
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-x-5 sm:gap-x-16">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/co-president2.jpg"
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
              Jun Xiong
            </h3>
          </div>

          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/co-president1.jpg"
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
              David
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[26.68px] font-bold leading-8 text-black sm:text-[40px] sm:leading-[3rem]">
            TECHNOLOGY WING
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/techwing.jpg"
                  alt="Insert Photo Here"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="mt-2 flex justify-center text-[5.48px] font-normal text-black sm:mt-6 sm:text-xl">
              Vice President (TECH)
            </h3>
            <h3 className="flex justify-center pb-4 text-[6.67px] font-bold text-black sm:text-xl">
              Calvin
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[20px] font-semibold leading-6 text-black sm:text-[32px] sm:leading-[3rem]">
            MACHINE LEARNING
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-x-5 sm:gap-x-16">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/ml1.jpg"
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
              Daniel
            </h3>
          </div>

          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/ml2.jpg"
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
              Kleon
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[20px] font-semibold leading-6 text-black sm:text-[32px] sm:leading-[3rem]">
            BLOCKCHAIN
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-x-5 sm:gap-x-16">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/blockchain1.jpg"
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
              Jones
            </h3>
          </div>

          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/blockchain2.jpg"
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
              Marcus
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[20px] font-semibold leading-6 text-black sm:text-[32px] sm:leading-[3rem]">
            SOFTWARE DEVELOPMENT
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-x-5 sm:gap-x-16">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/sd1.jpg"
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
              Owen
            </h3>
          </div>

          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/sd2.jpg"
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
              Jess
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[26.68px] font-bold leading-8 text-black sm:text-[40px] sm:leading-[3rem]">
            OPERATIONS WING
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/op-wing.jpg"
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

        <div className="flex justify-center">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/er.jpg"
                  alt="Insert Photo Here"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>
            <h3 className="mt-2 flex justify-center text-[5.48px] font-normal text-black sm:mt-6 sm:text-xl">
              Director
            </h3>
            <h3 className="flex justify-center pb-4 text-[6.67px] font-bold text-black sm:text-xl">
              Elicia
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
          <h1 className="text-[20px] font-semibold leading-6 text-black sm:text-[32px] sm:leading-[3rem]">
            INTERNAL AFFAIRS
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-x-5 sm:gap-x-16">
          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/ia1.jpg"
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

          <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
            <div className="flex justify-center">
              <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
                <Image
                  src="/images/exco/ia2.jpg"
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
