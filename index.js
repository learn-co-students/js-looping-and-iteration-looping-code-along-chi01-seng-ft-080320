// Code your solutions in this file

function writeCards(thankYous, occasion) {
    let thankYouCards = []
    for (let i = 0; i < thankYous.length; i++) {
        thankYouCards.push(`Thank you, ${thankYous[i]}, for the wonderful ${occasion} gift!`);
    }
    return thankYouCards;
}

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }