import styled from 'styled-components';
import footerIMG from '../../assets/footerimg.jpg';

export const StyledFooter = styled.div`
  height: 600px;
  width: 100%;
  background-image: url(${footerIMG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .footer-container {
    display: flex;
    flex-direction: row;
    color: white;
    font-weight: 600;
  }
`;
