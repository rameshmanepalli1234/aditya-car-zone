import styled from 'styled-components';

export const StyledMenuBar = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;

  .menu-bar-item {
    background-color: red;
    width: 33.9%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    font-weight: 600;
    /* cursor: pointer; */
    transition: all 0.5s ease;
    &:hover {
      color: black;
      /* background-color: #000; */
    }

    @media (max-width: 600px) {
      font-size: 12px;
    }

    @media (max-width: 430px) {
      font-size: 11px;
    }
  }
`;
