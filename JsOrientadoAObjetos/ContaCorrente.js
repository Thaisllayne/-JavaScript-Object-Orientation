import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0

    // atributos públicos:
    agencia;
    // atributos privados começam com _
    _cliente;
    _saldo = 0;

    // para atribuir um valor utiliza o set, uma forma de proteção:
    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor
        }   
    }

    // para pegar o valor do cliente utiliza get:
    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }

    // construtores são utilizados para inicializar os atributos
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }


    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    // é uma operação, não é só um atributo

    depositar(valor){
        if (valor <= 0) return;          
            // como eu não quero que o valor seja <= 0, eu retorno a função mesmo sem executar nada; 
            // ou seja, antes de executar o que eu quero que a função faça, eu coloco todas as condições que eu não quero e caso alguma seja verdadeira, minha execução não acontece;
        this._saldo += valor;
    }

    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}