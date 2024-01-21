AOS.init();

window.addEventListener("load", function(event){
    let data = new Date();
    let anoAtual = data.getFullYear();
    var copyright = document.querySelector(".copyright");
    copyright.innerHTML = "&#169; " + anoAtual + " - Dev Ficar Bonito Barberia - Todos os direitos reservados.";
});

function toggleTheme(theme) {
    const htmlElement = document.documentElement;
    const logos = document.querySelectorAll('.logo');

    htmlElement.setAttribute('data-theme', theme);

    logos.forEach((logo) => {
        if (htmlElement.getAttribute('data-theme') == 'dark') {
            logo.src = 'assets/logo-light.svg';
        } else if (htmlElement.getAttribute('data-theme') == 'light') {
            logo.src = 'assets/logo-dark.svg';
        } else {
            console.log('error');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-button');

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedTheme = this.dataset.theme;
            toggleTheme(selectedTheme);
        });
    });
});
