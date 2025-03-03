//http://api.weatherapi.com/v1/current.json?key=dd271c32372148ab9e8152913252501&q=Mumbai&aqi=no

const tempreatureFeild = document.querySelector(".tempreature")
const locationFeild = document.querySelector(".time_location p")
const dateandTimeFeild = document.querySelector(".time_location span")
const conditionFeild = document.querySelector(".condition p")
const searchFeild = document.querySelector(".search_bar")
const form = document.querySelector("form")


form.addEventListener('submit' , searchforLocation)


let target = 'Lucknow'

async function fetchResults(targetLocation) {
    let url = `http://api.weatherapi.com/v1/current.json?key=dd271c32372148ab9e8152913252501&q=${targetLocation}&aqi=no`;
    
    const res = await fetch(url);

    const data = await res.json();

    console.log(data);
    
    let locationName = data.location.name
    let time = data.location.localtime

    let temp = data.current.temp_c
    let condition = data.current.condition.text
    updatedetails(locationName,time,temp,condition)
    
}

function updatedetails(locationName ,time ,temp ,condition){

    let splitdate = time.split(" ")[0]

    let splittime = time.split(" ")[1]

    let currentday = getdayname(new Date(splitdate).getDay())

    tempreatureFeild.innerText = temp;
    locationFeild.innerText = locationName;
    dateandTimeFeild.innerText = `${splitdate} ${currentday} ${splittime}`;
    conditionFeild.innerText = condition;
    
}

function searchforLocation(e){
    e.preventDefault()

    target = searchFeild.value

    fetchResults(target)
}

fetchResults(target)

function getdayname(number){
    switch(number){
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'friday';
        case 6:
            return 'Saturday';
    }
}