import {
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
          <Box
            flex="1"
            textAlign="left"
            className="text-xl md:text-2xl lg:text-3xl"
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel className="  bg-[#f6f6f6]">{children}</AccordionPanel>
    </AccordionItem>
  );
};

export default Accordion;
