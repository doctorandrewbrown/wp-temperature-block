// get all instances of the block to loop through and apply function
document.querySelectorAll(".block-wrapper").forEach(convertTemp)
function convertTemp(block){
    block.querySelector(".celsius").addEventListener("input", ()=>{

    // do conversion to fahrenheit
    const celsius = block.querySelector(".celsius").value;
    const fahrenheit = celsius*1.8+32;
    
    // generate string to show fahrenheit result (2 sf.) in the span element
    block.querySelector(".result").innerText = `  =  ${fahrenheit.toFixed(2)} degrees F`;
    });
};

  
