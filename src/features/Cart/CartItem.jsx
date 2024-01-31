import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuality from "./UpdateItemQuality";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const  currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between sm:gap-6">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between item-center">
        <p className="text-sm font-bold sm:px-2" >{formatCurrency(totalPrice)}</p>
        <UpdateItemQuality pizzaId={pizzaId} currentQuantity={currentQuantity}/>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
