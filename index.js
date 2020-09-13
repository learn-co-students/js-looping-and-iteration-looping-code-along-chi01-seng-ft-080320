// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"]
const event = "birthday"
function writeCards(names, event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards 
}

function countDown(num) {
let count = num + 1;
while (count > 0) {
  console.log(count -= 1 );
}
}