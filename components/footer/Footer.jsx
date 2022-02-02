import { Text, VStack, HStack, Box, Flex, Heading, Stack, InputRightAddon } from '@chakra-ui/react';
import React from 'react';
import { SimpleGrid } from '@chakra-ui/react'
import Image from "next/image";
// import footerlogo from "../../public/assets/images/footerlogo.webp"
// import socialfb from "../../public/assets/images/fb.svg"
// import socialtwet from "../../public/assets/images/twet.svg"
// import socialdecort from "../../public/assets/images/decort.svg"
// import socialinsta from "../../public/assets/images/insta.svg"
// import socialreddit from "../../public/assets/images/reddit.svg"
// import socialsubstack from "../../public/assets/images/substack.png"
// import socialtiktok from "../../public/assets/images/tiktok.svg"
// import fnewsleter from "../../public/assets/images/fnewsleter.webp"
// import footerbg from "../../public/assets/images/stars_tile_01.svg"
import footertop from "../../public/assets/images/still-assets/punkon.png"
import Link from 'next/link'


import discordicon from '../../public/assets/images/still-assets/discord.png'
import instaicon from '../../public/assets/images/still-assets/insta.png'
import twittericon from '../../public/assets/images/still-assets/twitter.png'
import lastsocial from '../../public/assets/images/still-assets/last-social.png'

import footerbg from '../../public/assets/images/still-assets/site-bg.png'


const Footer = () => {
    return (
        <>
            {/* <VStack bgImage={`url(${footerbg.src})`} backgroundPosition={'bottom'} h="auto" w="full" alignItems="center" justifyContent="center">
                <VStack bgImage={`url(${footertop.src})`} bgPos={'center'} bgRepeat={'no-repeat'} bgSize={['cover','cover','contain','contain','cover','cover']} py={['10','32','32','44','60','60']} w='100%'>
                    <Stack color={'white'}>
                        <HStack>
                            <Box className='footer-icon-box'>
                                <Link href='/' ><Image   width={'60px','60px','60px','60px','60px','60px'} height={'60px'} src={discordicon} /></Link></Box>
                            <Box className='footer-icon-box'><Link href='/'><Image  width={'60px'} height={'60px'} src={instaicon} /></Link></Box>
                            <Box className='footer-icon-box'><Link href='/'><Image  width={'60px'} height={'60px'} src={twittericon} /></Link></Box>
                            <Box className='footer-icon-box'><Link href='/'><Image  width={'60px'} height={'60px'} src={lastsocial} /></Link></Box>
                        </HStack>
                    </Stack>
                </VStack>
            </VStack> */}

        </>
    )
}

export default Footer