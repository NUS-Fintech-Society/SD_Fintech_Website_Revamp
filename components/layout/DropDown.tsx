// type
import { DropDownProps } from '@interfaces/layout/DropDownProps';

// library
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Fragment } from 'react';

// code
const DropDown = ({ items, title, handleCloseNav }: DropDownProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      className="h-full rounded-md hover:text-gray-400"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Menu isOpen={isOpen}>
        <MenuButton
          // onMouseEnter={onOpen}
          // onMouseLeave={onClose}
          className="cursor-default"
        >
          {title}
        </MenuButton>

        <MenuList
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          style={{ marginTop: '-8px' }}
        >
          <div className="text-black">
            {items.map((item, index) => (
              <Fragment key={index}>
                <MenuItem _hover={{ bg: 'blue.100' }} padding={0}>
                  <Link href={item[1]}>
                    <a onClick={handleCloseNav} className="size-full p-2">
                      {item[0]}
                    </a>
                  </Link>
                </MenuItem>
              </Fragment>
            ))}
          </div>
        </MenuList>
      </Menu>
    </div>
  );
};

export default DropDown;
