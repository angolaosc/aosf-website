import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    box-sizing: border-box;

    list-style: none;
  }

  .main__container{
    max-width: 1216px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  body {
    color: #fff;
    background-color: #0C0911;
    
  }

  html{
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    width: 13px;
  }

  body::-webkit-scrollbar-track {
    background: #0C0911;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 1px solid rgba(254, 42, 42, 0.26);
    background: linear-gradient(134deg, rgba(4, 158, 168, 0.06) 1.22%, rgba(70, 37, 141, 0.00) 100%);
  }

`