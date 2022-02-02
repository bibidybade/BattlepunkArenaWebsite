import { Box, Stack, Heading } from '@chakra-ui/react'
import React from 'react'
import asxAvailableBg from '../../public/assets/images/axs-available-bg.jpg'
import asxAvailableHead from '../../public/assets/images/asx-available-header.png'
import binance from '../../public/assets/images/binance-img.png'
import uniswap from '../../public/assets/images/uniswap-img.png'
import Image from 'next/image'


const AxsAvailable = () => {
    return (
        <Stack direction={'column'} alignItems={'center'} width={'100%'} bgImage={`url(${asxAvailableBg.src})`} backgroundSize={'cover'} bgPosition={'50%'} backgroundRepeat={'no-repeat'} pb={'4rem'}>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} bgImage={`url(${asxAvailableHead.src})`} 
            backgroundSize={'contain'} bgPosition={'50%'} backgroundRepeat={'no-repeat'} px={{base:'0px',md:'0px',lg:'6rem'}} py={'0.8rem'} width={{base:'70%',md:'50%',lg:'50%'}}
             textAlign={'center'}>
                <Heading w="full" pb={{base:'0px',md:'8px',lg:'1rem'}} fontSize={{base:'xl',md:'xl',lg:'2xl'}}>AXS available on</Heading>
            </Stack>
            <Stack direction={'row'} alignItems={'baseline'} w={'full'} justifyContent={'space-around'} pt={'2rem'}>
                <Box
                    h={{base:'6rem',md:'7rem',lg:'16rem'}}
                    w={{base:'7rem',md:'7rem',lg:'16rem'}}
                    filter={'drop-shadow(0 0 30px #f7b500)'}
                >
                    <Image
                        src={binance}
                        alt='Binance'
                    />
                </Box>

                <Box
                    h={{base:'6rem',md:'7rem',lg:'16rem'}}
                    w={{base:'7rem',md:'7rem',lg:'16rem'}}
                    filter={'drop-shadow(0 0 30px #eb00f7)'}
                >
                    <Image
                        src={uniswap}
                        alt='Uniswap'
                    />
                </Box>
            </Stack>
        </Stack>
    )
}

export default AxsAvailable
