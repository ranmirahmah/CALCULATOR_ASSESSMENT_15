document.title = "b.color changer"
const body = document.body


const input = document.getElementById("input")
const err = document.getElementById("err")

input.addEventListener("change", (e) => {
   
    if (e.target.value === "") {
        err.textContent = "Please input a color"
    }

    body.style.backgroundColor = e.target.value

})