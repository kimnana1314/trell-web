import { createTheme } from '@mui/material/styles'
import { green, orange, red } from '@mui/material/colors'

// Create a theme instance.
const greenLight =createTheme({
    palette:{
        primary:{
            main:green[500]
        }
    }
})

const orangeLight =createTheme({
    palette:{
        primary:{
            main:orange[500]
        }
    }
})
export { greenLight,
    orangeLight
}