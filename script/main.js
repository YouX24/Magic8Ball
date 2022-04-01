let fortuneDiv = document.getElementById("fortune-div")
let fortuneEl = document.getElementById("fortune-el")
let messages = ["AS I SEE IT, YES.", "ASK AGAIN LATER.", "BETTER NOT TELL YOU NOW.", "CANNOT PREDICT NOW.", "CONCENTRATE AND ASK AGAIN.", "DON'T COUNT ON IT.", "IT IS CERTAIN.", "IT IS DECIDEDLY SO.", "MOST LIKELY.", "MY REPLY IS NO.", "MY SOURCES SAY NO.", "OUTLOOK GOOD.", "OUTLOOK NOT SO GOOD.", "REPLY HAZY, TRY AGAIN.", "SIGNS POINT TO YES.", "VERY DOUBTFUL.", "WITHOUT A DOUBT.", "YES, DEFINITELY.", "YES.", "YOU MAY RELY ON IT."]

fortuneDiv.addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * messages.length)
    fortuneEl.textContent = messages[randomNum]
})