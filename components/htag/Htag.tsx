import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.scss";

function Htag({ tag, children }: HtagProps): JSX.Element {
  switch (tag) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      <h2>{children}</h2>;
    case "h3":
      <h3>{children}</h3>;
    default:
      return <></>;
  }
}

export default Htag;
