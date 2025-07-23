
function main() {
    /** @type {HTMLButtonElement} */
    const buttonInput = document.querySelector('.button_input');
    buttonInput.addEventListener('click',() => {

                /**
         * @type {HTMLInputElement}
         */
        const weight = document.querySelector('.input_weight');
        /**
         * @type {HTMLInputElement}
         */
        const height = document.querySelector('.input_height');

        render(weight.value,height.value);
    });
}
/** 
 * @param {String} weight
 * @param {String} height
 * @void 
*/
function render(weight, height) {
    /** @type {HTMLDivElement} */
    const banner_result = document.querySelector('.banner_result');

    const weightValue = Number(weight);
    const heightValue = Number(height);

    const result = calcImc(weightValue,heightValue);   

    // const notNumberOr = isNaN(heightValue) && isNaN(weightValue);
    
    if(banner_result.style.display === 'none' || banner_result.style.display === 'block') {
        if(banner_result.style.display === 'none' ) {
            banner_result.style.display = 'block';
        }
        if(isNaN(weightValue)) {
            banner_result.style.backgroundColor = '#fe7287';
            banner_result.innerHTM = '';
            banner_result.innerHTML = 'Peso Inválido';
        }
        else if(isNaN(heightValue)) {
            banner_result.style.backgroundColor = '#fe7287';
            banner_result.innerHTM = '';
            banner_result.innerHTML = 'Altura inválida';
        }
        else {
            banner_result.style.backgroundColor = '#00fec1';
            banner_result.innerHTM = '';
            banner_result.innerHTML = result;
        }
    }
}
/** 
 * @param {Number} weightValue 
 * @param {Number} heightValue
 * @returns {String} 
*/
function calcImc(weightValue,heightValue) {


    const imcResult = (weightValue) / (Math.pow(heightValue,2));

    const respostaPadrao = `Seu IMC é ${imcResult.toFixed(2) } `;

    if(imcResult <= 18.5) {
        return respostaPadrao + `(Abaixo do Peso)`;
    }
    else if(imcResult > 18.5 && imcResult <= 24.9) {
        return respostaPadrao + `(Peso normal)`;
    }
    else if(imcResult >= 25 && imcResult <= 29.9) {
        return respostaPadrao + `(sobrepeso)`;
    }
    else if(imcResult >= 30 && imcResult <= 34.9) {
        return respostaPadrao + `(Obesidade grau 1)`;
    }
    else if(imcResult >= 35 && imcResult <= 39.9) {
        return respostaPadrao + `(Obesidade grau 2)`;
    }
    else if(imcResult > 40) {
        return respostaPadrao + `(Obesidade grau 3)`;
    }
}

main();
