// step 1 - criar classe ContaBancaria começa com letra maiúscula
// step 2 - dentro da classe ContaBancaria construa o getter e o setter do saldo
// step 3 - criar os metodos sacar e depositar

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

  // método sacar
  sacar(valor) {
    if (valor > this._saldo) {
      return 'Operação negada';
    }
    this._saldo = (this._saldo - valor);
    return this._saldo;
  }

  // método depositar
  depositar(valor) {
    this._saldo = (this._saldo + valor);
    return this._saldo;
  }
}