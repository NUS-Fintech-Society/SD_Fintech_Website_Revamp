import { PartnersImage } from "@data/interface/homeData";
import MaxWidth from "@components/layout/MaxWidth";
import Image from "next/image";

const Partners = (partnersImages: PartnersImage[]) => {
  // Calculate the rows and cols for the CSS grid
  // and flexbox for the last row with less than numCols images
  const numImages = Object.keys(partnersImages).length;
  const numCols = 5;
  const numRows = Math.floor(numImages / numCols);
  const numItems = numImages - (numImages % numCols);

  const rowImages = Object.fromEntries(
    Object.entries(partnersImages).slice(0, numItems)
  );
  const lastRowImages = Object.fromEntries(
    Object.entries(partnersImages).slice(numItems, numImages)
  );

  const gridCols = `grid-cols-${numCols}`;
  const gridRows = `grid-rows-${numRows}`;

  return (
    <MaxWidth>
      <p className="mb-7 mt-10 text-center text-h4">
        Partners we have worked with
      </p>
      <div
        className={`grid ${gridCols} ${gridRows} justify-items-center gap-2`}
      >
        {Object.entries(rowImages).map(([key, logo]) => (
          <div className="w-16 md:w-20" key={key}>
            <Image src={logo.src} alt={logo.alt} width="200" height="200" />
          </div>
        ))}
      </div>
      <div className="mb-10 flex justify-evenly py-2">
        {Object.entries(lastRowImages).map(([key, logo]) => (
          <div className="w-16 md:w-20" key={key}>
            <Image src={logo.src} alt={logo.alt} width="200" height="200" />
          </div>
        ))}
      </div>
    </MaxWidth>
  );
};

export default Partners;
