let t = Number(document.getElementById("temperature").textContent);
let s = Number(document.getElementById("current-speed").textContent);
let windChill = document.getElementById("current-chill");

// formula is f = 35.74 + 0.6125t - 35.75s**0.16 + 0.4275ts**0.16
// f is wind chill in Fahrenheit
// s is wind speed in mph
//  Wind Chill Specification Limits: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)." 
console.log(t);
console.log(s);
calculations();

function calculations(){
    if (t < 50 && s > 3){
        const formula = 35.74 + (0.6125*t) - (35.75*(s**0.16)) + (0.4275*t*(s**0.16));
        windChill.append(Math.round(formula));
    }
    else {
        windChill.append("N/A");
    }
}