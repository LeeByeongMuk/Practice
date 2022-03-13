import SummaryPage from "./pages/SummaryPage/SummaryPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import {OrderContentProvider} from "./contexts/OrderContext";

function App() {
  return (
    <div style={{padding: '4rem'}}>
      <OrderContentProvider>
        <OrderPage/>
      </OrderContentProvider>
    </div>
  );
}

export default App;
