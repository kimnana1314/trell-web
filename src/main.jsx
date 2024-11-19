import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import { greenLight,orangeLight } from './theme'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={orangeLight}>
            <CssBaseline/>
            <App />
        </ThemeProvider>
    </StrictMode>
)
