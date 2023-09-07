const para = document.getElementById("para")
const button = document.getElementById("button")

let quotes = ["BERU OLORUN", "NO SLEEP", "MADIRA OOOO", "DUPE TIE", "OGBON SODIKI"]

button.addEventListener('click', function(){
  para.textContent = quotes[Math.floor(Math.random() *quotes.length)]
})