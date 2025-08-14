const from =document.querySelector('form')

from.addEventListener('submit', function (e) {
    e.preventDefault () // default value ko roko kuch time

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

   if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height} `;
   }
   else if( weight === '' ||  weight < 0 || isNaN( weight)) {
    results.innerHTML = ` please give a valid  weight ${weight} `;
   } else {
    const BMI = (weight / ((height * height) / 10000) ).toFixed(2);

    // show the result
    results.innerHTML = `<span>${BMI}</span>`
   }
});