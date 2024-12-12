import Container from '@mui/material/Container'
import AppBars from '~/components/AppBars'
import BoardContent from '~/pages/Boards/BoardContent'
import BoardFooter from '~/pages/Boards/BoardFooter'
import Divider from '@mui/material/Divider'
function Board() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height:'100vh' }}>
            <AppBars />
            <Divider />
            <BoardContent />
            <BoardFooter />
        </Container>
    )
}

export default Board