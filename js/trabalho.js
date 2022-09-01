//TRABALHO AVALIATIVO - FORMULÁRIO - GABRIEL LUÍS BEVILACQUA

///////////////////////////////////////////////////////////////////////////

//Função para mudar a cor do botão ao clicar:
function cliqueBtn() {
    var element = document.getElementById("validar");
    var element2 = document.getElementById("resetar");
    element.style.backgroundColor = '#0066FF';
    element2.style.backgroundColor = '#0066FF';
}

var validar1 = document.getElementById('validar');
validar1.addEventListener('submit', cliqueBtn);
document.getElementById('validar').addEventListener('click', cliqueBtn);

///////////////////////////////////////////////////////////////////////////

var form1 = document.getElementById('form1');
form1.addEventListener('submit', validar);
document.getElementById('validar').addEventListener('click',validar);

var nm = document.getElementById('nm1');
var email = document.getElementById('email');
var cpf = document.getElementById('cpf');
var gen = document.getElementById('gen');
var nd = document.getElementById('nd');
var calen = document.getElementById('calen');

///////////////////////////////////////////////////////////////////////////

//Funções de validação para o nome:
function nome_branco() {
    if (nm.value == '') {
        return false;
    } else {
        return true;
    }
}

function nome_sobrenome() {
    if (nm.value.indexOf(" ") == -1) {
        return false;
    } else {
        return true;
    }
}

///////////////////////////////////////////////////////////////////////////

//Funções de validação para o email:
function email_branco() {
    if (email.value == '') {
        return false;
    } else {
        return true;
    }
}

function email_arroba() {
    if (email.value.indexOf("@") == -1) {
        return false;
    } else {
        return true;
    }
}

function email_ponto() {
    if (email.value.indexOf(".com") == -1) {
        return false;
    } else {
        return true;
    }
}

///////////////////////////////////////////////////////////////////////////

//Funções de validação para o cpf:
function cpf_branco() {
    if (cpf.value == '') {
        return false;
    } else {
        return true;
    }
}

function cpf_validacao() {
    var Soma = 0;
    var Resto;
    
    var strCPF = cpf.value;
  
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

///////////////////////////////////////////////////////////////////////////

//Funções de validação para o gênero:
function genero_branco() {
    if (gen.value == nd.value) {
        return false;
    } else {
        return true;
    }
}

///////////////////////////////////////////////////////////////////////////

//Funções de validação para o calendário:
function calendario_branco() {
    if (calen.value == '') {
        return false;
    } else {
        return true;
    }
}

function checarData() {
    var dataAtual = new Date(); //data de agora
    var data = new Date(calen.value); //data dgitada
    
    var diasvencidos = Math.floor((dataAtual - data) / (1000 * 60 * 60 * 24)); //faz um cálculo das datas, diminui uma pela outra. Assim, caso a data digitada seja maior que a atual, vai dar um número negativo, desse jeito dá pra fazer a validação
    
    if (diasvencidos < 0) { //verifica se a data digitada não é maior que o dia atual
        return false;
    } else {
        return true;
    }
    
  }

///////////////////////////////////////////////////////////////////////////

function validar(e) {
    if( nome_branco() == false || nome_sobrenome() == false || email_branco() == false || email_arroba() == false || email_ponto() == false || cpf_branco() == false || cpf_validacao() == false || genero_branco() == false||
    calendario_branco() == false || checarData() == false) {

    if (nome_branco() == false)  {
        nm.setAttribute("class", "borda");
        document.getElementById('erro1').innerHTML="O campo nome está em branco!";
    } 

    if (nome_sobrenome() == false){
        nm.setAttribute("class", "borda");
        document.getElementById('erro2').innerHTML="O sobrenome não foi incerido!";
      
    }

    if (email_branco() == false){
        email.setAttribute("class", "borda");
        document.getElementById('erro3').innerHTML="O campo email está em branco!";
       
    }

    if (email_arroba() == false){
        email.setAttribute("class", "borda");
        document.getElementById('erro4').innerHTML="Email inválido, o email precisa conter @!";
     
    }

    if (email_ponto() == false){
        email.setAttribute("class", "borda");
        document.getElementById('erro5').innerHTML="Email inválido, o email precisa conter um .com!";
       
    } 

    if (cpf_branco() == false){
        cpf.setAttribute("class", "borda");
        document.getElementById('erro6').innerHTML="O campo CPF está em branco!";
    }

    if (cpf_validacao() == false){
        cpf.setAttribute("class", "borda");
        document.getElementById('erro6').innerHTML="O CPF informado é inválido!";
    }

    if (genero_branco() == false){
        gen.setAttribute("class", "borda");
        document.getElementById('erro7').innerHTML="O campo Gênero está em branco!";
    }

    if (calendario_branco() == false){
        calen.setAttribute("class", "borda");
        document.getElementById('erro8').innerHTML="O campo Aniversário está em branco!";
    }

    if (checarData() == false){
        calen.setAttribute("class", "borda");
        document.getElementById('erro8').innerHTML="O Aniversário informado é inválido!";
    }

    } else {
        var nome = document.getElementById("nm1");
        if (nome.value != "") {
            //alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
        document.getElementById('certo').innerHTML='Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso';
    }
}
}
