import { ImageCarousel } from "@/components";
import { Button, Text } from "@/components/common";
import { ERoute } from "@/configs/router";
import { PRODUCTS } from "@/constants/data";
import { useCart, useScreenSize, useToast } from "@/hooks";
import type { Product } from "@/types";
import { currencyConverter } from "@/utils/common";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./ProducDetailPage.scss";

type TOwnProps = {};
const ProductDetailsPage = (props: TOwnProps) => {
  const {} = props;
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const { isMobile } = useScreenSize();

  const [selectedProduct, setSelectedProduct] = useState<Product>();

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

  const ProductTitle = ({ children }: { children?: string }) => {
    return isMobile ? (
      <Text size="title" fontWeight={800}>
        {children}
      </Text>
    ) : (
      <Text variant="h5">{children}</Text>
    );
  };

  return (
    <div className="detail__page">
      <div className="detail__page__main">
        <ImageCarousel images={selectedProduct.images} />
        <div className="detail__page__main__desc">
          <ProductTitle>{selectedProduct.name}</ProductTitle>
          <ProductTitle>
            {currencyConverter(selectedProduct.price)}
          </ProductTitle>
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
