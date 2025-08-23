import { defineMessages } from 'react-intl';

const messages = defineMessages({
  // Header messages
  BRAND_NAME: {
    id: 'header.brandName',
    defaultMessage: '🚗 Aditya Car Zone',
  },
  NAV_HOME: {
    id: 'header.navigation.home',
    defaultMessage: 'Home',
  },
  NAV_CARS: {
    id: 'header.navigation.cars',
    defaultMessage: 'Cars',
  },
  NAV_ABOUT: {
    id: 'header.navigation.about',
    defaultMessage: 'About',
  },
  NAV_CONTACT: {
    id: 'header.navigation.contact',
    defaultMessage: 'Contact',
  },
  // CarList messages
  CAR_LIST_TITLE: {
    id: 'carList.title',
    defaultMessage: 'Available Cars',
  },
  CAR_LIST_SUBTITLE: {
    id: 'carList.subtitle',
    defaultMessage: 'Find your perfect ride from our collection',
  },
  LOADING_CARS: {
    id: 'carList.loading',
    defaultMessage: 'Loading cars...',
  },
  ERROR_LOADING_CARS: {
    id: 'carList.error',
    defaultMessage: 'Error loading cars: {error}',
  },
  // CarCard messages
  MILES: {
    id: 'carCard.miles',
    defaultMessage: 'miles',
  },
  // CarDetails messages
  BACK_TO_CARS: {
    id: 'carDetails.backToCars',
    defaultMessage: '← Back to Cars',
  },
  SPECIFICATIONS: {
    id: 'carDetails.specifications',
    defaultMessage: 'Specifications',
  },
  DESCRIPTION: {
    id: 'carDetails.description',
    defaultMessage: 'Description',
  },
  FEATURES: {
    id: 'carDetails.features',
    defaultMessage: 'Features',
  },
  LOCATION: {
    id: 'carDetails.location',
    defaultMessage: 'Location',
  },
  YEAR: {
    id: 'carDetails.year',
    defaultMessage: 'Year:',
  },
  MILEAGE: {
    id: 'carDetails.mileage',
    defaultMessage: 'Mileage:',
  },
  FUEL_TYPE: {
    id: 'carDetails.fuelType',
    defaultMessage: 'Fuel Type:',
  },
  TRANSMISSION: {
    id: 'carDetails.transmission',
    defaultMessage: 'Transmission:',
  },
  ENGINE: {
    id: 'carDetails.engine',
    defaultMessage: 'Engine:',
  },
  POWER: {
    id: 'carDetails.power',
    defaultMessage: 'Power:',
  },
  COLOR: {
    id: 'carDetails.color',
    defaultMessage: 'Color:',
  },
  CONDITION: {
    id: 'carDetails.condition',
    defaultMessage: 'Condition:',
  },
  CONTACT_SELLER: {
    id: 'carDetails.contactSeller',
    defaultMessage: 'Contact Seller',
  },
  SCHEDULE_TEST_DRIVE: {
    id: 'carDetails.scheduleTestDrive',
    defaultMessage: 'Schedule Test Drive',
  },
  // ErrorBoundary messages
  ACCESS_DENIED: {
    id: 'errorBoundary.accessDenied',
    defaultMessage: 'Access Denied',
  },
  ACCESS_DENIED_MESSAGE: {
    id: 'errorBoundary.accessDeniedMessage',
    defaultMessage:
      "You don't have permission to access this application. Please check your access key and try again.",
  },
  RETRY_ACCESS: {
    id: 'errorBoundary.retryAccess',
    defaultMessage: 'Retry Access',
  },
  SOMETHING_WENT_WRONG: {
    id: 'errorBoundary.somethingWentWrong',
    defaultMessage: 'Something went wrong',
  },
  UNEXPECTED_ERROR: {
    id: 'errorBoundary.unexpectedError',
    defaultMessage: 'An unexpected error occurred. Please try again.',
  },
  TRY_AGAIN: {
    id: 'errorBoundary.tryAgain',
    defaultMessage: 'Try Again',
  },
  // AccessControl messages
  VALIDATING_ACCESS: {
    id: 'accessControl.validatingAccess',
    defaultMessage: 'Validating Access...',
  },
  VALIDATING_ACCESS_MESSAGE: {
    id: 'accessControl.validatingAccessMessage',
    defaultMessage: 'Please wait while we verify your access credentials.',
  },
  ACCESS_DENIED_TITLE: {
    id: 'accessControl.accessDeniedTitle',
    defaultMessage: 'Access Denied',
  },
  ACCESS_DENIED_DESCRIPTION: {
    id: 'accessControl.accessDeniedDescription',
    defaultMessage:
      "You don't have permission to access this application. Please check your access key and try again.",
  },
});

export default messages;
