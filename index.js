const inputNode = document.querySelector('.js-input');
const selectNode = document.querySelector('.js-select');
const outputNode = document.querySelector('.js-output');
const buttonNode = document.querySelector('.js-button');

function getInput(){
    return {
        rub: Number(inputNode.value),
        currency: selectNode.value,
    }
}

function render(result) {
    outputNode.innerHTML = result;
}

buttonNode.addEventListener('click', function () {
    const result = convert(getInput());
    
    render(result);
});

selectNode.addEventListener('change', function(){  // при данном способе в function convert({rub, currency}) надо убрать {}
    outputNode.innerHTML = convert(inputNode.value, selectNode.value);
})
