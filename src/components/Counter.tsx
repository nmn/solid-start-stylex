// "use client";

import { createSignal } from "solid-js";
import * as stylex from "@stylexjs/stylex";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button {...stylex.props(styles.btn)} onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}

const styles = stylex.create({
  btn: {
    fontFamily: "inherit",
    fontSize: "inherit",
    paddingBlock: 16,
    paddingInline: 32,
    color: "#335d92",
    backgroundColor: {
      default: "rgba(68, 107, 158, 0.1)",
      ":hover": "rgba(68, 107, 158, 0.2)",
    },
    borderRadius: "100vw",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: {
      default: "rgba(68, 107, 158, 0)",
      ":focus-visible": "#335d92",
    },
    outline: "none",
    minWidth: "200px",
    fontVariantNumeric: "tabular-nums",
  },
});
