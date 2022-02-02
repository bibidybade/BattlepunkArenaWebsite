import { Stack } from '@chakra-ui/react'
import React from 'react'
// import vid from '../../public/assets/video-assets/video_loop_holod3k_room.mp4'
import { AspectRatio } from '@chakra-ui/react'
const CSVideo = () => {
    return (
        <>


            <Stack className='holo-video-sec' pos={'absolute'} top={['73%','74.67%','74.77%','76.22%','76.93%','77.4%']} left='10.9%' w={'77.0%'} mx='auto' pl={{base:'0px', md:'0px', lg:'0'}}>
                <video  className='holo-video' height={'100%'} width={["150%", "150%", "96%", "96%", "105%", "105%"]} autoPlay loop muted   src={require('../../public/assets/video-assets/video_loop_gameplay_coming_soon.mp4')} />
            </Stack>

        </>
    )
}

export default CSVideo
