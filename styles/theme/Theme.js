import { extendTheme } from "@chakra-ui/react";
import './fonts.module.css'
const theme = extendTheme({
    fonts: {
        heading: 'Obvia',
        body: 'Obvia',
    },
    shadows: {
        outline: 'none',
    },
    

    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                _focus: {
                    boxShadow: 'none'
                }
            },
        },

    }
})

export default theme