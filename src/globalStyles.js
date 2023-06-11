import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;   
        overflow: hidden;
        height: 100%;
    }
    
    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgb(234, 234, 234);
        font-family: 'Wix Madefor Display', sans-serif;
    }

    p {
        padding: 0;
        margin: 0;
    }
`

export default GlobalStyle