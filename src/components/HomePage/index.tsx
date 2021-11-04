import Board from "../shards/Board";
import Menu from "../shards/Menu";
import Loading from "../shards/Loading";
import Error from "../shards/Error";
import styles from "./styles.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Menu />
      <Board />
      <Error />
      <Loading />
    </main>
  );
}
