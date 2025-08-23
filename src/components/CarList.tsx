import React from 'react';
import styled from 'styled-components';
const { FormattedMessage } = require('react-intl');
import CarCard from '@components/CarCard';
import { Car } from '@app-types/car';
import { useCars } from '@hooks/useCars';
import messages from './messages';

const CarListContainer = styled.section`
  width: 100%;
`;

const CarListHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
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
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

interface CarListProps {
  onCarSelect: (car: Car) => void;
}

const CarList: React.FC<CarListProps> = ({ onCarSelect }) => {
  const { cars, loading, error } = useCars();

  if (loading) {
    return (
      <div className="loading-container" data-testid="section-loading">
        <div className="loading-spinner"></div>
        <p>
          <FormattedMessage {...messages.LOADING_CARS} />
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container" data-testid="section-error">
        <p>
          <FormattedMessage
            {...messages.ERROR_LOADING_CARS}
            values={{ error }}
          />
        </p>
      </div>
    );
  }

  return (
    <CarListContainer data-testid="section-car-list">
      <CarListHeader>
        <h2>
          <FormattedMessage {...messages.CAR_LIST_TITLE} />
        </h2>
        <p>
          <FormattedMessage {...messages.CAR_LIST_SUBTITLE} />
        </p>
      </CarListHeader>
      <CarGrid data-testid="grid-car-cards">
        {cars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            onSelect={onCarSelect}
            data-testid={`card-car-${car.id}`}
          />
        ))}
      </CarGrid>
    </CarListContainer>
  );
};

export default CarList;
