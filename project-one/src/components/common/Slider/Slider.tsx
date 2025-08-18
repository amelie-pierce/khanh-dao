import { currencyConverter } from "@/utils/common";
import { useState } from "react";
import Text from "../Text/Text";
import "./Slider.scss";

type TOwnProps = {};

const Slider = (props: TOwnProps) => {
  const {} = props;

  const [ranges, setRanges] = useState<{ min: number; max: number }>({
    min: 0,
    max: 20,
  });

  const onChangeRange = ({
    value,
    isMin,
  }: {
    value: number;
    isMin: boolean;
  }) => {
    setRanges((prev) => ({ ...prev, [isMin ? "min" : "max"]: value }));
    console.log("checking e", value, isMin);
  };

  return (
    <div className="slider-wrapper">
      <input
        type="range"
        value={ranges.min}
        className="slider"
        min={0}
        max={100}
        onChange={(e) =>
          onChangeRange({ value: Number(e.target.value), isMin: true })
        }
      />
      <input
        type="range"
        value={ranges.max}
        className="slider"
        min={0}
        max={100}
        style={{
          background: `linear-gradient(to right, #e9c4c1 ${ranges.min}% ${ranges.min}%, #792e29 ${ranges.min}% ${ranges.max}%, #e9c4c1 ${ranges.max}% 100%`, // Styling applied for the last slider as absolute attribute was taking order
        }}
        onChange={(e) =>
          onChangeRange({ value: Number(e.target.value), isMin: false })
        }
      />
      <div className="slider-track" style={{ left: ranges.min * 2.2 + "px" }}>
        <Text size="text-md" fontWeight={600}>
          {currencyConverter(ranges.min)}
        </Text>
      </div>
      <div
        className="slider-track slider-track--max"
        style={{ left: ranges.max * 2.2 + "px" }}
      >
        <Text size="text-md" fontWeight={600}>
          {currencyConverter(ranges.max)}
        </Text>
      </div>
    </div>
  );
};
export default Slider;
