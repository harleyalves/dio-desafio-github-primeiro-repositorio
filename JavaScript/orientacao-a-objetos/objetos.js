class ContaBancaria{
    constructor (agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar (valor){
        if (valor > this._saldo){
            return 'Operação negada';
        }
        return this._saldo = this._saldo - valor;
    }
    depositar (valor){   
        return this._saldo = this._saldo + valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo ='corrente';
        this._cartaoCredito = cartaoCredito;
    }
    
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia,numero);
        this.tipo ='poupança';
    }
}
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia,numero);
        this.tipo ='universitária';
    }

    sacar (valor){
        if (valor > this._saldo){
            return 'Operação negada';
        }
        if (valor > 500){
            return 'Valor não permitido';
        }
        return this._saldo = this._saldo - valor;
    }
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333);