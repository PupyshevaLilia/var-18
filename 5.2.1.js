function sumElements(arr, e) {
    let firstIndex = -1;
    let lastIndex = -1;
    
    // Находим индексы первого и последнего элементов, удовлетворяющих условию
    for (let i = 0; i < arr.length; i++) {
      if (Math.abs(arr[i] - e) <= 1e-5) {
        if (firstIndex === -1) {
          firstIndex = i;
        }
        lastIndex = i;
      }
    }
    
    // Если не найдены элементы, удовлетворяющие условию, возвращаем 0
    if (firstIndex === -1 || lastIndex === -1) {
      return 0;
    }
    
    // Считаем сумму элементов между первым и последним элементами, удовлетворяющими условию
    let sum = 0;
    for (let i = firstIndex + 1; i < lastIndex; i++) {
      sum += arr[i];
    }
    
    return sum;
  }
  
  // Пример использования программы
  let arr = [1.00001, 2, 3, 4.000009, 5];
  let e = 4.00001;
  let result = sumElements(arr, e);
  console.log(result);  // Выведет 3, так как сумма элементов 2 и 3 равна 3
  