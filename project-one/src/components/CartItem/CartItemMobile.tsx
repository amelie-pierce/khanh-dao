import { Delete } from "@/assets/icons";
import { currencyConverter } from "@/utils/common";
import { Text } from "../common";
import QuantityController from "../QuantityController/QuantityController";
import "./CartItemMobile.scss";

type TOwnProps = {};
const CartItem = (props: TOwnProps) => {
  const {} = props;
  return (
    <div className="cart-item-wrapper">
      <div className="cart-item__image">
        <img src="images/ferrero_2.png" />
      </div>
      <div className="cart-item__desc">
        <div className="cart-item__desc__main">
          <Text size="text-lg" fontWeight={600}>
            HERSHEY'S
          </Text>
          <Text
            className="cart-item__desc__pricing"
            size="title"
            fontWeight={600}
          >
            {currencyConverter(12)}
          </Text>
        </div>
        <div className="cart-item__controller">
          <QuantityController />
          <Delete size={24} />
        </div>
      </div>
    </div>
  );
};
export default CartItem;
