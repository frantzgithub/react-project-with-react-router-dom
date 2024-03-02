import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        color: var(--color-secondary)
    }
    p {
        color: var(--color-primary);
        padding: 10px 0;
    }
`