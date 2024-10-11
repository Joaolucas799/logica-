let totalGeral ;
limpar();


function adicionar () {
    let Produto = document.getElementById("produto").value;
    let nomedoProduto = Produto.split('-')[0];
    let valorUnitario = Produto.split ('$')[1];
    let quantidade = document.getElementById("quantidade");
    alert (nomedoProduto);
    alert(valorUnitario);
    alert (quantidade.value);
    let preco = quantidade.value * valorUnitario;
    let carrinho = document.getElementById("lista-produtos")
    carrinho.innerHTML = carrinho.innerHTML  + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;
    //atualizar o valor total
    totalGeral = totalGeral + preco ;
   let campoTotal = document.getElementById ("valor-total")
   campoTotal.textContente = `R$ $("totalGeral")`
   document.get.ElementById('quantidade').value = 0;
}
function limpar() {
    let totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}



