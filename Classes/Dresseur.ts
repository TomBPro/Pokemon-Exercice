import Pokemon from "../Interfaces/Pokemon";
import Pokeball from "./Pokeball";

export default class Dresseur {
    nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }

    ajouterPokeballs() {
        console.log(`${this.nom} ajoute des pokeballs`);
    }

    capturer(pokemon: Pokemon) {
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
