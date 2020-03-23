// Orientação a objeto
// Crie uma classe contendo 3 propriedades com seus respectivos gets e sets e um método que multiplique
// as 3 retornando o produto. Deixe um exemplo de utilização da sua classe no final do código.


class Cost {
    private _value: number;
    private _tax: number;
    private _interest: number;

    constructor(value: number, tax?: number, interest?: number) {
        this._value = value;
        this._tax = tax ? tax : 1;
        this._interest = interest ? interest : 1;
    }

    public get value(): number {
        return this._value;
    }

    public set value(v : number) {
        this._value = v;
    }

    public get tax(): number {
        return this._tax;
    }

    public set tax(v : number) {
        this._tax = v;
    }

    public get interest(): number {
        return this._interest;
    }

    public set interest(v : number) {
        this._interest = v;
    }

    public getFinalProduct(): number {
        return this._value * this._tax * this._value;
    }
}


let money: Cost = new Cost(10);

money.interest = 1.1;
money.tax = 1.5;

console.log(money.getFinalProduct())