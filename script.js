// Dados dos produtos
const produtos = [
    { nome: "Camisa Manga Longa", imagem: "./img/imagem-carrossel.png", precoOriginal: "R$100,00", precoAtual: "R$79,99", desconto: "10% OFF", parcelas: "10x de R$7,99",  novo: true },
    { nome: "Camisa Manga Longa", imagem: "./img/imagem-carrossel.png", precoOriginal: "R$100,00", precoAtual: "R$79,99", desconto: "10% OFF", parcelas: "10x de R$7,99",  novo: true },
    { nome: "Camisa Manga Longa", imagem: "./img/imagem-carrossel.png", precoOriginal: "R$100,00", precoAtual: "R$79,99", desconto: "10% OFF", parcelas: "10x de R$7,99",  novo: true },
    { nome: "Camisa Manga Longa", imagem: "./img/imagem-carrossel.png", precoOriginal: "R$100,00", precoAtual: "R$79,99", desconto: "10% OFF", parcelas: "10x de R$7,99",  novo: true },
    { nome: "Camisa Manga Longa", imagem: "./img/imagem-carrossel.png", precoOriginal: "R$100,00", precoAtual: "R$79,99", desconto: "10% OFF", parcelas: "10x de R$7,99",  novo: true },
    { nome: "Camisa Manga Longa", imagem: "./img/imagem-carrossel.png", precoOriginal: "R$100,00", precoAtual: "R$79,99", desconto: "10% OFF", parcelas: "10x de R$7,99",  novo: true },
    { nome: "Camisa Manga Longa", imagem: "./img/imagem-carrossel.png", precoOriginal: "R$100,00", precoAtual: "R$79,99", desconto: "10% OFF", parcelas: "10x de R$7,99",  novo: true },
  ];
  
  // Inserção dinâmica
  const container = document.getElementById("carouselProdutos");
  
  produtos.forEach(produto => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="card position-relative p-2">
      ${produto.novo ? '<span class="badge bg-primary position-absolute m-2">NOVO</span>' : ""}
      <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
      <div class="card-body text-center">
        <h6>${produto.nome}</h6>
        <p class="text-muted mb-1"><s>${produto.precoOriginal}</s></p>
        <span class="badge bg-success mb-1">${produto.desconto}</span>
        <h5 class="text-dark fw-bold">${produto.precoAtual}</h5>
        <small class="text-muted">Ou em até ${produto.parcelas}</small>
        <br>
        <button class="btn btn-primary btn-sm mt-2 w-100">Comprar</button>
      </div>
    </div>
    `;
    container.appendChild(card);
  });
  
  // Navegação (carrossel com scroll)
  document.getElementById("prevBtn").addEventListener("click", () => {
    container.scrollLeft -= 220;
  });
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    container.scrollLeft += 220;
  });
  