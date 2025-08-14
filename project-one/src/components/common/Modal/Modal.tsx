import type { Modal as ModalProps } from "@/types";
import Button from "../Button/Button";
import ClickAwayListener from "../ClickawayListener/ClickawayListener";
import Text from "../Text/Text";
import "./Modal.scss";

const Modal = (props: ModalProps) => {
  const { open } = props;

  if (!open) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={props.onClose}>
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal__header">
            <Text size="title">{props.title}</Text>
          </div>
          <div className="modal__body">{props.children}</div>
          <div className="modal__footer">
            <Button variant="secondary">
              <Text size="text-lg">Cancel</Text>
            </Button>
            <Button>
              <Text size="text-lg">OK</Text>
            </Button>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Modal;
