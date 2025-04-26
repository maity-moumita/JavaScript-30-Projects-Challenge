const submit = document.getElementById('ageCalculator');

const dobInput = document.getElementById('date');


submit.addEventListener('click', function(e){
    e.preventDefault();

    const todayDate = new Date(); // you forgot this line

    const dob = new Date(dobInput.value);
    const dobYear = dob.getFullYear();
    const currentYear = todayDate.getFullYear();

    if (dob <= todayDate) {  // fixed the condition
        const yourAge = currentYear - dobYear;
        age.innerHTML = `<p>Your Age is ${yourAge}</p>`;}else{
        age.innerHTML = `<p>Enter valid date of birth</p>`
    }
     
})