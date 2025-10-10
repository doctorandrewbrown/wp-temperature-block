
document.getElementById("celsius").addEventListener("input", convertTemp);
const result = document.getElementById("result");
function convertTemp(){
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = celsius*1.8+32;
    result.innerText = fahrenheit;
}
  