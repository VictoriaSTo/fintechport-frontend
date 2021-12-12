import { createTheme } from '@mui/material/styles';

const white = "#FFFFFF"
const lightPurple ="#F8F5F7"
const orange = "#F0544F"
const lightBlue = "#08D9D6"
const darkBlue = "#252A34"
const darkBrown = "#4A3C46"

const theme = createTheme({
  palette: {
    type: 'light',
    common: {
      white: `${white}`,
      lightPurple: `${lightPurple}`,
      orange: `${orange}`,
      lightBlue: `${lightBlue}`,
      darkBlue: `${darkBlue}`,
      darkBrown: `${darkBrown}`
    },
    primary: {
      main: `${white}`,
    },
    secondary: {
      main: `${lightBlue}`
    }
  },
  typography: {
    fontFamily: "Barlow",
    h1: {
      fontFamily: "Barlow",
      fontSize: 58,
      fontWeight: 700
    },
    h2: {
      fontFamily: "Barlow",
      fontSize: 44,
      fontWeight: 600
    },
    h3: {
      fontFamily: "Barlow",
      fontSize: 24,
      fontWeight: 600
    },
    h4: {
      fontFamily: "Barlow",
      fontSize: 20,
      fontWeight: 600
    },
    body1: {
      fontFamily: "Barlow",
      fontSize: 20,
      fontWeight: 400
    },
    subtitle1: {
      fontFamily: "Barlow",
      fontSize: 12,
      fontWeight: 600
    },
    buttonCustomization: {
      textTransform: 'none',
      width: "112px"
    }
    // h5: {
    //   fontFamily: "Barlow",
    //   fontSize: 14,
    //   ontWeightLight: 300
    // },
    // h6: {
    //   fontFamily: "Barlow",
    //   fontSize: 14,
    //   ontWeightLight: 300
    // },
  },
});

export default theme;