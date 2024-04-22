import type { temaTypes } from "@/types/themeTypes/ThemeTypes";

const DARK_BLUE_THEME: temaTypes = {
  name: 'DARK_BLUE_THEME',
  dark: true,
  variables: {
      'border-color': '#333F55',
      'border-opacity': 1,
  },
  colors: {
      primary: '#5D87FF',
      secondary: '#49BEFF',
      info: '#539BFF',
      success: '#13DEB9',
      accent: '#FA896B',
      warning: '#FFAE1F',
      error: '#FA896B',
      lightprimary: '#253662',
      lightsecondary: '#1C455D',
      lightsuccess: '#1B3C48',
      lighterror: '#4B313D',
      lightinfo:'#223662',
      lightwarning: '#4D3A2A',
      textPrimary: '#EAEFF4',
      textSecondary: '#7C8FAC',
      borderColor: '#333F55',
      inputBorder: '#465670',
      containerBg: '#2a3447',
      background: '#2a3447',
      hoverColor: '#333f55',
      surface: '#2a3447',
      'on-surface-variant': '#2a3447',
      grey100: '#333F55',
      grey200: '#465670'
  }
};

const DARK_CYAN_THEME: temaTypes = {
  name: 'DARK_CYAN_THEME',
  dark: true,
  variables: {
    'border-color': '#333F55',
    'border-opacity': 1,
  },
  colors: {
    primary:        '#01C0C8',
    secondary:      '#FB9678',
    info:           '#539BFF',
    success:        '#13DEB9',
    accent:         '#FA896B',
    warning:        '#FFAE1F',
    error:          '#FA896B',
    lightprimary:   '#003638',
    lightsecondary: '#40241C',
    lightsuccess:   '#1B3C48',
    lighterror:     '#4B313D',
    lightinfo:      '#223662',
    lightwarning:   '#4D3A2A',
    textPrimary:    '#EAEFF4',
    textSecondary:  '#7C8FAC',
    borderColor:    '#333F55',
    inputBorder:    '#465670',
    containerBg:    '#171c23',
    background:     '#171c23',
    hoverColor:     '#333f55',
    surface:        '#171c23',
    'on-surface-variant': '#171c23',
    grey100:        '#333F55',
    grey200:        '#465670'
  }
};
export {
    DARK_BLUE_THEME,
    DARK_CYAN_THEME
}