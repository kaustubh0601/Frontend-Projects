const countValue = document.querySelector('#counter');

function increment(){
    let value = parseInt(countValue.innerText);     // get the value from UI
    value = value + 1;          // update the value
    countValue.innerText = value;   // set the value onto UI
};

const decrement = () =>{

    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value; 
}