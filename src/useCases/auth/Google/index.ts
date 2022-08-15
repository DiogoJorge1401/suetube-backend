import { GoogleController } from './GoogleController';
import { GoogleUseCase } from './GoogleUseCase';

const googleUseCase = new GoogleUseCase();
export const googleController = new GoogleController(googleUseCase);
