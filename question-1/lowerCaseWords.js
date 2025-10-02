function lowerCaseWords(inputArray) {
  return new Promise((resolve, reject) => 
    {
    if (!Array.isArray(inputArray)) {
      reject(new Error('Please provide a valid array.'));
      return;
    }

    const result = [];
    for (const item of inputArray) 
        {
      if (typeof item === 'string') 
        {
        result.push(item.toLowerCase());
      }
    }

    if (result.length === 0) 
        {
      reject(new Error('Something went wrong.'));
      return;
    }
    resolve(result);
  });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then(words => {
    console.log('Lowercased Words Are:', words);
  })
  .catch(err => {
    console.error('Error:', err.message);
  });