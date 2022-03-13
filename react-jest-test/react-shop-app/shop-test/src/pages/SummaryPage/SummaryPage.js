import {useContext, useState} from "react";
import {OrderContext} from "../../contexts/OrderContext";

export default function SummaryPage({setStep}) {
  const [checked, setChecked] = useState(false);
  const [orderData] = useContext(OrderContext)

  const productArr = Array.from(orderData.products);
  const productList = productArr.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const hasOptions = orderData.options.size > 0;
  let optionsRender = null;
  if (hasOptions) {
    const optionsArr = Array.from(orderData.options.keys());
    const optionList = optionsArr.map(key => <li key={key}>{key}</li>);
    optionsRender = (
      <>
        <h2>옵션: {orderData.totals.options}</h2>
        <ul>{optionList}</ul>
      </>
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(2);
  }

  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품: {orderData.totals.products}</h2>
      <ul>{productList}</ul>
      {optionsRender}
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          id="confirm-checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br/>
        <button
          type="submit"
          disabled={!checked}
        >
          주문 확인
        </button>
      </form>
    </div>
  )
}