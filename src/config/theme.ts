import { theme as baseTheme } from 'antd';

import type { ConfigProviderProps } from 'antd';

// Colors
// const BORDER_COLOR = 'hsla(157, 75%, 5%, 0.1)';
const PRIMARY_COLOR = 'hsla(169, 70%, 33%, 1)';
export const SECONDARY_COLOR = 'hsla(245, 181%, 19%, 1)';

// const TERTIARY_COLOR = 'hsla(0, 0%, 62%, 1)';

// const PRIMARY_DARK_COLOR = 'hsla(156, 100%, 26%, 0.4)';
const PRIMARY_HOVER_COLOR = 'hsla(169, 70%, 33%, 0.5)';

// const PRIMARY_TEXT_DARK_COLOR = 'hsla(93, 100%, 4%, 1)';

// export const RED_ICON_COLOR = 'hsla(3, 89%, 58%, 1)';
// export const GREEN_ICON_COLOR = 'hsla(113, 100%, 33%, 1)';
export const UNIVERSAL_COLOR = 'white';

// const MESSAGE_COLOR_INFO = 'hsla(60, 1%, 51%, 1)';

export const FONT_FAMILY = 'Urbanist';

const buttonStyle = {
  // borderColorDisabled: 'transparent',
  // colorPrimary: PRIMARY_COLOR,
  // colorPrimaryHover: PRIMARY_HOVER_COLOR,
  // colorLink: PRIMARY_COLOR,
  // colorText: UNIVERSAL_COLOR,
  // colorTextLightSolid: UNIVERSAL_COLOR,
  contentFontSize: 13,
  contentFontSizeLG: 14,
  contentFontSizeSM: 12,
  primaryShadow: 'none',
  borderRadius: 8,
  borderRadiusSM: 8,
  borderRadiusLG: 8,
  // controlHeight: 40,
  // controlHeightSM: 30,
  // controlHeightLG: 48,
  // //   defaultBg: 'transparent',
  // defaultBg: SECONDARY_COLOR,
  // defaultColor: 'black',
  // defaultHoverBg: 'hsla(0, 0%, 93%, 0.5)',
  // defaultHoverBorderColor: 'none',
  // defaultHoverColor: 'black',
  // defaultActiveBg: TERTIARY_COLOR,
  // defaultActiveBorderColor: TERTIARY_COLOR,
  //   defaultActiveColor: SECONDARY_COLOR,
  // fontWeight: 400,
  // fontWeightSM: 400,
  // fontWeightLG: 500,
  paddingInline: 16,
  paddingInlineLG: 20,
  paddingInlineSM: 14,
  paddingBlock: 16,
  paddingBlockLG: 18,
  paddingBlockSM: 14,
};

const inputStyle = {
  //   activeBorderColor: 'black',
  // activeBg: 'transparent',
  //   colorBorder: 'none',
  //   borderRadius: 12,
  //   borderRadiusSM: 12,
  //   borderRadiusLG: 12,
  // colorPrimary: PRIMARY_TEXT_DARK_COLOR,
  // hoverBorderColor: PRIMARY_COLOR,
  // inputFontSize: 14,
  // inputFontSizeSM: 12,
  // inputFontSizeLG: 15,
  //   paddingBlock: 10,
  //   paddingBlockSM: 8,
  //   paddingBlockLG: 13,
  // paddingInline: 20,
  // paddingInlineSM: 20,
  // paddingInlineLG: 20,
};

const selectStyle = {
  //   activeBorderColor: 'black',
  activeBg: 'transparent',
  colorBorder: 'none',
  // borderRadius: 12,

  //   borderRadiusSM: 12,
  //   borderRadiusLG: 12,
  // colorPrimary: PRIMARY_TEXT_DARK_COLOR,
  // hoverBorderColor: PRIMARY_COLOR,
  // inputFontSize: 14,
  // inputFontSizeSM: 12,
  // inputFontSizeLG: 15,
  //   paddingBlock: 10,
  //   paddingBlockSM: 8,
  //   paddingBlockLG: 13,
  // paddingInline: 20,
  // paddingInlineSM: 20,
  // paddingInlineLG: 20,
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
        marginLG: 8, // adjust this value to your liking
      },
      InputNumber: inputStyle,
      Input: inputStyle,
      Select: selectStyle,
      Message: {
        colorPrimary: PRIMARY_COLOR,
        colorPrimaryHover: PRIMARY_HOVER_COLOR,
        // colorInfo: MESSAGE_COLOR_INFO,
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
