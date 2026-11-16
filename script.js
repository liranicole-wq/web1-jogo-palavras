
const palavras = [
    "javascript",
    "html",
    "css",
    "internet",
    "navegador",
    "programacao",
    "computador"
    ];
    
    let palavraSecreta;
    let letrasCorretas = [];
    let letrasUsadas = [];
    let tentativas = 6;
    
    const elementoPalavra = document.getElementById("palavra");
    const elementoTentativas = document.getElementById("tentativas");
    const inputLetra = document.getElementById("letra");
    const mensagem = document.getElementById("mensagem");
    const elementoLetrasUsadas = document.getElementById("letras-usadas");
    const botaoTentar = document.getElementById("btn-tentar");
    const botaoReiniciar = document.getElementById("btn-reiniciar");
    
    function iniciarJogo() {
    const indice = Math.floor(
    Math.random() * palavras.length
    );
    palavraSecreta = palavras[indice];
    tentativas = 6;
    letrasCorretas = [];
    letrasUsadas = [];
    }
    
    function atualizarPalavra() {
    let exibicao = "";
    for (let i = 0; i < palavraSecreta.length; i++) {
    const letra = palavraSecreta[i];
    if (letrasCorretas.includes(letra)) {
    exibicao += letra + " ";
    } else {
    exibicao += "_ ";
    }
    }
    elementoPalavra.textContent = exibicao;
    }
    
    function verificarLetra() {
    const letra = inputLetra.value.toLowerCase();
    
    if (letra === "") {
    mensagem.textContent = "Digite uma letra.";
    return;
    }
    
    if (letrasUsadas.includes(letra)) {
    mensagem.textContent = "Letra já utilizada.";
    return;
    }
    
    letrasUsadas.push(letra);
    
    if (palavraSecreta.includes(letra)) {
    letrasCorretas.push(letra);
    mensagem.textContent = "Você acertou!";
    } else {
    tentativas--;
    mensagem.textContent = "Você errou!";
    }
    
    atualizarPalavra();
    elementoTentativas.textContent = tentativas;
    elementoLetrasUsadas.textContent = letrasUsadas.join(", ");
    inputLetra.value = "";
    
    if (venceu()) {
    mensagem.textContent = "Parabéns! Você venceu!";
    }
    
    if (tentativas === 0) {
    mensagem.textContent =
    "Você perdeu! A palavra era " + palavraSecreta;
    }
    }
    
    function venceu() {
    for (let i = 0; i < palavraSecreta.length; i++) {
    const letra = palavraSecreta[i];
    if (!letrasCorretas.includes(letra)) {
    return false;
    }
    }
    return true;
    }
    
    botaoTentar.addEventListener(
    "click",
    verificarLetra
    );
    
    botaoReiniciar.addEventListener(
    "click",
    iniciarJogo
    );
    
    iniciarJogo();
    