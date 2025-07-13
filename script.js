window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

function atualizarContagem() {
    const target = new Date('2025-08-03T00:00:00').getTime();
    const now = new Date().getTime();
    const distancia = target - now;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

setInterval(atualizarContagem, 1000);
atualizarContagem();

function abrirModal(event) {
    const botao = event.currentTarget;
    const qrPix = botao.getAttribute("data-pix");
    const qrCartao = botao.getAttribute("data-cartao");
    const linkCartao = botao.getAttribute("data-link");

    // Atualiza as imagens
    document.getElementById("qrPix").src = qrPix;
    document.getElementById("qrCartao").src = qrCartao;

    // Atualiza o link clicável do cartão
    document.getElementById("linkCartao").href = linkCartao;

    // Exibe o modal
    document.getElementById("modalPagamento").style.display = "block";
}

function fecharModal() {
    document.getElementById("modalPagamento").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".btn-presentear");
    botoes.forEach((btn) => btn.addEventListener("click", abrirModal));

    // Fecha o modal ao clicar fora dele
    window.addEventListener("click", function (event) {
        const modal = document.getElementById("modalPagamento");
        if (event.target === modal) {
            fecharModal();
        }
    });
});
