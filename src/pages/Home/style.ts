import styled from 'styled-components';
import homeCarbonClearning from '../../assets/homeCarbonClearning.png';

export const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(255, 255, 255);
  padding: 100px 150px 70px 150px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 45px;

  @media (max-width: 1200px) {
    padding: 100px 50px 70px 50px;
  }

  > * {
    flex: 1;
  }

  .home-container-carbon-clearning-left-section {
    background-image: url(${homeCarbonClearning});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 350px;
    height: 400px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
    position: relative;
    object-fit: cover;
  }

  .home-carbon-cleaning-floating-image-container {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 30px;
    border-radius: 10px;
    overflow: hidden;
    border-width: 5px;
    border-style: solid;
    border-color: white;
    border-image: initial;
  }

  .home-carbon-cleaning-floating-image {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .experience-badge {
    position: absolute;
    top: 20px;
    right: -20px;
    color: white;
    text-align: center;
    box-shadow: rgba(79, 189, 57, 0.3) 0px 5px 15px;
    background: #4fbd39;
    padding: 20px;
    border-radius: 10px;
    font-weight: 700;
  }

  .years {
    font-size: 2.5rem;
    font-weight: 700;
    display: block;
    line-height: 1;
  }

  .home-carbon-cleaning-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 25px;
    color: #000000;
    text-transform: uppercase;
    line-height: 45px;
  }

  .home-carbon-cleaning-description {
    color: rgb(33, 37, 41);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 25px;
  }

  .home-carbon-cleaning-services-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
    gap: 20px;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgb(248, 249, 250);
    border-radius: 10px;
    transition: 0.3s;

    &:hover {
      transform: translateY(-3px);
      background: #e8f5e5;
    }
  }

  .feature-icon {
    font-size: 26px;
    color: #4fbd39;
  }
`;
