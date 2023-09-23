import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 224px 0;
  .main__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 64px;
  }

  @media (max-width: 546px) {
    .main__container {
      align-items: flex-start;
      gap: 32px;
    }
  }
`;

export const StylePartners = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  img.ChaossAfricaLogo {
    height: 40px;
  }
  @media (max-width: 546px) {
    flex-direction: column;
  }
`;

export const StyleComunity = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 14px;

  .logos {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  img.logoWTM {
    object-fit: cover;
    height: 85px;
    width: 90px;
  }

  img.CDA_Girls {
    object-fit: cover;
    height: 50px;
    width: 300px;
  }

  img.CDAlogo {
    object-fit: cover;
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 10px;
    background: var(
      --vf,
      linear-gradient(170deg, #fe2a2a 12.25%, #f7931e 108.64%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img {
    height: 28px;
    max-width: 150px;
    width: 100%;
  }

  @media (max-width: 416px) {
    div.logos {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 546px) {
    .logos {
      flex-direction: column;
      gap: 32px;
    }
  }

  @media (max-width: 836px) {
    text-align: left;
    .logos {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 546px) {
    .logos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const StyleCompany = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h2 {
    font-size: 22px;
    background: var(
      --vf,
      linear-gradient(170deg, #fe2a2a 12.25%, #f7931e 108.64%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img {
    height: 28px;
    max-width: 150px;
    width: 100%;
    &.silver {
      height: 64px;
      max-width: 120px;
    }
    &.in__kind__sponsors {
      height: 38px;
      max-width: 96px;
    }
  }
`;
