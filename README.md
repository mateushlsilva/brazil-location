
# BrazilLocation

Biblioteca para trabalhar com estados (UFs) e cidades do Brasil.  
Permite buscar cidades, consultar cidades por estado, verificar se uma cidade pertence a um estado, contar cidades e muito mais.

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
import type { UF, City } from 'brazil-location';
```

---

## Tipos

* `UF` – Tipo para siglas dos estados do Brasil, por exemplo: `"AC"`, `"SP"`, `"RJ"`, etc.
* `City` – Tipo que representa todas as cidades do Brasil, por exemplo: `"São Paulo"`, `"Rio de Janeiro"`, `"Belo Horizonte"`, etc.

---

## Métodos

### `getUF()`

Retorna todas as siglas de estados (UFs).

```ts
const ufs: UF[] = BrazilLocation.getUF();
console.log(ufs); // ["AC", "AL", "AP", ...]
```

---

### `getCities()`

Retorna todas as cidades do Brasil, em ordem alfabética.

```ts
const cities: string[] = BrazilLocation.getCities();
console.log(cities); // ["Abadia de Goiás", "Abadia dos Dourados", ...]
```

---

### `searchCity(city: string)`

Busca cidades pelo nome (case-insensitive).

```ts
const results = BrazilLocation.searchCity("São");
console.log(results); // ["São Paulo", "São Bernardo do Campo", ...]
```

---

### `searchCityInUF(uf: UF, city: string)`

Busca cidades dentro de um estado específico.

```ts
const results = BrazilLocation.searchCityInUF("SP", "São");
console.log(results); // ["São Paulo", "São Bernardo do Campo", ...]
```

---

### `getCitiesInUF(uf: UF)`

Retorna todas as cidades de um estado específico.

```ts
const spCities = BrazilLocation.getCitiesInUF("SP");
console.log(spCities); // ["São Paulo", "Campinas", ...]
```

---

### `checkCityInUF(city: string)`

Verifica a qual estado (UF) uma cidade pertence. Retorna `undefined` se não encontrar.

```ts
const uf = BrazilLocation.checkCityInUF("São Paulo");
console.log(uf); // "SP"
```

---

### `countCities()`

Conta todas as cidades do Brasil.

```ts
const total = BrazilLocation.countCities();
console.log(total); // 5565 (exemplo)
```

---

### `countCitiesInUF(uf: UF)`

Conta o número de cidades em um estado específico.

```ts
const totalSP = BrazilLocation.countCitiesInUF("SP");
console.log(totalSP); // 645 (exemplo)
```

---

## Exemplo completo

```ts
import { BrazilLocation } from 'brazil-location';
import type { UF, City } from 'brazil-location';

console.log(BrazilLocation.getUF());               // ["AC", "AL", ...]
console.log(BrazilLocation.getCities());           // ["Abadia de Goiás", ...]
console.log(BrazilLocation.searchCity("Rio"));    // ["Rio de Janeiro", "Rio Grande", ...]
console.log(BrazilLocation.getCitiesInUF("RJ"));  // ["Rio de Janeiro", ...]
console.log(BrazilLocation.checkCityInUF("Manaus")); // "AM"
console.log(BrazilLocation.countCities());        // 5565
console.log(BrazilLocation.countCitiesInUF("SP")); // 645
```

---

## Licença

MIT


## Autor
Mateus Silva
