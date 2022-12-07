// library
import Image from 'next/image';
import Head from 'next/head';

// code
import MaxWidth from '@components/layout/MaxWidth';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About • NUS Fintech Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* landing bg */}
      <div className="grid grid-cols-2 rounded-b-[143px] bg-[#002750] pb-20">
        <div className="flex items-center justify-center">
          <Image
            src="/images/soc-bg.jpg"
            alt="Insert Photo Here"
            height={500}
            width={500}
            className="crop-photo rounded-3xl"
          />
        </div>

        <MaxWidth>
          <div className="grid grid-flow-col grid-rows-3">
            <div className="flex items-center justify-center">
              <h1 className=" hero-xl">About Us.</h1>
            </div>

            <div>
              <h2 className="mb-3 text-h2 font-bold text-white">
                <div className="flex items-center">
                  <div className="mr-2">
                    {/* Feather Icon */}
                    <svg
                      width="36"
                      height="39"
                      viewBox="0 0 36 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.4458 10.7806C15.562 15.9645 10.396 22.2148 5.40524 28.9168C4.89157 26.6951 4.61722 24.5772 5.12505 22.3037L6.08819
                        23.1701C6.14656 23.0738 6.20493 23.022 6.1991 22.9776C5.86054 20.5708 6.48512 18.5787 7.67591 16.7125C9.21845 14.29 10.9384 
                        12.0584 12.8126 10.0475L12.5149 12.9134C13.8108 8.2035 17.0212 6.35211 20.1383 4.3304L20.0157 7.29262L20.2551 7.46294C20.6695 
                        3.76017 22.7884 2.56788 25.1875 1.68662C28.5205 0.43508 31.8711 -0.357314 35.3559 0.161075C35.5368 0.161075 35.7178 0.249941 
                        35.998 0.323997C35.2917 1.18304 34.6554 1.96803 34.0075 2.7308C31.702 5.58362 29.7603 8.87398 28.252 12.4839C27.5133 14.0323 
                        26.6943 15.5167 25.8004 16.9272C25.534 17.3457 25.1671 17.6421 24.7555 17.7715C23.0044 18.2973 21.2532 18.7416 19.5021 
                        19.334L23.8157 20.2153C23.7283 20.4046 23.6245 20.5809 23.5064 20.7411C21.7552 22.9035 19.9515 25.0511 18.1828 27.2209C17.9331 
                        27.5372 17.6333 27.7826 17.3033 27.9409C16.9732 28.0992 16.6204 28.1668 16.2682 28.1392C15.296 28.0766 14.3219 28.0766 13.3497 
                        28.1392L16.1282 29.3241C15.9565 29.475 15.7771 29.611 15.5911 29.7314C12.9947 30.9023 10.1788 31.0418 7.5183 30.1313C7.34828 
                        30.0899 7.17314 30.097 7.00555 30.1521C6.83796 30.2072 6.68212 30.3088 6.54933 30.4498C5.11922 32.4641 3.71829 34.508 2.36406
                          36.5964C1.94378 37.2406 1.62858 37.8923 0.869741 37.9071C0.595393 37.9071 0.326883 38.1886 0 38.27C6.45518 28.2761 13.6353 
                          19.0726 21.4458 10.7806Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  Our Story
                </div>
              </h2>
              <p className="text-xl text-white lg:text-2xl">
                NUS Fintech Society was founded in 2018 in collaboration with
                NUS Fintech Lab under the NUS School of Computing. We identify
                ourselves as Fintech enthusiasts looking for opportunities to
                learn and grow our knowledge, skills and network in the Fintech
                space.
              </p>
            </div>

            <div className="grid md:grid-cols-2">
              <div>
                <h2 className="text-h2 font-bold text-white">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <svg
                        width="45"
                        height="36"
                        viewBox="0 0 45 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.3467 17.9658L24.4855 24.3077L15.2682 11.1795V6.05128L25.7351 5.88034L23.1676 2.94017L25.7351
                      0H13.9245V11.1795L0 36H45L29.3467 17.9658ZM15.2682 1.30769H22.8167L21.396 2.90598L22.8252 4.5641L15.2339
                        4.69231L15.2682 1.30769ZM14.6691 12.9915L20.8825 31.5214L24.4256 26.8889L29.4237 20.3846L41.6451 
                        34.4701H2.61031L14.6691 12.9915Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    Mission
                  </div>
                </h2>
                <p className="text-xl text-white lg:text-2xl">
                  To educate students with Fintech knowledge through events and
                  industry projects, and connect and establish relationships
                  with industry partners.
                </p>
              </div>

              <div>
                <h2 className="text-h2 font-bold text-white">
                  <div className="flex items-center">
                    <div className="mr-5">
                      <svg
                        width="26"
                        height="39"
                        viewBox="0 0 26 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.76256 31.5601C7.74535 31.3253 7.74535 31.0895 7.76256 30.8547C8.2873 27.3192 6.71307
                      24.4976 4.68291 21.8394C4.22698 21.2545 3.82267 20.6609 3.33234 20.119C-2.00973 13.2801 1.96456
                      1.88195 11.7627 0.626005C13.805 0.348884 15.8842 0.586444 17.8113 1.3171C19.7385 2.04776 21.4526
                      3.24836 22.7978 4.80983C24.143 6.37129 25.0768 8.24413 25.5143 10.2582C25.9517 12.2723 25.879 14.3637
                      25.3028 16.3425C24.7746 17.8435 24.0077 19.2494 23.0318 20.5061C21.6984 22.4158 20.193 24.2137 19.3672
                      26.4331C19.1165 27.0583 18.974 27.7215 18.9456 28.3945C18.9026 30.6655 18.9456 32.9451 18.9456 35.2161C18.896
                      35.7241 18.7086 36.209 18.4037 36.6183C17.0961 38.5711 15.2552 39.1044 12.9326 38.984C12.1978 39.012 11.4658
                      38.8786 10.788 38.5933C10.1103 38.3079 9.50337 37.8775 9.0099 37.3323C8.58141 36.9589 8.24565 36.4909 8.02917
                      35.9654C7.81268 35.4398 7.72141 34.8712 7.76256 34.3043C7.86579 33.401 7.76256 32.4806 7.76256 31.5601ZM14.2057
                      19.0093C14.2057 18.5447 14.2057 18.2179 14.2659 17.8996C14.3093 17.279 14.5974 16.7011 15.0668 16.2929C15.5363
                      15.8848 16.1487 15.6798 16.7692 15.7232C17.3898 15.7665 17.9677 16.0546 18.3759 16.5241C18.784 16.9935 18.989
                      17.6059 18.9456 18.2265C18.9123 18.8251 18.6461 19.3869 18.2041 19.7919C17.7621 20.197 17.1792 20.4131 16.58
                      20.3943C15.8488 20.3943 15.7198 20.6437 15.7198 21.3147C15.7628 22.8201 15.7198 24.3255 15.7198 25.8309C15.7198
                      26.1062 16.0036 26.6138 16.1241 26.6052C16.709 26.5535 17.5262 27.0783 17.8445 26.2439C18.895 23.8329 20.2855
                      21.5849 21.9737 19.5684C23.2316 18.0324 24.028 16.1711 24.2705 14.2005C24.527 12.0487 24.1408 9.86906 23.1605
                      7.93635C22.1803 6.00363 20.6499 4.40432 18.7622 3.33996C16.8745 2.2756 14.714 1.79382 12.5529 1.95535C10.3918
                      2.11687 8.32695 2.91446 6.61844 4.2476C2.13661 7.74877 0.854855 14.5704 4.59689 19.3534C6.37179 21.4156 7.82216
                      23.7362 8.89807 26.2353C8.95744 26.3417 9.03875 26.4344 9.13664 26.507C9.23452 26.5797 9.34673 26.6308 9.46583
                      26.6568C10.9454 26.889 11.0745 26.76 11.0745 25.2632V20.5405C8.68301 20.1706 7.76256 19.4394 7.81417 18.0286C7.84911
                      17.4479 8.0916 16.899 8.49743 16.4821C8.90325 16.0652 9.44538 15.8081 10.025 15.7576C11.4186 15.6543 12.124 16.5146
                      12.6057 18.9318C12.7949 18.9318 12.9928 19.0007 13.1907 19.0093C13.3885 19.0179 13.7842 19.0093 14.2401 19.0093H14.2057ZM17.38
                      29.5644C17.5779 28.0848 17.5779 28.0848 16.2273 28.0848H10.2056C9.89595 28.0848 9.58626 28.0848 9.26797
                      28.1364V29.5644H17.38ZM12.4767 20.4889C12.4767 22.4416 12.4767 24.3083 12.4767 26.1836C12.4767 26.3557 12.9326 26.6396 13.1907
                      26.6482C13.4487 26.6568 14.2143 26.9665 14.2315 26.2439C14.2746 24.3427 14.2315 22.4416 14.2315 20.4889H12.4767ZM9.25077
                      31.13L9.31098 32.3257H17.4316V31.13H9.25077ZM9.30238 35.0269H17.423V33.8312H9.30238V35.0269ZM10.5583 36.6269L10.4551
                      36.9366C10.9205 37.1916 11.4182 37.3826 11.9347 37.5044C12.8638 37.599 13.8186 37.5044 14.7563 37.5474C15.0746 37.5808
                      15.3951 37.5088 15.6686 37.3425C15.9421 37.1763 16.1534 36.9249 16.2703 36.6269H10.5583ZM11.1089 18.5619C11.0229 17.7017
                      10.8422 17.2458 10.1626 17.2286C10.047 17.218 9.93048 17.233 9.82131 17.2725C9.71213 17.312 9.61298 17.375 9.53089
                      17.4571C9.4488 17.5392 9.38577 17.6383 9.34628 17.7475C9.30679 17.8567 9.29181 17.9732 9.30238 18.0888C9.30238
                      18.8286 9.84433 19.0523 10.4551 18.9491C10.696 18.9577 10.9368 18.6738 11.1089 18.5619ZM16.1241 19.0179C16.9843 19.0179
                      17.5693 18.7512 17.4574 18.0458C17.3879 17.8565 17.2732 17.687 17.1233 17.5521C16.9734 17.4171 16.7928 17.3209 16.5972
                      17.2716C15.866 17.1684 15.6423 17.7619 15.6939 18.3641C15.7456 18.6308 16.0294 18.8716 16.1241 19.0179Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    Vision
                  </div>
                </h2>
                <p className="text-xl text-white lg:text-2xl">
                  To be the leading student-led Fintech Club known for
                  incubating industry-ready Fintech talents and industry-grade
                  financial digital transformation projects.
                </p>
              </div>
            </div>
          </div>
        </MaxWidth>
      </div>

      <div className="px-12 pt-12">
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
    </>
  );
};

export default AboutPage;
