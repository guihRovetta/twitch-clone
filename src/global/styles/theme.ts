import { moderateScale } from 'react-native-size-matters';

const DEFAULT_THEME_OBJECT = {
  fonts: {
    regular: 'Inter_400Regular',
    semibold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
  fontSize: {
    xsmall: moderateScale(12),
    small: moderateScale(13),
    regular: moderateScale(14),
    large: moderateScale(18),
    xlarge: moderateScale(24),
  },
  lineHeight: {
    heading: 1.2,
    body: 1.5,
  },
};

export const lightTheme = {
  ...DEFAULT_THEME_OBJECT,
  colors: {
    background: '#f7f7f8',
    primary: '#772ce8',
    text500: '#0e0e10',
    text400: 'rgba(0, 0, 0, 0.7)',
    text300: '#53535f',

    gray100: 'rgba(0, 0, 0, 0.05)',
    red500: '#e91916',
  },
};

export const darkTheme = {
  ...DEFAULT_THEME_OBJECT,
  colors: {
    background: '#0e0e10',
    primary: '#772ce8',
    text500: '#efeff1',
    text400: 'rgba(255, 255, 255, 0.7)',
    text300: '#adadb8',

    gray100: 'rgba(255, 255, 255, 0.15)',
    red500: '#e91916',
  },
};