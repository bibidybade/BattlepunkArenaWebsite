import {
  Text,
  Box,
  VStack,
  HStack,
  Heading,
  Stack,
  Button,
} from "@chakra-ui/react";
import { React, useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
// import herocard1 from "../../public/assets/images/hologram_01.svg";
import herobg from "../../public/assets/images/still-assets/hero_planet.png";
import herobearship from "../../public/assets/images/still-assets/hero_bearship.png";
import herosmitten from "../../public/assets/images/still-assets/hero_smitten.png";
import heroarmed from "../../public/assets/images/still-assets/hero_armed.png";
import herometeormite from "../../public/assets/images/still-assets/hero_meteormite.png";
import lsdpanel from "../../public/assets/images/still-assets/lsdpanel1.png";
import coin from "../../public/assets/images/still-assets/coin.png";

// import planet1 from "../../public/assets/images/still-assets/planet-1.png";
// import Image from 'next/image';

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
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

  return (
    <>
      <Box w="full" style={{ transform: `translateY(+${offsetY * 0.3}px)` }}>
        <VStack
          className="absolute"
          h={{ base: "50vh", md: "70vh", lg: "80vh", xl: "90vh" }}
          w="80%"
          left="10%"
          bgImage={`url(${lsdpanel.src})`}
          bgSize={{ base: "contain", md: "contain", lg: "contain" }}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          visibility={[
            "visible",
            "visible",
            "visible",
            "hidden",
            "hidden",
            "hidden",
          ]}
        >
          <Text
            color={"#ffffff"}
            pos={"absolute"}
            top={"43.6%"}
            left={"12%"}
            maxW={"76%"}
            fontSize={["80%", "100%", "150%", "120%", "120%", "150%"]}
            lineHeight={"1em"}
            textShadow={"2px 2px 10px #000000"}
          >
            The ERC-20 token at the heart of the Lunar Ecosystem.{" "}
          </Text>

          <Button
            _hover={{ bg: "none" }}
            opacity={"0"}
            _active={{ bg: "none" }}
            textShadow={"2px 2px 10px #88effe"}
            bg={"transparent"}
            h={["1.2rem", "1.4rem", "2.4rem", "3rem", "4rem", "4.8rem"]}
            px={["2", "2", "4", "6", "7", "8"]}
            fontSize={["63%", "88%", "150%", "120%", "120%", "150%"]}
            textTransform={"uppercase"}
            pos={"absolute"}
            top={["53%", "54.5%", "53%", "51%", "52%", "52%"]}
            left={["11%", "11%", "11%", "9%", "9%", "9%"]}
            translateX={"-12%"}
            translateY={"-13%"}
            zIndex={1000}
          >
            <Link href={"https://t.me/TheLunarSystem"}>buy now</Link>
          </Button>
          <Button
            _hover={{ bg: "none" }}
            opacity={"0"}
            _active={{ bg: "none" }}
            textShadow={"2px 2px 10px #88effe"}
            bg={"transparent"}
            h={["1.2rem", "1.4rem", "2.4rem", "3rem", "4rem", "4.8rem"]}
            px={["2", "2", "4", "6", "7", "8"]}
            fontSize={["63%", "88%", "150%", "120%", "120%", "150%"]}
            textTransform={"uppercase"}
            pos={"absolute"}
            top={["53%", "54.5%", "53%", "51%", "52%", "52%"]}
            left={["36%", "36%", "36%", "32%", "32%", "32%"]}
            translateX={"-30%"}
            translateY={"-13%"}
            zIndex={1000}
          >
            <Link
              href={
                "mailto:partners@lunarsystem.co?subject=Private Sale Inquiry"
              }
            >
              Private Sale
            </Link>
          </Button>
          <Button
            _hover={{ bg: "none" }}
            opacity={"0"}
            _active={{ bg: "none" }}
            textShadow={"2px 2px 10px #88effe"}
            bg={"transparent"}
            h={["1.2rem", "1.4rem", "2.4rem", "3rem", "4rem", "4.8rem"]}
            px={["2", "2", "4", "6", "7", "8"]}
            fontSize={["63%", "88%", "150%", "120%", "120%", "150%"]}
            textTransform={"uppercase"}
            pos={"absolute"}
            top={["53%", "54.5%", "53%", "51%", "52%", "52%"]}
            left={["64%", "64%", "64%", "61%", "61%", "61%"]}
            translateX={"-49%"}
            translateY={"-13%"}
            zIndex={1000}
          >
            <Link
              href={
                "https://info-140.gitbook.io/lunar-system-dollar-whitepaper/"
              }
            >
              Whitepaper
            </Link>
          </Button>
        </VStack>
        <VStack
          className="absolute"
          h={{ base: "50vh", md: "70vh", lg: "80vh", xl: "90vh" }}
          w="45%"
          left="10%"
          bgImage={`url(${lsdpanel.src})`}
          bgSize={{ base: "contain", md: "contain", lg: "contain" }}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          visibility={[
            "hidden",
            "hidden",
            "hidden",
            "visible",
            "visible",
            "visible",
          ]}
        >
          <Text
            color={"#ffffff"}
            pos={"absolute"}
            top={"44%"}
            left={"12%"}
            maxW={"76%"}
            fontSize={["120%", "120%", "120%", "120%", "120%", "150%"]}
            lineHeight={"1em"}
            textShadow={"2px 2px 10px #000000"}
          >
            The ERC-20 token at the heart of the Lunar Ecosystem.{" "}
          </Text>
        </VStack>
        <VStack
          opacity={"0"}
          zIndex={100000}
          textShadow={"2px 2px 10px #88effe"}
          bg={"transparent"}
          h={["1.2rem", "1.4rem", "2.4rem", "3rem", "4rem", "4.8rem"]}
          px={["2", "2", "4", "6", "7", "8"]}
          textTransform={"uppercase"}
          pos={"absolute"}
          top={["89%", "90.5%", "76%", "84%", "96%", "96%"]}
          left={["17%", "17%", "18%", "14%", "14%", "13%"]}
          fontSize={["62%", "87%", "135%", "100%", "130%", "150%"]}
          translateX={"-49%"}
          translateY={"-13%"}
        >
          <Link
            href={"https://t.me/TheLunarSystem"}
          >
            Telegram
          </Link>
        </VStack>
        <VStack
          opacity={"0"}
          zIndex={100000}
          textShadow={"2px 2px 10px #88effe"}
          bg={"transparent"}
          h={["1.2rem", "1.4rem", "2.4rem", "3rem", "4rem", "4.8rem"]}
          px={["2", "2", "4", "6", "7", "8"]}
          textTransform={"uppercase"}
          pos={"absolute"}
          top={["89%", "90.5%", "76%", "84%", "96%", "96%"]}
          left={["40%", "40%", "39%", "25%", "25%", "25%"]}
          fontSize={["62%", "87%", "135%", "100%", "130%", "150%"]}
          translateX={"-49%"}
          translateY={"-13%"}
        >
          <Link
            href={"mailto:partners@lunarsystem.co?subject=Private Sale Inquiry"}
          >
            Private Sale
          </Link>
        </VStack>
        <VStack
          opacity={"0"}
          zIndex={100000}
          textShadow={"2px 2px 10px #88effe"}
          bg={"transparent"}
          h={["1.2rem", "1.4rem", "2.4rem", "3rem", "4rem", "4.8rem"]}
          px={["2", "2", "4", "6", "7", "8"]}
          textTransform={"uppercase"}
          pos={"absolute"}
          top={["89%", "90.5%", "76%", "84%", "96%", "96%"]}
          left={["60%", "62%", "62%", "38%", "38%", "37%"]}
          fontSize={["62%", "87%", "135%", "100%", "130%", "150%"]}
          translateX={"-49%"}
          translateY={"-13%"}
        >
          <Link
            href={"https://info-140.gitbook.io/lunar-system-dollar-whitepaper/"}
          >
            Whitepaper
          </Link>
        </VStack>
        <VStack
          className="animatedoctopus"
          h={{ base: "50vh", md: "70vh", lg: "80vh", xl: "90vh" }}
          w="30.5%"
          left="59.5%"
          bgImage={`url(${coin.src})`}
          bgSize={{ base: "contain", md: "contain", lg: "contain" }}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          visibility={[
            "hidden",
            "hidden",
            "hidden",
            "visible",
            "visible",
            "visible",
          ]}
        ></VStack>
        <VStack
          className="animatedmite"
          h={{ base: "30vh", md: "50vh", lg: "50vh", xl: "50vh" }}
          w="full"
          bgImage={`url(${herometeormite.src})`}
          bgSize={{ base: "contain", md: "contain", lg: "contain" }}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          opacity="0%"
        ></VStack>
      </Box>
    </>
  );
};

export default HeroSection;
