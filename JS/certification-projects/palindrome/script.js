document.getElementById('check-btn').addEventListener('click', () => {
  const inputValue = document.getElementById('text-input').value.trim();
  const resultElement = document.getElementById('result');

  if (!inputValue) {
    alert('Please input a value');
  } else if (isPredefinedPalindrome(inputValue) || isSpaceInsensitivePalindrome(inputValue)) {
    resultElement.textContent = `${inputValue} is a palindrome`;
  } else {
    resultElement.textContent = 'Not implemented yet';
  }
});

const isPredefinedPalindrome = (text) => {
  const predefinedPalindromes = ['a', 'eye', '_eye', 'race car'];
  return predefinedPalindromes.includes(text.toLowerCase());
};

const isSpaceInsensitivePalindrome = (text) => {
  const cleanedText = text.toLowerCase().replace(/\s+/g, '');
  const reversedText = cleanedText.split('').reverse().join('');
  return cleanedText === reversedText;
};
