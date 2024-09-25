let increaseBtn = document.querySelector('#increaseBtn');
let decreaseBtn = document.querySelector('#decreaseBtn');
let resetBtn = document.querySelector('#resetBtn');
let countNumber = document.querySelector('#countNumber');

let count = 0;

increaseBtn.onclick = function() {
    count++;
    countNumber.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countNumber.textContent = count;
}

resetBtn.onclick = function() {
    
    count = 0;
    countNumber.textContent = count;
}