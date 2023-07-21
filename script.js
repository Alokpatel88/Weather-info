let weather = {
    "apiKey": "349964ba76f79dbd4db8950598e4df7c",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then(response => response.json())
        .then(data => {
            this.displayWeather(data)
        })
    },
    displayWeather: function(data){
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".temperature").innerText = temp + "° C"
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %"
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h"

        document.querySelector(".weather").classList.remove("loading")
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search button").addEventListener("click", () => {
    weather.search()
})

document.querySelector(".search-bar").addEventListener("keyup", e => {
    if (e.key == "Enter") weather.search()
})

weather.fetchWeather("Lima")
