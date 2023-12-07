let numerosGuardados = [];

function adcionarNumero() {
  let numero = document.getElementById('numero').value;
  let mostrador = document.getElementById('mostrador');

  if (numero.length == 0 || numero <= 0 || numero > 100) {
    return alert('[ERRO] Dados invalidos! Informe um número entre 1 e 100');
  } else if (numerosGuardados.indexOf(Number(numero)) != -1) {
    return alert('[ERRO] Esse número já foi adcionado. Escolha outro!');
  } else {
    numerosGuardados.push(Number(numero));
    let item = document.createElement('option');
    numerosGuardados.forEach(num => {
      item.text = `Valor ${num} adcionado`;
      mostrador.appendChild(item);
      }
    );
  }
}

function finalizarAnalise() {
  let mensagem = document.getElementById('mensagem');
  let numerosSortidos = numerosGuardados.sort(function(a, b){return a-b});
  let somaNumeros = 0;
  numerosSortidos.forEach(num => {
    somaNumeros += num;
  })
  if (numerosGuardados.length === 0) {
    return alert('[ERRO] Insira dados para continuar.');
  }
  let total = () => {
    const item = document.createElement('p');
    item.innerText = `Ao todo, temos ${numerosGuardados.length} números cadastrados.`;
    mensagem.appendChild(item);
  }
  let maior = () => {
    const item = document.createElement('p');
    item.innerText = `O maior valor informado foi ${numerosSortidos[numerosSortidos.length-1]}`;
    return mensagem.appendChild(item);
  }
  let menor = () => {
    const item = document.createElement('p');
    item.innerText = `O menor valor informado foi ${numerosSortidos[0]}`;
    return mensagem.appendChild(item);
  }
  let soma = () => {
    const item = document.createElement('p');
    item.innerText = `Somando todos os valores temos ${somaNumeros}`;
    return mensagem.appendChild(item);
  }
  let media = () => {
    const item = document.createElement('p');
    item.innerText = `A média dos valores digitados é ${(somaNumeros/numerosSortidos.length).toFixed(2)}`;
    return mensagem.appendChild(item);
  }
  
  mensagem.innerHTML = '';
  total();
  maior();
  menor();
  soma();
  media();
}