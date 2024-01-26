AOS.init();

window.addEventListener("load", (event) => {
    let data = new Date();
    let anoAtual = data.getFullYear();
    var copyright = document.querySelector(".copyright");
    copyright.innerHTML = "&#169; " + anoAtual + " - Dev Ficar Bonito Barberia - Todos os direitos reservados.";
});

function toggleTheme(theme) {
    const htmlElement = document.documentElement;
    const logos = document.querySelectorAll('.logo');
    const presente = document.querySelector('.presente');

    htmlElement.setAttribute('data-theme', theme);

    logos.forEach((logo) => {
        if (htmlElement.getAttribute('data-theme') == 'dark') {
            logo.src = 'assets/logo-light.svg';
        } else if (htmlElement.getAttribute('data-theme') == 'light') {
            logo.src = 'assets/logo-dark.svg';
        }
    });

    if (htmlElement.getAttribute('data-theme') == 'dark') {
        presente.src = 'assets/presente-vermelho.png';
    } else if (htmlElement.getAttribute('data-theme') == 'light') {
        presente.src = 'assets/presente-preto.png';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-button');

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedTheme = this.dataset.theme;
            toggleTheme(selectedTheme);
        });
    });
});

window.addEventListener("load", (event) => {
    const promo = document.querySelector('.promo');
    const convite = document.querySelector('.convite');
    const larguraDaTela = this.window.innerWidth;

    setTimeout(() => {
        promo.style.left = '25px';
    }, 5000);

    if(larguraDaTela > 800) {

        setTimeout(() => {
            convite.style.left = '150px';
            convite.style.opacity = '1';
        }, 8000);

    } else if (larguraDaTela > 425 && larguraDaTela < 800) {
        setTimeout(() => {
            convite.style.left = '115px';
            convite.style.opacity = '1';
        }, 8000);
    } else if (larguraDaTela < 340) {
        setTimeout(() => {
            convite.style.left = '45px';
            convite.style.opacity = '1';
        }, 8000);
    }

    setTimeout(() => {
        convite.style.left = '0';
        convite.style.opacity = '0';
    }, 16000);

});
