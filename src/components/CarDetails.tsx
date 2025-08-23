import React from 'react';
import styled from 'styled-components';
import { Car } from '@app-types/car';

const CarDetailsContainer = styled.section`
  width: 100%;
`;

const CarDetailsHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const BackButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
`;

const CarDetailsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const CarDetailsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CarDetailsImageSection = styled.div`
  position: relative;
`;

const CarDetailsImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const CarPriceLarge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }
`;

const CarDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

const SpecLabel = styled.span`
  font-weight: 600;
  color: #555;
`;

const SpecValue = styled.span`
  color: #333;
  font-weight: 500;
`;

const CarDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.li`
  background: #f8f9fa;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  color: #555;
  font-weight: 500;
  border: 1px solid #e9ecef;
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '✓';
    position: absolute;
    left: 0.8rem;
    color: #28a745;
    font-weight: bold;
  }
`;

const CarLocationText = styled.p`
  color: #666;
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CarActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button<{ primary?: boolean }>`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ primary }) =>
    primary
      ? `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }
  `
      : `
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.1);

    &:hover {
      background: #667eea;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
    }
  `}
`;

interface CarDetailsProps {
  car: Car;
  onBack: () => void;
}

const CarDetails: React.FC<CarDetailsProps> = ({ car, onBack }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <CarDetailsContainer data-testid="section-car-details">
      <CarDetailsHeader>
        <BackButton onClick={onBack} data-testid="button-back-list">
          ← Back to Cars
        </BackButton>
        <CarDetailsTitle data-testid="title-car-details">
          {car.brand} {car.model}
        </CarDetailsTitle>
      </CarDetailsHeader>

      <CarDetailsContent>
        <CarDetailsImageSection>
          <CarDetailsImage
            src={car.imageUrl}
            alt={`${car.brand} ${car.model}`}
            data-testid="image-car-details"
          />
          <CarPriceLarge data-testid="text-price-large">
            {formatPrice(car.price)}
          </CarPriceLarge>
        </CarDetailsImageSection>

        <CarDetailsInfo>
          <InfoSection data-testid="section-car-specs">
            <h3>Specifications</h3>
            <SpecsGrid>
              <SpecItem data-testid="spec-year">
                <SpecLabel>Year:</SpecLabel>
                <SpecValue>{car.year}</SpecValue>
              </SpecItem>
              <SpecItem data-testid="spec-mileage">
                <SpecLabel>Mileage:</SpecLabel>
                <SpecValue>{car.mileage.toLocaleString()} miles</SpecValue>
              </SpecItem>
              <SpecItem data-testid="spec-fuel">
                <SpecLabel>Fuel Type:</SpecLabel>
                <SpecValue>{car.fuelType}</SpecValue>
              </SpecItem>
              <SpecItem data-testid="spec-transmission">
                <SpecLabel>Transmission:</SpecLabel>
                <SpecValue>{car.transmission}</SpecValue>
              </SpecItem>
              <SpecItem data-testid="spec-engine">
                <SpecLabel>Engine:</SpecLabel>
                <SpecValue>{car.engineSize}</SpecValue>
              </SpecItem>
              <SpecItem data-testid="spec-power">
                <SpecLabel>Power:</SpecLabel>
                <SpecValue>{car.power}</SpecValue>
              </SpecItem>
              <SpecItem data-testid="spec-color">
                <SpecLabel>Color:</SpecLabel>
                <SpecValue>{car.color}</SpecValue>
              </SpecItem>
              <SpecItem data-testid="spec-condition">
                <SpecLabel>Condition:</SpecLabel>
                <SpecValue>{car.condition}</SpecValue>
              </SpecItem>
            </SpecsGrid>
          </InfoSection>

          <InfoSection data-testid="section-car-description">
            <h3>Description</h3>
            <CarDescription>{car.description}</CarDescription>
          </InfoSection>

          <InfoSection data-testid="section-car-features">
            <h3>Features</h3>
            <FeaturesList>
              {car.features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  data-testid={`feature-item-${index + 1}`}
                >
                  {feature}
                </FeatureItem>
              ))}
            </FeaturesList>
          </InfoSection>

          <InfoSection data-testid="section-car-location">
            <h3>Location</h3>
            <CarLocationText>📍 {car.location}</CarLocationText>
          </InfoSection>

          <CarActions data-testid="section-car-actions">
            <ActionButton primary data-testid="button-contact-seller">
              Contact Seller
            </ActionButton>
            <ActionButton data-testid="button-schedule-test">
              Schedule Test Drive
            </ActionButton>
          </CarActions>
        </CarDetailsInfo>
      </CarDetailsContent>
    </CarDetailsContainer>
  );
};

export default CarDetails;
