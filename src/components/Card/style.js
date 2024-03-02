import styled from 'styled-components'

export const Container = styled.li`
    a {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;

        max-width: 400px;
        background-color: var(--color-transparent);
        border-radius: 15px;
        padding: 20px;

        color: var(--color-secondary);
        text-decoration: none;

        span:first-of-type {
            margin-top: 18px;
            font-weight: bold;
        }   
    }

    img {
        width: 230px;
        height: 275px;
        border-radius: 20px;
    }
` 
