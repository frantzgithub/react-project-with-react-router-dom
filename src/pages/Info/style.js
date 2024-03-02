import styled from 'styled-components'

export const Container = styled.section`

h1 {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 10px 0;
    text-align: center;
    margin-bottom: 20px;
}

a {
    text-decoration: none;
    background-color: var(--color-white);
    color: var(--color-black);
    padding: 10px;
    border-radius: 50%;
    margin: 20px;
}


.container-info{
    list-style: none;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    max-width: 800px;
    margin: 25px 20px;
    background-color: var(--color-gray);

    @media screen and (max-width: 575px) {
        flex-direction: column;
    }
    
    
    .image-container {
        width: 100%;
        background-color: var(--color-gray);
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
        background-color: var(--color-primary);
        padding: 10px;
        position: relative;
        border-bottom-right-radius: 250px;

        @media screen and (max-width: 575px) {
            border-bottom-right-radius: 0;
        }
        
         
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
                color: var(--color-white);
                font-size: 25px;
                font-weight: 600;
                text-transform: capitalize;
            }
            p {
                color: var(--color-gray)
            }

        

        }
        
    }
}

.description {
    margin: 20px;
    font-size: 20px;
    line-height: 1.4;
}

`

export const HeaderInfo = styled.h1`
    
`