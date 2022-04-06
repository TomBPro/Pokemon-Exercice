export default interface Type {
    degats: number;

    /**
     * Fait un calcul des dégats pris contre un pokemon de type Feu
     */
    calculerDegatsContreFeu(): number

    /**
     * Fait un calcul des dégats pris contre un pokemon de type Eau
     */
    calculerDegatsContreEau(): number

    /**
     * Fait un calcul des dégats pris contre un pokemon de type Plante
     */
    calculerDegatsContrePlante(): number
}
