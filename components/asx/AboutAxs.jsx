import { Heading, Stack, Text, VStack, Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import staking from '../../public/assets/images/asx-about-1.webp'
import payment from '../../public/assets/images/asx-about-2.png'
import governance from '../../public/assets/images/asx-about-3.webp'
import footer from '../../public/assets/images/asx-about-foot.png'

const AboutAxs = () => {
    return (
        <Stack justifyContent={'center'} alignItems={'center'}>
            <VStack px={{base:'2rem',md:'2rem',lg:'10rem'}} py={'3rem'} textAlign={'center'}>
                <Heading fontSize={'2rem'} pb={'1.5rem'}>What is AXS?</Heading>
                <Text fontSize={'lg'} pb={'1rem'}>Axie Infinity Shards (AXS) are the glue that binds all Axie community members together.</Text>
                <Text fontSize={'lg'}>AXS holders will be able to claim rewards if they stake their tokens, play the game, and participate in key governance votes. Players will also be able to earn <span style={{ fontWeight: 'bolder' }}> $AXS</span> when they play various games within the Axie Infinity Universe and through user generated content initiatives.</Text>
            </VStack>

            <Stack direction={{base:'column',md:'column',lg:'row'}} w={'full'} px={{base:'2rem',md:'12rem',lg:'5rem'}} py={'1rem'} textAlign={'center'} color={'#462d17'}>
                <VStack flex={1} pb={{base:'2rem', md:'2rem'}}>

                    <Box
                        h='3rem'
                        w='3rem'
                    >
                        <Image
                            src={staking}
                            alt="Picture of the author"
                        />
                    </Box>

                    <Heading fontSize={'18px'} pt={'22px'}>Staking</Heading>
                    <Text pt={'16px'} fontSize={'lg'}>Players will be able to lock up their tokens to receive newly created AXS. Stakers will also be required to vote and play to claim rewards.</Text>
                </VStack>
                <VStack flex={1} pb={{base:'2rem', md:'2rem'}}>

                    <Box
                        h='3rem'
                        w='3rem'
                    >
                        <Image
                            src={payment}
                            alt="Picture of the author"
                        />
                    </Box>

                    <Heading fontSize={'18px'} pt={'22px'}>Payment</Heading>
                    <Text pt={'16px'} fontSize={'lg'}>AXS will be accepted as currency within the Axie NFT marketplace. AXS may also be used to determine eligibility for participation in certain sales/auctions conducted by the Axie team.</Text>
                </VStack>
                <VStack flex={1}>

                    <Box
                        h='3rem'
                        w='4rem'
                    >
                        <Image
                            src={governance}
                            alt="Picture of the author"
                        />
                    </Box>

                    <Heading fontSize={'18px'} pt={'22px'}>Governance</Heading>
                    <Text pt={'16px'} fontSize={'lg'}>In early 2021, the Community Treasury will go live and begin to receive revenues generated by Axie Infinity as well as a portion of staking rewards. This treasury will be governed by AXS stakers once the network has become sufficiently decentralized.</Text>
                </VStack>

            </Stack>
            <Box
                h={{base:'5rem',md:'5.5rem',lg:'8rem'}}
                w='11rem'
                pt={'3rem'}
            >
                <Image
                    src={footer}
                    alt="Picture of the author"
                />
            </Box>
        </Stack>
    )
}

export default AboutAxs
