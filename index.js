
const rates = document.querySelectorAll('.btn');
let rating = document.getElementById('rating')
const mainContainer = document.querySelector(".container");
const submitButton = document.getElementById('submit');
const rateAgain = document.getElementById('rate-again')
let thankyou = document.querySelector(".thank-you");

submitButton.addEventListener("click", () => {
    thankyou.classList.remove('hidden')
    mainContainer.style.display = 'none'
});

rateAgain.addEventListener('click', () => {
    thankyou.classList.add('hidden')
    mainContainer.style.display = 'block'
})

// The forEach() method calls a function 
// and iterates over the elements of an array. 
rates.forEach(rate => {
    rate.addEventListener('click', () => {
      rating.innerHTML = rate.innerHTML
    })
    
});

