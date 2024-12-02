function sayHello(strings, ...values){
  console.log(strings);
  console.log(values);
  
}

// sayHello(평문 문자 배열, 강조 문자 배열)
// => 안녕하세요. 무지님. 오늘 날씨는 맑음 입니다.
const result = sayHello(['안녕하세요. ', '님. 오늘 날씨는 ', ' 입니다.'], '무지', '맑음');
// => 안녕하세요. <strong>무지</strong>님. 오늘 날씨는 <strong>맑음</strong> 입니다.
console.log(result);

const result2 = sayHello(['안녕하세요. ', '님. 오늘 날씨는 ', ' 입니다. 즐거운 ', ' 보내세요.'], '데이지', '흐림', '하루');
// => 안녕하세요. <strong>데이지</strong>님. 오늘 날씨는 <strong>흐림</strong> 입니다. 즐거운 <strong>하루</strong> 보내세요.
console.log(result2);