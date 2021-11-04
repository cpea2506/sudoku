import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectResetPrevNum } from "../../../redux/ResetPrevNum/action";
import styles from "./styles.module.scss";

function isNumeric(number: string) {
  return /\d/.test(number);
}

// custom hook for previous and current value comparision
function usePrevious(value: any, reset: boolean) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return reset ? undefined : ref.current;
}

type CellProps = {
  number: string;
  style: {
    borderTop?: string;
    borderLeft?: string;
    color: string;
  };
};

export default function Cell({ number, style }: CellProps) {
  const reset = useSelector(selectResetPrevNum);
  const prevNum = usePrevious(number, reset);

  // This is because props are read-only
  const newStyle = { ...style };

  // highlight solution
  if (prevNum !== undefined && prevNum !== number) {
    newStyle.color = "#f00";
  }

  return (
    <div className={styles.cell} style={newStyle}>
      {isNumeric(number) ? number : ""}
    </div>
  );
}
