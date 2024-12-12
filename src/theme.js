import { Height } from '@mui/icons-material'
import { createTheme } from '@mui/material/styles'
const theme =createTheme({
    varCus: {
        appBarH:'50px',
        footerH:'60px'
    },
    colorSchemes:{
        dark:{
            palette:{
                primary:{
                    main: localStorage.getItem('main-color') || '#42A5F5',
                    light:localStorage.getItem('light-color') || '#42A5F5',
                    dark: localStorage.getItem('dark-color') || '#283593',
                    contrastText: '#fff'
                }
            }
        },
        light:{
            palette:{
                primary:{
                    main: localStorage.getItem('main-color') ||'#42A5F5',
                    light:localStorage.getItem('light-color') || '#42A5F5',
                    dark: localStorage.getItem('dark-color') || '#1565C0',
                    contrastText: '#fff'
                }
            }
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body:{
                    '*::-webkit-scrollbar': {
                        width:'10px',
                        Height:'10px'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor:'#bdc3c7',
                        borderRadius:'8px'
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor:'#dcdde1'
                    }
                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        }
    }
})

export default theme