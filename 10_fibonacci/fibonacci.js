const fibonacci = function(nthMember) {
  if (nthMember < 0) return 'OOPS';
  if (nthMember == 0) return 0;
  if (nthMember == 1) return 1;
  return fibonacci(nthMember - 1) + fibonacci(nthMember - 2);
};

// Do not edit below this line
module.exports = fibonacci;
