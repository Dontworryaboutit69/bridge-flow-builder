
export type Document = {
  id: string;
  name: string;
  description: string;
  uploaded: boolean;
  required: boolean;
  files?: File[];
};

export type CreditScoreRange = 
  | 'Below 600'
  | '600-649'
  | '650-699'
  | '700-749'
  | '750 or above';

export type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
};
