import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'
function ModeSelect() {
    const { mode, setMode } = useColorScheme()
    if (!mode) {
        return
    }

    const handleChange = ( event ) => {
        setMode(event.target.value)
    }
    return (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Theme</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={mode}
                label="Age"
                sx={{ m: 1, maxHeight: 45 }}
                onChange={handleChange}
            >
                <MenuItem value='light'>light</MenuItem>
                <MenuItem value='dark'>dark</MenuItem>
            </Select>
        </FormControl>
    )
}

export default ModeSelect
