import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Milestones = () => {
  const [memberCount, setMemberCount] = useState(false);
  const [projectsCount, setProjectsCount] = useState(false);
  const [deptCount, setDeptCount] = useState(false);

  return (
    <div className="section-my">
      <h2 className="mb-20 text-center text-h2 font-bold">Key Milestones</h2>
      <div className="flex flex-wrap justify-center gap-10">
        <div className=" flex size-72 flex-col items-center justify-center bg-primary text-white">
          <div className="text-5xl">
            <CountUp
              start={memberCount ? 100 : undefined}
              end={204}
              duration={1}
              redraw
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible: any) => {
                    if (isVisible) {
                      setMemberCount(true);
                    }
                  }}
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </div>
          <div className=" mt-5 text-2xl capitalize">MEMBERS</div>
        </div>
        <div className=" flex size-72 flex-col items-center justify-center bg-primary text-white">
          <div className="text-5xl">
            <CountUp
              start={projectsCount ? 0 : undefined}
              end={23}
              duration={1}
              redraw
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible: any) => {
                    if (isVisible) {
                      setProjectsCount(true);
                    }
                  }}
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </div>
          <div className=" mt-5 text-center text-2xl capitalize">
            COMPLETED <div> PROJECTS</div>
          </div>
        </div>
        <div className=" flex size-72 flex-col items-center justify-center bg-primary text-white">
          <div className="text-5xl">
            <CountUp
              start={deptCount ? 0 : undefined}
              end={5}
              duration={1}
              redraw
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible: any) => {
                    if (isVisible) {
                      setDeptCount(true);
                    }
                  }}
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </div>
          <div className=" mt-5 text-center text-2xl capitalize">
            CORE <div>DEPARTMENTS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
