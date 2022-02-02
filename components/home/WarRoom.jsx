import React from "react";


import { Stack, HStack, VStack, Box, Button, Text } from "@chakra-ui/react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Image from "next/image";
import Link from "next/link";
import discordicon from "../../public/assets/images/still-assets/discord.png";
import instaicon from "../../public/assets/images/still-assets/insta.png";
import twittericon from "../../public/assets/images/still-assets/twitter.png";
import lastsocial from "../../public/assets/images/still-assets/last-social.png";
import warbg from "../../public/assets/images/still-assets/war-room.png";
const WarRoom = () => {
  return (
    <>
      <Stack className="section war-room-sec" spacing="24px">
        <VStack
          zIndex={"10"}
          className="mint-now-box"
          pos={"absolute"}
          top={["15%", "14.6%", "15%", "15.3%", "15.7%", "15.7%"]}
          left={["50.7%", "52%", "50%", "52%", "52%", "52%"]}
          translateX={["-52%"]}
          translateY={["-16.4%"]}
        >
          <Button
            bgColor={"transparent"}
            _hover={"transparent"}
            _active={"transparent"}
          >
            <Link href={"/"} passHref>
              <Text
                fontSize={["13", "18", "16", "20", "22", "34"]}
                color={"white"}
                fontFamily={"Obvia"}
                opacity={0}
              >
                <br/>
                <br/>
                MINT NOW
              </Text>
            </Link>
          </Button>
        </VStack>

        <HStack
          zIndex={"10"}
          spacing={["10px", "14px", "14px", "6px", "6px", "14px"]}
        >
          <Box
            pos={"absolute"}
            className="warroom-icon-box"
            top={["16.1%", "17.2%", "17.7%", "18.1%", "18.4%", "18.6%"]}
            left={["39.2%", "39.2%", "39.2%", "39.2%", "39.2%", "39.2%"]}
            translateX={["-39.2%"]}
            translateY={["-18.5%"]}
            width={["4.5vw"]}
            height={["4.5vw"]}
            cursor={"pointer"}
          >
            <Link href="https://discord.gg/battlepunkarena" passHref>
              <Image src={discordicon} alt="Discor Link"/>
            </Link>
          </Box>
          <Box
            className="warroom-icon-box"
            pos={"absolute"}
            top={["16.1%", "17.2%", "17.7%", "18.1%", "18.4%", "18.6%"]}
            left={["42%", "42%", "42.7%", "44.1%", "44.4%", "44%"]}
            translateX={["-44%"]}
            translateY={["-18.5%"]}
            width={["4.5vw"]}
            height={["4.5vw"]}
            cursor={"pointer"}
          >
            <Link href="https://www.instagram.com/battlepunkarena/" passHref>
              <Image src={instaicon} alt={"Instagram Link"}/>
            </Link>
          </Box>
          <Box
            className="warroom-icon-box"
            pos={"absolute"}
            top={["16.1%", "17.2%", "17.7%", "18.1%", "18.4%", "18.6%"]}
            left={["47.5%", "47.5%", "48.4%", "49.7%", "49.9%", "49.5%"]}
            translateX={["-49.5%"]}
            translateY={["-18.5%"]}
            width={["4.5vw"]}
            height={["4.5vw"]}
            cursor={"pointer"}
          >
            <Link href="https://twitter.com/BattlepunkNFT" passHref>
              <Image src={twittericon} alt={"twitter link"}/>
            </Link>
          </Box>
          <Box
            className="warroom-icon-box"
            pos={"absolute"}
            top={["16.1%", "17.2%", "17.7%", "18.1%", "18.4%", "18.6%"]}
            left={["53%", "53%", "54%", "55.4%", "55.5%", "55%"]}
            translateX={["-55%"]}
            translateY={["-18.5%"]}
            width={["4.5vw"]}
            height={["4.5vw"]}
            cursor={"pointer"}
          >
            <Link href="https://opensea.io/" passHref>
              <Image src={lastsocial} alt={"Opensea Link"}/>
            </Link>
          </Box>
        </HStack>
      </Stack>
    </>
  );
};

export default WarRoom;
