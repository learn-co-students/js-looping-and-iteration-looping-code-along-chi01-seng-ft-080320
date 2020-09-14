function writeCards(namesArray, event) {
    let cardMessage = []
    for (let i = 0; i < namesArray.length; i++) {
        cardMessage.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return cardMessage
}

function countDown(num) {
    while (num >=0 ) {
        console.log(num);
        num -= 1;
    }
}