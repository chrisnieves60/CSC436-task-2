import { add, added } from "./math";
import { multiply, multiplied } from "./math";

const eventHandler = () => {

    const addButton = document.getElementById('add');
    const multiplyButton = document.getElementById('multiply');
    const addOrMult = document.getElementById('addOrMult'); 
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    const updateDomWithAddedNumbers = () => {
        result.innerHTML = 
            // parseInt(number1.value, 10)+parseInt(number2.value,10);
            add(number1.value,number2.value);
            
            addOrMult.innerHTML = added; 

    }
    const updateDomWithMultipliedNumbers = () => {
        result.innerHTML = 
            // parseInt(number1.value, 10)*parseInt(number2.value,10);
            multiply(number1.value,number2.value);
            
            addOrMult.innerHTML = multiplied;
    }
    

    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multiplyButton.addEventListener('click', updateDomWithMultipliedNumbers);
    

}

export  {eventHandler};