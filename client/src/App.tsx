import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

const defaultTheme = createTheme()

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App