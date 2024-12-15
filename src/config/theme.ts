import { theme as baseTheme } from 'antd';

import type { ConfigProviderProps } from 'antd';

// Colors
const PRIMARY_COLOR = 'hsla(169, 70%, 33%, 1)';
export const SECONDARY_COLOR = 'hsla(245, 181%, 19%, 1)';

const PRIMARY_HOVER_COLOR = 'hsla(169, 70%, 33%, 0.5)';

export const UNIVERSAL_COLOR = 'white';
export const FONT_FAMILY = 'Urbanist';

const buttonStyle = {
  contentFontSize: 13,
  contentFontSizeLG: 14,
  contentFontSizeSM: 12,
  primaryShadow: 'none',
  borderRadius: 8,
  borderRadiusSM: 8,
  borderRadiusLG: 8,
  paddingInline: 16,
  paddingInlineLG: 20,
  paddingInlineSM: 14,
  paddingBlock: 16,
  paddingBlockLG: 18,
  paddingBlockSM: 14,
};

const inputStyle = {
  activeBg: 'hsla(0, 0%, 96%, 1)',
  colorPrimary: 'hsla(0, 0%, 96%, 1)',
};

const selectStyle = {
  activeBg: 'transparent',
  colorBorder: 'none',
};

const switchStyle = {
  handleBg: 'hsla(241, 51%, 55%, 1)',
};

const theme = ({ themeValue }: { themeValue?: 'dark' | 'light' }) => {
  const value: ConfigProviderProps['theme'] = {
    algorithm:
      themeValue === 'dark'
        ? baseTheme.darkAlgorithm
        : baseTheme.defaultAlgorithm,
    components: {
      Button: buttonStyle,
      Switch: switchStyle,
      Checkbox: {
        colorPrimary: PRIMARY_COLOR,
        colorPrimaryHover: PRIMARY_COLOR,
      },
      Form: {
        margin: 8,
        marginLG: 8,
      },
      InputNumber: inputStyle,
      Input: inputStyle,
      Select: selectStyle,
      Message: {
        colorPrimary: PRIMARY_COLOR,
        colorPrimaryHover: PRIMARY_HOVER_COLOR,
      },
    },
    token: {
      colorPrimary: PRIMARY_COLOR,
      fontFamily: FONT_FAMILY,
    },
  };

  return value;
};

export default theme;
