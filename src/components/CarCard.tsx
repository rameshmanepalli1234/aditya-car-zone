import React from 'react';
import styled from 'styled-components';
import { Car } from '../types/car';

const CarCardContainer = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    border-radius: 12px;
  }
`;

const CarImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CarCardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const CarPriceBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const CarInfo = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const CarTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const CarYear = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const CarDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const CarDetailBadge = styled.span`
  background: #f8f9fa;
  color: #555;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid #e9ecef;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.25rem 0.6rem;
  }
`;

const CarLocation = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

interface CarCardProps {
  car: Car;
  onSelect: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
  const handleClick = () => {
    onSelect(car);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <CarCardContainer onClick={handleClick} data-testid={`card-car-${car.id}`}>
      <CarImageContainer>
        <CarImage
          src={car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          data-testid={`image-car-${car.id}`}
        />
        <CarPriceBadge data-testid={`badge-price-${car.id}`}>
          {formatPrice(car.price)}
        </CarPriceBadge>
      </CarImageContainer>
      <CarInfo>
        <CarTitle data-testid={`title-car-${car.id}`}>
          {car.brand} {car.model}
        </CarTitle>
        <CarYear data-testid={`text-year-${car.id}`}>{car.year}</CarYear>
        <CarDetails>
          <CarDetailBadge data-testid={`text-mileage-${car.id}`}>
            {car.mileage.toLocaleString()} miles
          </CarDetailBadge>
          <CarDetailBadge data-testid={`text-fuel-${car.id}`}>
            {car.fuelType}
          </CarDetailBadge>
          <CarDetailBadge data-testid={`text-transmission-${car.id}`}>
            {car.transmission}
          </CarDetailBadge>
        </CarDetails>
        <CarLocation data-testid={`text-location-${car.id}`}>
          📍 {car.location}
        </CarLocation>
      </CarInfo>
    </CarCardContainer>
  );
};

export default CarCard;
