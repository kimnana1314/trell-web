import * as React from 'react'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px'
    }
}))

export default function Notification() {
    return (
        <IconButton >
            <StyledBadge badgeContent={5} color="error">
                <NotificationsNoneIcon color='primary' fontSize='medium' />
            </StyledBadge>
        </IconButton>
    )
}