import { MinusOutlined, PlusOutlined } from "@/assets/icons";
import { IconButton, Text } from "../common";
import "./QuantityController.scss";

type TOwnProps = {};
const QuantityController = (props: TOwnProps) => {
  const {} = props;
  return (
    <div className="quantity-controller">
      <IconButton>
        <PlusOutlined size={24} />
      </IconButton>
      <Text size="title" fontWeight={600}>
        1
      </Text>
      <IconButton>
        <MinusOutlined size={24} />
      </IconButton>
    </div>
  );
};
export default QuantityController;
