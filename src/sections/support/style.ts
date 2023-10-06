import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 224px 0;
  .main__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 64px;

    div#supportGroup {
      display: flex;
      gap: 90px;

      @media (max-width: 1115px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 789px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;

export const PlatinumStyles = styled.section `
  div {
    display: flex;
    gap: 30px;

    @media (max-width: 391px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    img.ChaossAfricaLogo {
      height: 40px;
      object-fit: cover;
      width: 100px;
    }

    img.devexpertsLogo {
      height: 30px;
      object-fit: cover;
      width: 170px;
    }

    @media (max-width: 357px) {
      img.ChaossAfricaLogo {
        height: 30px;
        object-fit: cover;
        width: 80px;
      }
  
      img.devexpertsLogo {
        height: 25px;
        object-fit: cover;
        width: 140px;
      }
    }
  }
`;

export const MediaPartnersSection = styled.section `
  display:flex;
  flex-direction: column;
  width: 100%;

  img {
    height: 45px;
    width: 115px;
    object-fit: cover;
  }
`;

export const GoldSection = styled.section `
  display:flex;
  flex-direction: column;
  width: 100%;
  
  img.interledgerLogo {
    height: 50px;
    width: 160px;
  }

  img.logo_principal_branco {
    height: 50px;
    width: 85px;
    object-fit: cover;
  }

  div {
    display: flex;
    gap: 30px;

    @media (max-width: 391px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);

      img.interledgerLogo {
        height: 40px;
        width: 150px;
      }

      img.logo_principal_branco {
        height: 40px;
        width: 70px;
        object-fit: cover;
      }
    }
  }
`;

export const InKindSponsorsStyle = styled.section `
  div {
    display: flex;
    gap: 30px;

    @media (max-width: 391px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }

  img.gitHub {
    height: 29px;
    width: 120px;
    object-fit: cover;
  }

  img.SauceLabLogo {
    height: 29px;
    width: 150px;
    object-fit: cover;
  }

  @media (max-width: 357px) {
    img.gitHub {
      height: 20px;
      width: 90px;
      object-fit: cover;
    }
  
    img.SauceLabLogo {
      height: 29px;
      width: 146px;
      object-fit: cover;
    }
  }
`;

export const SilverStyles = styled.section`
  img.Culysoft {
    width: 110px;
    height: 60px;
  }
`;

export const StyleCommunity = styled.div`
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

  @media (max-width: 357px)  {
    img.logoWTM {
      object-fit: cover;
      height: 8px;
      width: 90px;
     }
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