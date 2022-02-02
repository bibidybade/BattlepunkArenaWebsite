/* eslint-disable */
import React, { useEffect, useState, useLayoutEffect, Component } from "react";
import logo from "../public/assets/images/still-assets/logo.png";
import LoadingScreen from "./splashscreen";
import $ from "jquery";

import { VStack, Box, Text, Stack, HStack } from "@chakra-ui/react";
import HeroSection from "../components/home/HeroSection.jsx";
import planet1 from "../public/assets/images/still-assets/planet-1.png";
import planet2 from "../public/assets/images/still-assets/planet-2.png";
import planet3 from "../public/assets/images/still-assets/planet-3.png";
import planet4 from "../public/assets/images/still-assets/planet-4.png";
import sitebg from "../public/assets/images/still-assets/site-bg.png";
import Spaceship from "../public/assets/images/still-assets/spaceship.png";
import Link from "next/link";
import Image from "next/image";
import EarnSection from "../components/home/EarnSection.jsx";
import WarRoom from "../components/home/WarRoom.jsx";
import DarkHoloRoom from "../components/home/DarkHoloRoom.jsx";
import OwlRoom from "../components/home/OwlRoom.jsx";
import HoloVideo from "../components/home/HoloVideo.jsx";
import CSVideo from "../components/home/CSVideo.jsx";
import discordicon from "../public/assets/images/still-assets/discord.png";
import instaicon from "../public/assets/images/still-assets/insta.png";
import twittericon from "../public/assets/images/still-assets/twitter.png";
import lastsocial from "../public/assets/images/still-assets/last-social.png";
import Header from "../components/header/Header.jsx";

export default function Home(props) {
  
  const [scrolled, setScrolled] = useState(false);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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

  function App() {
  }
  

  return (
    <>
    <>
    {loading === false ? (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      ) : (
        <LoadingScreen />
      )}
      </>

      <div
        style={{
          overflow: "hidden",
        }}
      >
        <Header />
        <Stack bgImage={`url(${sitebg.src})`}>
          <Box className="bgtop" pos={"fixed"} top={"0"} left={"0"}>
            <Image src={sitebg} />
          </Box>
          <Box
            className="top-planet-graphics"
            pos={"absolute"}
            top={["20rem", "32rem", "32rem", "32rem", "32rem", "32rem"]}
            left={"0"}
            style={{ transform: `translateY(-${offsetY * 0.15}px)` }}
          >
            <Image
              width={("400", "400", "400", "100px", "400", "540")}
              height={("400", "400", "400", "100px", "400", "540")}
              src={planet1}
            />
          </Box>
          <Box
            className="top-planet-graphics"
            pos={"absolute"}
            top={["20rem", "232rem", "232rem", "232rem", "232rem", "270em"]}
            right={"0"}
            style={{ transform: `translateY(-${offsetY * 0.032}px)` }}
          >
            <Image
              width={("400", "400", "300", "100", "400", "540")}
              height={("400", "400", "400", "100", "400", "540")}
              src={planet2}
            />
          </Box>
          <Box
            pos={"absolute"}
            top={["52rem", "52rem", "100rem", "100rem", "100rem", "120rem"]}
            left={"0"}
            style={{ transform: `translateY(-${offsetY * 0.06}px)` }}
          >
            <Image width={"160"} height={"160"} src={planet3} />
          </Box>
          <Box
            pos={"absolute"}
            top={["52rem", "52rem", "100rem", "100rem", "130rem", "150rem"]}
            right={"0"}
            style={{ transform: `translateY(-${offsetY * 0.25}px)` }}
          >
            <Image width={"160"} height={"160"} src={planet4} />
          </Box>
          <VStack position="relative" spacing="0">
            <HeroSection />
            <VStack w={["150%", "150%", "110%", "110%", "110%", "110%"]}>
              <Box position={"relative"}>
                <Image className="spaceship-img" src={Spaceship} />

                <WarRoom />
                <DarkHoloRoom />
                <OwlRoom />

                <HoloVideo />
                <EarnSection />
                <CSVideo />
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
                  top={"94%"}
                  left={["36%", "40%", "40%", "40%", "40%", "38%"]}
                      >
                          #WENBATTLE
                      </Text>
                  </Box>
                <Box cursor={"pointer"} className="footer-social-icon">
                  <Link href="https://discord.gg/battlepunkarena">
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
