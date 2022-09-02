const pushToScreen = document.getElementById('infoTest');
const inputBox = document.getElementById('inputBox');
const submitLocationButton = document.getElementById('submitLocationButton');


submitLocationButton
const fetchAPI = async function weatherAPIFetch(){
const apiFetch = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputBox.value+'&APPID=6a1ec683efc2b775407037c6b2204412', {mode:'cors'})
const jsonConversion = await apiFetch.json()
return jsonConversion, console.log(jsonConversion.name),console.log(jsonConversion), console.log(jsonConversion.main.feels_like,jsonConversion.main.humidity, jsonConversion.main.temp);
// ,pushToScreen.textContent = jsonConversion.name

}

// fetchAPI().catch(err => {
//     console.error(err)
// });

submitLocationButton.addEventListener('click', () => {
    fetchAPI().catch(function (){
        console.log('error)');
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
