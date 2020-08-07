// Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', clonefield);

//Executar uma acao
function clonefield() {
  //duplicar os campos
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
  //limpar os campos
  const fields = newFieldContainer.querySelectorAll('input');

  //para cada campo: limpar
  fields.forEach(function(field) {
    // pegar o field do momento e limpa
    field.value = ""
  })
  
  //colocar na página
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}


