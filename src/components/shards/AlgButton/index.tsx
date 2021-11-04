import styles from "./styles.module.scss";
import PlayButton from "../PlayButton";
import { useDispatch, useSelector } from "react-redux";
import { setBoard, selectBoard } from "../../../redux/Board/action";
import { setResetPrevNum } from "../../../redux/ResetPrevNum/action";
import { setLoading } from "../../../redux/Loading/action";
import { setError } from "../../../redux/Error/action";
import { getBackTrack, getAC3 } from "../../../api/getResult";

export default function AlgButton() {
  const dispatch = useDispatch();

  let board: string = useSelector(selectBoard); // board for alg click
  const handleAlgClick = async (func: (board: string) => Promise<string>) => {
    dispatch(setLoading(true));
    dispatch(setResetPrevNum(false));

    const data = await func(board).then((value) => {
      dispatch(setLoading(false));
      return value;
    });

    if (data.includes(".") || data === undefined) {
      dispatch(setError(true));
      return;
    }

    console.log("im am alg");
    dispatch(setBoard(data));
  };
  return (
    <div className={styles.algBtn}>
      <span className={styles.text}>Algorithm</span>
      <PlayButton name="AC-3" handleClick={() => handleAlgClick(getAC3)} />
      <PlayButton
        name="Backtracking"
        handleClick={() => handleAlgClick(getBackTrack)}
      />
    </div>
  );
}
