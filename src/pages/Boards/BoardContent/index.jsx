import Box from '@mui/material/Box'
function BoardContent() {
    return ( <Box sx={{

        width: '100%',
        height: (theme) => `calc(100vh - ${theme.varCus.appBarH} - ${theme.varCus.footerH} - 1px)`,
        display: 'flex',
        alignItems: 'center'
    }}>
content
    </Box > )
}

export default BoardContent