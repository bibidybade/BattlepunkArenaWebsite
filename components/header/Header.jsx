import React from "react";
import { Flex, chakra, Spacer, Button, Box } from "@chakra-ui/react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from "next/image";
import headerBg from "../../public/assets/images/still-assets/navbar.png";

import Link from "next/link";
import MobileHeader from "../home/MobileHeader";

const Header = () => {
  const ChakraNextImage = chakra(Image);
  return (
    <>
      <Flex
        className="header-wrapper"
        position="fixed"
        top="-4.6px"
        zIndex="1000"
        px={{ base: "5", md: "2" }}
        h={["7rem", "6rem", "6rem", "5.5rem", "7rem", "14vh"]}
        w="full"
        bgPos={"center"}
        justifyContent={{ base: "right", md: "right", lg: "space-between" }}
        alignSelf={"center"}
        bgImage={`url(${headerBg.src})`}
        bgRepeat={"no-repeat"}
        bgSize={{ base: "cover", md: "cover", lg: "contain" }}
      >
        <Flex
          alignItems={"start"}
          pt={{ base: "0", md: "0", lg: "0", xl: "0", "2xl": "2" }}
          d={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
          mx="auto"
          w={["100%", "100%", "100%", "100%", "86%", "86%"]}
          px="0 !Important"
        >
          <Flex
            color="white"
            fontSize={"sm, sm, sm, lg, lg, lg"}
            fontWeight={"medium"}
            filter={"drop-shadow(4px 4px 4px #000000)"}
            alignItems={"center"}
            justifyContent="space-evenly"
            w="full"
            className="headrLink"
          >
            <Box pl="8" mx="2">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Box>
            <Box mx="2">
              <Link href={"/mint"} passHref>
                <Tippy theme="bigger" content="Sale Not Active">
                  <a>Mint</a>
                </Tippy>
              </Link>
            </Box>
            <Box mx="2">
              <Link href={"/punkydex"} passHref>
                <Tippy theme="bigger" content="Coming Very Soon!">
                  <a>Punkydex</a>
                </Tippy>
              </Link>
            </Box>
            <Box mx="2">
              <Link href={"/market"} passHref>
                <Tippy theme="bigger" content="Under Construction">
                  <a>Arena Market</a>
                </Tippy>
              </Link>
            </Box>
            <Box mx="2">
              <Link href={"/play"} passHref>
                <Tippy theme="bigger" content="Coming Soon: See Battlepaper for planned Release Date">
                  <a>Play</a>
                </Tippy>
              </Link>
            </Box>
            <Spacer />
            <Box mx="2">
              <Link href="/lsd">
                <a>$LSD</a>
              </Link>
            </Box>
            <Box mx="2">
              <Link href={"/"} passHref>
                <Tippy theme="bigger" content="Coming Soon">
                  <a>Punkon</a>
                </Tippy>
              </Link>
            </Box>
            <Box mx="2">
              <Link href={"https://s3.eu-central-1.amazonaws.com/lunarsystem.co/Battlepaper.pdf"}>
                  <a>Battlepaper</a>
              </Link>
            </Box>
            <Box mx="2">
              <Link href={"/"} passHref>
                <Tippy theme="bigger" content="Coming Soon">
                  <a>FAQ</a>
                </Tippy>
              </Link>
            </Box>
            <Box mx="2">
              <Link href={"/"}  passHref>
                <Tippy theme="bigger" content="Coming Soon: email us at info@lunarsystem.co about partnership inquiries">
                  <a>Partners</a>
                </Tippy>
              </Link>
            </Box>

            <Box mx="2" color="white"></Box>
          </Flex>
        </Flex>
        <Flex d={{ base: "block", md: "block", lg: "none", xl: "none" }}>
          <MobileHeader d={{ base: "block", md: "block", lg: "flex" }} />
        </Flex>
      </Flex>
      {/* <Flex className='header-bottom-area' w='100%' d={{base:'none',md:'none',lg:'flex'}} py={['1em !important','1em !important','1em !important','0px !important','2px !important','4px !important']} padding={['120px','120px','120px','2em','13sem','16em']} color='#8beffe' position="fixed" top={['2.5rem','2.5rem','2.5rem','2.4rem','2.4rem','3.6rem']} zIndex="1000" px={{ base: '5', md: '4rem', lg:'2.6rem', xl:'11%', '2xl':'10rem' }} h={'16vh','16vh','16vh','10vh','16vh','16vh'} bgPos={'center'} justifyContent={'space-between'} alignSelf={'center'} >
                <Box>
                    <Button _hover={{background:'auto'}} _active={{background:'auto'}} w='200px' background={'transparent'} bgImage={`url(${buttonleftbg.src})`} bgRepeat={'no-repeat'} bgSize={'cover'} textTransform={'uppercase'}>
                        mint
                    </Button>
                </Box>
                <Spacer />
                <Box>
                    <Button _hover={{background:'auto'}} _active={{background:'auto'}} w='200px' background={'transparent'} bgImage={`url(${buttonrightbg.src})`} bgRepeat={'no-repeat'} bgSize={'cover'} textTransform={'uppercase'}>
                        join discord
                    </Button>     
                </Box>
                 
            </Flex> */}
    </>
  );
};

export default Header;
