import stringToCssVar from 'lib/string-to-css-var';
import themeVariables from './theme-vars';

const variableKeys = Object.keys(themeVariables.light);
const themedPalette = variableKeys.reduce((acc, current) => {
  acc[current] = stringToCssVar(current);
  return acc;
}, {} as any);

export default themedPalette;
