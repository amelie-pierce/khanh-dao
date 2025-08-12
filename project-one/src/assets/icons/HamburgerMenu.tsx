import type { TIcon } from "@/types";

const HamburgerMenu = (props: TIcon) => {
  const { width = 40, height = 40, color = "currentColor" } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 30H35V26.6667H5V30ZM5 21.6667H35V18.3333H5V21.6667ZM5 10V13.3333H35V10H5Z"
        fill={color}
      />
    </svg>
  );
};
export default HamburgerMenu;
