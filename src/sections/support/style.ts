import styled from "styled-components";


export const StylePartners = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  @media (max-width: 546px) {
    flex-direction: column;
  }
`;

export const StyleComunity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  .logos {
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }
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
  }

  @media (max-width: 546px) {
    .logos {
      flex-direction: column;
      gap: 32px;
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