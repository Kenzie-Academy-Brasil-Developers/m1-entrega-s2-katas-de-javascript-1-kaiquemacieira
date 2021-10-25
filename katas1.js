
//1 a 20
function oneThroughTwenty(){
  let value = [];
      for(let i = 1; i <= 20; i++){
          value.push(i);
      }
  return value
  }


  //pares
function evensToTwenty(){
  let pares = [];
  for(let i = 1; i <= 20; i++){
      if (i % 2 === 0){
          pares.push(i);
      }
  }
  return pares
}

//Impares
function oddsToTwenty(){
  let impares = [];
  for (let i = 1; i <= 20; i++){
      if (i % 2 !== 0){
          impares.push(i);
      }
  }
  return impares;
} 

//Multiplos de 5

function multiplesOfFive(){
  let multiplos = [];
  for (let i = 5; i <= 100; i++){
      if (i % 5 === 0){
          multiplos.push(i);
      }
  }
  return multiplos;
}

//Quadrados perfeitos

function squareNumbers(){
  let resultado = [];
  let quadrado = 0;
      for (let i = 0; i < 100; i++){
      quadrado = i * i;
          if (quadrado > 0 && quadrado <= 100){
              resultado.push(quadrado);
          }
      }
  return resultado
}
//Numeros contando de trás pra frente

function countingBackwards(){
  let backin = [];
  for (let i = 20; i >= 1; i--){
      backin.push(i);       
  }
  return backin
}

//Numeros pares de 20 até 1

function evenNumbersBackwards(){
  let backPar = [];
  for (let i = 20; i >= 1; i--){
      if (i % 2 === 0){
          backPar.push(i);
      }

  }
  return backPar
}

//ímpares de 20 até 1

function oddNumbersBackwards(){
  let backImpar = [];
  for (i = 20; i >= 1; i--){
      if(i % 2 !== 0){
          backImpar.push(i);
      }
  }
  return backImpar
}

//Multiplos de 5 de trás pra frente

function multiplesOfFiveBackwards(){
  let backMultiply = [];
  for (let i = 100; i >= 5; i--){
      if (i % 5 === 0){
          backMultiply.push(i);           
      }
  }
  return backMultiply
}

// quadrados perfeitos de trás pra frente a partir de 100

function squareNumbersBackwards(){
  let resultado = [];
      for (let i = 100; i > 0; i--){
      quadrado = i * i;
          if (quadrado <= 100 && quadrado > 0){
              resultado.push(quadrado);
          }
      }
  return resultado
}