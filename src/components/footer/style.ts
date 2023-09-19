import styled from "styled-components";

export const Wrapper = styled.footer`
background-color: #0f0e19;
.main__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  height: 246px;
  padding: 24px 15px;
  .contacts {
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
      color: #c0c0c0;
      span {
        color: #999;
      }
    }
  }

  .social__media {
    display: flex;
    gap: 24px;
    a {
      cursor: pointer;
      transition: all 0.3s;
      text-decoration: none;
      &:hover {
        transform: scale(1.2);
        box-shadow: 1px 1px 20px #424040;
      }
    }
  }
}

@media (max-width: 786px) {
  .main__container {
    align-items: flex-start;
    justify-content: center;
    gap: 24px;
    flex-direction: column;
  }
}
`;