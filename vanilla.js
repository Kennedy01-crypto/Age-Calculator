//return age 
function MyAge(){
    //Input Birth Date
    let birthdate = new Date(document.getElementById('birthdate').value);
    //get time : return the number of milliseconds since JAnuary 1, 1978
    let now = new Date();
    let ageInMs = now.getTime() - birthdate.getTime(); //age in milliseconds

    let ageInS = ageInMs / 1000; // to seconds
    let ageInMins = ageInS / 60; // to minutes
    let ageInHrs = ageInMins / 60; // to Hours
    let ageInDays = ageInHrs / 24; // to days
    let ageInMonths = ageInDays / 30.4375 // to months
    let ageInYears = ageInMonths / 12; // to years

    document.querySelector('#years').innerHTML = Math.floor(ageInYears);
    document.querySelector('#months').innerHTML = Math.floor(ageInMonths % 12);
    document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375);
    document.querySelector('#hours').innerHTML = Math.floor(ageInHrs % 24);
    document.querySelector('#minutes').innerHTML = Math.floor(ageInMins % 60);
    document.querySelector('#seconds').innerHTML = Math.floor(ageInS % 60);
    document.querySelector('#seconds').style.borderBottom = '1px solid grey';
}

function calculate(){
    setInterval( MyAge, 1000);
}

function reset(){
    window.location.reload();
}