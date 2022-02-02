import React from "react";
import { Stack, Box, Text } from "@chakra-ui/react";
import darkholoroom from "../../public/assets/images/still-assets/dark-holo-room.png";
import Image from "next/image";

const DarkHoloRoom = () => {
  return (
    <>
      <Stack className="section darkholo-sec">
        <Stack
          className="section-inner-content"
          fontSize={["3", "5", "7", "9", "10", "xs"]}
          color={"#8ceffe"}
          direction={["row"]}
          textAlign="center"
        >
          <Box
            className="inner-box"
            zIndex={"1"}
            pos={"absolute"}
            top={["23%", "24%", "24%", "25%", "25%", "26%"]}
            left={["27%", "26%", "27%", "26%", "27%", "27%"]}
            opacity={"0"}
          >
            {/* <Heading fontSize={['2xl', '2xl', '2xl', '4xl']} pt="3" >Adventure</Heading> */}
            <Text
              maxW={["30px", "40px", "60px", "88px", "105px", "140px"]}
              mx="auto"
            >
              Over 350 Breeds of Genesis Punkies!
            </Text>
          </Box>
          <Box
            className="inner-box"
            zIndex={"1"}
            pos={"absolute"}
            top={["23%", "24%", "24%", "25%", "25%", "26%"]}
            left={["45%", "44%", "45%", "44%", "45%", "46%"]}
            opacity={"0"}
          >
            {/* <Heading fontSize={['2xl', '2xl', '2xl', '4xl']} pt="3">Adventure</Heading> */}
            <Text
              maxW={["30px", "40px", "60px", "88px", "105px", "140px"]}
              mx="auto"
            >
              Earn Crypto in Epic P2E Battles.
            </Text>
          </Box>
          <Box
            className="inner-box"
            zIndex={"1"}
            pos={"absolute"}
            top={["23%", "24%", "24%", "25%", "25%", "26%"]}
            left={["62%", "63%", "63%", "62%", "63%", "64%"]}
            opacity={"0"}
          >
            {/* <Heading fontSize={['2xl', '2xl', '2xl', '4xl']} pt="3">Adventure</Heading> */}
            <Text
              maxW={["30px", "40px", "60px", "88px", "105px", "140px"]}
              mx="auto"
            >
              Be the first to discover new rare breeds!
            </Text>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default DarkHoloRoom;
