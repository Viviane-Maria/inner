// --------------- innerText ---------------//
// Capturando os elementos h1 e a
let titulo = document.getElementById("titulo");
let link = document.querySelector("a");

// Adicionando conteúdo aos elementos h1 e a
titulo.innerText = "InnerText e InnerHTML";
link.innerText = "Proz Educação";

// ---------------------- innerHTML ----------------------//
// Capturando os elemento ul e ol
let listaNaoOrdenada = document.querySelector("ul");
let listaOrdenada = document.getElementById("lista-ordenada");

// Adicionando três itens simples à lista não ordenada
for (let i = 1; i <= 3; i++) {
  const itemNaoOrdenado = document.createElement("li");
  itemNaoOrdenado.innerHTML = `Item ${i}`;
  listaNaoOrdenada.appendChild(itemNaoOrdenado);
}

// Adicionando itens com links à lista ordenada
listaOrdenada.innerHTML = `
  <li><a href="https://www.w3schools.com
  ">W3Schools</a></li>
  <li><a href="https://developer.mozilla.org
  ">MDN Mozilla Developer</a></li>
  <li><a href="https://aws.amazon.com">AWS</a></li>
`;
