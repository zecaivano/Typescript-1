import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao[] = []; //Negociacao[] = Array<Negociacao>

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // lista(): Array<Negociacao> {
        // return [...this.negociacoes];//Pego cada item da lista, faço destructuring, e crio outra lista
    
        lista(): readonly Negociacao[] {
            return this.negociacoes;
        }
}

