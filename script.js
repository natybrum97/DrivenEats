    let comidaSelecionada = false;
    let bebidaSelecionada = false;
    let sobremesaSelecionada = false;
    let janela_nome_prato = '';
    let janela_nome_bebida = '';
    let janela_nome_sobremesa = '';
    let janela_valor_total = 0;

function selecionarPrato(seletor) {
  const botaoSelecionadoAnteriormente = document.querySelector('.rolagem1 .selecionado');

  if (botaoSelecionadoAnteriormente !== null) {
    botaoSelecionadoAnteriormente.classList.remove('selecionado');
  }

  const botao = document.querySelector(seletor);
  botao.classList.toggle('selecionado');
  
  comidaSelecionada = !!document.querySelector('.rolagem1 .selecionado');
  atualizarBotaoFinalizarPedido();
}

function selecionarBebida(seletor) {
  const botaoSelecionadoAnteriormente = document.querySelector('.rolagem2 .selecionado');

  if (botaoSelecionadoAnteriormente !== null) {
    botaoSelecionadoAnteriormente.classList.remove('selecionado');
  }

  const botao = document.querySelector(seletor);
  botao.classList.toggle('selecionado');
  
  bebidaSelecionada = !!document.querySelector('.rolagem2 .selecionado');
  atualizarBotaoFinalizarPedido();
}

function selecionarSobremesa(seletor) {
  const botaoSelecionadoAnteriormente = document.querySelector('.rolagem3 .selecionado');

  if (botaoSelecionadoAnteriormente !== null) {
    botaoSelecionadoAnteriormente.classList.remove('selecionado');
  }

  const botao = document.querySelector(seletor);
  botao.classList.toggle('selecionado');
  
  sobremesaSelecionada = !!document.querySelector('.rolagem3 .selecionado');
  atualizarBotaoFinalizarPedido();
}

function atualizarBotaoFinalizarPedido() {
  if (comidaSelecionada && bebidaSelecionada && sobremesaSelecionada) {
      const finalizarPedidoButton = document.getElementById("finalizarPedidoButton");
      finalizarPedidoButton.style.backgroundColor = "#32B72F";
      finalizarPedidoButton.disabled = false;
      finalizarPedidoButton.textContent = "Fechar Pedido";
  } else {
      finalizarPedidoButton.classList.remove("botao-finalizar-habilitado");
      finalizarPedidoButton.classList.add("button");
      finalizarPedidoButton.disabled = true;
  }
  }
      function irPaginadeconfirmação() {
      const aparecediv = document.getElementById("aparecediv");

      if (aparecediv.style.display === "none") {
      aparecediv.style.display = "block";
      } else {
      aparecediv.style.display = "none";
      }

      nome_prato = document.querySelector('.rolagem1 .selecionado .nomedoprato');
      const prato1 = nome_prato.textContent;
      janela_nome_prato = document.querySelector('.itens .nome1');
      janela_nome_prato.innerHTML= prato1;
      console.log(janela_nome_prato);

      valor_comida = document.querySelector('.rolagem1 .selecionado .valor');
      const prato2 = valor_comida.textContent;
      const janela_valor_prato = document.querySelector('.itens .nome2');
      janela_valor_prato.innerHTML= prato2;
      console.log(janela_valor_prato);
      const stringValorPrato = janela_valor_prato.textContent;
      console.log(typeof stringValorPrato); // deve imprimir 'string'

      nome_bebida = document.querySelector('.rolagem2 .selecionado .nomedoprato');
      const prato3 = nome_bebida.textContent;
      janela_nome_bebida = document.querySelector('.itens .nome3');
      janela_nome_bebida.innerHTML= prato3;
      console.log(janela_nome_bebida);

      valor_bebida = document.querySelector('.rolagem2 .selecionado .valor');
      const prato4 = valor_bebida.textContent;
      const janela_valor_bebida = document.querySelector('.itens .nome4');
      janela_valor_bebida.innerHTML= prato4;
      console.log(janela_valor_bebida);
      const stringValorBebida = janela_valor_bebida.textContent;
      console.log(typeof stringValorBebida); // deve imprimir 'string'

      nome_sobremesa = document.querySelector('.rolagem3 .selecionado .nomedoprato');
      const prato5 = nome_sobremesa.textContent;
      const janela_nome_sobremesa = document.querySelector('.itens .nome5');
      janela_nome_sobremesa.innerHTML= prato5;
      console.log(janela_nome_sobremesa);

      valor_sobremesa = document.querySelector('.rolagem3 .selecionado .valor');
      const prato6 = valor_sobremesa.textContent;
      const janela_valor_sobremesa = document.querySelector('.itens .nome6');
      janela_valor_sobremesa.innerHTML= prato6;
      console.log(janela_valor_sobremesa);
      const stringValorSobremesa = janela_valor_sobremesa.textContent;
      console.log(typeof stringValorSobremesa); // deve imprimir 'string'

      const extrairValor_comida = stringValorPrato;
      const extrairValor_bebida = stringValorBebida;
      const extrairValor_sobremesa = stringValorSobremesa;

      const regex = /[^\d,.]/g; // expressão regular para remover tudo que não for número, vírgula ou ponto
      const valor1 = parseFloat(extrairValor_comida.replace(regex, "").replace(",", ".")).toFixed(2);
      const valor2 = parseFloat(extrairValor_bebida.replace(regex, "").replace(",", ".")).toFixed(2);
      const valor3 = parseFloat(extrairValor_sobremesa.replace(regex, "").replace(",", ".")).toFixed(2);

      const soma = parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3);

      const valorTotal = soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

      console.log(valorTotal); // Exibe a string formatada: "R$ XX,XX"

      const janela_valor_total = document.querySelector('.itens .nome8');
      janela_valor_total.innerHTML= valorTotal;
      console.log(janela_valor_total);

      const soma1 = soma.toFixed(2);

      return {prato1, prato3, prato5, soma1};

  }

  function sairDaPaginadeConfirmacao () {
      const aparecediv = document.getElementById("aparecediv");
      if (aparecediv.style.display === "block") {
      aparecediv.style.display = "none";
      } else {
      aparecediv.style.display = "block";
      }
  }
  
  function continuar() {
  let {prato1, prato3, prato5, soma1} = irPaginadeconfirmação()
  console.log(prato1, prato3, prato5, soma1);
  let numeroComVirgula = soma1.replace(/\./g, ',');
  let nome = prompt('Qual é o seu nome?');
  let endereco = prompt('Qual é o seu endereço?');
  const mensag = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato1}\n- Bebida: ${prato3}\n- Sobremesa : ${prato5}\nTotal: R$ ${numeroComVirgula}\n\nNome: ${nome}\nEndereço: ${endereco}`

  window.open("https://wa.me/5521969895746?text=" + encodeURIComponent(mensag));
}