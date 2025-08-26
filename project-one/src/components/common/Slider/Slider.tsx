import "./Slider.scss";

type TOwnProps = {
  value: number;
  onChange: (arg: number) => void;
};

const Slider = (props: TOwnProps) => {
  const { value, onChange } = props;

  return (
    <input
      className="slider"
      type="range"
      value={value}
      onChange={(e) => {
        onChange(Number(e.target.value));
      }}
      style={{
        background: `linear-gradient(to right, #792e29 ${value}%, #e9c4c1 0%`, // Styling applied for the last slider as absolute attribute was taking order
      }}
    />
  );
};

export default Slider;
