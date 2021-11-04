import PlayButton from "../PlayButton";
import { useDispatch } from "react-redux";
import { setBoard } from "../../../redux/Board/action";
import { setCustomBoard } from "../../../redux/CustomBoard/action";
import { setResetPrevNum } from "../../../redux/ResetPrevNum/action";
import styles from "./styles.module.scss";

export default function ModeButton() {
  const dispatch = useDispatch();

  const handleModeClick = async (mode: string) => {
    let board: string = "";
    switch (mode) {
      case "easy":
        board =
          ".2...194881.6.......4.276..17..9...33.........48.53.....61....2....74..6.5.9....7";
        break;
      case "hard":
        board =
          ".9.............46.2.......5.7.8.4.1..3..2....5...6.8...1.73..2.9.8.5.......2.....";
        break;
      default:
        dispatch(setCustomBoard(true));
        return;
    }

    dispatch(setResetPrevNum(true)); // set previous number to undefined for display
    dispatch(setBoard(board));
  };

  return (
    <div className={styles.modeBtn}>
      <span className={styles.text}>Mode</span>
      <PlayButton name="Easy" handleClick={() => handleModeClick("easy")} />
      <PlayButton name="Hard" handleClick={() => handleModeClick("hard")} />
      <PlayButton name="Custom" handleClick={() => handleModeClick("custom")} />
    </div>
  );
}
