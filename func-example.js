// 1. 함수 선언문 (Function Declaration)
// 가장 기본적인 함수 정의 방법.
// 호이스팅이 적용되어 함수 선언 이전에도 호출 가능
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Hello, Alice!

// 2. 함수 표현식 (Function Expression)
// 함수를 변수에 할당하는 방식.
// 호이스팅되지 않으므로 함수 정의 이후에만 호출 가능.
const greet = function(name) {
  return `Hi, ${name}!`;
};

console.log(greet('Bob')); // Hi, Bob!




// 3. 화살표 함수 (Arrow Function)
// 간결한 문법으로 함수 표현식 대체 가능.
// this 바인딩이 고정되어 일반 함수와 차이가 있음.
const add = (a, b) => a + b;

console.log(add(3, 5)); // 8

const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet('Charlie')); // Hello, Charlie!


// 4. 즉시 실행 함수 표현식 (IIFE, Immediately Invoked Function Expression)
// 정의와 동시에 실행되는 함수.
// 주로 초기화 코드에 사용.
(function() {
  console.log('This runs immediately!');
})(); // This runs immediately!

(() => {
  console.log('Arrow function IIFE');
})(); // Arrow function IIFE

// 5. 생성자 함수 (Function Constructor)
// Function 생성자를 사용해 동적으로 함수 생성.
// 잘 사용되지 않음. 동적 코드 실행 위험 때문에 권장되지 않음.
const multiply = new Function('a', 'b', 'return a * b');
console.log(multiply(2, 3)); // 6

// 6. 메서드 (Object Method)
// 객체의 속성으로 정의된 함수.
// 객체 내에서 호출 시 **this**는 해당 객체를 참조.
const user = {
  name: 'David',
  greet() {
    return `Hello, ${this.name}!`;
  },
};
console.log(user.greet()); // Hello, David!

// 7. 클래스 메서드 (Class Method)
// 클래스 내에서 정의된 함수.
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi, I'm ${this.name}!`;
  }
}
const person = new Person('Eve');
console.log(person.greet()); // Hi, I'm Eve!

// 8. 제너레이터 함수 (Generator Function)
// function* 키워드로 정의.
// yield 키워드를 사용해 값을 순차적으로 생성.
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = generateNumbers();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

// 9. Async 함수 (Async Function)
// async 키워드로 정의.
// 항상 **Promise**를 반환하며, await로 비동기 코드 작성 가능.
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data);
}
fetchData();
