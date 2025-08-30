import type { City } from "./cityType.mjs"
import type { UF } from "./ufType.mjs"



export type CEP = {
    UF: UF,
    cidade: City,
    inicio: number,
    final: number
}