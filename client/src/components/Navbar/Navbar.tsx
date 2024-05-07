import { useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import LiveTvIcon from '@mui/icons-material/LiveTv'

const NavigationBar = () => {
  const navigate = useNavigate()
  return (
    <AppBar position="relative" sx={{ height: 50 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton onClick={() => navigate('/')}>
            <LiveTvIcon sx={{ display: { xs: 'none', md: 'flex' } }} />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BLOCKBUSTER
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavigationBar
