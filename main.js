const test = document.getElementById('infoTest');


const fetchAPI = async function weatherAPIFetch(){
const apiFetch = await fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=6a1ec683efc2b775407037c6b2204412', {mode:'cors'});
const jsonConversion = await apiFetch.json();
return console.log(jsonConversion), test = jsonConversion;
}
fetchAPI().catch(err => {
    console.log('ERROR')
});

