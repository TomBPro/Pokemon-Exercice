import Type from "../Interfaces/Type";

export default abstract class TypeEau implements Type {
    degats: number;
    protected constructor(degats: number) {
        this.degats = degats;
    }

    calculerDegatsContreEau(): number {
        return (this.degats / 2);
    }

    calculerDegatsContreFeu(): number {
        return (this.degats * 2);
    }

    calculerDegatsContrePlante(): number {
        return  (this.degats / 2);
    }
}
