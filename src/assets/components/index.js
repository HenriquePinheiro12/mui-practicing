import { Box } from '@mui/material'
import { bgDesktop, bgMobile, logo } from './assets'

export default function Header() {
    return(
      <Box sx={{
        backgroundImage:{
          mobile: `url(${bgMobile})`,
          desktop: `url(${bgDesktop})`
        },
        backgroundColor: 'primary.main'
      }} className='wrapper'>
          <Box>
              <img src={logo} alt="muddle logo" />
          </Box>
      </Box> 
    )
  }