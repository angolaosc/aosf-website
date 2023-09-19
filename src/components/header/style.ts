import styled from 'styled-components'


export const Wrapper = styled.header`
    background: #0E0B14;
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0;
    .main__container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 88px;
      nav {
        display: flex;
        gap: 20px;
        a {
          color: #fff;
          font-size: 1.6rem;
          line-height: normal;
          list-style: none;
          cursor: pointer;
          &:hover {
            background: var(--vf, linear-gradient(95deg, #FE2A2A 12.25%, #F7931E 108.64%));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }   
      }
  }


  @media (max-width: 786px) {
    .main__container{
      nav{
        display: none;
      }
    }
  }
`











