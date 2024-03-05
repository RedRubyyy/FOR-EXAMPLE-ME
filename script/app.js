import { dataElement , SolutionLogic} from "./var.mjs";
import { typeRform } from "./from-r.mjs";

let onFormIndex = 0;
const buttonResult = document.getElementById('button-result');
const buttonReset = document.getElementById('reset-btn');
const result = document.getElementById('result-calc');

const buttonsMenu = document.querySelectorAll('.btn-switch');
const forms = document.querySelectorAll('.flex-form')

buttonResult.addEventListener('click' , function () {
    if (onFormIndex == 3) {
        const keys = Object.keys(dataElement[3][typeRform]).filter(e => e != 'value');
        const importantData = dataElement[3][typeRform];
        const validationPromt = keys.every(key => {
            return dataElement[3][typeRform][key].value != '';
        })
        if (!validationPromt) {
            return alert('Isikan datanya abgkuh');
        }
        const functionSolution = SolutionLogic[3][typeRform]
        result.innerHTML = 'Hasil : ' + functionSolution(importantData)
        return
    }


    const keys = Object.keys(dataElement[onFormIndex])
    const importantData = dataElement[onFormIndex];
    
    const validationPromt = keys.every(key => {
        return dataElement[onFormIndex][key].value != '';
    })
    if (!validationPromt) {
        return alert("Isikan datanya abgkuh")
    }
    const functionSolution = SolutionLogic[onFormIndex]
    result.innerHTML = 'Hasil : ' + functionSolution(importantData)
})


buttonsMenu.forEach(function (button , index) {
    button.addEventListener("click" , function() {
        onFormIndex = index;
        resetPrompt()
        forms.forEach(form => form.classList.add('none'))
        forms[index].classList.remove('none')
    })
})
resetPrompt()
buttonReset.addEventListener('click' , function () {
    resetPrompt()
})
function resetPrompt () {
    result.innerHTML = 'Hasil : '
    forms.forEach((form , index) => {
        let keys = Object.keys(dataElement[index]);

        if (index == 3) {
            let subKeys = Object.keys(dataElement[index]);
            subKeys.forEach(subKey => {
                let kys = Object.keys(dataElement[index][subKey]);
                kys.forEach(ky => {
                    dataElement[index][subKey][ky].value = ''
                })
            })
        }
        else {
            keys.forEach(key => {
                dataElement[index][key].value = '';
            })
        }
    })
}