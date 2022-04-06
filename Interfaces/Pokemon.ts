export default interface Pokemon {
    nom?: string;
    pv: number;
    pvMax: number;
    type: string;
    captif: boolean;
    horsJeu: boolean;

    attaquer() : void;

    subirAttaque() : void;

    soigner(): void;

    renommer(nom: string): void;
}
