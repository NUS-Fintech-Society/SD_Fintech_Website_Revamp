import type { NextPage } from "next";

/**
 * Follow this for responsive, should always start with mobile first view.
 */
const Example: NextPage = () => {
  return (
    <div className="flex flex-wrap mx-auto max-w-main">
      <div className="w-full lg:w-1/2 h-96 bg-t_Jade text-h1">left block</div>
      <div className="w-full lg:w-1/2 h-96 bg-t_Orange text-h2">
        right block
      </div>
    </div>
  );
};

export default Example;
