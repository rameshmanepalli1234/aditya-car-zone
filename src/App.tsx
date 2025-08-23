import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '@components/Header';
import CarList from '@components/CarList';
import CarDetails from '@components/CarDetails';
import AccessControl from '@components/AccessControl';
import { Car } from '@app-types/car';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 15px;
  }
`;

const App: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleCarSelect = (car: Car) => {
    setSelectedCar(car);
  };

  const handleBackToList = () => {
    setSelectedCar(null);
  };

  return (
    <AccessControl>
      <AppContainer>
        <Header />
        <MainContent>
          {selectedCar ? (
            <CarDetails car={selectedCar} onBack={handleBackToList} />
          ) : (
            <CarList onCarSelect={handleCarSelect} />
          )}
        </MainContent>
      </AppContainer>
    </AccessControl>
  );
};

export default App;
