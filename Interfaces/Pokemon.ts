export default interface Pokemon {
    nom?: string;
    pv: number;
    pvMax: number;
    type: string;
    captif: boolean;
    horsJeu: boolean;

    /**
     * Attaquer un pokemon
     */
    attaquer() : void;

    /**
     * Le pokemon subit une attaque
     */
    subirAttaque() : void;

    /**
     * Le pokemon se soigne
     */
    soigner(): void;

    /**
     * Le pokemon est renommé
     * @param nom son nouveau nom
     */
    renommer(nom: string): void;
}
