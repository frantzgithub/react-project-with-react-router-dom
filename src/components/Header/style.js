import styled from "styled-components"

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: var(--color-white);
        margin-right: 20px;
    }

    form {
        width: 50%;
         Input {
            padding: 10px 15px;
            border: none;
            border-radius: 10px;
         }
    }
`