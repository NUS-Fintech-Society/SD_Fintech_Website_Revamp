import {
  Accordion as AccordionWrapper,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  return (
    <AccordionItem borderTop="0" marginY="4">
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
          <Box flex="1" textAlign="left" className=" text-3xl">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel className=" rounded-b-lg bg-[#f6f6f6]">
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Accordion;
