const apiKey = "46ab5ce63e5cd8acafee736ccafc4364";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
/* `&appid=${apiKey}  */

let searchBox = document.querySelector('.search input');
let button = document.querySelector('.search button');
let icon = document.querySelector('.weather-icon');

async function weather(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none";
    }
    else{
        let data = await response.json();

    

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Cloud"){
        icon.src = "img/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "img/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src = "img/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        icon.src = "img/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "img/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        icon.src = "img/snow.png"
    }
    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none"
}
    


    
    
}

button.addEventListener('click', ()=>{
    weather(searchBox.value);
})








