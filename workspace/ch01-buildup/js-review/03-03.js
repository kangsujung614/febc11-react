var score = [ 100, 90, 80 ];

// 배열 전개 연산자
var newScore = [ ...score, 70 ];

console.log(score, newScore);
console.log(score === newScore);