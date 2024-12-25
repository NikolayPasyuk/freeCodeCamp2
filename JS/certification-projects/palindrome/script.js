document.getElementById('check-btn').addEventListener('click', () => {
  const inputValue = document.getElementById('text-input').value.trim();
  if (!inputValue) {
    alert('Please input a value')
  } else {
    console.log('Checking for palindrome')
  }
})