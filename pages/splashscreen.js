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
import splashbg from "../public/assets/images/still-assets/splashbg.png";
import Image from "next/image";
import logo from "../public/assets/images/still-assets/logo.png";
import Header from "../components/header/Header.jsx";

export default function Home(props) {
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
      <div
        style={{
          overflow: "hidden"
        }}
      >
        <Header />
        <Stack bgImage={`url(${splashbg.src})`}  zIndex={99999999999}>
          <Box className="bgtop" pos={"fixed"} top={"0"} left={"0"}>
          </Box>
          <VStack position="fixed" top={"0%"} left={"0%"} w={"100%"} spacing="0" zIndex={100} backgroundColor={'#064050'}>
            <Image src={splashbg}/>
            </VStack>

            <VStack className="coinfloat" position="fixed" top={"45%"} left={"41%"} w={"20%"} spacing="0" zIndex={101}>
            <Image src={logo} />
            </VStack>
        </Stack>
      </div>
    </>
  );
}
