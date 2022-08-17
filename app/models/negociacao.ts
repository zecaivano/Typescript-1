export class Negociacao {
    constructor (
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get data(): Date {
        const data = new Date (this._data.getTime()); //Programação defensiva: crio outra data para que a minha data não seja modificada através do data.setdate()
        return data;
    }
    get volume(): number {
        return this.quantidade * this.valor;
    }

}