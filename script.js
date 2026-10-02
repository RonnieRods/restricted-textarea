let textarea = document.querySelector('#textarea');
let charCount = document.querySelector('#char-count');

charCount.textContent = '0 / 250'; // Placeholder before real-time counter begins

textarea.addEventListener('keyup', () => {
    let chars = textarea.value.length;

    charCount.textContent = chars + ` / ${textarea.maxLength}`;

    if (chars == 250) {
        textarea.classList.replace('valid', 'invalid');
        charCount.classList.add('redtext');
    } else {
        textarea.classList.replace('invalid', 'valid');
        charCount.classList.remove('redtext');
    }
});