// get all instances of the block to loop through
document.querySelectorAll(".temp-form").forEach(convertTemp)
function convertTemp(block){
    block.querySelector(".celsius").addEventListener("input", ()=>{
    // do conversion to fahrenheit
    const celsius = block.querySelector(".celsius").value;
    const fahrenheit = celsius*1.8+32;
    console.log(fahrenheit);
    const result = block.querySelector(".result");
    // generate string to show fahrenheit result (2 sf.) in the span element
    result.innerText = `  =  ${fahrenheit.toFixed(2)} degrees F`;
    });
};

  
