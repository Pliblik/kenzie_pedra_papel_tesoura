/* Desenvolva seu código abaixo */


function playRockPaperScissor(player1,player2) {
let resultado;
 if (player1 == "Pedra" && player2 == "Tesoura")
{resultado ="Jogador 1 venceu!"} 
else if (player1 == "Pedra" && player2 == "Papel")
 {resultado = "Jogador 2 venceu!"}
 else if (player1 == "Pedra" && player2 == "Pedra")
    {resultado = "Empate!"}
 else if (player1 == "Papel" && player2 == "Pedra")
{  resultado ="Jogador 1 venceu!"} 
else if (player1 == "Papel" && player2 == "Tesoura")
 {resultado= "Jogador 2 venceu!"}
 else if (player1 == "Papel" && player2 == "Papel")
    {resultado ="Empate!"}
 else if (player1 == "Tesoura" && player2 == "Papel")
{ resultado ="Jogador 1 venceu!"} 
else if (player1 == "Tesoura" && player2 == "Pedra")
 {resultado="Jogador 2 venceu!"}
 else if(player1 == "Tesoura" && player2 == "Tesoura")
    {resultado="Empate!"}


 return (resultado);

 

}

let jogador1 =prompt("Pedra, Papel ou Tesoura?");
let jogador2 =prompt("Pedra, Papel ou Tesoura?");

let resultado = playRockPaperScissor(jogador1,jogador2);

console.log(resultado);
let confirmação= confirm("deseja jogar novamente?" );





