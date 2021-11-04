import AlgButton from "../AlgButton";
import ModeButton from "../ModeButton";
import CustomInput from "../CustomInput";
import styles from "./styles.module.scss";

export default function Menu() {
  return (
    <div className={styles.container}>
      <h1 className={styles.menuTitle}>Sudoku Solver</h1>
      <div className={styles.btnContainer}>
        <AlgButton />
        <ModeButton />
      </div>
      <CustomInput />
    </div>
  );
}
