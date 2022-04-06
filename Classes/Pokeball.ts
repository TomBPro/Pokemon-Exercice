import Pokemon from "../Interfaces/Pokemon";
import Dresseur from "./Dresseur";
import Salameche from "./Salameche";

export default class Pokeball {
    contient?: Pokemon;
    proprietaire?: Dresseur;

    constructor(contient?: Pokemon, proprietaire?: Dresseur) {
        this.contient = contient;
        this.proprietaire = proprietaire;
    }

    get getContenu(): Pokemon {
        // TODO Return real Pokemon
        return new Salameche(50, 10);
    }

    set affecterPokemon(pokemon: Pokemon) {
        this.contient = pokemon;
    }
}
