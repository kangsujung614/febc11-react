// Array.prototype.forEach(callback): 배열의 각 요소에 대해 콜백함수를 실행
// 반환값은 없음

// 배열 요소 중 홀수의 합계 구하기
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = 0;

// array.forEach(e => {
//   if(e % 2 === 1){
//     result += e;
//   }
// })

array.forEach(e => result += (e % 2 === 1) ? e : 0);

console.log(result);