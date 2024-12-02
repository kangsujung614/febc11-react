var arr = [10, 20, 30];

// 각 요소의 제곱값으로 구성된 새로운 배열 생성
// var arr2 = [100, 400, 900];

// for
var arr2 = [];
for(i=0; i<arr.length; i++){
  arr2.push(arr[i] * arr[i]);
}

// for of(ES6)
var arr2 = [];
for (let i of arr){
  arr2.push(i*i);
}

// forEach(), ES5
var arr2 = [];
arr.forEach(function(e){
  arr2.push(e * e);
});

// map(), ES6
var arr2 = [];
arr2 = arr.map(function(e){
  return e * e;
});

// Arrow function, ES6
var arr2 = [];
arr.forEach(e => arr2.push(e*e));

var arr2 = [];
arr2 = arr.map(e => e*e);

console.log(arr2);  // [100, 400, 900]