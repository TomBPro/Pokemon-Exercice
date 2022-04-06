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

    get getContenu(): Pokemon | undefined {
        if (this.contient !== undefined) {
            return this.contient;
        } else {
            return;
            console.log('La pokeball est vide');
        }
    }

    set affecterPokemon(pokemon: Pokemon) {
        if (this.contient === undefined) {
            this.contient = pokemon;
        }
    }
}
