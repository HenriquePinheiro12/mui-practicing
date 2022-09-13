import { Box, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import { bgDesktop, bgMobile, logo, mockups } from './assets'
import { Facebook,  Instagram, Twitter } from '@mui/icons-material';



function App() {

  const icons = [
    {
      name:'facebook',
      Icon: Facebook
    },
    {
      name: 'twitter',
      Icon: Twitter
    },
    {
      name: 'instagram',
      Icon: Instagram
    }
  ]

  return(
    <Box sx={{
      backgroundImage:{
        mobile: `url(${bgMobile})`,
        desktop: `url(${bgDesktop})`
      },
      backgroundColor: 'primary.main',
      p: 6
    }} className='wrapper'>
        <Box sx={{mb:8}}>
            <img src={logo} alt="muddle logo" />
        </Box>

        <Container sx={{
            mb: 2,
            display: 'flex', 
            alignItems:'top', 
            justifyContent:'space-between'}}>
            
            <img className='mockup' src={mockups} alt="mockups" />
            
            
            <Box  sx={{flexBasis: '35%', mt:5}}>
              <Typography sx={{
                  color: 'white', 
                  fontSize:'2.5rem', 
                  fontWeight: 600,
                  lineHeight: 1.5,
                  mb: 2
                }} 
              variant='h1'>
                Build The Community <br/>
                Your Fans Will Love  
              </Typography>

              <Typography variant='body1'
                sx={{mb:2}}
              >
                  Huddle re-images the way we build communities. You have a voice, but so does your audience. Create connections woth your user as you engage in genuine discussion.
              </Typography>
              <Button sx={{
                backgroundColor: 'white',
                textTransform: 'none',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                px: 5,
                borderRadius: '2rem',
                boxShadow: 3,
                ":hover": {
                  backgroundColor: 'secondary.main',
                  color: 'white'
                }
              }} size='large' color='primary' variant='text'>
                Register
              </Button>
            </Box>
        </Container>
        <Container className='footer'>

        </Container>
    </Box> 
  )
}

export default App
