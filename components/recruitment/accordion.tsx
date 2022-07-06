import {
    Accordion as AccordionWrapper,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

type AccordionProps = {
title: string,
};

const Accordion = ( {title, children} : AccordionProps) => {
    return (
<AccordionWrapper allowToggle>
    <AccordionItem>
        <h2>
        <AccordionButton>
            <Box flex='1' textAlign='left'>
                {title}
            </Box>
        <AccordionIcon />
        </AccordionButton>
        </h2>
        <AccordionPanel>
            {children}
        </AccordionPanel>
    </AccordionItem>
</AccordionWrapper>
)};

export default Accordion;