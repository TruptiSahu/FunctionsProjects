const sayHello = (name = 'Lipun') => {
  console.log('Hi ' + name);
};

const sayHello1 = (greet, name) => console.log(`${greet}, ${name}`);

const sayHello2 = () => console.log('Hello, Trupti');

const sayHello3 = (name) => `;) ${name}`;

sayHello('Trupti');
sayHello();
sayHello1('Good Morning', 'Trupti');
sayHello2();
console.log(sayHello3('Trupti'));

const checkInput = (myCallBackFun, ...strs) => {
  for (const str of strs) {
    myCallBackFun(str);
  }
};

const shoutOutName = (name) => {
  console.log(name);
};

checkInput(shoutOutName, 'Trupti', 'Varun', 'Adi');
