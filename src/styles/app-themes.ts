import buildCssVars from 'lib/build-css-var';
import themeVariables from './theme-vars';

const appThemes = {
  light: buildCssVars(themeVariables.light),
  dark: buildCssVars(themeVariables.dark),
};

export default appThemes;
