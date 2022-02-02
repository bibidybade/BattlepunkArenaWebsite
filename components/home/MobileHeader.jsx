import React from 'react'
import { useDisclosure, RadioGroup, Stack, Radio, Button, Input, Box, Spacer } from '@chakra-ui/react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import Link from 'next/link'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { } from '@chakra-ui/icons'
const MobileHeader = () => {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button height={'30px'} ref={btnRef} bg='transparent' color='white' onClick={onOpen} >
                <HamburgerIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg='rgba(0, 0, 0, 0.70)' color='white' h='full'>
                    <Button  height={'30px'} bg='transparent' color='white' onClick={onClose} _hover={"bg: transparent"}>
                    <DrawerCloseButton />
                    </Button>
                    <DrawerBody fontSize={'lg'} fontWeight={'medium'} filter={"drop-shadow(4px 4px 4px #000000)"} textAlign={'center'}>
                        <Box mb='4' pl={{ base: '0', md: '0', lg: '4' }} mx='2'>
                            <Link href="/" _hover={{ bg: '#ebedf0' }}   >
                                <a>Home</a>
                            </Link>
                        </Box>
                        <Box mb='4' mx='2'>
                            <Link href="/"  passHref>
                            <Tippy theme="bigger" content="Sale Not Active">
                                <a>Mint</a>
                                </Tippy>
                            </Link>
                        </Box>
                        <Box mb='4' mx='2'>
                            <Link href="/"  passHref>
                            <Tippy theme="bigger" content="Coming Very Soon!">
                                <a>Punkydex</a>
                                </Tippy>
                            </Link>
                        </Box>
                        <Box mb='4' mx='2'>
                            <Link href="/axs"  passHref>
                            <Tippy theme="bigger" content="Under Construction">
                                <a>Arena Market</a>
                                </Tippy>
                            </Link>
                        </Box>
                        <Spacer />
                        <Box mb='4' mx='2'>
                            <Link href="/"  passHref>
                            <Tippy theme="bigger" content="Coming Soon: See Battlepaper for planned Release Date">
                                <a>Play</a>
                                </Tippy>
                            </Link>
                        </Box>
                        <Box mb='4' mx='2'>
                            <Link href="/lsd">
                                <a>$LSD</a>
                            </Link>
                        </Box>
                        <Box mb='4' mx='2'>
                            <Link href="/"  passHref>
                            <Tippy theme="bigger" content="Coming Soon">
                                <a>Punkon</a>
                                </Tippy>
                            </Link>
                        </Box>
                        <Box mb='4' mx='2'>
                            <Link href="https://s3.eu-central-1.amazonaws.com/lunarsystem.co/Battlepaper.pdf" >
                                <a >Battlepaper</a>
                            </Link>
                        </Box>
                        <Box mb='4' mx='2'>
                            <Link href="/"  passHref>
                            <Tippy theme="bigger" content="Coming Soon">
                                <a >FAQ</a>
                                </Tippy>
                            </Link>
                        </Box>
                        <Box mb='4' mx='2'>
                            <Link href="/"  passHref>
                            <Tippy theme="bigger" content="Coming Soon: email us at info@lunarsystem.co about partnership inquiries">
                                <a >Partners</a>
                                </Tippy>
                            </Link>
                        </Box>

                    </DrawerBody>

                    <DrawerFooter justifyContent={'flex-start'}>
                        {/* <Button fontSize={{ base: '12px', md: '16px' }} _hover={{ background: 'auto' }} _active={{ background: 'auto' }} w='200px' background={'transparent'} bgImage={`url(${buttonleftbg.src})`} bgRepeat={{ base: 'round', md: 'round', lg: 'no-repeat' }} bgSize={'cover'} textTransform={'uppercase'}>
                            mint
                        </Button>
                        <Button fontSize={{ base: '12px', md: '16px' }} _hover={{ background: 'auto' }} _active={{ background: 'auto' }} w='200px' background={'transparent'} bgImage={`url(${buttonrightbg.src})`} bgRepeat={{ base: 'round', md: 'round', lg: 'no-repeat' }} bgSize={'cover'} textTransform={'uppercase'}>
                            join discord
                        </Button> */}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}



export default MobileHeader
