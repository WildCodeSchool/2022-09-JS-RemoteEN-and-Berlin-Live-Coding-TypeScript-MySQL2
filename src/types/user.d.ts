declare interface User {
  id: number;
  firstname: string;
  lastname: string;
  birthday: string;
  verified: boolean;
  height_cm: number;
  email: string;
  hashed_password: string;
  avatar: Buffer
}