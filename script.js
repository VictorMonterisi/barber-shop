AOS.init();

window.addEventListener("load", function(event){
    let data = new Date();
    let anoAtual = data.getFullYear();
    var copyright = document.querySelector(".copyright");
    copyright.innerHTML = "&#169; " + anoAtual + " - Dev Ficar Bonito Barberia - Todos os direitos reservados.";
});