const weather = document.querySelector("h1")

let url = "https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=cb9e458baa4866f3de717ab238277ae9&units=metric"

let getLagos = () => {
    fetch(url).then(response=>{
        return response.json()
    }).then(data => {
        weather.textContent = "The temperature in lagos is" + " " + data.main.temp
        console.log(data);
    })
}
getLagos()





