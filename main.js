document.querySelector('#yell').addEventListener('click', run)

// below, we are pulling out the information from the value named in parenthese, then 'storing it in a variable named ____'

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

// document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//Add what you should be doing - conditionals go here

//innerText means we are putting some text to it - in this case putting text to the h2
//putting them together is concatantion, below is called a template literal or template string
//tic is a new way of doing a quote

document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
}

//const synth = window.speechSynthesis;
//document.querySelector('#yell').addEventListener('click', run)
//
//function run() {
// const fName = document.querySelector('#firstName').value
// const fMidName = document.querySelector('#firstMiddle').value
// const lMidName = document.querySelector('#lastMiddle').value
// const lName = document.querySelector('#lastName').value
//
//const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//document.querySelector('#placeToYell').innerText = yellText
//
//let yellThis = new SpeechSynthesisUtterance(yellText);
//
//synth.speak(yellThis);
// }
