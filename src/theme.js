import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary:{
            main: 'hsl(257, 40%, 49%)'
        },
        secondary: {
            main: 'hsl(300, 69%, 71%)'
        },
    },
    typography: {
        fontFamily: "'Open Sans' sans-serif"
    },
    breakpoints:{
        values: {
            mobile: 375,
            desktop: 1440
        }
    }
})

export default theme