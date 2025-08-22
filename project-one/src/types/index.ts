import type { ReactNode } from "react";

export type Icon = {
  classes?: string;
  color?: string;
  size?: number;
};

export type TextSize = "title" | "text-lg" | "text-md" | "text-sm";
export type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "p";
export type MenuItemState = "default" | "active" | "disabled";
export type ButtonVariant = "primary" | "secondary";
export type MenuItem = {
  value: string | number;
  label: string;
};

export interface Menu {
  open: boolean;
  onClose: () => void;
  options: MenuItem[];
  onSelectValue: (value: string | number) => void;
  disabledValues?: string[];
  selectedValue?: string;
}

export interface Text {
  children: ReactNode;
  size?: TextSize;
  variant?: TextVariant;
  color?: string;
  className?: string;
  fontWeight?: number;
  align?: "left" | "center" | "right";
  onClick?: () => void;
}

export interface SelectField {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export interface Checkbox {
  checked?: boolean;
  onChange: () => void;
  disabled?: boolean;
  label?: string;
  children?: ReactNode;
}

export interface Modal {
  open: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  children?: ReactNode;
  className?: string;
  onTriggerModal?: (title: string, content: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export type ToastType = "success" | "error" | "info";

export interface Toast {
  message: string;
  type: ToastType;
  duration?: number; // in milliseconds
  showToast: (message: string, type: ToastType, duration?: number) => void;
}

export interface FlexBox {
  children?: ReactNode;
}

export interface Drawer {
  open: boolean;
  onClose: () => void;
  onTriggerDrawer?: () => void;
  children?: ReactNode;
}

export type UserInfo = {
  name: string;
  email: string;
};

export interface User {
  info?: UserInfo;
  setInfo: (arg: UserInfo) => void;
}

export type ChocolateFlavor = "milk" | "dark" | "mixed";
export interface Product {
  name: string;
  id: string;
  price: number;
  images: string[];
  desc: string;
  flavor?: ChocolateFlavor;
}

export type CustomSearchParams = {
  page?: number;
  limit?: number;
  min?: number;
  max?: number;
  total?: number;
  flavor?: string;
};

export type LimitState = {
  expanded: boolean;
  selected: number;
};

export type RangeParams = { min: number; max: number };

export type FilterParams = {
  flavor: ChocolateFlavor[];
  ranges: RangeParams;
};

export type ItemCart = Product & {
  quantity: number;
};

export interface Cart {
  items: {
    [key in string]: ItemCart;
  };
  totalPrice: number;
  completed?: boolean;

  addItem: (item: Product, isBuyNow?: boolean) => void;
  removeItem: (itemId: string) => void;
  proceedOrder: () => void;
  onUpdateQuantity: (itemId: string, isAdd: boolean) => void;
}
