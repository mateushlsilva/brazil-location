import type { UF } from '../models/index.js';
import { cidades } from '../models/index.js';

class BrazilLocation {
    public getUF(): UF[]{
        return Object.keys(cidades) as UF[]
    }

    public getCities(): string[]{
        return Object.values(cidades).flat().sort((a,b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
    }

    public searchCity(city: string): string[]{
        const cities = this.getCities()
        const regex = new RegExp(city, 'i')
        return cities.filter(c => regex.test(c))
    }

    public searchCityInUF(uf: UF, city: string): string[] {
        const regex = new RegExp(city, "i");
        return cidades[uf].filter(c => regex.test(c));
    }

    public getCitiesInUF(uf: UF): string[]{
        return cidades[uf]
    }

    public checkCityInUF(city: string): UF | undefined {
        for (const [uf, cidadesUF] of Object.entries(cidades) as [UF, string[]][]) {
            if (cidadesUF.includes(city)) {
                return uf;
            }
        }
        return undefined; 
    }

    public countCities(): number {
        return this.getCities().length;
    }

    public countCitiesInUF(uf: UF): number {
        return cidades[uf].length;
    }
}

export default new BrazilLocation();