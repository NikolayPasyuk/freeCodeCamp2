document.getElementById('check-btn').addEventListener('click', () => {
  const inputValue = document.getElementById('text-input').value.trim();
  const resultElement = document.getElementById('result');

  if (!inputValue) {
    alert('Please input a value')
  } else if (inputValue.toLowerCase() === 'a') {
    resultElement.textContent = 'A is a palindrome';
  } else if (inputValue.toLowerCase() === 'eye') {
    resultElement.textContent = 'eye is a palindrome';
  } else {
    resultElement.textContent = 'Not implemented yet';
  }
});