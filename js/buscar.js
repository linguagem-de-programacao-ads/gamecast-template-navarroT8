async function buscar(){
    const resposta = await fetch("https://660f44ec356b87a55c511089.mockapi.io/agendas"); // apenas trocar pelo "localhost:....."
    const respostaDadosAgenda = await resposta.json(); 

    console.log("Resposta: ", respostaDadosAgenda);

    const cards = document.getElementById("cards_games");

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
            return `
            <div class="cardItem">
                <div class="dataGame"> 
                    <img src="../imagens/calendar-solid.svg" alt=""> ${itemAgenda.dataJogo} 
                </div>
                <img class="img-background" src="${itemAgenda.urlImagem}" alt="">
                <div class="descricao">
                    <p> <strong>${itemAgenda.nome}</strong> </p>
                    <p> Descrição de como vai funcionar o GamePlay, frase legal para chamar a galera :D </p>
                    <p><strong>Gamers: </strong></p>

                    <div class="gamers">
                    ${
                        itemAgenda.gamers.map((gamerItem) => {
                            return `
                            <div class="gamerItem">${gamerItem}</div>
                            `
                        }).join('')
                    }
                    </div>

                  
                </div> 
                <div class="assistir">
                        <a class="assistirItem"> <img src="../imagens/youtube.svg" alt=""> Assistir </a>
                </div>
            </div>
            `
    }).join('');
};

buscar();

