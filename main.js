
const numberDisplay = document.querySelector('.number-display');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
    numberDisplay.innerHTML = '';
    const lottoNumbers = new Set();

    while (lottoNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        numberDisplay.appendChild(numberElement);
    });
});
