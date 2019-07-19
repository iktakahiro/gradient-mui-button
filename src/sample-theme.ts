import { createMuiTheme } from '@material-ui/core/styles';
import { teal, deepOrange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: {
      main: deepOrange[400]
    }
  }
});

export default theme;
