import Pokemon from "../Interfaces/Pokemon";
import Pokeball from "./Pokeball";
import Salameche from "./Salameche";
import Carapuce from "./Carapuce";

export default class Dresseur {
    nom: string = 'Player';
    pokeballs?: Pokeball[] = [];

    constructor(nom: string, pokeballs?: Pokeball[]) {
        this.nom = nom;
        this.pokeballs = pokeballs;
    }

    /**
     * Ajoute des pokeballs au dresseur
     */
    ajouterPokeballs() {
        new Pokeball(this, new Salameche(80, 20));
        new Pokeball(this, new Carapuce(80, 20));
        console.log(`${this.nom} ajoute des pokeballs`);
    }

    /**
     * Permet de capturer un pokemon
     * @param pokemon le pokemon à capturer
     */
    capturer(pokemon: Pokemon) {
        if (this.pokeballs === undefined) {
            this.pokeballs = [];
        }
        if (this.pokeballs.length < 6) {
            this.pokeballs.push(new Pokeball(this, pokemon));
            console.log(`${this.nom} a capturé ${pokemon.nom}`);
        } else {
            console.log('Votre équipe est au complet !');
            console.log('Votre pokémon est envoyé dans le PC.');
            // Ou pas
        }
    }

    /**
     * Obtiens les pokemons d'un dresseur
     */
    getPokemons() {
        if (this.pokeballs === undefined) {
            this.pokeballs = [];
        }
        let myPokemons: string = '\n';
        this.pokeballs.forEach(pokeball => {
            if (pokeball.contient) {
                myPokemons += '- '+ pokeball.contient.nom +'\n';
            }
        });
        console.log('Voici vos pokemon :' + myPokemons);
        return this.pokeballs;
    }
}
