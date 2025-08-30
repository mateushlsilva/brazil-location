import { BrazilLocation } from './index.mjs';

export { BrazilLocation } from './controllers/index.mjs';
export type { UF, City } from './types/index.mjs' with { "resolution-mode": "import" }


console.log(BrazilLocation.getIntervalCEPInCity('São José dos Campos'))