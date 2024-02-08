/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';
import { FaqProps } from '@interfaces/recruitment/Faq';
import Accordion from '@components/contact/accordion';

type TabName =
  | 'General'
  | 'Blockchain'
  | 'Machine Learning'
  | 'Software Development'
  | 'Quant'
  | 'Operations';

const FAQ = ({ departmentFaq }: FaqProps) => {
  const [activeTab, setActiveTab] = useState<TabName>('General');

  const handleTabClick = (tabName: TabName) => {
    setActiveTab(tabName);
  };

  const filteredDepartment = departmentFaq.find(
    (department) => department.departmentName === activeTab
  );

  return (
    <div className="mt-8">
      <div className="mx-auto grid max-w-screen-xl grid-cols-10 gap-4">
        {/* Left column */}
        <div className="col-span-3 hidden rounded-lg bg-[#E6F0F0] p-8 md:block">
          <div className="flex h-full flex-col justify-start gap-12">
            <div
              className={`tab ${activeTab === 'General' ? 'active' : ''}`}
              onClick={() => handleTabClick('General')}
            >
              <span className="tab-label">
                {activeTab === 'General' ? (
                  <strong className="text-xs text-[#036167] lg:text-lg xl:text-xl 2xl:text-2xl">
                    General
                  </strong>
                ) : (
                  <span className="text-xs text-[#004F4E] lg:text-lg xl:text-xl 2xl:text-2xl">
                    General
                  </span>
                )}
              </span>
            </div>
            <div
              className={`tab ${activeTab === 'Blockchain' ? 'active' : ''}`}
              onClick={() => handleTabClick('Blockchain')}
            >
              <span className="tab-label">
                {activeTab === 'Blockchain' ? (
                  <strong className="text-xs text-[#036167] lg:text-lg xl:text-xl 2xl:text-2xl">
                    Blockchain
                  </strong>
                ) : (
                  <span className="text-xs text-[#004F4E] lg:text-lg xl:text-xl 2xl:text-2xl">
                    Blockchain
                  </span>
                )}
              </span>
            </div>
            <div
              className={`tab ${
                activeTab === 'Machine Learning' ? 'active' : ''
              }`}
              onClick={() => handleTabClick('Machine Learning')}
            >
              <span className="tab-label">
                {activeTab === 'Machine Learning' ? (
                  <strong className="text-xs text-[#036167] lg:text-lg xl:text-xl 2xl:text-2xl">
                    Machine Learning
                  </strong>
                ) : (
                  <span className="text-xs text-[#004F4E] lg:text-lg xl:text-xl 2xl:text-2xl">
                    Machine Learning
                  </span>
                )}
              </span>
            </div>
            <div
              className={`tab ${
                activeTab === 'Software Development' ? 'active' : ''
              }`}
              onClick={() => handleTabClick('Software Development')}
            >
              <span className="tab-label">
                {activeTab === 'Software Development' ? (
                  <strong className="text-xs text-[#036167] lg:text-lg xl:text-xl 2xl:text-2xl">
                    Software Development
                  </strong>
                ) : (
                  <span className="text-xs text-[#004F4E] lg:text-lg xl:text-xl 2xl:text-2xl">
                    Software Development
                  </span>
                )}
              </span>
            </div>
            <div
              className={`tab ${
                activeTab === 'Quant' ? 'active' : ''
              }`}
              onClick={() => handleTabClick('Quant')}
            >
              <span className="tab-label">
                {activeTab === 'Quant' ? (
                  <strong className="text-xs text-[#036167] lg:text-lg xl:text-xl 2xl:text-2xl">
                    Quant
                  </strong>
                ) : (
                  <span className="text-xs text-[#004F4E] lg:text-lg xl:text-xl 2xl:text-2xl">
                    Quant
                  </span>
                )}
              </span>
            </div>
            <div
              className={`tab ${activeTab === 'Operations' ? 'active' : ''}`}
              onClick={() => handleTabClick('Operations')}
            >
              <span className="tab-label">
                {activeTab === 'Operations' ? (
                  <strong className="text-xs text-[#036167] lg:text-lg xl:text-xl 2xl:text-2xl">
                    Operations
                  </strong>
                ) : (
                  <span className="text-xs text-[#004F4E] lg:text-lg xl:text-xl 2xl:text-2xl">
                    Operations
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-10 md:col-span-7">
          {/* Mobile View */}
          <div className="flex flex-col gap-4 md:hidden">
            {/* Display tab headers */}
            <div className="mb-4 flex justify-center gap-4">
              <div
                className={`rounded-full px-4 py-2 ${
                  activeTab === 'General'
                    ? 'bg-[#E6F0F0] font-bold text-[#024B50] drop-shadow-md'
                    : 'bg-white font-bold text-[#D2D2D2] drop-shadow-md'
                }`}
                onClick={() => handleTabClick('General')}
              >
                General
              </div>
              <div
                className={`rounded-full px-4 py-2 ${
                  activeTab === 'Blockchain'
                    ? 'bg-[#E6F0F0] font-bold text-[#024B50] drop-shadow-md'
                    : 'bg-white font-bold text-[#D2D2D2] drop-shadow-md'
                }`}
                onClick={() => handleTabClick('Blockchain')}
              >
                BC
              </div>
              <div
                className={`rounded-full px-4 py-2 ${
                  activeTab === 'Machine Learning'
                    ? 'bg-[#E6F0F0] font-bold text-[#024B50] drop-shadow-md'
                    : 'bg-white font-bold text-[#D2D2D2] drop-shadow-md'
                }`}
                onClick={() => handleTabClick('Machine Learning')}
              >
                ML
              </div>
              <div
                className={`rounded-full px-4 py-2 ${
                  activeTab === 'Software Development'
                    ? 'bg-[#E6F0F0] font-bold text-[#024B50] drop-shadow-md'
                    : 'bg-white font-bold text-[#D2D2D2] drop-shadow-md'
                }`}
                onClick={() => handleTabClick('Software Development')}
              >
                SD
              </div>
              <div
                className={`rounded-full px-4 py-2 ${
                  activeTab === 'Operations'
                    ? 'bg-[#E6F0F0] font-bold text-[#024B50] drop-shadow-md'
                    : 'bg-white font-bold text-[#D2D2D2] drop-shadow-md'
                }`}
                onClick={() => handleTabClick('Operations')}
              >
                Ops
              </div>
            </div>

            {/* Display Accordion */}
            {filteredDepartment && (
              <Accordion questions={filteredDepartment.questions} />
            )}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            {filteredDepartment && (
              <Accordion questions={filteredDepartment.questions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
