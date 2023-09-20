import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: none;
  .menu__mobile {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
    position: absolute;
    top: 50px;
    right: 0;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 20px rgba(254, 42, 42, 0.048);
    z-index: 12;
    border-radius: 8px 0 8px 8px;
    animation: fadeSlideIn 0.2s ease-in-out;

    border: 1px solid rgba(254, 42, 42, 0.26);
    background: #0f0e19f5;

    &:before {
    content: "";
    position: absolute;
    top: -21px;
    right: -1px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent rgba(254, 42, 42, 0.26) transparent;

    background: linear-gradient(134deg, rgba(4, 158, 168, 0.06) 1.22%, rgb(6, 4, 10) 100%);
  }
    a {
      font-size: 14px;
      cursor: pointer;
      transition: 0.2s;
      color: #fff;
      &:hover {
        background: var(--vf, linear-gradient(95deg, #FE2A2A 12.25%, #F7931E 108.64%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      } 
    }
  } 

  .open__Menu {
    background-color: transparent;
    cursor: pointer;
    display: none;
    svg {
      font-size: 32px;
      color: #f1f1f1;
    }
  } 

@keyframes fadeSlideIn {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 786px) {
   display: flex;
   .open__Menu{
    display: flex;
   }
}
`