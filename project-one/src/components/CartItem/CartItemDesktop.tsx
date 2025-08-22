import { Delete } from "@/assets/icons";
import { useCart } from "@/hooks";
import type { ItemCart } from "@/types";
import { currencyConverter } from "@/utils/common";
import { IconButton, Text } from "../common";
import QuantityController from "../QuantityController/QuantityController";
import "./CartItemDesktop.scss";

const CartItemDesktop = (item: ItemCart) => {
  const { id, name, price, images, quantity } = item;
  const { removeItem, onUpdateQuantity } = useCart();

  const handleUpdateQuantity = (isAdd: boolean) => {
    onUpdateQuantity(id, isAdd);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__section">
        <IconButton onClick={() => removeItem(id)}>
          <Delete size={24} />
        </IconButton>
        <div className="cart-item__image">
          <img src={images[0]} />
        </div>
        <Text size="title" fontWeight={800}>
          {name}
        </Text>
      </div>
      <div className="cart-item__section">
        <QuantityController
          quantity={quantity}
          onChangeQuantity={handleUpdateQuantity}
        />
        <Text size="title" fontWeight={800}>
          {currencyConverter(price)}
        </Text>
      </div>
    </div>
  );
};
export default CartItemDesktop;
