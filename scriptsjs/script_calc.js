const calculoDesconto = (objPessoa) => {

    let resposta = ''

    if((objPessoa.idade < 18 || (objPessoa.renda) <= 1700)){
        resposta = 'Isento de Desconto'
    }else if(objPessoa.renda <= 5000){
        resposta = 'R$ ' + parseFloat(objPessoa.renda * 0.05).toFixed(2).replace('.',',')
    }
    else if(objPessoa.renda <= 8000){
        resposta = 'R$ ' + parseFloat(objPessoa.renda * 0.08).toFixed(2).replace('.',',')
    }
    else if(objPessoa.renda <= 10000){
        resposta = 'R$ ' + parseFloat(objPessoa.renda * 0.10).toFixed(2).replace('.',',')
    }else{
        resposta = 'R$ ' + parseFloat(objPessoa.renda * 0.03).toFixed(2).replace('.',',')
    }


    return resposta

}

//objeto literal?


export {calculoDesconto}
