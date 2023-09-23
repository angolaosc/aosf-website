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

  img.AWS_User_group {
    height: 36px;
    object-fit: cover;
  }

  img.CNCG_logo {
    height: 130px;
    object-fit: cover;
  }

  img.CDA_Girls {
    objectize: cover;
    height: 50px;
    width: 300px;
  }

  img.CDAlogo {
    objectize: cover;
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

  @media (max-width: 300px) {
    div.logos {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }

  img {
    height: 28px;
    max-width: 150px;
    width: 100%;
  }

  @media (max-width: 371px) {
     img.logoWTM {
      object-fit: cover;
      height: 70px;
      width: 74px;
    }

    img.DL_logo_2018_color {
      height: 23px;
      width: 110px;
      object-fit: cover;
    }

    img.MozdevzLogo {
      height: 18px;
      width: 128px;
      object-fit: cover;
    }

    img.AWS_User_group {
      height: 33px;
      width: 132px;
      object-fit: cover;
    }

    img.CNCG_logo {
      height: 100px;
      width: 110px;
      object-fit: cover;
    }

    img.CDA_Girls {
      objectize: cover;
      height: 40px;
      width: 122px;
    }

    img.CDAlogo {
      objectize: cover;
      height: 70px;
      width: 70px;
      border-radius: 50%;
    }
  }

  @media (max-width: 314px) {
    img.logoWTM {
     object-fit: cover;
     height: 57px;
     width: 55px;
   }

   img.DL_logo_2018_color {
     height: 20px;
     width: 100px;
     object-fit: cover;
   }

   img.MozdevzLogo {
     height: 17px;
     width: 120px;
     object-fit: cover;
   }

   img.AWS_User_group {
     height: 32px;
     width: 126px;
     object-fit: cover;
   }

   img.CNCG_logo {
     height: 90px;
     width: 100px;
     object-fit: cover;
   }

   img.CDA_Girls {
     objectize: cover;
     height: 35px;
     width: 108px;
   }

   img.CDAlogo {
     objectize: cover;
     height: 60px;
     width: 64px;
     border-radius: 50%;
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

  @media (max-width: 1115px) {
    text-align: left;
   .logos {
    display: grid;
      grid-template-columns: repeat(4, 1fr);
   }
  }

  @media (max-width: 546px) {
    .logos {
      display: grid;
        grid-template-columns: repeat(2, 1fr);
     }
  }

  @media (max-width: 1073px) {
    .logos {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 580px) {
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