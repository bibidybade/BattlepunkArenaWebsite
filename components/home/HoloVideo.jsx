import { Stack } from '@chakra-ui/react'
import React from 'react'
// import vid from '../../public/assets/video-assets/video_loop_holod3k_room.mp4'
import { AspectRatio } from '@chakra-ui/react'
const HoloVideo = () => {
    return (
        <>


            <Stack className='holo-video-sec' pos={'absolute'} top={['46.5%','47.9%','48.3%','49.24%','49.7%','50%']} left='10.66%' w={'82%'} mx='auto' pl={{base:'0px', md:'0px', lg:'0'}}>
                <video  className='holo-video' height={'100%'} width={'96% !important'} autoPlay={true} loop={true} muted   src={require('../../public/assets/video-assets/video_loop_holod3k_room.mp4')} />
            </Stack>

        </>
    )
}

export default HoloVideo
