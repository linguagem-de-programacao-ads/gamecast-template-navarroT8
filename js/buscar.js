async function buscar(){
    console.log("Passei por aqui")

    const resposta = await fetch("https://660f44ec356b87a55c511089.mockapi.io/agendas"); // apenas trocar pelo "localhost:....."
    const respostaDadosAgenda = await resposta.json(); 

    console.log("Resposta: ", respostaDadosAgenda);

    const cards = document.getElementById("card_games");

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
            return "TESTE"
    });
};

console.log("antes de buscar")
buscar();
console.log("depois do buscar")