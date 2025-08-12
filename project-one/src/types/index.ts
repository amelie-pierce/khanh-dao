export type TIcon = {
  color?: string;
  width?: number;
  height?: number;
};

export type TMenuItemState = "default" | "active" | "disabled";
export interface IMenu {
  open: boolean;
  onClose: () => void;
  options: Array<{
    text: string;
    handler: () => void;
  }>;
}
