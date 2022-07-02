import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
  } from "@chakra-ui/react";
  
  const DropDown = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <div className="hover:text-gray-400 rounded-md px-3 py-1">
        <Menu isOpen={isOpen}>
          <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
            Department
          </MenuButton>
  
          <MenuList
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            style={{ marginTop: "5px", marginLeft: "-15px" }}
          >
            <div className="text-black">
              <MenuItem
                as="a"
                href={"/departments/operations"}
                _hover={{ bg: "blue.100" }}
              >
                Operations
              </MenuItem>
              <MenuItem
                as="a"
                href={"/departments/machinelearning"}
                _hover={{ bg: "blue.100" }}
              >
                Machine Learning
              </MenuItem>
              <MenuItem
                as="a"
                href={"/departments/blockchain"}
                _hover={{ bg: "blue.100" }}
              >
                Blockchain
              </MenuItem>
              <MenuItem
                as="a"
                href={"/departments/software"}
                _hover={{ bg: "blue.100" }}
              >
                Software
              </MenuItem>
            </div>
          </MenuList>
        </Menu>
      </div>
    );
  };
  
  export default DropDown;
  