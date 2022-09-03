const pushToScreen = document.getElementById('infoTest');
const inputBox = document.getElementById('inputBox');
const submitLocationButton = document.getElementById('submitLocationButton');
const placeName = document.getElementById('placeName');
const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feelsLike');
const cloudCover = document.getElementById('cloudCover');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

// const temp - 

submitLocationButton
const fetchAPI = async function weatherAPIFetch(){
const apiFetch = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputBox.value+'&APPID=6a1ec683efc2b775407037c6b2204412', {mode:'cors'})
const jsonConversion = await apiFetch.json()
if (jsonConversion.cod === "404" || jsonConversion.cod === "400" ){
    return (console.log('ERROR - Please input valid place name'))
} else {
return console.log(jsonConversion),
placeName.textContent = jsonConversion.name,
temp.textContent = 'Temperature - ' + (jsonConversion.main.temp -273.15).toFixed(2) + '°C',
feelsLike.textContent = 'Feels like - ' + jsonConversion.main.feels_like,
cloudCover.textContent = jsonConversion.clouds.all,
humidity.textContent = jsonConversion.main.humidity,
windSpeed.textContent = jsonConversion.wind.speed;
}
}
submitLocationButton.addEventListener('click', () => {
    fetchAPI().catch(function (){
        console.log('error');
    });
    console.log(inputBox.value)
});



//need to get the data from a specific city. Also enable a text box and button to search for a user input city - done
// jsonConversion.main.feels_like is given in kelvin so minus -273.15 from it to get it in degree
// jsonConversion.main.temp is the actual temp in kelvin  
// jsonConversion.main.humidity is the actual humidity in percent  
// jsonConversion.wind.speed is the actual wind speed in km/h 
// jsonConversion.list.pop is the actual wind speed in km/h 

// jsonConversion.clouds.all is the cloud amount in percentage. The percentage range can be done on the site https://openweathermap.org/weather-conditions 
