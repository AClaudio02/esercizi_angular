import { Address } from './Address';
import { Company } from './Company';

export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address;
  role: string;
  username: string;
  profilePhotoUrl: string;
  companies: Company[];
  gender: string;
}
