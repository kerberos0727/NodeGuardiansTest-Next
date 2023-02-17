import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
//========================================================================================================
// GENERAL
//========================================================================================================
* {
	box-sizing: border-box;
}
*::before {
	box-sizing: border-box;
}
*::after {
	box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.black};
}

@font-face {
  font-family: 'Lato';
  src: url('/fonts/Lato-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Cinzel';
  src: url('/fonts/Cinzel-Regular.ttf') format('truetype');
}
`;

export default GlobalStyle;
