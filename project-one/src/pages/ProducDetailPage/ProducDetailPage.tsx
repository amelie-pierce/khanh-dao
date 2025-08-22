import { ImageCarousel } from "@/components";
import { Button, Text } from "@/components/common";
import { ERoute } from "@/configs/router";
import { PRODUCTS } from "@/constants/data";
import { useCart, useToast } from "@/hooks";
import type { Product } from "@/types";
import { currencyConverter } from "@/utils/common";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./ProducDetailPage.scss";

type TOwnProps = {};
const ProductDetailsPage = (props: TOwnProps) => {
  const {} = props;
  const { id } = useParams<{ id: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const { addItem } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const product = PRODUCTS.find((p) => p.id === id);
    if (product) {
      setSelectedProduct(product);
    }
  }, []);

  if (!selectedProduct) {
    return <Text variant="h5">No product available</Text>;
  }

  const handleAddItem = () => {
    addItem(selectedProduct);
    showToast("Item added successfully", "success");
  };

  const buyNow = () => {
    addItem(selectedProduct);
    navigate("/" + ERoute.CHECKOUT);
  };

  return (
    <div className="detail__page">
      <div className="detail__page__main">
        <ImageCarousel images={selectedProduct.images} />
        <div className="detail__page__main__desc">
          <Text variant="h5">{selectedProduct.name}</Text>
          <Text variant="h5">{currencyConverter(selectedProduct.price)}</Text>
          <Text variant="p" size="text-lg">
            {selectedProduct.desc}
          </Text>
        </div>
      </div>
      <div className="detail__page__cta">
        <Button variant="secondary" onClick={handleAddItem}>
          Add to cart
        </Button>
        <Button onClick={buyNow}>Buy now</Button>
      </div>
    </div>
  );
};
export default ProductDetailsPage;
