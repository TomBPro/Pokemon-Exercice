import Pokemon from "../Interfaces/Pokemon";
import TypePlante from "./TypePlante";

export default class Bulbizarre extends TypePlante implements Pokemon {

    captif: boolean = false;
    horsJeu: boolean = false;
    nom: string = 'Bulbizarre';
    pv: number;
    pvMax: number;
    type: string = 'Plante';

    constructor(pvMax: number, degats: number) {
        super(degats);
        this.pv = pvMax;
        this.pvMax = pvMax;
    }

    attaquer(): void {
        if (!this.horsJeu) {
            console.log(`${this.nom} attaque avec ${this.degats} de dégats`);
        } else {
            console.log(this.nom + ' est K.0 et ne peut plus attaquer');
        }
    }

    renommer(): void {
        function generateName() {
            let name = '';
            let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            for (let i = 0; i < 5; i++) {
                name += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return name;
        }
        console.log(this.nom + "a desormais un nouveau surnom !");
        this.nom = generateName();
    }

    soigner(): void {
        if (this.pv+20 <= this.pvMax) {
            this.pv += 20;
        } else {
            this.pv = this.pvMax;
        }
        console.log(this.nom + " a été soigné !");
    }

    subirAttaque(): void {
        console.log(this.nom + ' s\'est fait attaquer !');
    }
}
