import { useEffect, useRef } from "react";

type TOwnProps = { children: React.ReactNode; onClickAway: () => void };

const ClickAwayListener = (props: TOwnProps) => {
  const { children, onClickAway } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        onClickAway();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClickAway]);

  return <div ref={ref}>{children}</div>;
};

export default ClickAwayListener;
