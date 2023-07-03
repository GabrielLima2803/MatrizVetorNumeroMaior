function encontrarMaiores() {
  const colunas = parseInt(document.getElementById("colunas").value);
  const linhas = parseInt(document.getElementById("linhas").value);


// Primeira parte de criação da matriz Original, para puxar depois no Html (innerHTLM);
  const matrizO = document.getElementById("originalM");
  matrizO.innerHTML = "";

// Primeira parte de criação da matriz dos vetores, ara puxar depois no Html (innerHTLM);
  const vetorMaiores = document.getElementById("result");
  vetorMaiores.innerHTML = "";

  // Buscar a quantidade de colunas e de linhas da matriz original e formando ela
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    const linha = [];
    for (let j = 0; j < colunas; j++) {
      const elementoPrincial = Number(
        prompt("Digite os números que terão na matriz[" + i + "][" + j + "]:")
      );
      linha.push(elementoPrincial);
    }
    matriz.push(linha);
  }



  // Rastrear linha por linha da matriz original, fazendo assim criar um elemento novo
  for (let i = 0; i < matriz.length; i++) {
    const linhaUm = matriz[i];
    const divLinhaUmInicial = document.createElement("div");
    divLinhaUmInicial.textContent = `${linhaUm.join(" ")}`;
    matrizO.appendChild(divLinhaUmInicial);
  }

  const resultado = vetorMaiorNumero(matriz);

// Rastrear linha por linha da matriz Vetores, fazendo assim criar um elemento criança
  
  for (let i = 0; i < resultado.length; i++) {
    const linha = resultado[i];
    const divLinhaResultado = document.createElement("div");
    divLinhaResultado.textContent = `${linha}`;
    vetorMaiores.appendChild(divLinhaResultado);
  }
}
// Segunda etapa de fazer o Vetor com maiores numeros 

function vetorMaiorNumero(matriz) {
  const colunas = matriz[0].length;
  const maioresNumeros = [];

  for (let j = 0; j < colunas; j++) {
    let vetorMaior = Math.abs(matriz[0][j]);

    for (let i = 1; i < matriz.length; i++) {
      const valorAtual = Math.abs(matriz[i][j]);

      if (valorAtual > vetorMaior) {
        vetorMaior = valorAtual;
      }
    }

    maioresNumeros.push(vetorMaior);
  }

  return maioresNumeros;

}

