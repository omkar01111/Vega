// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Define your custom theme properties here
  palette: {
    primary: {
      main: '#161819',
    },
    secondary: {
      main: '#ffffff',
    },
    focus:{
      main: '#7560ef',
    },
    text:{
      main: '#fafafa',
    }
  },
  // Other theme properties...
});

export default theme;
