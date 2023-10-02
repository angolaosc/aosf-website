import styled from "styled-components";

export const Wrapper = styled.h2`
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 14px;
  font-size: 32px;
  font-weight: 600;
  span{
    background: var(--vf, linear-gradient(95deg, #fe2a2a 12.25%, #f7931e 108.64%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 32px;
  }
  &.date{
    font-size: 20px;
    padding: 12px 0;
    span{
      font-size: 20px;
    }
  }

  @media (max-width: 800px) {
      &.date{
        font-size: 24px;
        span{
          font-size: 24px;
        }
      }
  }

  @media (max-width: 546px) {
      &.date{
        font-size: 20px;
        span{
          font-size: 20px;
        }
      }
  }

  @media (max-width: 412px) {
      font-size: 24px;
      span{
        font-size: 24px;
      }
      &.date{
        font-size: 20px;
        span{
          font-size: 20px;
        }
      }
  }



  @media (max-width: 375px) {
    font-size: 20px;
    span{
      font-size: 20px;
    }

    &.date{
        font-size: 18px;
        span{
          font-size: 18px;
        }
      }
  }
`