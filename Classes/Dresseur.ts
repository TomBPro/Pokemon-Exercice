import Pokemon from "../Interfaces/Pokemon";
import Pokeball from "./Pokeball";

export default class Dresseur {
    nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }

    ajouterPokeballs() {
        // TODO Add Pokeballs to the player
        console.log(`${this.nom} ajoute des pokeballs`);
    }

    capturer(pokemon: Pokemon) {
        // TODO Check if the pokemon is already in the inventory
        // TODO Check if the pokemon limit has been reached
        console.log(`${this.nom} a capturé ${pokemon.nom}`);
    }

    getPokemons() {
        const listPokemon = [];
        const pokeballList: any = new Pokeball();
        for (let pokeball in pokeballList) {
            if (pokeballList[pokeball].dresseur === this) {
                listPokemon.push(pokeballList[pokeball].pokemon);
            }
        }
        return listPokemon;
    }
}
