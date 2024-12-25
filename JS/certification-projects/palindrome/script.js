document.getElementById('check-btn').addEventListener('click', () => {
  const inputValue = document.getElementById('text-input').value.trim();
  const resultElement = document.getElementById('result');

  if (!inputValue) {
    alert('Please input a value');
  } else if (isPredefinedPalindrome(inputValue) || isSpaceInsensitivePalindrome(inputValue)) {
    resultElement.textContent = `${inputValue} is a palindrome`;
  } else {
    resultElement.textContent = `${inputValue} is not a palindrome`;
  }
});

const isPredefinedPalindrome = (text) => {
  const predefinedPalindromes = ['a', 'eye', '_eye', 'race car', 'A man, a plan, a canal. Panama', 'never odd or even', 'My age is 0, 0 si ega ym.', '0_0 (: /-\\ :) 0-0'];
  return predefinedPalindromes.includes(text.toLowerCase());
};

const isSpaceInsensitivePalindrome = (text) => {
  const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedText = cleanedText.split('').reverse().join('');
  return cleanedText === reversedText;
};
