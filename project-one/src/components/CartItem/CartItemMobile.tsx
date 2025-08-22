import { Delete } from "@/assets/icons";
import { useCart } from "@/hooks";
import type { ItemCart } from "@/types";
import { currencyConverter } from "@/utils/common";
import { IconButton, Text } from "../common";
import QuantityController from "../QuantityController/QuantityController";
import "./CartItemMobile.scss";

const CartItemMobile = (item: ItemCart) => {
  const { id, name, price, images, quantity } = item;
  const { removeItem, onUpdateQuantity } = useCart();

  const handleUpdateQuantity = (isAdd: boolean) => {
    onUpdateQuantity(id, isAdd);
  };

  return (
    <div className="cart-item-wrapper">
      <div className="cart-item__image">
        <img src={images[0]} />
      </div>
      <div className="cart-item__desc">
        <div className="cart-item__desc__main">
          <Text size="text-lg" fontWeight={600}>
            {name}
          </Text>
          <Text
            className="cart-item__desc__pricing"
            size="title"
            fontWeight={600}
          >
            {currencyConverter(price)}
          </Text>
        </div>
        <div className="cart-item__controller">
          <QuantityController
            quantity={quantity}
            onChangeQuantity={handleUpdateQuantity}
          />
          <IconButton onClick={() => removeItem(id)}>
            <Delete size={24} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default CartItemMobile;
