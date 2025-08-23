export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  transmission: 'manual' | 'automatic';
  color: string;
  description: string;
  imageUrl: string;
  features: string[];
  engineSize: string;
  power: string;
  condition: 'excellent' | 'good' | 'fair';
  location: string;
}
