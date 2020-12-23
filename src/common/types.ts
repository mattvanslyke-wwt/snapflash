export interface LinkDetail {
  url: string,
  linkText: string,
}

export interface searchDataReturn {
  billingCode: number;
  description: string;
  friendlyDescription: string;
  patientType: string;
}

export interface companyListReturn {
  name: string;
  plans?: insurancePlan[];
}

export interface insurancePlan {
  code?: string;
  name: string;
  shortName?: string;
}
export const UNSEEN_PLAN: insurancePlan = {
  name: 'unseenPlan',
  shortName: 'unseenPlan',
};

export const UNSEEN_INSURER: companyListReturn = {
  name: 'unseenInsurer',
  plans: [UNSEEN_PLAN],
};

export interface locationDetailReturn {
  address: string;
  city: string;
  businessUnit: string;
  latitude: number;
  longitude: number;
  distance: number;
  name: string;
  phoneNumber: string;
  postalCode: string;
  state: string;
}

export interface SelectedPricingOptions {
  service?: searchDataReturn;
  zipCode?: string;
  insurer?: string;
  plan?: insurancePlan;
  location?: locationDetailReturn;
}

export interface StandardCharges {
  grossDollars: number;
  lastRefreshDate: string;
  discountedCashDollars?: number;
  maximumNegotiatedDollars?: number;
  minimumNegotiatedDollars?: number;
  payerNegotiatedDollars?: number;
}

export enum Sections {
  service,
  insurance,
  location,
  priceguide,
}
