let ratingBtns = document.querySelectorAll('input[type ="radio"]');
let cardOne = document.querySelector('.card-one');
const paraDisplay = document.getElementById('rating-response');
const submitBtn = document.getElementById('submit-btn');
const cardTwo = document.querySelector('.card-two');
const paracheck = document.querySelector('#check');



//rating selection
let selectedRating;
ratingBtns.forEach(ratingBtn => {
    ratingBtn.addEventListener('click', function(e) {
        if (this.checked) {
            selectedRating = ratingBtn.value;
            console.log(selectedRating)
        }
        //displays when user selects rating
        submitBtn.disabled = false;
        paraDisplay.textContent = `You have selected ${selectedRating} out of 5`;
    });
    // submit button disabled until the user selects a rating
    submitBtn.disabled = true;

});

// upon submission
submitBtn.addEventListener('click', function(e) {
    //prevents default submit behavior
    e.preventDefault();
    cardOne.classList.toggle('hidden');
    cardTwo.classList.toggle('hidden');





});