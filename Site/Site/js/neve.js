function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Posição inicial aleatória nos cantos da tela
    const startX = Math.random() < 0.5 ? Math.random() * window.innerWidth * 0.3 : window.innerWidth * 0.7 + Math.random() * window.innerWidth * 0.3;
    const startY = Math.random() < 0.5 ? Math.random() * window.innerHeight * 0.3 : window.innerHeight * 0.7 + Math.random() * window.innerHeight * 0.3;

    snowflake.style.left = startX + 'px';
    snowflake.style.top = startY + 'px';

    // Duração e tamanho aleatórios
    snowflake.style.animationDuration = Math.random() * 5 + 3 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    // Adiciona o símbolo de neve ❄
    snowflake.innerText = '❄';

    // Adiciona o floco de neve ao contêiner de neve
    document.getElementById('snowfall').appendChild(snowflake);

    // Remove o floco de neve após a animação terminar
    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

// Cria flocos de neve a cada 300 milissegundos
setInterval(createSnowflake, 300);
