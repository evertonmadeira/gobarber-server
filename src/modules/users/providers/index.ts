import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCrryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
