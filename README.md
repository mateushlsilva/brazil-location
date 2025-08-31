
# BrazilLocation

Biblioteca para trabalhar com estados (UFs), cidades e CEPs do Brasil.
Permite buscar cidades, consultar cidades por estado, verificar se uma cidade pertence a um estado, contar cidades, consultar CEPs, intervalos de CEPs por cidade, UF ou região e muito mais.

---

### GitHub
https://github.com/mateushlsilva/brazil-location
## Instalação

Via npm:

```bash
npm install brazil-location
````

Via yarn:

```bash
yarn add brazil-location
```

---

## Importando

Como ESM (recomendado):

```ts
import { BrazilLocation } from 'brazil-location';
import type { UF, City, CEP, Regions } from 'brazil-location';
import { Sul, Sudeste, Nordeste, Norte, CentroOeste, UFEnum } from 'brazil-location';
```

---

## Tipos e Enums

### Types
* `UF` – Tipo para siglas dos estados do Brasil, por exemplo: `"AC"`, `"SP"`, `"RJ"`, etc.
* `City` – Tipo que representa todas as cidades do Brasil, por exemplo: `"São Paulo"`, `"Rio de Janeiro"`, `"Belo Horizonte"`, etc.

* `CEP` – Objeto com `{ cidade: City, UF: UF, inicio: number, final: number }`.

* `Regions` – `'sul' | 'norte' | 'nordeste' | 'sudeste' | 'centroOeste'`.

### Enums
* `Sul`, `Sudeste`, `Nordeste`, `Norte`, `CentroOeste`, `UFEnum` – Representam os estados de cada região.
---

## Métodos (aliases)
#### A classe agora oferece aliases curtos para facilitar o uso:

| Alias          | Método original              | Descrição                              |
| -------------- | ---------------------------- | -------------------------------------- |
| `uf`           | `getUF()`                    | Lista todas as UFs                     |
| `cities`       | `getCities()`                | Lista todas as cidades do Brasil       |
| `city`         | `searchCity(city)`           | Busca cidade por nome                  |
| `cityUF`       | `searchCityInUF(uf, city)`   | Busca cidade dentro de um UF           |
| `citiesUF`     | `getCitiesInUF(uf)`          | Lista todas as cidades de um UF        |
| `ufCity`       | `checkCityInUF(city)`        | Retorna a UF de uma cidade             |
| `count`        | `countCities()`              | Total de cidades do Brasil             |
| `countUF`      | `countCitiesInUF(uf)`        | Total de cidades em um UF              |
| `cepCity`      | `searchCityUFInCEP(cep)`     | Busca cidade/UF por CEP                |
| `cepCityRange` | `getIntervalCEPInCity(city)` | Intervalo de CEP de uma cidade         |
| `cepUFRange`   | `getIntervalCEPInUF(uf)`     | Intervalo de CEP de um UF              |
| `cep`          | `searchCEP(cep)`             | Pesquisa CEP direto                    |
| `cepRegion`    | `getUFRegionCEP(region)`     | Intervalos de CEPs por região (cidade) |
| `regionCities` | `getCityRegionCEP(region)`   | Intervalos de CEPs por região (UF)     |

---

## Exemplo completo

```ts
import { BrazilLocation } from 'brazil-location';

const brl = new BrazilLocation();

// Trabalhando com estados e cidades
console.log(brl.uf());          // ["AC", "AL", "AP", ...]
console.log(brl.cities());      // ["Abadia de Goiás", ...]
console.log(brl.city("Rio"));   // ["Rio de Janeiro", "Rio Grande", ...]
console.log(brl.cityUF("SP", "São")); // ["São Paulo", ...]
console.log(brl.citiesUF("RJ"));      // ["Rio de Janeiro", ...]
console.log(brl.ufCity("Manaus"));    // "AM"
console.log(brl.count());       // 5565
console.log(brl.countUF("SP")); // 645

// Trabalhando com CEPs
console.log(brl.cepCity("01001-000"));      // { cidade: "São Paulo", UF: "SP" }
console.log(brl.cepCityRange("Campinas"));  // { cidade: "Campinas", UF: "SP", inicio: 13000000, final: 13099999 }
console.log(brl.cepUFRange("SP"));          // { UF: "SP", inicio: 01000000, final: 19999999 }
console.log(brl.cep("01001"));              // Filtra CEPs que começam com "01001"
console.log(brl.cepRegion("sudeste"));      // Lista intervalos de CEPs por região (cidade)
console.log(brl.regionCities("sudeste"));   // Lista intervalos de CEPs por região (UF)
```

---

## Licença

MIT


## Autor
Mateus Silva
