
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useColorScheme } from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import Slider from '@mui/material/Slider'
import data from './DataTheme.json'
import CheckIcon from '@mui/icons-material/Check'

export default function ButtonTheme() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    })
    const { mode, setMode } = useColorScheme()
    const [value, setValue] = React.useState(parseInt(localStorage.getItem('theme-value')) ||0)
    const [checkbtn, setCheckbtn] = React.useState(parseInt(localStorage.getItem('theme-check')) || 0)
    if (!mode) {
        return
    }
    const handleChange = (event, newAlignment) => {
        setMode(newAlignment)
    }
    const handleChangeBtn = (event, newAlignment) => {
        if (newAlignment !== null ) {
            setCheckbtn(newAlignment)
        }
    }
    const marks = [
        {
            value: 0,
            label: '50'
        },
        {
            value: 1,
            label: '100'
        },
        {
            value: 2,
            label: '200'
        },
        {
            value: 3,
            label: '300'
        },
        {
            value: 4,
            label: '400'
        },
        {
            value: 5,
            label: '500'
        },
        {
            value: 6,
            label: '600'
        },
        {
            value: 7,
            label: '700'
        },
        {
            value: 8,
            label: '800'
        },
        {
            value: 9,
            label: '900'
        },
        {
            value: 10,
            label: 'A100'
        },
        {
            value: 11,
            label: 'A200'
        },
        {
            value: 12,
            label: 'A400'
        },
        {
            value: 13,
            label: 'A700'
        }
    ]
    const handleSliderChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleOnclick = () => {
        localStorage.setItem('main-color', data[checkbtn].data[value].main)
        localStorage.setItem('light-color', data[checkbtn].data[value].light)
        localStorage.setItem('dark-color', data[checkbtn].data[value].dark)
        localStorage.setItem('theme-value', value)
        localStorage.setItem('theme-check', checkbtn)
        window.location.reload()
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }

        setState({ ...state, [anchor]: open })
    }

    const list = (anchor) => (
        <Box
            sx={{ width: '250px' }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box sx={{ p:2, height: '60px', display: 'flex', alignItems:'center', justifyContent: 'space-between' }}>
                <Typography variant="body1">Cài đặt hiện thị</Typography>
                <IconButton onClick={toggleDrawer(anchor, false)}>
                    <ClearIcon color='primary' />
                </IconButton>
            </Box>
            <Divider />
            <Box sx={{ p:2, height: '60px', display: 'flex', alignItems:'center', justifyContent: 'space-between' }}>
                <Typography variant="body2">Chế độ</Typography>
                <ToggleButtonGroup
                    value={mode}
                    exclusive
                    onChange={handleChange}
                    sx={{ borderRadius:'14px' }}
                >
                    <ToggleButton value="light" color='primary' sx={{ textTransform:'none', borderRadius: '14px', width:'80px' }} >
                        <LightModeIcon fontSize='small' /> Sáng

                    </ToggleButton>
                    <ToggleButton value="dark" color='primary' sx={{ textTransform:'none', borderRadius: '14px', width:'80px' }}>
                        <DarkModeOutlinedIcon fontSize='small' /> Tối
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Box sx={{ p:2, height: '60px', display: 'flex', flexDirection: 'column', gap:2 }}>
                <Typography variant="body2">Mầu sắc</Typography>
                <Slider sx={{ width: '200px' }}
                    aria-label="Always visible"
                    value={value}
                    defaultValue={5}
                    min={0}
                    step={1}
                    max={13}
                    onChange={handleSliderChange}
                >
                </Slider>
                <Box>
                    <ToggleButtonGroup sx={{ '.MuiToggleButtonGroup-middleButton': { m:0 }, '.MuiToggleButtonGroup-lastButton':{ m:0 }, maxWidth:'200px', display:'flex', flexWrap:'wrap', gap:0 }}
                        value={checkbtn}
                        exclusive
                        onChange={handleChangeBtn}
                    >
                        {
                            data.map((item, index) => (
                                <ToggleButton key={index} value={ item.value } sx={{
                                    borderRadius: '0', width:'50px', height:'50px',
                                    backgroundColor:item.data[value].main, color:'transparent', '&.Mui-selected': { color:'white', backgroundColor:item.data[value].main, '&:hover': { backgroundColor:item.data[value].main } }, '&:hover': { backgroundColor:item.data[value].main, borderColor:'white' } }} > < CheckIcon /> </ToggleButton>
                            ))
                        }
                    </ToggleButtonGroup>
                </Box>
                <Box>
                    <Box sx={{ '.MuiToggleButtonGroup-middleButton': { m:0 }, '.MuiToggleButtonGroup-lastButton':{ m:0 }, maxWidth:'200px', display:'flex', flexWrap:'wrap', gap:0 }}
                    >
                        <Box value="red" key='red' sx={{ borderRadius: '0', width:'66px', height:'66px',
                            backgroundColor:data[checkbtn].data[value].dark }} ></Box>
                        <Box value="pink" key='pink' sx={{ borderRadius: '0', width:'66px', height:'66px',
                            backgroundColor:data[checkbtn].data[value].main }} ></Box>
                        <Box value="purple" key='purple' sx={{ borderRadius: '0', width:'66px', height:'66px',
                            backgroundColor:data[checkbtn].data[value].light }} ></Box>
                    </Box>

                </Box>
                <Box paddingBottom={2}>
                    <Button onClick={handleOnclick} variant='outlined' >Lưu thay đổi</Button>
                </Box>
            </Box>
        </Box>
    )

    return (

        <React.Fragment>
            <IconButton onClick={toggleDrawer('right', true)}
            > <DarkModeOutlinedIcon color='primary' fontSize='medium' /></IconButton>
            <Drawer sx={{ '& .MuiPaper-root':{ borderRadius: '10px 0 0 10px' } }}
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </React.Fragment>


    )
}