export let typeRform = 'totalData'; 

const switchButton = document.getElementById('switch-btn');
const formDataEcer = document.getElementById('data-ecer');
const formDataTotal = document.getElementById('data-total');

switchButton.addEventListener('click' , function () {
    const classEcer = Array.from(formDataEcer.classList)
    if (classEcer.includes('none')) {
        typeRform = 'data'
        formDataEcer.classList.remove('none');
        formDataTotal.classList.add('none');
        return
    }
    typeRform = 'totalData'
    formDataEcer.classList.add('none');
    formDataTotal.classList.remove('none')
})