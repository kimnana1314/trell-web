import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import logo from '~/assets/h3d.svg'
import ButtonTheme from '~/components/ButtonTheme'
import AccountMenu from '~/components/AccountMenu'
import Notification from '~/components/Notification/Index'
import BasicMenu from '~/components//Header'
function AppBars() {
    return (
        <Box paddingX={2} sx={{
            width: '100%',
            height: (theme) => theme.varCus.appBarH,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Box>
                <Avatar alt="h3d" src={logo}/>
            </Box>
            <Box>
                <BasicMenu />
            </Box>
            <Box sx={{ display:'flex', alignItems: 'center', gap:1 }}>
                <Notification />
                <ButtonTheme />
                <AccountMenu/>
            </Box>
        </Box>
    )
}
export default AppBars
