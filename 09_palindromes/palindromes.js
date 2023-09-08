const palindromes = function (string) {
  const processedString = string.replace(/\W|_/g, '').replaceAll(' ', '').toLowerCase();
  return processedString === processedString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
