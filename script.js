let coin = document.querySelector('.coin');
let button = document.querySelector('button');
let coinText = document.querySelector('.coin-text');
let coinimg = document.querySelector('.coin img');
function flipCoin() {
    button.disabled = true;
    coin.style.pointerEvents = 'none';

    coin.classList.add('spin');

    setTimeout(() => {
        let randnum = Math.random();
        if (randnum < 0.5) {
            coinimg.src = "heads.svg";
            coinText.textContent = 'Heads';
        } else {
            coinimg.src = "tails.svg";
            coinText.textContent = 'Tails';
        }
        coin.classList.remove('spin');
        button.disabled = false;
        coin.style.pointerEvents = 'auto';
    }, 500);
}
coin.addEventListener('click', flipCoin);
button.addEventListener('click', flipCoin);