import { Delete } from "@/assets/icons";
import { currencyConverter } from "@/utils/common";
import { IconButton, Text } from "../common";
import QuantityController from "../QuantityController/QuantityController";
import "./CartItemDesktop.scss";

type TOwnProps = {};
const CartItemDesktop = (props: TOwnProps) => {
  const {} = props;
  return (
    <div className="cart-item">
      <div className="cart-item__section">
        <IconButton>
          <Delete size={32} />
        </IconButton>
        <div className="cart-item__image">
          <img src="images/ferrero_2.png" />
        </div>
        <Text size="title" fontWeight={800}>
          Product name
        </Text>
      </div>
      <div className="cart-item__section">
        <QuantityController />
        <Text size="title" fontWeight={800}>
          {currencyConverter(24)}
        </Text>
      </div>
    </div>
  );
};
export default CartItemDesktop;
