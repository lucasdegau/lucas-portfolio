const sobre = document.querySelector('.sobre')
const redes = document.querySelector('.redes')
const coracao = document.querySelector('.coracao')
const janela = document.querySelector('.janela')

coracao.addEventListener('click', function () {
    redes.classList.add('selecionado');
    sobre.classList.remove('selecionado');
    coracao.classList.add('selecionado');
    janela.classList.remove('selecionado');
});

janela.addEventListener('click', function () {
    redes.classList.remove('selecionado');
    sobre.classList.add('selecionado');
    coracao.classList.remove('selecionado');
    janela.classList.add('selecionado');
});

