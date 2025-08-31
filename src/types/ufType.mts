import type { ufCidades } from "../models/estados_cidades.mjs";
import { CentroOeste, Nordeste, Norte, Sudeste, Sul } from '../enums/index.mjs'

export type UF = keyof typeof ufCidades; 

export type SudesteUF = keyof typeof Sudeste; // "SP" | "RJ" | "ES" | "MG"
export type NordesteUF = keyof typeof Nordeste; // "BA" | "SE" | "PE" | "AL" | "PB" | "RN" | "CE" | "PI" | "MA"
export type SulUF = keyof typeof Sul; // "PR" | "SC" | "RS"
export type NorteUF = keyof typeof Norte; // "PA" | "AP" | "AM" | "RR" | "AC" | "RO" | "TO"
export type CentroOesteUF = keyof typeof CentroOeste; // "DF" | "GO" | "MT" | "MS"
export type Region = {
    sul?: SulUF,
    nordeste?: NordesteUF,
    sudeste?: SudesteUF,
    norte?: NorteUF,
    centroOeste?: CentroOesteUF
}

export type Regions = 'sul' | 'norte' | 'nordeste' | 'sudeste' | 'centroOeste'

