function luckyDraw(...player) {
    // Restituisce una Promise che simula un'estrazione a sorte per ogni giocatore:
    return new Promise((resolve, reject) => {
        // Simula l'esito dell'estrazione (vittoria o sconfitta) in modo casuale:
        const win = Boolean(Math.round(Math.random()));

        // Utilizza process.nextTick per evitare il blocco dell'esecuzione principale:
        process.nextTick(() => {
            if (win) {
                // Risolve la Promise con un messaggio di vittoria:
                resolve(`${player} won a prize in the draw!`);
            } else {
                // Respinge la Promise con un errore di sconfitta:
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

// Catena di Promise per effettuare l'estrazione per ogni giocatore:
luckyDraw("Joe")
    .then((player1) => console.log(player1)) // Stampa il risultato dell'estrazione
    .then(() => luckyDraw("Caroline"))
    .then((player2) => console.log(player2))
    .then(() => luckyDraw("Sabrina"))
    .then((player3) => console.log(player3))
    .catch((error) => console.error(error)) // Gestisce eventuali errori