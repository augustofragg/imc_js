
function main() {
    /** @type {HTMLButtonElement} */
    const buttonInput = document.querySelector('.button_input');
    buttonInput.addEventListener('click',() => {

                /**
         * @type {HTMLInputElement}
         */
        const weight = document.querySelector('.input_weight');
        const weightValue = Number(weight.value);

        /**
         * @type {HTMLInputElement}
         */
        const height = document.querySelector('.input_height');
        const heightValue = Number(height.value)

        const result = calcImc(weightValue,heightValue);

        /** @type {HTMLDivElement} */
        const bunner_result = document.querySelector('.banner_result');
        if(bunner_result.style.display === 'none') {
            bunner_result.style.display = 'block';
            bunner_result.innerHTML = result;
        }
        else if(bunner_result.style.display === 'block') {
            bunner_result.style.display = 'none';
        }
    });
}

/** 
 * @param {Number} weightValue 
 * @param {Number} heightValue
 * @returns {String} 
*/
function calcImc(weightValue,heightValue) {

    const imcResult = weightValue / Math.pow(heightValue,2);

    if(imcResult <= 18.5) {
        return `Seu IMC é ${imcResult.toFixed(2) } (Abaixo do Peso)`;
    }
    else if(imcResult > 18.5 && imcResult <= 24.9) {
        return `Seu IMC é ${imcResult.toFixed(2) } (Peso normal)`;
    }
    else if(imcResult >= 25 && imcResult <= 29.9) {
        return `Seu IMC é ${imcResult.toFixed(2) } (sobrepeso)`;
    }
    else if(imcResult >= 30 && imcResult <= 34.9) {
        return `Seu IMC é ${imcResult.toFixed(2) } (Obesidade grau 1)`;
    }
    else if(imcResult >= 35 && imcResult <= 39.9) {
        return `Seu IMC é ${imcResult.toFixed(2) } (Obesidade grau 2)`;
    }
    else if(imcResult > 40) {
        return `Seu IMC é ${imcResult.toFixed(2) } (Obesidade grau 3)`;
    }
}

main();
