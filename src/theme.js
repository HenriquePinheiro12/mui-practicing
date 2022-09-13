import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary:{
            main: 'hsl(257, 40%, 49%)'
        },
        secondary: {
            main: 'hsl(300, 69%, 71%)'
        },
        light: {
            main: '#fff'
        }
    },
    typography: {
        fontFamily: "'Open Sans', sans-serif",
        body1: {
            fontSize: '18px',
            color: 'white',
            fontWeight: 400
        }
    },
    breakpoints:{
        values: {
            mobile: 375,
            desktop: 1440
        }
    }
})

export default theme