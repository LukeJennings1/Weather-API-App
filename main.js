const pushToScreen = document.getElementById('infoTest');
const inputBox = document.getElementById('inputBox');
const submitLocationButton = document.getElementById('submitLocationButton');
const placeName = document.getElementById('placeName');
const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feelsLike');
const cloudCover = document.getElementById('cloudCover');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');


function cloudCoverage(cloudValue){
cloudCover.textContent = ''; // reset div prior to filling with new data. 
    if (cloudValue === 0) {
        return console.log('CLEAR'), cloudCover.textContent = 'Clear Skies';
    } else if (cloudValue > 0 && cloudValue < 26) {
        return console.log('Few Clouds'), cloudCover.textContent = 'Few Clouds';
    }  else if (cloudValue > 25 && cloudValue < 51) {
        return console.log('Scattered Clouds'), cloudCover.textContent = 'Scattered Clouds';
    } else if (cloudValue > 50 && cloudValue < 85) {
        return console.log('Broken Clouds'), cloudCover.textContent = 'Broken Clouds';
    } else if (cloudValue > 84 && cloudValue < 101) {
        return console.log('Overcast Clouds'), cloudCover.textContent = 'Overcast Clouds';
    }
}

const fetchAPI = async function weatherAPIFetch(){
const apiFetch = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputBox.value+'&APPID=6a1ec683efc2b775407037c6b2204412', {mode:'cors'})
const jsonConversion = await apiFetch.json()
if (jsonConversion.cod === "404" || jsonConversion.cod === "400" ){
    return (console.log('ERROR - Please input valid place name'))
} else {
return console.log(jsonConversion),
placeName.textContent = jsonConversion.name,
temp.textContent = 'Temperature - ' + (jsonConversion.main.temp -273.15).toFixed(2) + '°C',
feelsLike.textContent = 'Feels like - ' + (jsonConversion.main.feels_like -273.15).toFixed(2) + '°C',
cloudCoverage(jsonConversion.clouds.all),
// cloudCover.textContent = jsonConversion.clouds.all,
humidity.textContent = 'Humidity - ' + jsonConversion.main.humidity + '%',
windSpeed.textContent = 'Windspeed - ' + jsonConversion.wind.speed.toFixed(1) + ' km/h';
}
}
submitLocationButton.addEventListener('click', () => {
    fetchAPI().catch(function (){
        console.log('error');
    });
    console.log(inputBox.value)
});



