// 1 - criar fjunção que recebe array e numero
// 2 - validações dos parametros se existem
// 3 - validar se array é do tipo object
// 4 - validar se num é do tipo number
// 5 - verificar se tamanho do arr é diferente de num
// 6 - filtrar erro usando instaceof
function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Enviar os parâmetros');
  
    if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');
  
    if (typeof num !== 'number') throw new TypeError('Numero precisa ser do tipo number');
  
    if (arr.length !== num) throw new RangeError('tamanho do array inválido');
    
    return arr;
  } catch(error) {
    // instanceof = instancia de
    if (error instanceof ReferenceError) {
      console.log('erro de referẽncia');
      console.log(error.message); // poderia usar o throw error nesta parte
    } else if (error instanceof TypeError) {
      console.log('erro de tipo');
      console.log(error.message);
    } else if (error instanceof RangeError) {
      console.log('erro do tipo RangeError');
      console.log(error.message);
    } else {
      console.log('<erro desconhecido> ' + error);
    }

  }
}

