import PropTypes from "prop-types";
import { memo } from "react";

const Product2 = memo(function Product2( {product: { name, price, mainImage, content }}){
  console.log('Product 렌더링'); // 처음 한 번만 호출되고 리렌더링시 함수를 호출한 결과로 리렌더링 하지 않음. 부모 컴포넌트(App)는 메모이제이션 된 결과로 리렌더링 함
  return(
    <>
      <h2>상품 설명</h2>
      <p>상품명: { name }</p>
      <p>가격: { price.toLocaleString() }원</p>
      <p>상품 설명</p>
      <div>
        <img src={`https://11.fesp.shop/${mainImage}`} width="600" />
        <p>{ content }</p>
      </div>
    </>
  );
});

Product2.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mainImage: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}

export default Product2;