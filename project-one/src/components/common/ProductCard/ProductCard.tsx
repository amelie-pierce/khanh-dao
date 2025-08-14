import { currencyConverter } from "@/utils/common";
import Text from "../Text/Text";
import "./ProductCard.scss";

type TOwnProps = {
  name: string;
  price: number;
};

const ProductCard = (props: TOwnProps) => {
  const { name, price } = props;
  return (
    <div className="product-card">
      <img src="/images/ferrero.png" />

      <div className="product-card__desc">
        <Text size="text-lg" fontWeight={600}>
          {name}
        </Text>
        <br />
        <Text className="product-card__price" size="title" fontWeight={800}>
          {currencyConverter(price)}
        </Text>
      </div>
    </div>
  );
};
export default ProductCard;
