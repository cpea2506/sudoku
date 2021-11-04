import { useSelector } from "react-redux";
import { selectLoading } from "../../../redux/Loading/action";
import styles from "./styles.module.scss";

export default function LoadingScreen() {
  const loading = useSelector(selectLoading);

  return (
    <>
      {loading && (
        <div className={styles.overlay}>
          <div className={styles.notiContainer}>
            <p className={styles.loadingDescript}>
              Waiting is one of the happiest things...
            </p>
            <img
              className={styles.img}
              src="https://media.discordapp.net/attachments/759048085858287652/899579895221461022/RunLaugh.gif"
              alt="pepe run"
            />
          </div>
        </div>
      )}
    </>
  );
}
