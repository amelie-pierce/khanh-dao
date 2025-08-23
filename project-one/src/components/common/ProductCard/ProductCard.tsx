import { currencyConverter } from "@/utils/common";
import { useNavigate } from "react-router";
import Text from "../Text/Text";
import "./ProductCard.scss";

type TOwnProps = {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
};

const ProductCard = (props: TOwnProps) => {
  const { name, price, imageSrc, id } = props;
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`/listing/${id}`)}>
      <img src={imageSrc} alt={`${name}-image`} />

      <div className="product-card__desc">
        <Text className="truncated" size="text-lg" fontWeight={600}>
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
