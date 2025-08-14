import { DissasitifiedIcon } from "@/assets/icons";
import { Text } from "../common";
import "./NotAllowed.scss";

const NotAllowed = () => {
  return (
    <div className="error-component__wrapper">
      <DissasitifiedIcon size={50} />
      <Text variant="h5">{"Not allow to access this page"}</Text>
    </div>
  );
};

export default NotAllowed;
