import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MuiButton from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';
/**
 * makeBoxShadow makes a property for box-shadow.
 * @param color
 */
const makeBoxShadow = color => {
  return `0 15px 25px -10px ${fade(color, 0.5)}, 
          0 5px 25px 0 ${fade(grey[400], 0.1)},
          0 10px 10px -5px ${fade(color, 0.2)}`;
};
/**
 * makeBackground makes a 'linear-gradient' property for background.
 * @param color1
 * @param color2
 */
const makeBackground = (color1, color2) => {
  return `linear-gradient(60deg, ${color1} 35%, ${color2} 95%)`;
};
const styles = theme => ({
  root: {
    border: 0,
    borderRadius: 30,
    margin: theme.spacing(1),
    height: 45,
    padding: '0 25px',
    transition: 'transform 0.2s linear',
    transitionDelay: '0.3s',
    marginTop: '-5px',
    minWidth: '140px',
    color: 'white',
    fontWeight: 400,
    background: makeBackground(purple[500], purple['A200']),
    boxShadow: makeBoxShadow(purple['A200']),
    '&:hover:not([disabled])': {
      transform: 'translate(0, -5px)',
      transition: 'transform 0.2s linear'
    },
    '&:disabled': {
      background: 'rgba(0, 0, 0, 0.12)',
      boxShadow: 'none'
    }
  },
  primary: {
    background: makeBackground(
      theme.palette.primary.main,
      theme.palette.primary.light
    ),
    boxShadow: makeBoxShadow(theme.palette.primary.light)
  },
  secondary: {
    background: makeBackground(
      theme.palette.secondary.main,
      theme.palette.secondary.light
    ),
    boxShadow: makeBoxShadow(theme.palette.secondary.light)
  }
});
const ContainedButton = ({ classes, color, children, ...others }) => {
  let classNames = classes.root;
  if (color !== undefined) {
    switch (color) {
      case 'primary':
        classNames = `${classNames} ${classes.primary}`;
        break;
      case 'secondary':
        classNames = `${classNames} ${classes.secondary}`;
        break;
      default:
        break;
    }
  }
  return (
    <MuiButton {...others} className={classNames}>
      {children}
    </MuiButton>
  );
};
export default withStyles(styles)(ContainedButton);
