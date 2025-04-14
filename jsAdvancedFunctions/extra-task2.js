//  Імплементуйте функцію генератор fibonacciGenerator, 
// який повертає послідовні числа Фібоначчі.

function* fibonacciGenerator() {
    yield 0;
    yield 1;
    yield 1;
    yield 2;
    yield 3;
    yield 5;
    yield 8;
    yield 13;
    yield 21;
    yield 34;
  }
  
  const generator = fibonacciGenerator();
  
  for (let i=0; i<10; i++){
    console.log(generator.next().value); 
  }