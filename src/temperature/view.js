// get the user input centigrade temperature 
document.getElementById("celsius").addEventListener("input", ()=>{
    // do conversion to fahrenheit
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = celsius*1.8+32;
    // generate string to show fahrenheit result in the span element
    result.innerText = `  =  ${fahrenheit.toFixed(2)} degrees F`;
});
// get #result element in variable
const result = document.getElementById("result");

  