/* eslint-disable */
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import React from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const CustomAccordion = ({ title, children }: AccordionProps) => {
  return (
    <AccordionItem borderTop="0" marginY="4" className="overflow-hidden  ">
      <h2>
        <AccordionButton
          _hover={{
            bg: 'none',
          }}
          borderX="1px"
          borderColor="#005792"
          borderTop="1px"
          borderTopRadius="lg"
        >
          <Box flex="1" textAlign="left" className="text-2xl">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel className="  bg-[#f6f6f6]">{children}</AccordionPanel>
    </AccordionItem>
  );
};

export default CustomAccordion;
