import { styled } from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  transition: all 0.3s;
  &:hover {
    filter: brightness(0.8);
  }
  img {
    object-fit: cover;
  }
  a {
    text-decoration: none;
    border-radius: 6px;
    border: 2px solid #fff;
    font-weight: bold;
    height: 28px;
  }
  .linkedin {
    display: flex;
    flex-direction: column;
    border-radius: 0;
    border: none;
    font-size: 12px;
    gap: 1px;
    color: #fff;
    span {
      font-size: 10px;
      color: #999;
    }
  }
`;