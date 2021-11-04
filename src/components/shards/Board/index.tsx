import Cell from "../Cell";
import { useSelector } from "react-redux";
import { selectBoard } from "../../../redux/Board/action";
import styles from "./styles.module.scss";

export default function Board() {
  const board = useSelector(selectBoard);

  return (
    <section className={styles.board}>
      {Array.from(board).map((el, i) => {
        const gridStyle: any = {
          color: "#000",
        };

        if (i % 3 === 0 && i % 9 !== 0) {
          gridStyle["borderLeft"] = "4px inset #000";
        }

        if (i % 27 >= 0 && i % 27 < 9 && i > 8) {
          gridStyle["borderTop"] = "4px inset #000";
        }

        if (el === ".") {
          gridStyle.color = "#f00";
        }

        return <Cell key={i} number={el} style={gridStyle} />;
      })}
    </section>
  );
}
