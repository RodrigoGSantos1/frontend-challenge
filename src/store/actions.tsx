import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem, toggleOverview, decrementQuantity, incrementQuantity } from "./functions/cartSlice";
import { CartItem } from "@/@types/Product";
import { RootState } from ".";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const handleAddItem = (props: CartItem) => dispatch(addItem(props));
  const handleRemoveItem = (props: number) => dispatch(removeItem(props));
  const handleClearCart = () => dispatch(clearCart());
  const handleToggleOverview = () => dispatch(toggleOverview());
  const handleIncrementQuantity = (id: number) => dispatch(incrementQuantity(id))
  const handleDecrementQuantity= (id: number) => dispatch(decrementQuantity(id))
  const isOverviewVisible = useSelector((state: RootState) => state.cart.isOverviewVisible)
  const cartItems = useSelector((state: RootState) => state.cart.items);



  return { handleAddItem, handleRemoveItem, handleClearCart, handleToggleOverview, handleIncrementQuantity, handleDecrementQuantity, cartItems, isOverviewVisible };
};