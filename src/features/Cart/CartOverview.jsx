import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cardSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const TotalCartQuatity = useSelector(getTotalCartQuantity);
  const TotalCartPrice = useSelector(getTotalCartPrice);
  if (!TotalCartQuatity) return null
  return (
    <div className='bg-stone-800 text-stone-200 px-4 py-4  flex items-center justify-between ' >
      <p className='space-x-4 font-semibold text-stone-300  sm:space-x-6 flex items-center'>
        <span>{TotalCartQuatity} pizzas</span>
        <span>${formatCurrency(TotalCartPrice)}</span>
      </p>
      <a href="/Cart">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
