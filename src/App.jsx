import { Box } from '@mui/material'
import { Container } from '@mui/system'
import { bgDesktop, bgMobile, logo, mockups } from './assets'

function App() {
  return(
    <Box sx={{
      backgroundImage:{
        mobile: `url(${bgMobile})`,
        desktop: `url(${bgDesktop})`
      },
      backgroundColor: 'primary.main',
      p: 5
    }} className='wrapper'>
        <Box sx={{mb:8}}>
            <img src={logo} alt="muddle logo" />
        </Box>

        <Container flexDirection="row">
            <img src={mockups} alt="" />
        </Container>
    </Box> 
  )
}

export default App
