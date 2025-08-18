import type { ReactNode } from "react";

export type Icon = {
  classes?: string;
  color?: string;
  size?: number;
};

export type TextSize = "title" | "text-lg" | "text-md" | "text-sm";
export type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5";
export type MenuItemState = "default" | "active" | "disabled";
export type ButtonVariant = "primary" | "secondary";

export interface Menu {
  open: boolean;
  onClose: () => void;
  options: string[];
  onSelectValue: (value: string) => void;
  disabledValues?: string[];
  selectedValue?: string;
}

export interface Text {
  children: ReactNode;
  size?: TextSize;
  variant?: TextVariant;
  className?: string;
  onClick?: () => void;
  fontWeight?: number;
  color?: string;
}

export interface SelectField {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export interface Checkbox {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  children?: ReactNode;
}

export interface Modal {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  className?: string;
  onTriggerModal?: (title: string) => void;
  onConfirm?: (cb: () => void) => void;
  onCancel?: (cb: () => void) => void;
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
