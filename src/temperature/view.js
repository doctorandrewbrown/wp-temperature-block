// get all instances of the block element (as an array) to loop through and apply function to each
document.querySelectorAll(".block-wrapper").forEach(convertTemp)

// "block" is not a key-word it is a variable representing the whole .block-wrapper element automatically assigned 
// to each item by forEach above (could be called "item" or anything)
function convertTemp(block){
    block.querySelector(".celsius").addEventListener("input", ()=>{

    // do conversion to fahrenheit
    const celsius = block.querySelector(".celsius").value;
    const fahrenheit = celsius*1.8+32;
    
    // generate string to show fahrenheit result (2 sf.) in the span element
    block.querySelector(".result").innerText = `  =  ${fahrenheit.toFixed(2)} degrees F`;
    });
};

  
