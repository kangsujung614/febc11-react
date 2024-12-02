import { memo, useCallback, useMemo, useState } from "react";
import Product from "./Product";
import Product2 from "./Product2";
import Shipping from "./Shipping";

function App() {
  // API 서버로부터 조회해온 데이터라고 가정
  const data = useMemo(() => ({
    _id: 2,
    price: 125000,
    shippingFees: 3000,
    name: '나이키 잼',
    quantity: 35,
    buyQuantity: 10,
    mainImage: "/files/00-nike/NIKE_JAM_01.jpg",
    content: '나이키가 세계적인 무대에 오르는 브레이크 댄서를 위해 제작한 첫 신발인 잼과 함께 몸과 마음, 정신을 하나로 만들어 보세요. 신발의 모든 디테일을 꼼꼼히 제작했기 때문에 자신 있게 사이퍼에 도전할 수 있습니다. 유연하고 내구성이 뛰어난 갑피가 몸을 따라 움직이며, 중창의 텍스처 처리된 핸드 그립 덕분에 공중에서 신발을 쉽게 잡을 수 있습니다. 그리고 위아래가 뒤집힌 로고를 배치해 프리즈 동작을 할 때 로고가 똑바로 보이는 재미를 더했죠.'
  }),[]);

  const [quantity, setQuantity] = useState(1);
  const [shippingFees, setShippingFees] = useState(data.shippingFees);

  const productPrice = data.price * quantity;

  // 수량이 변경될 때 이벤트 핸들러
  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);

    // 수량이 변경되면 배송비 다시 계산
    setShippingFees(data.shippingFees * Math.ceil(newQuantity / 5));
  }

  // const handlePayment = () => {
  //   alert(`상품을 결제하시겠습니까?`);
  // }

  const handlePayment = useCallback(() => {
    // 이 함수가 실행될 당시의 shippingFees 값을 가져온다. 클로저?
    alert(`배송비 ${shippingFees}원이 추가됩니다. 상품을 결제하시겠습니까?`);
  }, [shippingFees])

  return (
    <>
      <h1>06 useCallback(함수 자체를 memoize), React.memo(컴포넌트를 memoize)</h1>

      {/* Product 컴포넌트는 리렌더링 될 필요가 없음. → 불필요한 리렌더링 App 컴포넌트의 자식이기 때문에 리렌더링 됨 → Product 컴포넌트는 따로 메모이제이션 필요*/}
      {/* <Product productName={ data.name } productPrice={ data.price } productImg={ data.mainImage } productDiscription={data.content} /> */}
      <Product2 product={data} />

      <h2>수량 선택</h2>
      <div>
        가격: { data.price.toLocaleString() }원<br />
        수량: <input type="number" min="1" max={ data.quantity - data.buyQuantity } value={ quantity } onChange={ handleQuantityChange }/>
        (배송비는 5개당 { data.shippingFees.toLocaleString() }원씩 추가됩니다.)<br />
        상품 금액: { productPrice.toLocaleString() }원
      </div>

      {/* 상품 수량이 배송비에 영향을 줄 수도 있으므로 리렌더링 되도록 해야 함. */}
      <Shipping shippingFees= { shippingFees } handlePayment={ handlePayment } />
    </>
  )
}

export default App
