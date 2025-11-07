import { createTheme } from '@mui/material/styles';

const montserratStack = '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

const theme = createTheme({
  typography: {
    fontFamily: montserratStack,
    allVariants: {
      fontFeatureSettings: '"locl"',
    },
  },
});

export default theme;
