const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.getElementById("result");
    const Guides = document.getElementById("Guide");

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `<h1>Please Enter valid height ${height}</h1>`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `<h1>Please Enter valid weight ${weight}</h1>`;
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<h1>${bmi}</h1>`;
        if(bmi<18.6){
            Guides.innerHTML = `<h2>You're Under Weight, Your Weight is ${bmi} which is less than 18.6</h2>`
        }else if(bmi>24.9){
            Guides.innerHTML = `<h2>You're Over Weight, Your Weight is ${bmi} which is greater than 24.9</h2>`
        }else{
             Guides.innerHTML = `<h2>You're in Normal Range, Your Weight is ${bmi} which is normal</h2>`
        }
    }  
});