function sayHello(strings, ...values){
  let result= strings.join(',');
  values.forEach(e => {
    result = result.replace(',', `<strong>${e}</strong>`);
  });
  return result;
}

// => '안녕하세요. <strong>무지</strong>님. 오늘 날씨는 <strong>맑음</strong> 입니다.'
// sayHello('안녕하세요. 무지님. 오늘 날씨는 맑음 입니다.');
const result = sayHello(['안녕하세요.', '님. 오늘 날씨는', '입니다. 즐거운', ' 보내세요'],'수정', '맑음', '하루');
console.log(result);