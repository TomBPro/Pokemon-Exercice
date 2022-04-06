import Pokemon from "../Interfaces/Pokemon";
import Dresseur from "./Dresseur";
import Salameche from "./Salameche";

export default class Pokeball {
    proprietaire: Dresseur;
    contient?: Pokemon;

    constructor(proprietaire: Dresseur, contient?: Pokemon) {
        this.proprietaire = proprietaire;
        this.contient = contient;
    }

    /**
     * Obtiens le pokemon d'une pokeball s'il y en a un
     * @param pokemon le pokemon
     */
    get getContenu(): Pokemon | undefined {
        if (this.contient !== undefined) {
            return this.contient;
        } else {
            return;
            console.log('La pokeball est vide');
        }
    }

    /**
     * Ajoute un pokemon dans une pokeball si il n'y en a pas
     * @param pokemon le pokemon
     */
    set affecterPokemon(pokemon: Pokemon) {
        if (this.contient === undefined) {
            this.contient = pokemon;
        }
    }
}
