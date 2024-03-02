import styled from 'styled-components' 

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;

    div {
        
    }

    p {
        padding-bottom:1rem;
    }

    a {
        text-decoration: none;
        display: inline-block;
        padding: 10px;
        margin-top: 10px;
        border: 2px solid white;
        color: darkred;
        font-size: 1.5rem;
        border-radius: 10px;
    }
`