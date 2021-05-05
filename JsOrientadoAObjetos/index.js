import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233344);
const cliente2 = new Cliente("Alice", 55566677788);


const contaCorrente1 = new ContaCorrente(1001, cliente1)
contaCorrente1.depositar(500)

const contaCorrente2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrente1.transferir(valor, contaCorrente2);

console.log(`O cliente ${cliente1.nome}, do CPF ${cliente1._cpf}, tem conta corrente na agência ${contaCorrente1.agencia} com o saldo de ${contaCorrente1._saldo}`);

console.log(`O cliente ${cliente2.nome}, do CPF ${cliente2._cpf}, tem conta corrente na agência ${contaCorrente2.agencia} com o saldo de ${contaCorrente2._saldo}`);