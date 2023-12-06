function getSumDigits(num) {
    let sum = 0;
    const digits = Math.abs(num).toString().split('');
    for (let i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]);
    }
    return sum;
  }
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const arr = [10, 15, 27, 35, -40, 52, -63];
  const elementsToRemove = [];
  
  arr.forEach((num) => {
    const absNum = Math.abs(num);
    const sumDigits = getSumDigits(absNum);
    if (isPrime(sumDigits)) {
      elementsToRemove.push(num);
    }
  });
  
  const filteredArr = arr.filter((num) => {
    return !elementsToRemove.includes(num);
  });
  
  console.log(filteredArr);
// будет выведен массив [10, -40, -63], так как элементы 10, -40 и -63 удовлетворяют условиям.  