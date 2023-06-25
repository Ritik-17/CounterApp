const CountValue = document.querySelector('#counter');

// Increament

const increament = () => {
    //get the value  from UI . parseInt is used to convert the string value into numerical 
    let value = parseInt(CountValue.innerText);
    // update the value
    value = value + 1;
    // set the value onto UI
    CountValue.innerText = value;
};

// Decreament

const decreament = () => {
    let value = parseInt(CountValue.innerText);
    value = value - 1;
    CountValue.innerText = value;

};
