import styled from "styled-components";

interface PropsType{
  image: any
}

export const Wrapper = styled.section<PropsType>`
  background-image: url(${props => props.image.src});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding-top: 154px;
  padding-bottom: 42px;
  .menu__container{
    display: flex;
    align-items: center;
    flex-direction: column;
    .text__area{
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      #aosf {
        height: 50px;
      }
      .images {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h1 {
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      .date {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          height: 30px;
        width: 40px;
        } 
      }
    }

    .listButton {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 17px;
      margin-top: 42px;
      .cta{
        cursor: pointer;
        color: #1f1f1f;
        font-size: 13px;
        font-weight: 700;
        line-height: normal;

        border-radius: 52px;
        background: #fff;
        padding: 10px 14px;
        justify-content: center;
        align-items: center;
        border: 1px solid #fff;
        transition: 0.2s linear;
        box-shadow: 0px 15px 25px 0px rgba(92, 199, 255, 0.04);
        &.hackathon{
          background-color: transparent;
          color: #fff;
        }
        &:hover{
          color: #fff;
          background: rgba(255, 253, 253, 0.086);
          box-shadow: 0 0 30px rgba(254, 42, 42, 0.141),
          inset 0 0 10px rgba(4, 158, 168, 0.06), inset 0 0 10px rgba(70, 37, 141, 0);
          border: 1px solid rgba(254, 42, 42, 0.26);
          background-image: linear-gradient(134deg, rgba(4, 158, 168, 0.06) 1.22%, rgba(70, 37, 141, 0) 100%);
        }
      }
    }

    .organizers{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 24px;
      .logos{
        display: flex;
        align-items: center;
        gap: 32px;
        .chaoss{
          height: 30px;
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
  .text__area{
      #aosf {
        width: 320px;
        height: 30px;
      }
      .date {
        h1 {
          font-size: 16px;
        }
        gap: 0;
        img {
          height: 16px;
          width: 14px;
        } 
      }
    }
}


@media (max-width: 412px) {
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