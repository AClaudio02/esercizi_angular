import { Address } from './Address';

export interface Company {
  id: number;
  name: string;
  description: string;
  location: Address;
}
