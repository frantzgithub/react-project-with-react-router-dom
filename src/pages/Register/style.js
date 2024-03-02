import styled from "styled-components"

export const ContainerRegister = styled.section`
    h1 {
        background-color: var(--color-primary);
        text-align: center;
        padding: 15px 0;
        margin-bottom: 85px;
    }

    form {
        max-width: 400px;
        background-color: var(--color-gray);
        padding: 15px;
        margin: auto;
    }

    fieldset {
        padding: 5px;

        legend {
        color: var(--color-primary)
        }

        Input {
            padding: 5px 10px;
            margin: 10px 0;
            border: none;

            &:focus {
                border: 1px solid var(--color-primary);
            }

        }
    

    }
    button {
        margin-left: 140px;
        margin-top: 20px;
        padding: 10px 25px;
        background-color: var(--color-primary);
        color: var(--color-white);
        font-size: 20px;
        border: none;
        border-radius: 10px;

        &:hover {
            background-color: var(--color-white);
            color: var(--color-primary);
        }
    }

    
`