$(document).ready(function(){
    //MASCARAS DOS CAMPOS
    $('.data').mask('00/00/0000');
    $('.cep').mask('00000-000');
    $('.celular').mask('(00) 00000-0000');
    $('.telefone').mask('(00) 0000-0000');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('.cep').mask('99.999-999');
});