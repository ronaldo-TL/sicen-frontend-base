import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const CYAN_THEME: ThemeTypes = {
    name: 'CYAN_THEME',
    dark: false,
    variables: {
        'border-color': '#e5eaef',
        'border-opacity': 1,
    },
    colors: {
        primary: '#01C0C8',
        secondary: '#FB9678',
        info: '#539BFF',
        success: '#00e676',
        accent: '#FFAB91',
        warning: '#FFAE1F',
        error: '#FA896B',
        lightprimary: '#EBF9FA',
        lightsecondary: '#FFF5F2',
        lightsuccess: '#E6FFFA',
        lighterror: '#FDEDE8',
        lightinfo:'#EBF3FE',
        lightwarning: '#FEF5E5',
        textPrimary: '#2A3547',
        textSecondary: '#2A3547',
        borderColor: '#e5eaef',
        inputBorder: '#DFE5EF',
        containerBg: '#ffffff',
        background: '#ffffff',
        hoverColor: '#f6f9fc',
        surface: '#fff',
        'on-surface-variant': '#fff',
        grey100: '#F2F6FA',
        grey200: '#EAEFF4'
    }
};


export { CYAN_THEME }