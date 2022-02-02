import { Heading, HStack, Link, Stack, Text, VStack, Box } from '@chakra-ui/react'
import React from 'react'
import asxherobg from '../../public/assets/images/axs-hero-bg.jpg'
import asxhero1 from '../../public/assets/images/asx-hero-1.webp'
import Image from "next/image";


const AxsHero = () => {
    return (
        <Stack direction={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }} justifyContent={'space-around'} alignItems={'center'} color={'#fff'} pt={{ base: '6', md: '2', lg: '10' }} px={{base:'2rem',md:'3rem',lg:'4rem'}} h={{ base: '86vh', md: '84vh', lg: '76vh' }} w="full" bgImage={`url(${asxherobg.src})`} backgroundRepeat={'no-repeat'} borderBottom={'5px solid #652B19'}>
            <VStack flex={2} alignItems={'flex-start'}>
                <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} pb={{base:'10px',md:'1rem'}}>Axie Infinity Shards (AXS)</Heading>
                <Text fontSize={{ base: 'lg', md: 'lg', lg: 'xl' }} pb={{base:'8px',md:'0.8rem'}}>Axie Infinity Shards are an ERC 20 governance token for the Axie universe. Holders will shape the future of Axie Infinity by signaling their support for upgrades to the ecosystem and directing usage of a Community Treasury.</Text>
                <HStack>
                    <Link borderRight={'2px solid #fff'}>
                        <Heading fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} pr={'1rem'}>Axie Vision Document</Heading>
                    </Link>

                    <Link>
                        <Heading fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>AXS Audit Report</Heading>
                    </Link>
                </HStack>

            </VStack>
            <VStack flex={1}>
                <Box
                    h={{ base: '10rem', md: '14rem', lg: '30rem' }}
                    w={{ base: '14rem', md: '18rem', lg: '28rem' }}
                >
                    <Image
                        src={asxhero1}
                        alt="Picture of the author"
                    />
                </Box>
            </VStack>
        </Stack>
    )
}

export default AxsHero
