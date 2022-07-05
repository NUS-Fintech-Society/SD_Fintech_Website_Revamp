import UsingCssModule from "@components/example/UsingCssModule";
import MaxWidth from "@components/layout/MaxWidth";
import Image from "next/image";
import { SimpleGrid, Box, Text } from '@chakra-ui/react'

const Departments = () => {
    return (
        <MaxWidth>
            <div className='my-6'>
                <div className='flex flex-col my-6'>
                    <div className="text-4xl text-center mb-8">
                        Departments
                    </div>
                    <div className='flex-row mb-8 mx-8'>
                        <SimpleGrid minChildWidth='250px' spacing='40px' justifyItems='center'>
                            <Box bg='#C7C7C7' minWidth='250px' maxWidth='235px' height='300px'>
                                <Image
                                    src='/placeholder.png'
                                    alt='Insert Photo Here'
                                    width={250}
                                    height={170}
                                />
                                <Text marginX='5px' fontSize='2xl' fontWeight='bold' >
                                    Blockchain
                                </Text>
                                <Text marginX='5px' fontSize='lg'>
                                    Desc
                                </Text>
                            </Box>
                            <Box bg='#C7C7C7' minWidth='250px' maxWidth='235px' height='300px'>
                                <Image
                                    src='/placeholder.png'
                                    alt='Insert Photo Here'
                                    width={250}
                                    height={170}
                                />
                                <Text marginX='5px' fontSize='2xl' fontWeight='bold' >
                                    Maching Learning
                                </Text>
                                <Text marginX='5px' fontSize='lg'>
                                    Desc
                                </Text>
                            </Box>
                            <Box bg='#C7C7C7' minWidth='250px' maxWidth='235px' height='300px'>
                                <Image
                                    src='/placeholder.png'
                                    alt='Insert Photo Here'
                                    width={250}
                                    height={170}
                                />
                                <Text marginX='5px' fontSize='2xl' fontWeight='bold' >
                                    Software Development
                                </Text>
                                <Text marginX='5px' fontSize='lg'>
                                    Desc
                                </Text>
                            </Box>
                        </SimpleGrid>
                    </div>
                    <div className='flex-row mb-8 mx-48 mt-8'>
                        <SimpleGrid minChildWidth='250px' spacing='40px' justifyItems='center'>
                            <Box bg='#C7C7C7' minWidth='250px' maxWidth='235px' height='300px'>
                                <Image
                                    src='/placeholder.png'
                                    alt='Insert Photo Here'
                                    width={250}
                                    height={170}
                                />
                                <Text marginX='5px' fontSize='2xl' fontWeight='bold' >
                                    Operations - External
                                </Text>
                                <Text marginX='5px' fontSize='lg'>
                                    Desc
                                </Text>
                            </Box>
                            <Box bg='#C7C7C7' minWidth='250px' maxWidth='235px' height='300px'>
                                <Image
                                    src='/placeholder.png'
                                    alt='Insert Photo Here'
                                    width={250}
                                    height={170}
                                />
                                <Text marginX='5px' fontSize='2xl' fontWeight='bold' >
                                    Operations - Internal
                                </Text>
                                <Text marginX='5px' fontSize='lg'>
                                    Desc
                                </Text>
                            </Box>
                        </SimpleGrid>
                    </div>
                </div>
            </div>
        </MaxWidth>
    );
};

export default Departments;
