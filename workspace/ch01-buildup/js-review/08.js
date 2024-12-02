// 지정한 수가 소수인지 여부를 반환
var isPrime = function(num){
  console.time('소요 시간');
  console.log('소수 판별 시작.', num);

  // TODO: 소수 판별 코드
  let prime = num > 1; // 1은 소수가 아님

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  console.log('소수 판별 결과.', prime);
  console.timeEnd('소요 시간');
  return prime;
};

// var isPrime = function(num){
//   // 캐시를 위한 코드
//   isPrime._cache = isPrime._cache || {};
//   if(isPrime._cache[num] !== undefined){ // 캐시 되어있음(cache hit)
//     console.log('cache hit!', num, isPrime._cache[num]);
//     return isPrime._cache[num];
//   } else {
//     // 소수 판별 함수 
//     return isPrime._cache[num] = isPrime2(num);
//   }
// };

// 지정한 함수에 memoization 기능 추가
// fn에 어떤 함수가 올지는 모름. 순수함수면 가능
// 위 코드처럼 하드코딩하지 않고 범용적인 함수로 만들어 사용
function memo(fn){
  return function(args){
    fn._cache = fn._cache || {};
    if(fn._cache[args] !== undefined){ // 캐시 되어있음(cache hit)
      console.log('cache hit!', args, fn._cache[args]);
      return fn._cache[args];
    } else {
      return fn._cache[args] = fn(args);
    }
  };
}

var isPrime = memo(isPrime); // memoization 기능 추가

isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(8);
isPrime(9);
isPrime(1000000007);
isPrime(1000000007);
isPrime(1000000007);
