document.title = "TYPEWRITER"
const texxt = document.getElementById("text")
let text = "My name is Afolaranmi Rahmat. I stay here in igbogbo ikorodu"
let index = 0
let speed = 100

function typeEffect(){
    if (index < text.length) {
        texxt.textContent += text.charAt(index)
        index++
        setTimeout(typeEffect, speed)
    }
}
texxt.style.fontSize = '3rem'
texxt.style.fontStyle = "italic"
