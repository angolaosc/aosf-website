import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 94px 0;
  margin: 0 auto;
  background-color: #1e1c2ec4;
  .main__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;
    .contributors {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      max-width: 400px;
      width: 100%;
    }

    .aosc {
      max-width: 460px;
      width: 100%;
      p {
        font-size: 14px;
        color: #999;
        a {
          color: #74abfd;
        }
      }
    }
  }

  @media (max-width: 999px) {
    .main__container {
      flex-direction: column;
      align-items: center;
      gap: 64px;
      .contributors {
        align-items: flex-start;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 700px;
        width: 100%;
        flex-wrap: nowrap;
      }
    }
  }
  @media (max-width: 546px) {
    .main__container {
      align-items: flex-start;
      gap: 32px;
      .contributors {
        flex-direction: column;
      }
    }
  }
`;