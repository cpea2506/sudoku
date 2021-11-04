import { MouseEventHandler } from "react";
import styles from "./styles.module.scss";

interface PlayButtonProps {
  handleClick: MouseEventHandler;
  name: string;
}

export default function PlayButton({ handleClick, name }: PlayButtonProps) {
  return (
    <div className={styles.button} onClick={handleClick}>
      {name}
    </div>
  );
}
