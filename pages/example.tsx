import type { NextPage } from 'next';
import UsingCssModule from '@components/example/UsingCssModule';
import MaxWidth from '@components/layout/MaxWidth';

/**
 * Follow this for responsive, should always start with mobile first view.
 */
const Example: NextPage = () => {
  return (
    <>
      <MaxWidth>
        <h2 className=" text-h1">
          use &lt;MaxWidth /&gt; for all your sections
        </h2>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil
          by Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem
          Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section
          1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections 1.10.32 and 1.10.33
          from de Finibus Bonorum et Malorum by Cicero are also reproduced in
          their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham.
        </p>
        <h1 className=" text-h1">Responsive Example</h1>
        <div className="mx-auto flex max-w-main flex-wrap">
          <div className="h-96 w-full bg-t_Jade text-h1 lg:w-1/2">
            left block
          </div>
          <div className="h-96 w-full bg-t_Orange text-h2 lg:w-1/2">
            right block
          </div>
        </div>
        <h2 className="text-h1">Using css Module Example</h2>
        <UsingCssModule />
      </MaxWidth>
    </>
  );
};

export default Example;
