const tempratureField = document.querySelector(".temprature");
const locationField = document.querySelector(".location");
const dateTimeField = document.querySelector(".DateTime");
const conditionField = document.querySelector(".condition");
const searchField = document.querySelector(".searchArea");
const form = document.querySelector('form')

form.addEventListener('submit', searchForLocation)

let targetPlace = 'bilaspur'

const fetchresults = async (targetLocation) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=bd850bc79bc249879b680539250205&q=${targetLocation}&aqi=no`

    const res = await fetch(url)  //Instead of installing npm i and all we use this

    const data = await res.json()  //Convert the response into json

    console.log(data);

    let locationName = data.location.name;
    let Time = data.location.localtime;
    let Temp = data.current.temp_c;
    let locationCondition = data.current.condition.text;

    updateDetails(Temp, locationName, Time, locationCondition);

}

function updateDetails(Temp, locationName, Time, locationCondition){


    tempratureField.innerText = Temp;
    locationField.innerText = locationName;
    dateTimeField.innerText = Time;
    conditionField.innerText = locationCondition;
}

function searchForLocation(e){
    e.preventDefault()

    targetPlace = searchField.value

    fetchresults(targetPlace)
}

fetchresults(targetPlace)