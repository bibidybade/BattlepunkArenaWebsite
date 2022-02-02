/* eslint-disable */
import React, { useEffect, useState, useLayoutEffect, Component } from "react";
import $ from "jquery";

import {
  VStack,
  Box,
  Text,
  Stack,
  HStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import sitebg from "../public/assets/images/still-assets/site-bg.png";
import holoscreen from "../public/assets/images/still-assets/holoscreen.png";
import lsdbg from "../public/assets/images/still-assets/lsdbg.png";
import Link from "next/link";
import Image from "next/image";
import Lsdhero from "../components/home/lsdhero.jsx";
import discordicon from "../public/assets/images/still-assets/discord.png";
import instaicon from "../public/assets/images/still-assets/insta.png";
import twittericon from "../public/assets/images/still-assets/twitter.png";
import lastsocial from "../public/assets/images/still-assets/last-social.png";
import diagram from "../public/assets/images/still-assets/diagram.png";
import piechart from "../public/assets/images/still-assets/piechart.png";
import community from "../public/assets/images/still-assets/communityicon.png";
import governance from "../public/assets/images/still-assets/governanceicon.png";
import playtoearn from "../public/assets/images/still-assets/playtoearnicon.png";
import Header from "../components/header/Header.jsx";
import '/styles/theme/fonts.module.css'

export default function Home(props) {
  const [scrolled, setScrolled] = useState(false);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title = "Battlepunk Arena: $LSD"
  }, []);

  useLayoutEffect(() => {
    const handleScroll = (e) => {
      setScrolled(window.scrollY > 5500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  class App extends Component {
    componentDidMount() {
      const h1 = $("h1");
      console.log(h1);
    }
    render() {
      return <h1>Hello React</h1>;
    }
  }

  return (
    <>
      <div
        style={{
          overflow: "hidden"
        }}
      >
        <Header />
        <Stack bgImage={`url(${sitebg.src})`}>
          <Box className="bgtop" pos={"fixed"} top={"0"} left={"0"}>
            <Image src={lsdbg} />
          </Box>
          <VStack position="relative" spacing="0">
            <Lsdhero />
            <VStack w={["130%", "130%", "120%", "120%", "120%", "100%"]}>
              <Box position={"relative"}>
                <Image src={holoscreen} />
                <Box color={"#88effe"}>
                  <VStack
                    zIndex={"5"}
                    px={["2", "2", "4", "6", "7", "8"]}
                    pos={"absolute"}
                    top={"16%"}
                    w={["35%", "35%", "35%", "35%", "35%", "35%"]}
                    left={["55%", "50%", "50%", "50%", "48%", "48%"]}
                    translateX={"-12%"}
                    translateY={"-13%"}
                  >
                    <Image src={diagram} />
                  </VStack>
                </Box>
                <Box
                  color={"white"}
                  pos={"absolute"}
                  top={["16%", "15%", "18%", "18%", "18%", "18%"]}
                  left={"16%"}
                  transformX={"-14%"}
                  transformY={"-23%"}
                  w={["40%", "27%", "27%", "27%", "27%", "29%"]}
                  textAlign={"center"}
                >
                  <Heading
                    textShadow={"1px 1px 4px #043137"}
                    fontSize={["100%", "100%", "150%", "200%", "250%", "300%"]}
                    textTransform={"uppercase"}
                  >
                    powering the lunar system
                    <hr
                      style={{
                        color: "white",
                        backgroundColor: "white",
                        height: 5,
                      }}
                      boxShadow={"1px 1px 4px #000000"}
                    ></hr>
                  </Heading>
                  <Text lineHeight={"50%"}>
                    <br/></Text>
                  <Text
                  backgroundColor={'rgba(46, 166, 181, 0.4)'}
                  borderRadius={"3px"}
                  paddingLeft={"1.5"}
                  paddingBottom={"2"}
                  paddingTop={"2"}
                    className="lsdtext"
                    //textShadow={"-1px -1px 0 #2B949E, 1px -1px 0 #2B949E, -1px 1px 0 #2B949E, 1px 1px 0 #2B949E"}
                    fontWeight={"thin"}
                    textShadow={"1px 1px 2px #043137"}
                    fontSize={["9", "10", "14", "18", "23", "20"]}
                    fontFamily={"mono"}
                    textAlign={"left"}
                    color={"#ffffff"}
                  >
                    LSD is designed by The Lunar System Company as a powerful
                    utility token. Holders can utilize it to buy and sell
                    digital assets within the Lunar Ecosystem, as well as earning dividends in P2E Gameplay.
                    Holders of Battlepunk NFT's can earn Lunar System
                    Dollar passively through ingame farming
                    and holder rewards.
                  </Text>
                  <Text
                  backgroundColor={'rgba(55, 128, 137, 0.8)'}
                    className="lsdtext"
                    //textShadow={"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}
                    fontWeight={"thin"}
                    textShadow={"1px 1px 2px #043137"}
                    fontSize={["6", "8.5", "14", "15", "23", "20"]}
                    fontFamily={"heading"}
                    textAlign={"left"}
                    color={"#ffffff"}
                    visibility={["hidden", "hidden", "hidden", "hidden", "hidden", "hidden"]}
                  >
                    Players and holders of Battlepunks can earn Lunar System
                    Dollar passively through ingame farming
                    and holder rewards.
                  </Text>
                </Box>
                <Box>
                  <HStack color={"white"}>
                    <Box
                      pos={"absolute"}
                      top={"49%"}
                      left={"12%"}
                      translateX={"-12%"}
                      translateY={"-47%"}
                    >
                      <VStack
                        zIndex={"5"}
                        px={["0", "2", "4", "6", "7", "8"]}
                        pos={"absolute"}
                        top={["-100%", "-50%", "-110%", "-100%", "-100%", "-100%", ]}
                        left={["30%", "28%", "20%", "20%", "20%", "18%"]}
                        w={["35%", "40%", "50%", "55%", "55%", "60%"]}
                        className={"iconfloatB"}
                        //left={["55%", "30%", "30%", "30%", "48%", "48%"]}
                        //translateX={"-12%"}
                        //translateY={"-13%"}
                      >
                        <Image src={community} />
                      </VStack>
                      <Heading
                        px={["20px", "25px", "50px", "50px", "50px", "50px"]}
                        textShadow={"1px 1px 4px #073339"}
                        fontSize={["8", "10", "sm", "22", "30", "40"]}
                      >
                          <br></br>
                        Community
                      </Heading>
                    </Box>
                    <Box
                      pos={"absolute"}
                      top={"51.1%"}
                      left={"39%"}
                      translateX={"-43%"}
                      translateY={"-47%"}
                    >
                    <VStack
                        zIndex={"5"}
                        px={["0", "2", "4", "6", "7", "8"]}
                        pos={"absolute"}
                        top={["-300%", "-200%", "-300%", "-300%", "-300%", "-300%"]}
                        left={["25%", "28%", "20%", "20%", "20%", "18%"]}
                        w={["60%", "40%", "50%", "55%", "55%", "60%"]}
                        className={"iconfloatB"}
                        //left={["55%", "30%", "30%", "30%", "48%", "48%"]}
                        //translateX={"-12%"}
                        //translateY={"-13%"}
                    >
                      <Image src={playtoearn} />
                    </VStack>
                      <Heading
                        px={["0px", "25px", "50px", "50px", "50px", "50px"]}
                        textShadow={"1px 1px 4px #073339"}
                        fontSize={["8", "10", "sm", "22", "30", "40"]}
                      >
                        play to earn
                      </Heading>
                    </Box>
                    <Box
                      pos={"absolute"}
                      top={"51.1%"}
                      left={"65%"}
                      translateX={"-73%"}
                      translateY={"-47%"}
                    >
                    <VStack
                        zIndex={"5"}
                        px={["0", "2", "4", "6", "7", "8"]}
                        pos={"absolute"}
                        top={["-300%", "-200%", "-300%", "-300%", "-300%", "-300%"]}
                      left={["32%", "28%", "25%", "18%", "18%", "18%"]}
                      w={["35%", "40%", "50%", "55%", "55%", "60%"]}
                      className={"iconfloatB"}
                      //left={["55%", "30%", "30%", "30%", "48%", "48%"]}
                      //translateX={"-12%"}
                      //translateY={"-13%"}
                    >
                      <Image src={governance} />
                    </VStack>
                      <Heading
                        px={["20px", "25px", "50px", "50px", "50px", "50px"]}
                        textShadow={"1px 1px 4px #073339"}
                        fontSize={["8", "10", "sm", "22", "30", "40"]}
                      >
                        governance
                      </Heading>
                    </Box>
                  </HStack>
                </Box>
                <Box color={"#88effe"}>
                  <VStack
                    zIndex={"5"}
                    px={["2", "2", "4", "6", "7", "8"]}
                    pos={"absolute"}
                    top={"56.5%"}
                    w={["47.5%", "47.5%", "47.5%", "47.5%", "47.5%", "47.5%"]}
                    left={["11%", "11%", "11%", "11%", "11%", "11%"]}
                    translateX={"-12%"}
                    translateY={"-13%"}
                  >
                    <Image src={piechart} />
                  </VStack>
                </Box>
                <Box
                  className="lsd-distribution"
                  textAlign={"center"}
                  color={"white"}
                  pos={"absolute"}
                  top={"60%"}
                  left={"54%"}
                  translateX={"-54%"}
                  translateY={"-53%"}
                  w={["32%", "27%", "27%", "27%", "32%", "30%"]}
                >
                  <Heading
                    textShadow={"1px 1px 4px #043137"}
                    fontSize={["50%", "50%", "100%", "150%", "200%", "250%"]}
                  >
                    $LSD distribution
                    <hr
                      style={{
                        color: "white",
                        backgroundColor: "white",
                        height: 3,
                      }}
                      boxShadow={"1px 1px 4px #000000"}
                    ></hr>
                  </Heading>
                  <Text lineHeight={"20%"}>
                    <br/></Text>
                  <Text
                  backgroundColor={'rgba(46, 166, 181, 0.4)'}
                  borderRadius={"3px"}
                  paddingLeft={"1.5"}
                  paddingBottom={"2"}
                  paddingTop={"2"}
                    className="lsdtext"
                    //textShadow={"-1px -1px 0 #2B949E, 1px -1px 0 #2B949E, -1px 1px 0 #2B949E, 1px 1px 0 #2B949E"}
                    fontWeight={"thin"}
                    textShadow={"1px 1px 2px #043137"}
                    fontSize={["9", "10", "14", "18", "23", "20"]}
                    fontFamily={"mono"}
                    textAlign={"left"}
                    color={"#ffffff"}
                  >
                    LSD has a maximum suppy of 300,000,000 tokens however, the initial circulating supply is set to 75,000,000 LSD - 25% of the total supply.
                    LSD will be unlocked in a pre-determined schedule which lasts for 64 months from the public sale. 
                  </Text>
                </Box>

                <Box>
                  <HStack color={"white"} textAlign={"center"}>
                    <Box
                      pos={"absolute"}
                      top={"82%"}
                      left={["14%", "12%", "10%", "10%", "14%", "14%"]}
                      translateX={"-12%"}
                      translateY={"-76%"}
                    >
                      <Heading
                        textShadow={"1px 1px 4px #ffffff82"}
                        px={["0px", "25px", "50px", "50px", "50px", "10px"]}
                        //textShadow={"1px 1px 4px #073339"}
                        fontSize={["8", "10", "18", "22", "30", "40"]}
                        >
                        75,000.00
                      </Heading>
                      <Text
                        px={["0px", "25px", "50px", "50px", "50px", "10px"]}
                        textShadow={"1px 1px 4px #073339"}
                        fontSize={["8", "10", "18", "22", "30", "32"]}>
                        initial supply
                      </Text>
                    </Box>
                    <Box
                      pos={"absolute"}
                      top={"82%"}
                      left={["39%", "36%", "35%", "35%", "40%", "40%"]}
                      translateX={"-41%"}
                      translateY={"-76%"}
                    >
                      <Heading
                        textShadow={"1px 1px 4px #ffffff82"}
                        fontSize={["8", "10", "18", "22", "30", "40"]}
                      >
                        $0.50
                      </Heading>
                      <Text
                        px={["0px", "25px", "50px", "50px", "50px", "10px"]}
                        textShadow={"1px 1px 4px #073339"}
                        fontSize={["8", "10", "18", "22", "30", "32"]}>
                        public sale price
                      </Text>
                    </Box>
                    <Box
                      pos={"absolute"}
                      top={"82%"}
                      left={["68%", "63%", "62%", "63%", "68%", "68%"]}
                      translateX={"-70%"}
                      translateY={"-76%"}
                    >
                      <Heading
                        textShadow={"1px 1px 4px #ffffff82"}
                        fontSize={["8", "10", "18", "22", "30", "40"]}
                      >
                        300,000.00
                      </Heading>
                      <Text
                        px={["0px", "25px", "50px", "50px", "50px", "10px"]}
                        textShadow={"1px 1px 4px #073339"}
                        fontSize={["8", "10", "18", "22", "30", "32"]}>
                        total supply
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              </Box>
              <Stack
                color={"white"}
                py={{
                  base: "2rem",
                  md: "4rem",
                  lg: "16",
                  xl: "28",
                  "2xl": "32",
                }}
              >
                <HStack>
                    <Box>
                        <Text
                    textShadow={"1px 1px 4px #043137"}
                    fontSize={["100%", "100%", "150%", "200%", "250%", "300%"]}
                    textTransform={"uppercase"}
                    pos={"absolute"}
                    top={"90%"}
                    left={["36%", "40%", "40%", "40%", "40%", "38%"]}
                        >
                            #WENBATTLE
                        </Text>
                    </Box>
                  <Box cursor={"pointer"} className="footer-social-icon">
                    <Link href="https://discord.gg/battlepunkarena ">
                      <Image width={"60px"} height={"60px"} src={discordicon} />
                    </Link>
                  </Box>
                  <Box cursor={"pointer"} className="footer-social-icon">
                    <Link href="https://www.instagram.com/battlepunkarena/">
                      <Image width={"60px"} height={"60px"} src={instaicon} />
                    </Link>
                  </Box>
                  <Box cursor={"pointer"} className="footer-social-icon">
                    <Link href="https://twitter.com/BattlepunkNFT">
                      <Image width={"60px"} height={"60px"} src={twittericon} />
                    </Link>
                  </Box>
                  <Box cursor={"pointer"} className="footer-social-icon">
                    <Link href="https://opensea.io/">
                      <Image width={"60px"} height={"60px"} src={lastsocial} />
                    </Link>
                  </Box>
                </HStack>
              </Stack>

              {/* <VStack
            position="fixed"
            right="3"
            bottom="0"
            transform={scrolled && 'rotate(20deg) translateX(200px)'}
            transitionDuration={'0.5s'}
            zIndex={'99'}
            d={{ base: 'none', md: 'none', lg: 'block' }}
          >
         
            <VStack
              position="absolute"
              right="0"
              top="7"
              color="white"
              h="110px"
              alignItems="center"
              justifyContent="center"
              w="full"
            >
              <Text lineHeight="1">Need help?</Text>
              <Box h="30px" w="30px">
              </Box>
              <Text lineHeight="1" fontWeight="bold">
                <Link href='https://www.discord.com'> Join our Discord</Link>
              </Text>
            </VStack>
          </VStack> */}
            </VStack>
          </VStack>
        </Stack>
      </div>
    </>
  );
}
