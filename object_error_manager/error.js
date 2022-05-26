// 1 - criar fjunção que recebe array e numero
// 2 - validações dos parametros se existem
// 3 - validar se array é do tipo object
// 4 - validar se num é do tipo number
function validaArray(arr, num) {
  if (!arr && !num) throw new ReferenceError('Enviar os parâmetros');

  if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

  if (typeof num !== 'number') throw new TypeError('Numero precisa ser do tipo number');

  

  return;
}