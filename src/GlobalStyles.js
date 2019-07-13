import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Cantarell:400,400i,700,700i&display=swap');
  html {
    font-family: 'Cantarell', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    font-family: 'Cantarell', sans-serif;
    background-color: #eff4f7;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  @media (max-width: 940px) {
    .mobile-hide {
      display: none;
    }
  }
  @keyframes fadein {
    from {
      background-color: transparent;
    }
    to {
      background-color: #ffffff;
    }
  }

  @keyframes fadeout {
    from {
      background-color: #ffffff;
    }
    to {
      background-color: transparent;
    }
  }
  @keyframes slidein {
    from {
      left: 100%;
    }
    to {
      left: 0;
    }
  }

  @keyframes slideout {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }
`;

export default GlobalStyles;
