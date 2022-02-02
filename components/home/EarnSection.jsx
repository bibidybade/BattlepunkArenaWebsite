import {
  VStack,
  HStack,
  Text,
  Heading,
  Box,
  Flex,
  Stack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import cardssecbg from "../../public/assets/images/still-assets/museum-room.png";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const EarnSection = () => {
  return (
    <>
      <VStack w="74%" mx="auto" fontSize={"xs"}>
        <Stack pb="12" className="section earn-sec">
          <Stack
            className="section-inner-content"
            mx="auto"
            fontSize={["10", "12", "12", "16", "22", "26"]}
            color={"#003f75"}
            direction={["row"]}
            textAlign="center"
            spacing={["8px", "13px", "5.8em", "4.6em", "6.3em", "9em"]}
          >
            <Box zIndex={"10"} className="first-box" opacity={"0"}>
              <tippy
                theme="hologram"
                className="tipper"
                content="Discover the lush biodiversity of Planet Punkon as you play through the campaign mode, taking on new challengers and earning crypto along the way!"
              >
                <Text
                  mx="auto"
                  //maxW={["46px", "60px", "70px", "98px", "128px", "150px"]}
                  translateX={"-20%"}
                  translateY={"74%"}
                  pos={"absolute"}
                  top={["65%", "66.6%", "69.84%", "71%", "72%", "72.55%"]}
                  left={"20.4%"}
                  fontSize={["15.5", "12", "14", "21", "23.7", "25.5"]}
                  px="2"
                  //lineHeight={["4px", "35px", "15px", "9px", "15.5px", "12px"]}
                >
                  <br></br>
                  EXPLORE
                </Text>
              </tippy>
            </Box>
            <Box zIndex={"10"} className="inner-box" opacity={"0"}>
              <tippy
                theme="hologram"
                className="tipper"
                content="Collect rare and wonderful alien creatures known as 'Punkies'"
              >
                <Text
                  mx="auto"
                  //maxW={["46px", "60px", "70px", "98px", "128px", "144px"]}
                  translateX={"-32%"}
                  translateY={"80%"}
                  pos={"absolute"}
                  top={["65%", "66.6%", "69.84%", "71%", "72%", "72.55%"]}
                  left={"36.9%"}
                  fontSize={["15.5", "12", "14", "21", "23.7", "25.5"]}
                  px="2"
                  //lineHeight={["4px", "35px", "15px", "9px", "15.5px", "12px"]}
                >
                  <br></br>
                  COLLECT
                </Text>
              </tippy>
            </Box>
            <Box zIndex={"10"} className="inner-box" opacity={"0"}>
              <tippy
                theme="hologram"
                className="tipper"
                content="Breed your Punkies to unlock undiscovered new breeds!"
              >
                <Text
                  mx="auto"
                  //maxW={["46px", "60px", "70px", "98px", "128px", "144px"]}
                  translateX={"-48.5%"}
                  translateY={"-80%"}
                  pos={"absolute"}
                  top={["65%", "66.6%", "69.84%", "71%", "72%", "72.55%"]}
                  left={"54.5%"}
                  fontSize={["15.5", "12", "14", "21", "23.7", "25.5"]}
                  px="2"
                  //lineHeight={["4px", "35px", "15px", "9px", "15.5px", "12px"]}
                >
                  <br></br>
                  BREED
                </Text>
              </tippy>
            </Box>
            <Box zIndex={"10"} className="inner-box" opacity={"0"}>
              <tippy
                theme="hologram"
                className="tipper"
                content="Face off with other players in competitive arena battles to earn fame, glory and crypto!"
              >
                <Text
                  mx="auto"
                  //maxW={["46px", "60px", "70px", "110px", "128px", "144px"]}
                  translateX={"-65%"}
                  translateY={"-80%"}
                  pos={"absolute"}
                  top={["65%", "66.6%", "69.84%", "71%", "72%", "72.55%"]}
                  left={"70.5%"}
                  fontSize={["15.5", "12", "14", "21", "23.7", "25.5"]}
                  px="2"
                  //lineHeight={["4px", "35px", "15px", "9px", "15.5px", "12px"]}
                >
                  <br></br>
                  BATTLE!
                </Text>
              </tippy>
            </Box>
          </Stack>
        </Stack>
      </VStack>
    </>
  );
};

export default EarnSection;
