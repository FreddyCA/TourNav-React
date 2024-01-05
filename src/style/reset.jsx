import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color--textPrimary: #001F3F;
        --color--textHighlight: #004080;
        --color--tableBackground: #87CEEB;
        --color--error: #CC3311;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html {
        font-size: 16px;
        font-family: 'Times New Roman', Times, serif;
        background-color: #fff;
    }
`;

export default GlobalStyle;
