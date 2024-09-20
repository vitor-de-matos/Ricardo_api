import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface'; // Ou onde estiver a sua interface do payload

declare module 'express' {
  export interface Request {
    user?: JwtPayload;
  }
}
