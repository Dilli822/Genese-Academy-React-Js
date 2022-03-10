
import { createTheme } from '@mui/material/styles';
import { green, purple, yellow, red } from '@mui/material/colors';


// material ui is very helpful in theming the default to different colors palettes
export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
  },
});