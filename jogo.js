console.log('[Lucas dos Santos Soares] jogo da cobrinha')

window.onload = function() {
    var stage = document.getElementById('stage');
    var context = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 80);

    const velocidade = 1;

    var velocidadeX = 0;
    var velocidadeY = 0;
    var pontoX = 10;
    var pontoY = 15;
    var tamanho = 20;
    var quantidade = 20;
    var appleX = 15;
    var appleY = 15;

    var trail = [];
    tail = 5;

    function game() {
        pontoX += velocidadeX;
        pontoY += velocidadeY;

        if(pontoX < 0) {
            pontoX = quantidade - 1;
        }
        if(pontoX > quantidade - 1) {
            pontoX = 0;
        }
        if(pontoY < 0) {
            pontoY = quantidade - 1;
        }
        if(pontoY > quantidade - 1) {
            pontoY = 0;
        }

        context.fillStyle = "black";
        context.fillRect(0, 0, stage.width, stage.height);

        context.fillStyle = "red";
        context.fillRect(appleX * tamanho, appleY * tamanho, tamanho, tamanho);

        context.fillStyle = "gray";
        for(var i = 0; i < trail.length; i++){
            context.fillRect(trail[i].x * quantidade, trail[i].y * quantidade, tamanho, tamanho);
            if(trail[i].x == pontoX && trail[i].y == pontoY){
                velocidadeX = velocidadeY = 0;
                tail = 5;
            }
        }

        trail.push({
            x: pontoX,
            y: pontoY,
        })
        while (trail.length > tail) {
            trail.shift();
        }
        if(appleX == pontoX && appleY == pontoY) {
            tail++;
            appleX = Math.floor(Math.random() * quantidade);
            appleY = Math.floor(Math.random() * quantidade);
        }

    }

    function keyPush(event){
        switch (event.keyCode) {
            case 37: //left
                velocidadeX = -velocidade;
                velocidadeY = 0;
                break;
            case 38: //up
                velocidadeX = 0;
                velocidadeY = -velocidade;
                break;
            case 39: //right
                velocidadeX = velocidade;
                velocidadeY = 0;
                break;
            case 40: //down
                velocidadeX = 0;
                velocidadeY = velocidade;
                break;
            default:
                break;
            
        }
    }


}