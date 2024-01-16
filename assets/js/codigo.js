// criar variáveis
const form = document.getElementById('formulario')
const campos = document.querySelectorAll('.inputs')
const span = document.querySelectorAll('.span-required')
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

//validar todos os campos antes de enviar

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validarNome(); 
    validarEmail(); 
    validarSenha(); 
    senhasIguais();
})

//criar funções

function validarNome()
{
    if(campos[0].value.length < 5 )
    {
        verErro(0)
    }
    else{
        removerErro(0)
    }
}

// criar função de erro

function verErro(index)
{
    campos[index].style.border = '4px solid #e63636';
    span[index].style.display = 'block' 
}

function removerErro(index)
{
    campos[index].style.border = '';
    span[index].style.display = 'none' 
}

// validar email

function validarEmail()
{
    if (emailregex.test(campos[1].value))
    {
        removerErro(1)
    }
    else
    {
        verErro(1)
    }
}

// validar senha

function validarSenha()
{
    if(campos[2].value.length < 6)
    {
        verErro(2)
    }
    else
    {    
        removerErro(2)
        senhasIguais()
    }
}

function senhasIguais()
{
    if(campos[2].value == campos[3].value && campos[3].value.length >= 6 )
    {
        removerErro(3)
    }
    else
    {
        verErro(3)
    }
}