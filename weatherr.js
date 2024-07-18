const apikey = "bb9c62e30ed2a53f422ed0b2150531c3";
const apiurl =  "https://api.openweathermap.org/data/2.5/weather? units=metric&q=" ;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            const data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            console.log("Weather Condition:", data.weather[0].main); // Debugging line

            switch (data.weather[0].main) {
                case "Clouds":
                    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
                    break;
                case "Rain":
                    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1146/1146858.png";
                    break;
                case "Clear":
                    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
                    break;
                case "Drizzle":
                    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/2935/2935039.png";
                    break;
                case "Mist":
                    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
                    break;
                default:
                    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1146/1146869.png"; // Default icon
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching the weather data: ", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Optionally, you can add an event listener to trigger the search when the user presses "Enter"
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
