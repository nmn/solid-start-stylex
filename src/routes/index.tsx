import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import * as stylex from "@stylexjs/stylex";

export default function Home() {
  return (
    <main {...stylex.attrs(s.main)}>
      <Title>Hello World</Title>
      <h1 {...stylex.attrs(s.h1)}>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}

const s = stylex.create({
  main: {
    textAlign: "center",
    padding: 16,
    marginBlock: 0,
    marginInline: "auto",
  },
  h1: {
    color: "#335d92",
    textTransform: "uppercase",
    fontSize: "4rem",
    fontWeight: 100,
    lineHeight: 1.1,
    margin: "4rem auto",
    maxWidth: {
      default: null,
      "@media (max-width: 480px)": "14rem",
    },
  },
});
