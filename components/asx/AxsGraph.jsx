import { HStack, Stack, Box, Heading, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import asxGraph1 from '../../public/assets/images/axs-graph-1.webp'
import asxGraph2 from '../../public/assets/images/axs-graph-2.webp'


const AxsGraph = () => {
    return (
        <Stack direction={'row'} pb={'4rem'} width={'100%'}>
            <HStack display={'flex'} flexDirection={{base:'column',md:'column',lg:'row'}} w={'full'} justifyContent={'space-evenly'} alignItems={'center'}>
                <VStack pb={{base:'4rem',md:'4rem',lg:'0px'}}>
                    <Heading fontSize={'2rem'} pb={'2rem'}>Allocation</Heading>
                    <Image
                        src={asxGraph1}
                        alt='Graph 1'
                    />
                </VStack>
                <VStack>
                    <Heading fontSize={'2rem'} pb={{base:'2rem',md:'2rem',lg:'8.2rem'}}>Unlock Schedule</Heading>
                    <Image
                        src={asxGraph2}
                        alt='Graph 2'
                    />
                </VStack>
            </HStack>
        </Stack>
    )
}

export default AxsGraph
