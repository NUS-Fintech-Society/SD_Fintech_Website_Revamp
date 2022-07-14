//type
import { ProjectContentProps } from '@interfaces/departments/ProjectContent';

//library
import Image from 'next/image';
import { Fragment } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//code
const ProjectContent = ({
  description,
  projectImage,
  members,
  collaborations,
}: ProjectContentProps) => {
  return (
    <div className="m-5">
      <div className="flex flex-wrap justify-between">
        <div className="xl:w-1/2 ">
          {description.split('/n').map((paragraph) => (
            <p key={paragraph.substring(0, 25)} className="py-3 text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-5 lg:w-1/2">
          <Carousel
            showStatus={false}
            showArrows={false}
            autoPlay
            swipeable
            emulateTouch
            infiniteLoop={true}
            dynamicHeight={false}
            className="lg:ml-16"
          >
            {projectImage.map((image) => (
              <Image
                src={image.src}
                alt={image.alt}
                height={image.height}
                width={image.width}
                className="rounded-lg shadow-lg"
              />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="mt-7 flex">
        <div className="rounded-lg border-2 border-blue-300">
          <h2 className="my-2 mx-5 text-lg font-semibold md:text-xl lg:text-2xl ">
            Members
          </h2>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap rounded-lg border-2 border-blue-300">
        {members.map(({ src, alt, memberName }, index) => (
          <Fragment key={index}>
            <div className="md:text-md m-5 flex flex-wrap text-sm text-slate-400 lg:text-xl">
              <Image
                src={src}
                alt={alt}
                height={80}
                width={80}
                className="rounded-full"
              />
              <h3 className="mt-7 ml-3">{memberName}</h3>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="mt-7 flex">
        <div className="rounded-lg border-2 border-blue-300">
          <h2 className="my-2 mx-5 text-lg font-semibold md:text-xl lg:text-2xl ">
            Collaborations
          </h2>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap rounded-lg border-2 border-blue-300">
        {collaborations.map(({ src, alt, companyName }, index) => (
          <Fragment key={index}>
            <div className="md:text-md m-5 flex flex-wrap text-sm text-slate-400 lg:text-xl">
              <Image
                src={src}
                alt={alt}
                height={80}
                width={80}
                className="rounded-full"
              />
              <h3 className="mt-7 ml-3">{companyName}</h3>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;
