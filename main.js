const pushToScreen = document.getElementById('infoTest');
const inputBox = document.getElementById('inputBox');
const submitLocationButton = document.getElementById('submitLocationButton');


submitLocationButton
const fetchAPI = async function weatherAPIFetch(){
const apiFetch = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputBox.value+'&APPID=6a1ec683efc2b775407037c6b2204412', {mode:'cors'})
const jsonConversion = await apiFetch.json()
return jsonConversion, pushToScreen.textContent = jsonConversion.name, console.log(jsonConversion.name)

}

// fetchAPI().catch(err => {
//     console.error(err)
// });

submitLocationButton.addEventListener('click', () => {
    fetchAPI()
    console.log(inputBox.value)
});



//need to get the data from a specific city. Also enable a text box and button to search for a user input city