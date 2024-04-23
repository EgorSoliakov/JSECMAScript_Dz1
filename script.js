"use strict";
/*
1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
найти минимальное число в массиве, решение задание должно состоять из одной строки
*/
const numMin = (arr) => Math.min(...arr);

console.log(numMin([4, 5, 7, 9]));
/*
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект 
с двумя методами: increment и decrement. Метод increment должен увеличивать значение 
счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. 
Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/
function createCounter () {
    return {
        counter: 0,
        increment(){
            return (this.counter += 1);
        },
        decrement(){
            return (this.counter -= 1);
        }
    };
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());
/*
3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и 
название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
*/

function findElementByClass(rootElement, className) {
    if (rootElement === null) {
        return null;
    }

    if (rootElement.classList.contains(className)) {
        return rootElement;
    }
    
    for (let child of rootElement.children) {
        const foundElement = findElementByClass(child, className);
        if (foundElement !== null) {
            return foundElement;
        }
    }
    
    return null;
}

const rootElement = document.getElementById('root');
console.log(rootElement);
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);


