import { locationDetailReturn, searchDataReturn } from '../common/types';

export const dollarsFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const discountFormatter = {
  format: (gross: number, discount: number) => {
    return (((gross - discount) / gross) * 100).toFixed(0);
  },
};

export const utcDateFormatter = (date: Date = new Date()) => {
  date.setDate(date.getDate() + 1);

  const monthText = date.toLocaleDateString('en-us', { month: 'long' });
  return `${monthText} ${date.getDate()}, ${date.getFullYear()}`;
};

export const dateFormatter = (date: Date = new Date()) => {
  const monthText = date.toLocaleDateString('en-us', { month: 'long' });
  return `${monthText} ${date.getDate()}, ${date.getFullYear()}`;
};

export const phoneFormatter = (phoneNumberString: string) => {
  var cleaned = phoneNumberString.replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
};

export const milesToMeters = (miles: number, decimals: number = 0) => {
  return ((miles / 0.62137) * 1000).toFixed(decimals);
};

export const metersToMiles = (meters: number, decimals: number = 0) => {
  return ((meters * 0.62137) / 1000).toFixed(decimals);
};

export const addressLinkFormatter = (location: locationDetailReturn) => {
  return `${location.address}, ${location.city}, ${location.state} ${location.postalCode}`.replace(
    / /g,
    '+'
  );
};

export const capFirstLowerCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const serviceTitle = (service: searchDataReturn | undefined) => {
  let fullTitle = '';
  if (!service) return fullTitle;
  if (service.description) fullTitle += service.description;
  if (service.patientType) fullTitle += ` (${capFirstLowerCase(service.patientType)}patient)`;
  return fullTitle;
};

export const billingCodeTitle = (service: searchDataReturn | undefined) => {
  let billingTitle = '';
  let codeType = '';
  if (!service) return billingTitle;
  if (service.patientType) codeType = service.patientType === 'IN' ? 'DRG' : 'CPT';
  billingTitle += codeType;
  if (service.billingCode) billingTitle += ` ${service.billingCode.toString()}`;
  return billingTitle;
};

export const sortByName = (a: any, b: any) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
};
