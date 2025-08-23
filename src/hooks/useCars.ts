import { useState, useEffect } from 'react';
import { Car } from '@app-types/car';

// Mock data for demonstration
const mockCars: Car[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 25000,
    mileage: 15000,
    fuelType: 'hybrid',
    transmission: 'automatic',
    color: 'Silver',
    description:
      'A reliable and fuel-efficient sedan perfect for daily commuting.',
    imageUrl:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
    features: [
      'Bluetooth',
      'Backup Camera',
      'Lane Departure Warning',
      'Adaptive Cruise Control',
    ],
    engineSize: '2.5L',
    power: '208 HP',
    condition: 'excellent',
    location: 'San Francisco, CA',
  },
  {
    id: '2',
    brand: 'Honda',
    model: 'CR-V',
    year: 2021,
    price: 28000,
    mileage: 22000,
    fuelType: 'petrol',
    transmission: 'automatic',
    color: 'Blue',
    description:
      'Spacious SUV with excellent safety ratings and comfortable interior.',
    imageUrl:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
    features: [
      'All-Wheel Drive',
      'Apple CarPlay',
      'Android Auto',
      'Blind Spot Monitoring',
    ],
    engineSize: '1.5L Turbo',
    power: '190 HP',
    condition: 'good',
    location: 'Los Angeles, CA',
  },
  {
    id: '3',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 45000,
    mileage: 5000,
    fuelType: 'electric',
    transmission: 'automatic',
    color: 'White',
    description:
      'Electric vehicle with cutting-edge technology and impressive performance.',
    imageUrl:
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
    features: ['Autopilot', 'Supercharging', 'Glass Roof', 'Premium Audio'],
    engineSize: 'Dual Motor',
    power: '346 HP',
    condition: 'excellent',
    location: 'Seattle, WA',
  },
  {
    id: '4',
    brand: 'BMW',
    model: 'X3',
    year: 2020,
    price: 35000,
    mileage: 35000,
    fuelType: 'petrol',
    transmission: 'automatic',
    color: 'Black',
    description:
      'Luxury compact SUV with sporty handling and premium features.',
    imageUrl:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    features: [
      'xDrive AWD',
      'iDrive System',
      'Heated Seats',
      'Panoramic Sunroof',
    ],
    engineSize: '2.0L Turbo',
    power: '248 HP',
    condition: 'good',
    location: 'New York, NY',
  },
  {
    id: '5',
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    price: 32000,
    mileage: 18000,
    fuelType: 'petrol',
    transmission: 'manual',
    color: 'Red',
    description:
      'Iconic American muscle car with powerful performance and classic styling.',
    imageUrl:
      'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?w=400&h=300&fit=crop',
    features: ['V8 Engine', 'Manual Transmission', 'Sport Mode', 'Track Apps'],
    engineSize: '5.0L V8',
    power: '450 HP',
    condition: 'excellent',
    location: 'Dallas, TX',
  },
  {
    id: '6',
    brand: 'Audi',
    model: 'A4',
    year: 2022,
    price: 38000,
    mileage: 12000,
    fuelType: 'petrol',
    transmission: 'automatic',
    color: 'Gray',
    description:
      'Premium sedan with sophisticated design and advanced technology.',
    imageUrl:
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
    features: [
      'Quattro AWD',
      'Virtual Cockpit',
      'MMI Navigation',
      'Bang & Olufsen Sound',
    ],
    engineSize: '2.0L Turbo',
    power: '201 HP',
    condition: 'excellent',
    location: 'Chicago, IL',
  },
];

export const useCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCars(mockCars);
        setLoading(false);
      } catch (_err) {
        setError('Failed to fetch cars');
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { cars, loading, error };
};
