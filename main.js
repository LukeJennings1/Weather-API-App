const pushToScreen = document.getElementById('infoTest');
const inputBox = document.getElementById('inputBox');
const submitLocationButton = document.getElementById('submitLocationButton');
const placeName = document.getElementById('placeName');
const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feelsLike');
const cloudCover = document.getElementById('cloudCover');
const weatherIcon = document.getElementById('weatherIcon');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

function cloudCoverage(cloudValue){
cloudCover.textContent = ''; // reset div prior to filling with new data.
    if (cloudValue === 0) {
        return   cloudCover.textContent = 'Clear Skies', weatherIcon.src = '/Users/mac1/JS/Weather-API-App/weather icons/clearsky.png';
    } else if (cloudValue > 0 && cloudValue < 26) {
        return cloudCover.textContent = 'Few Clouds', weatherIcon.src = '/Users/mac1/JS/Weather-API-App/weather icons/icons8-cloud-96.png';
    }  else if (cloudValue > 25 && cloudValue < 51) {
        return cloudCover.textContent = 'Scattered Clouds', weatherIcon.src = '/Users/mac1/JS/Weather-API-App/weather icons/scatteredclouds.png';
    } else if (cloudValue > 50 && cloudValue < 85) {
        return  cloudCover.textContent = 'Broken Clouds', weatherIcon.src = '/Users/mac1/JS/Weather-API-App/weather icons/brokenClouds.png';
    } else if (cloudValue > 84 && cloudValue < 101) {
        return  cloudCover.textContent = 'Overcast Clouds', weatherIcon.src = '/Users/mac1/JS/Weather-API-App/weather icons/overcast.png';
    }
}
const fetchAPIInitial = async function weatherAPIFetchInitial(){
    const apiFetch = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=6a1ec683efc2b775407037c6b2204412', {mode:'cors'})
    const jsonConversion = await apiFetch.json()
    if (jsonConversion.cod === "404" || jsonConversion.cod === "400" ){
        return console.log('ERROR - Please input valid place name')
    } else {
    return console.log(jsonConversion),
    placeName.textContent += jsonConversion.name,
    temp.textContent +=  ' ' +(jsonConversion.main.temp -273.15).toFixed(0) + '°C',
    feelsLike.textContent +=  + (jsonConversion.main.feels_like -273.15).toFixed(0) + '°C',
    cloudCoverage(jsonConversion.clouds.all),
    // cloudCover.textContent = jsonConversion.clouds.all,
    humidity.textContent += jsonConversion.main.humidity + '%',
    windSpeed.textContent +=  + jsonConversion.wind.speed.toFixed(1) + ' km/h';
    }
    }
    fetchAPIInitial().catch(function (){
        console.log('error');
    });

const fetchAPI = async function weatherAPIFetch(){
const apiFetch = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputBox.value+'&APPID=6a1ec683efc2b775407037c6b2204412', {mode:'cors'})
const jsonConversion = await apiFetch.json()
if (jsonConversion.cod === "404" || jsonConversion.cod === "400" ){
    return (console.log('ERROR - Please input valid place name'))
} else {
return console.log(jsonConversion),
placeName.textContent = jsonConversion.name,
temp.textContent =  (jsonConversion.main.temp -273.15).toFixed(0) + '°C',
feelsLike.textContent = (jsonConversion.main.feels_like -273.15).toFixed(0) +  '°C',
cloudCoverage(jsonConversion.clouds.all),
// cloudCover.textContent = jsonConversion.clouds.all,
humidity.textContent =  jsonConversion.main.humidity + '%',
windSpeed.textContent =  jsonConversion.wind.speed.toFixed(1) + ' km/h';
}
}
submitLocationButton.addEventListener('click', () => {
    fetchAPI().catch(function (){
        console.log('error');
    });
    console.log(inputBox.value)
});

