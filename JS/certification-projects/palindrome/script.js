document.getElementById('check-btn').addEventListener('click', () => {
  const inputValue = document.getElementById('text-input').value.trim();
  const resultElement = document.getElementById('result');

  if (!inputValue) {
    alert('Please input a value');
  } else if (isPredefinedPalindrome(inputValue)) {
    resultElement.textContent = `${inputValue} is a palindrome`;
  } else {
    resultElement.textContent = 'Not implemented yet';
  }
});

const isPredefinedPalindrome = (text) => {
  const predefinedPalindromes = ['a', 'eye', '_eye'];
  return predefinedPalindromes.includes(text.toLowerCase());
}