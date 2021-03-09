import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        margin:0;
        background:#f4f4f4;
    }

    * {
        box-sizing:border-box;
    }
`

export const Title = styled.h2`
    font-size: 1.8rem;
    text-align:center;
`

export const Wrapper = styled.div`
    margin: 50px auto;
    width: 80%;
    border-radius:5px;
    border:2px solid #d8e2f0;
    background:#ffffff;

    @media screen and (max-width: 480px) {
        margin: 0 auto;
        width: 95%;
 }
`