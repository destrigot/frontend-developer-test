export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  born: number;
  gender: string;
  picture: string
}

export type ThreeElements<T = Contact> = [T, T, T];
