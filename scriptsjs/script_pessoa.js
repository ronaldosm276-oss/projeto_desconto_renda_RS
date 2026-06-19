//pegando elementos do DOM
const $ = document.querySelector

const formPessoa = $('div-form')
const idade = $('#div-lista-pessoas')

// DECLARAR UM ARRAY DE OBJETOS PESSOAS, PARA SALVAR INFORMAÇÕES com colchetes [0,1,2,3...]

const pessoas = []

//capturar evento do submit do formulário
formPessoa.addEventListener('submit', (evt)=>{
    inte
    evt.preventDefault()

    const dadosForm = new FormData(formPessoa)

    const pessoa = {
        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        renda: dadosForm.get('renda')

        
    }
    //Chamando a função addPessoa e passando o objeto literal pessoa
    addPessoa(pessoa)
    //Limpando o formulário
    formPessoa.reset()
})

//FUNÇÕES PARA CRUD
//FUNÇÃO PARA ADICIONAR PESSOA

const addPessoa = (objPessoa)=>{

    pessoas.push(objPessoa)
}