import styled from "styled-components"

export const ContainerPreview = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 800px;
    margin: 25px auto;

    @media screen and (max-width: 575px) {
        flex-direction: column;
    }
    
    
    .image-container {
        width: 100%;
        background-color: var(--color-primary);
        display: inline-flex;
        justify-content: center;
        padding: 10px 0;

        
    }

    img {
        width: 250px;
        height: 300px;
    }

    .text-container {
        width: 100%;
        background-color: var(--color-gray);
        padding: 10px;
        position: relative;
        
         
        h2 {
            text-align: center;
            padding: 15px 0;
        }
        
        div {
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 10px;
            padding: 5px 0;
            h3 {
                color: var(--color-primary);
                font-size: 25px;
                font-weight: 600;
                text-transform: capitalize;
            }
            p {
                color: var(--color-white)
            }
        }

        a {
            text-decoration: none;
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 7px 15px;
            margin: 10px;
            background-color: var(--color-white); 
            color: var(--color-black);
            font-size: 20px;
            border-radius: 10px;

            &:hover {
                background-color: var(--color-primary);
                color: var(--color-white);
            }
        }
    }
`