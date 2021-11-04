import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, selectError } from "../../../redux/Error/action";
import styles from "./styles.module.scss";

export default function ErrorNoti() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleExit = useCallback(() => {
    dispatch(setError(false));
  }, [dispatch]);

  return (
    <>
      {error && (
        <div className={styles.overlay}>
          <div className={styles.notiContainer}>
            <p className={styles.errorDescript}>
              <img
                alt="sleep pepe"
                src="https://cdn.discordapp.com/emojis/896721132584071208.png?size=240"
                className={styles.img}
              />
              This board cannot be solved by this algorithm!
            </p>
          </div>
          <div className={styles.exitButton} onClick={handleExit}>
            Ok!
          </div>
        </div>
      )}
    </>
  );
}
