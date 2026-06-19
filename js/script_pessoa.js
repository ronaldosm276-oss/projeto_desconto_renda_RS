//pegando elementos do DOM
const $ = document.querySelector

const formPessoa = $('div-form')
const idade = $('#div-lista-pessoas')

// DECLARAR UM ARRAY DE OBJETOS PESSOAS, PARA SALVAR INFORMAÇÕES com colchetes [0,1,2,3...]

const pessoas = []

//capturar evento do submit do formulário
formPessoa.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const dadosForm = new FormData(formPessoa)

    const pessoa = {
        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        renda: dadosForm.get('renda')

        
    }

})
