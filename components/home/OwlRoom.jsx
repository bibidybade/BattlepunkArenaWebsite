import React from 'react'

import { Stack, HStack, VStack, Text, Box } from '@chakra-ui/react'
import owlroom from '../../public/assets/images/still-assets/lore-room-2.png'
import Image from 'next/image'
import lorescreen from '../../public/assets/images/still-assets/lore-scroll-screen.png'



// import Image from 'next/image'


const OwlRoom = () => {
    return (
        <>

            <Stack py='26'  className='section owlroom-sec' w='74%' mx='auto'  spacing='24px' >
                <Stack w='82%' className='section-inner-content'  pos={'absolute'} top={['37.2%','38.2%','38.3%','39%','39.8%','40%']} spacing={['20px', '42px', '30px', '40px', '65px', '90px']} direction={['row']} color={'white'}  >
                    <Box w='34%'>
                    </Box>
                    <Box className='owlscrollbox-outer' w={['49%', '49%', '50%', '50%', '50%', '50%']}   zIndex={'10'} >
                        <Box maxW={'66%'} maxH={['5em','6.5em' ,'8em','8.8em','9em','13em']} overflow='auto' css={{
                            '&::-webkit-scrollbar': {
                                width: '5px !important',
                            },
                            '&::-webkit-scrollbar-track': {
                                width: '6px !important',
                                background: '#8de1f7',
                                borderRadius: '24px !important'

                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#f2f3f4',
                                borderRadius: '24px !important'
                            }
                        }}>
                            {/* <Text fontSize={{ base: '8', md: '12', lg: 'sm' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id beatae fuga recusandae ducimus soluta? Voluptatum nulla nesciunt quisquam iure, pariatur obcaecati temporibus minima necessitatibus? Fugiat sunt necessitatibus dolore doloremque repudiandae?
                                Quisquam similique porro corporis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id beatae fuga recusandae ducimus soluta? Voluptatum nulla nesciunt quisquam iure, pariatur obcaecati temporibus minima necessitatibus? Fugiat sunt necessitatibus dolore doloremque repudiandae?
                                Quisquam similique porro corporis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id beatae fuga recusandae ducimus soluta? Voluptatum nulla nesciunt quisquam iure, pariatur obcaecati temporibus minima necessitatibus? Fugiat sunt necessitatibus dolore doloremque repudiandae?
                                Quisquam similique porro corporis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id beatae fuga recusandae ducimus soluta? Voluptatum nulla nesciunt quisquam iure, pariatur obcaecati temporibus minima necessitatibus? Fugiat sunt necessitatibus dolore doloremque repudiandae?
                                Quisquam similique porro corporis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id beatae fuga recusandae ducimus soluta? Voluptatum nulla nesciunt quisquam iure, pariatur obcaecati temporibus minima necessitatibus? Fugiat sunt necessitatibus dolore doloremque repudiandae?
                                Quisquam similique porro corporis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id beatae fuga recusandae ducimus soluta? Voluptatum nulla nesciunt quisquam iure, pariatur obcaecati temporibus minima necessitatibus? Fugiat sunt necessitatibus dolore doloremque repudiandae?
                                Quisquam similique porro corporis</Text> */}

                                <Text>
                                <Image src={lorescreen} alt={"The Story of Battlepunk Arena"}/>

                                </Text>
                        </Box>


                    </Box>
                </Stack>

                
            </Stack>
        </>
    )
}

export default OwlRoom
