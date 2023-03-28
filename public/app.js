
document.addEventListener('DOMContentLoaded', () => { 
    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
});


const handleFormSubmit = function (event) {
    event.preventDefault();
    const resultEmail = document.querySelector('#form-result');
    let checkboxes= document.querySelectorAll('input[name="adventures"]:checked');
    let output= [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    });

    resultEmail.textContent = `You have submitted:
    Email: ${document.form.email.value} Adventures : ${output} Additional requests: ${document.form.requests.value}` 
}



// gives the user feedback when the form has been submitted to let them know what they have submitted