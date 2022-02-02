import { Heading, HStack, Stack, VStack, Text, Button, Box } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import staking from '../../public/assets/images/asx-staking.webp'
import stakingBtn from '../../public/assets/images/axs-staking-btn.png'

const TokenMetrics = () => {
    return (
        <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'}>
            <Heading fontSize={'2rem'} pb={{base:'1rem',md:'1rem',lg:'3rem'}}>
                Token Metrics
            </Heading>


            <Stack direction={{base:'column',md:'column',lg:'row'}} w={'full'} pb={{base:'6px',md:'6px',lg:'4rem'}} justifyContent={'space-evenly'}>
                <VStack pb={{base:'1.2rem',md:'1.2rem'}}>
                    <Text fontSize={'32px'}>59,985,000</Text>
                    <Text>SUPPLY AT PUBLIC SALE</Text>
                </VStack>

                <VStack pb={{base:'1.2rem',md:'1.2rem'}}>
                    <Text fontSize={'32px'}>$0.1</Text>
                    <Text>PUBLIC SALE PRICE</Text>
                </VStack>

                <VStack>
                    <Text fontSize={'32px'}>270,000,000</Text>
                    <Text>TOTAL SUPPLY</Text>
                </VStack>
            </Stack>



            <Stack direction={{base: 'column', md: 'column', lg: 'row'}} w={'full'} p={'4rem'} pb={'2rem'}>
                <VStack flex={1} alignItems={{base:'center',md:'center',lg:'flex-start'}} pb={{base:'1rem',md:'1rem'}} px={{base:'0px',md:'2rem',lg:'0px'}}>
                    <Heading fontSize={'2rem'} pb={'1rem'}>Staking AXS</Heading>
                    <Text fontSize={'lg'} pb={'3'} textAlign={{base:'center',md:'center', lg:'left'}}>AXS staking acts as an incentive for holding AXS and supporting the ecosystem. Stakers receive freshly issued AXS and will be able to signal their support for various proposals to improve Axie Infinity. AXS stakers will eventually direct usage of The Community Treasury.</Text>
                    <HStack display={'flex'} flexDirection={{base:'column',md:'column'}}>
                        <Button size={'lg'} bg={`url(${stakingBtn.src})`} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} color={'#a6a6a6'}>Stake AXS</Button>
                        <Text fontSize={'lg'} color={'#896544'}>Coming soon</Text>
                    </HStack>
                </VStack>
                <VStack flex={1}>
                    <Box
                        h={{base:'23rem',md:'30rem',lg:'30rem'}}
                        w={{base:'23rem',md:'30rem',lg:'30rem'}}
                    >
                        <Image
                            src={staking}
                            alt="Picture of the author"
                        />
                    </Box>
                </VStack>
            </Stack>

        </Stack>
    )
}

export default TokenMetrics
