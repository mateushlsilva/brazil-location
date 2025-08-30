import type { UF, City, CEP } from '../types/index.mjs'  with { "resolution-mode": "import" };
import { cidades, ceps } from '../models/index.mjs' ;

/**
 * Classe para manipulação de estados (UFs) e cidades do Brasil.
 */
class BrazilLocation {
    /**
     * Retorna todos os estados (UFs) disponíveis.
     * 
     * @returns Um array com todas as UFs.
     * @example
     * const ufs = BrazilLocation.getUF();
     * // ufs => ["AC", "AL", "AP", ...]
     */
    public getUF(): UF[]{
        return Object.keys(cidades) as UF[]
    }

     /**
     * Retorna todas as cidades do Brasil em ordem alfabética.
     * 
     * @returns Um array com todas as cidades.
     * @example
     * const allCities = BrazilLocation.getCities();
     * // allCities => ["Abadia de Goiás", "Abadia dos Dourados", ...]
     */
    public getCities(): City[]{
        return Object.values(cidades).flat().sort((a,b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' })) as City[]
    }
    
    /**
     * Busca cidades que correspondam ao nome fornecido.
     * 
     * @param city - Nome da cidade para buscar (parcial ou completo, case-insensitive).
     * @returns Um array de cidades que correspondem ao critério.
     * @example
     * const results = BrazilLocation.searchCity("São Paulo");
     * // results => ["São Paulo"]
     */
    public searchCity(city: City): City[]{
        const cities = this.getCities()
        const regex = new RegExp(city, 'i')
        return cities.filter(c => regex.test(c))
    }

    /**
     * Busca cidades dentro de um estado específico que correspondam ao nome fornecido.
     * 
     * @param uf - UF do estado a pesquisar.
     * @param city - Nome da cidade para buscar (parcial ou completo, case-insensitive).
     * @returns Um array de cidades que correspondem ao critério dentro do estado.
     * @example
     * const results = BrazilLocation.searchCityInUF("SP", "São Paulo");
     * // results => ["São Paulo"]
     */
    public searchCityInUF(uf: UF, city: City): City[] {
        const regex = new RegExp(city, "i");
        return cidades[uf].filter(c => regex.test(c)) as City[]
    }

    /**
     * Retorna todas as cidades de um estado específico.
     * 
     * @param uf - UF do estado.
     * @returns Um array com todas as cidades desse estado.
     * @example
     * const spCities = BrazilLocation.getCitiesInUF("SP");
     * // spCities => ["São Paulo", "Campinas", ...]
     */
    public getCitiesInUF(uf: UF): City[]{
        return cidades[uf] as City[]
    }

    /**
     * Verifica em qual estado (UF) uma cidade está localizada.
     * 
     * @param city - Nome da cidade.
     * @returns A UF do estado ou `undefined` se não encontrada.
     * @example
     * const uf = BrazilLocation.checkCityInUF("Campinas");
     * // uf => "SP"
     */
    public checkCityInUF(city: City): UF | undefined {
        for (const [uf, cidadesUF] of Object.entries(cidades) as [UF, string[]][]) {
            if (cidadesUF.includes(city)) {
                return uf;
            }
        }
        return undefined; 
    }

    /**
     * Retorna a quantidade total de cidades do Brasil.
     * 
     * @returns Número total de cidades.
     * @example
     * const total = BrazilLocation.countCities();
     * // total => 5570
     */
    public countCities(): number {
        return this.getCities().length;
    }

    /**
     * Retorna a quantidade de cidades em um estado específico.
     * 
     * @param uf - UF do estado.
     * @returns Número de cidades no estado.
     * @example
     * const spCount = BrazilLocation.countCitiesInUF("SP");
     * // spCount => 645
     */
    public countCitiesInUF(uf: UF): number {
        return cidades[uf].length;
    }

    /**
     * Busca a cidade e o estado (UF) baseado em um CEP.
     *
     * @param cep - O CEP a ser pesquisado. Pode ser número ou string no formato "00000-000".
     * @returns Um objeto contendo `cidade` e `UF` se encontrado, ou `undefined` caso não haja correspondência.
     *
     * @example
     * const result = BrazilLocation.searchCityUFInCEP("01001-000");
     * // result => { cidade: "São Paulo", UF: "SP" }
     */
    public searchCityUFInCEP(cep: number | string): {cidade: City, UF: UF} | undefined{
        if (typeof cep === "string"){
            cep = cep.replace(/[\s-]/g, "");
        }
        const found = ceps.find(f => Number(cep) >= f.inicio && Number(cep) <= f.final);

        if (!found) return undefined;

        return {
            cidade: found.cidade as City,
            UF: found.UF as UF
        };
    }
    /**
     * Retorna o intervalo de CEP de uma cidade específica.
     * 
     * @param city - Nome da cidade a ser pesquisada.
     * @returns Um objeto do tipo `CEP` contendo a cidade, UF e o intervalo de CEP,
     *          ou `undefined` caso a cidade não seja encontrada.
     * 
     * @example
     * const interval = BrazilLocation.getIntervalCEPInCity("Campinas");
     * // interval => { cidade: "Campinas", UF: "SP", inicio: 13000000, final: 13099999 }
     */
    public getIntervalCEPInCity(city: City): CEP | undefined{
        const found =  ceps.find(f => city == f.cidade)
        if (!found) return undefined;
        return {
            cidade: found.cidade as City,
            UF: found.UF as UF,
            inicio: found.inicio,
            final: found.final
        }
    }
}

export default new BrazilLocation();