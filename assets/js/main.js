
function main() {
    /** @type {HTMLButtonElement} */
    const buttonInput = document.querySelector('.button_input');
    buttonInput.addEventListener('click',() => {
        /** @type {HTMLDivElement} */
        const bunner_result = document.querySelector('.banner_result');
        if(bunner_result.style.display === 'none') {
            bunner_result.style.display = 'block';
        }
        else if(bunner_result.style.display === 'block') {
            bunner_result.style.display = 'none';
        }
    });
}



function inputValues() {
        /**
     * @type {HTMLInputElement}
     */
    const weight = document.querySelector('.input_weight');
    const weightValue = Number(weight.value);

    /**
     * @type {HTMLInputElement}
     */
    const height = document.querySelector('.input_weight');
    const heightValue = Number(height.value)

    console.log(`Weight: ${weightValue}\nHeight: ${heightValue}`);
}

main();
