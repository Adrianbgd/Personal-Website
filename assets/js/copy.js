const copyButton = document.getElementById('btn-copy');
const copyNumber = document.getElementById('btn-two');
let copiedText = document.getElementById('copied');
let copiedTextTwo = document.getElementById('copied__two');

copyButton.addEventListener('click', (event)=> {
    const content = document.getElementById('text-copy').textContent;
    navigator.clipboard.writeText(content);
    copiedText.classList.add('tooltip__show');
    setTimeout(function() {
        copiedText.classList.remove('tooltip__show');
    }, 1000);
});

copyNumber.addEventListener('click', (event)=> {
    const content = document.getElementById('number-copy').textContent;
    navigator.clipboard.writeText(content);
    copiedTextTwo.classList.add('tooltip__show');
    setTimeout(function() {
        copiedTextTwo.classList.remove('tooltip__show');
    }, 1000);
});