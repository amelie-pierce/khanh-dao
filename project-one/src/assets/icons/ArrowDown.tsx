import type { TIcon } from "@/types";

const ArrowDown = (props: TIcon) => {
  const { width = 40, height = 40, color = "currentColor" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.35 13.825L20 21.4583L27.65 13.825L30 16.175L20 26.175L10 16.175L12.35 13.825Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown;
