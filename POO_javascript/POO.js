// step 1 - criar classe ContaBancaria começa com letra maiúscula
// step 2 - dentro da classe ContaBancaria construa o getter e o setter do saldo

class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo; // quando vai usar no getter ou setter colo o "_" antes para não confundir com propriedade
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }
}