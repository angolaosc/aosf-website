import styled from "styled-components";

interface PropsType{
  image: any
}

export const Wrapper = styled.section<PropsType>`
  background-image: url(${props => props.image.src}); 
  width: 100%;
  height: 800px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 200px 0;

  div#listButtonAndTextArea {
    margin: 0px 20px;
  }
  
  .menu__container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 144px;
    .text__area{
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      h1{
        background: var(--vf, linear-gradient(95deg, #fe2a2a 12.25%, #f7931e 108.64%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 52px;
        text-align: center;
        font-weight: 600;
        span{
          font-size: 52px;
        }
      }
    }

  .listButton {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 17px;
      margin-top: 42px;
     
    }

    .organizers{
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 0px 20px;
      gap: 24px;
      .logos{
        display: flex;
        align-items: center;
        gap: 32px;
        .chaoss{
          height: 37px;
          width: 160px;
        }
      }
      h2 {
        margin-bottom: 60px;
        font-size: 22px;
        font-weight: 700;
        margin-top: 60px;
      }
    } 
  }
  



@media (max-width: 800px) {
  .menu__container{
    .text__area{
     h1{
      font-size: 48px;
        span{
        font-size: 38px;
        }
      }
    }
  }
}




@media (max-width: 412px) {
  .menu__container{
    .text__area{
     h1{
      font-size: 38px;
        span{
        font-size: 32px;
        font-weight: 500;
        }
      }
    }
  }
  .listButton {
    flex-direction: column;
      .cta{
        font-size: 12px;
        padding: 8px 12px;
      }
    }

  .organizers{
    margin-top: -24px;
      .logos{
        margin-top: -24px;
        flex-direction: column;
        .chaoss{
          height: 30px;
          width: 140px;
        }
      }
    }
}

 
  
`