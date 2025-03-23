let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("carrinho-lista");
    const totalElement = document.getElementById("total");
    
    if (!lista || !totalElement) return;

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.onclick = () => removerDoCarrinho(index);
        
        li.appendChild(btnRemover);
        lista.appendChild(li);
        total += item.preco;
    });

    totalElement.textContent = total.toFixed(2);
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function finalizarCompra() {
    alert("Compra finalizada! Em breve entraremos em contato.");
    carrinho = [];
    atualizarCarrinho();
}
