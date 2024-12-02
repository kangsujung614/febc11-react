import PropTypes from "prop-types";
import { memo } from "react";

const Product = memo(function Product({ productName, productPrice, productImg, productDiscription }){
  console.log('Product 렌더링'); // 처음 한 번만 호출되고 리렌더링시 함수를 호출한 결과로 리렌더링 하지 않음. 부모 컴포넌트(App)는 메모이제이션 된 결과로 리렌더링 함
  return(
    <>
      <h2>상품 설명</h2>
      <p>상품명: { productName }</p>
      <p>가격: { productPrice.toLocaleString() }원</p>
      <p>상품 설명</p>
      <div>
        <img src={`https://11.fesp.shop/${productImg}`} width="600" />
        <p>{ productDiscription }</p>
      </div>
    </>
  );
});

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productImg: PropTypes.string.isRequired,
  productDiscription: PropTypes.string.isRequired,
}

export default Product;