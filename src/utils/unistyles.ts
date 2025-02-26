import { darkTheme, lightTheme } from '@src/config/themeColors';
import { UnistylesRegistry } from 'react-native-unistyles';

interface AppThemes {
  light: typeof lightTheme;
  dark: typeof darkTheme;
}
type AppBreakpoints = typeof breakpoints;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}
const breakpoints = {
  phone: 0,
  tablet: 769,
};

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    adaptiveThemes: true,
  });
