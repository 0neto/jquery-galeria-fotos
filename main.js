$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();  //Cria um evento de Slide down no botão Nova Imagem
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();    //Cria um evento de SlideUp no botão Cancelar
    })

    $('form').on('submit', function(e) {
        e.preventDefault();    //Cancela a atualização automatica da tela ao clicar no botão adicionar
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //Constante criada para recuperar o endereço inserido no campo
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamnho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); //Adiciona o evento fadein ao adicionar uma nova foto
        $('#endereco-imagem-nova').val(''); //Limpa o formulario
    })
})