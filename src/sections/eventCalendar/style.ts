
import styled from "styled-components";


export const Wrapper = styled.section`
  margin: 124px 0;
  .main__container{
    display: flex;
    flex-direction: column;
    gap: 124px;
    position: relative;
    .information__area{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .description{
        display: flex;
        flex-direction: column;
        gap: 24px;
        max-width: 600px;
        width: 100%;
        .content{
          display: flex;
          flex-direction: column;
          gap: 24px;
          p{
            font-size: 18px;
					  line-height: 32px;
            color: #c1c1c1;
          }
        }
      }
    }

    h1, h3{
      background: var(--vf, linear-gradient(95deg, #fe2a2a 12.25%, #f7931e 108.64%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 22px;
      font-weight: 600;
    }
    h3{
      position: absolute;
      padding: 0 15px;
      left: 0;
      top: 32%;
    }

    .frame__area {
      display: flex;
      flex-direction: column;
      padding: 64px 24px 0 24px;
      align-items: center;
      height: 552px;
      border-radius: 15px;
      border: 1px solid rgba(254, 42, 42, 0.26);
      background: linear-gradient(
        134deg,
        rgba(4, 158, 168, 0.06) 1.22%,
        rgba(70, 37, 141, 0) 100%
      );
      width: 100%;

      h1 {
        margin-top: 160px;
        font-weight: 900;
        font-size: 60px;
        position: relative;
        animation: pulse 4s ease-in-out infinite;
      }
    }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1) rotate(0deg);
    }

    50% {
      transform: scale(1.2) rotate(30deg);
    }
  }

  }

  @media (max-width: 999px) {
    .main__container{
      .information__area{
          flex-direction: column;
          gap: 84px;
          .title{
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      h3{
        position: relative;
      }
    }
  }

  @media (max-width: 784px) {
    .main__container{
      .frame__area{
        height: 464px;
        h1{
          font-size: 46px;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .main__container{
      .frame__area{
        height: 364px;
        h1{
          margin-top: 100px;
          font-size: 32px;
        }
      }
    }
  }
`