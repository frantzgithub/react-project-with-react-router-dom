import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
    :root {
        --color-primary: #360707;
        --color-secondary: #dcd6d6;
        --color-black: #100f0f;
        --color-white: #ffffff;
        --color-gray: #999;
        --color-transparent: rgba(217, 217, 217, 0.36);
        --color-success: #7cc39c;
        --color-warning: #fbea85;
        --color-error: #ea524f;

        font-size: 60%;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html {
        width: 100vw;
        height: 100vh;
    }

    body {
        background: linear-gradient(180deg, var(--color-black) 74.66%, var(--color-primary) 100%);
        color: var(--color-text);
        -webkit-font-smoothing: antialiased;

        overflow: hidden;
    }

    body, input, button, textarea {
        font-family: 'inter', sans-serif;
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5, h6, p {
        color: var(--color-secondary);
        font-weight: 500;
    }

    h1 {
        font-size: 4.3rem;
    }

    button {
        cursor: pointer;
    }

    li {
        color: var(--color-secondary);
    }
`