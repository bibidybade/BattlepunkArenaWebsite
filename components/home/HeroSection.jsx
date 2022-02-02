import { Text, Box, VStack, HStack, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
// import herocard1 from "../../public/assets/images/hologram_01.svg";
import herobg from "../../public/assets/images/still-assets/hero_planet.png";
import herobearship from "../../public/assets/images/still-assets/hero_bearship.png";
import herosmitten from "../../public/assets/images/still-assets/hero_smitten.png";
import heroarmed from "../../public/assets/images/still-assets/hero_armed.png";
import herometeormite from "../../public/assets/images/still-assets/hero_meteormite.png";



const HeroSection = () => {
    return (
        <>
            <Box w='full' >
                <VStack className='absolute' h={{base:'50vh', md:'70vh', lg:'80vh', xl:'90vh'}} w="full" bgImage={`url(${herobg.src})`} bgSize={{base:'contain' ,md:'contain', lg:'contain'}} bgRepeat={'no-repeat'} bgPos={'center'}  >

                </VStack>
                <VStack className='animatedbear' h={{base:'50vh', md:'70vh', lg:'80vh', xl:'90vh'}} w="full" bgImage={`url(${herobearship.src})`} bgSize={{base:'contain' ,md:'contain', lg:'contain'}} bgRepeat={'no-repeat'} bgPos={'center'}  >

                </VStack>
                <VStack className='animatedcat' h={{base:'50vh', md:'70vh', lg:'80vh', xl:'90vh'}} w="full" bgImage={`url(${herosmitten.src})`} bgSize={{base:'contain' ,md:'contain', lg:'contain'}} bgRepeat={'no-repeat'} bgPos={'center'}  >

                </VStack>
                <VStack className='animatedoctopus' h={{base:'50vh', md:'70vh', lg:'80vh', xl:'90vh'}} w="full" bgImage={`url(${heroarmed.src})`} bgSize={{base:'contain' ,md:'contain', lg:'contain'}} bgRepeat={'no-repeat'} bgPos={'center'}  >

                </VStack>
                <VStack className='animatedmite' h={{base:'50vh', md:'70vh', lg:'80vh', xl:'90vh'}} w="full" bgImage={`url(${herometeormite.src})`} bgSize={{base:'contain' ,md:'contain', lg:'contain'}} bgRepeat={'no-repeat'} bgPos={'center'}  >

                </VStack>

            </Box>
        </>
    )
}

export default HeroSection
