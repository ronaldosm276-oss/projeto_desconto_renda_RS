import { calculoDesconto } from "./script_calc.js"



const formPessoa = document.querySelector('#form-pessoa')
const divPessoa = document.querySelector('#div-lista-pessoas')

// DECLARAR UM ARRAY DE OBJETOS PESSOAS, PARA SALVAR INFORMAÇÕES com colchetes [0,1,2,3...]

const pessoas = []

//capturar evento do submit do formulário
formPessoa.addEventListener('submit', (evt)=>{
    
    evt.preventDefault()

    const dadosForm = new FormData(formPessoa)

    const pessoa = {
        nome:  dadosForm.get('nome'),
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
    //adiciona objetos ao array pessoas
    pessoas.push(objPessoa)
    listPessoa()
}

//FUNÇÃO LISTAR PESSOAS

const listPessoa = () => {
    //percorre o array de pessoa com a estrutura de repetição forEach
    divPessoa.innerHTML = ''
    pessoas.forEach((elem, i)=>{
        divPessoa.innerHTML += `<div class='item-pessoa'>${ i + 1 } - Nome: ${elem.nome} - ${elem.idade} anos - R$ ${parseFloat(elem.renda).toFixed(2).replace('.' , ',')} - ${calculoDesconto(elem)}</div>`
    }
//class é diferente, de qualquer maneira, referencie ela no css começando com . ; ou seja .itempessoa
)
}