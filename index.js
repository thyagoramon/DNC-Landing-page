var bruna = document.getElementById("bruna");
var leonardo = document.getElementById("leonardo");
var samantha = document.getElementById("samantha");
var posicao = 1

function setaDir() {
    event.preventDefault(); // impede o refresh

    if (posicao < 3) {
        posicao = posicao + 1;
    } else {
        posicao = 1;
    }
    atualizar();
}

function setaEsq() {
    event.preventDefault(); // impede o refresh

    if (posicao == 1) {
        posicao = 3;
    } else {
        posicao = posicao - 1;
    }
    atualizar();
}

function atualizar() {
    if (posicao == 1) {
        bruna.style = "display:flex"
        leonardo.style = "display:none"
        samantha.style = "display:none"
    }
    if (posicao == 2) {
        bruna.style = "display:none"
        leonardo.style = "display:flex"
        samantha.style = "display:none"
    }
    if (posicao == 3) {
        bruna.style = "display:none"
        leonardo.style = "display:none"
        samantha.style = "display:flex"
    }
}