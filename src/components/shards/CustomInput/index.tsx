import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBoard } from "../../../redux/Board/action";
import { setResetPrevNum } from "../../../redux/ResetPrevNum/action";
import {
  setCustomBoard,
  selectCustomBoard,
} from "../../../redux/CustomBoard/action";
import styles from "./styles.module.scss";

export default function CustomBoard() {
  const dispatch = useDispatch();
  const [initBoard, setInitBoard] = useState(
    Array.from({ length: 81 }, () => ".").join("")
  );

  const customBoard: boolean = useSelector(selectCustomBoard);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    console.log(value);
    if (value !== null) {
      setInitBoard(value);
    }
  };

  const handleOk = () => {
    if (
      initBoard.length === 81 &&
      !Array.from(initBoard).some((e: string) => e !== "." && !/\d/.test(e))
    ) {
      dispatch(setBoard(initBoard));
      dispatch(setCustomBoard(false));
    }

    dispatch(setResetPrevNum(true));
  };

  return (
    <>
      {customBoard && (
        <form>
          <input
            onChange={handleChange}
            type="text"
            className={styles.valueInput}
            value={initBoard}
            pattern="[(\.*\d*)]{81}"
            title="Only accept dot as empty or number. Length must be 81 long"
          />
          <input
            type="submit"
            className={styles.okButton}
            onClick={handleOk}
            value="Ok"
          />
        </form>
      )}
    </>
  );
}
