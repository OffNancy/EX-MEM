
const personagens = document.querySelectorAll('.personagem'); // o queryselectorall busca uma lista de todos os elementos

personagens.forEach((personagem) => {   // forEach signiffica = para cada, é um laço
    personagem.addEventListener('mouseenter', () =>{

 const  personagemSelecionado= document.querySelector('.selecionado');
 personagemSelecionado.classList.remove('selecionado')

 personagem.classList.add('selecionado');

 const imagemPersonagemGrande = document.querySelector('.personagem-grande');
 const idPersonagem = personagem.attributes.id.value;
 imagemPersonagemGrande.src = ` ./src/imagens/card-${idPersonagem}.png `;

 
 
 
 
const nomePersonagem= document.getElementById('nome-personagem');
nomePersonagem.innerText=personagem.getAttribute('data-name');

 

const descricaoPersonagem= document.getElementById('descricao-personagem');
 descricaoPersonagem.innerText= personagem.getAttribute('data-description');
}) 
})









