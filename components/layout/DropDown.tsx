//type
import { DropDownProps } from "@interfaces/layout/DropDownProps"

//library
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
  } from "@chakra-ui/react";
import Link from "next/link";
import { Fragment } from 'react';

//code
const DropDown = ({
    items,
    title
  }: DropDownProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <div className="hover:text-gray-400 rounded-md">
        <Menu isOpen={isOpen}>
          <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
            {title}
          </MenuButton>
  
          <MenuList
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            style={{ marginTop: "5px", marginLeft: "-10px"}}
          >
            <div className="text-black">
              {items.map((item, index) => (
                <Fragment key={index}>
                  <MenuItem _hover={{ bg: "blue.100" }}>
                    <Link href={item[1]}>
                      <a>{item[0]}</a>
                    </Link>
                  </MenuItem>
                </Fragment>)
              )}
            </div>
          </MenuList>
        </Menu>
      </div>
    );
  };
  
  export default DropDown;
  