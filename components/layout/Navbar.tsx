import { layout } from '@chakra-ui/react';
import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="sticky top-0 z-10 h-16 bg-primary">
      <MaxWidth>
        <div className="mx-auto flex max-w-main justify-end p-4">
          <div className="flex gap-3 text-white">
            <Link href={'/'}>
              <a>About</a>
            </Link>
            <Link href={'/recruitment'}>
              <a>Recruitment</a>
            </Link>
            <Link href={'/example'}>
              <a>Example</a>
            </Link>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default NavBar;
