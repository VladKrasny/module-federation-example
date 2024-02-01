import { useState } from "react";
import { TheButton } from "@mfe/shared-ui";

export function TheApp() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <h1>Remote</h1>

      <TheButton onClick={increment}>Remote count is {count}</TheButton>
    </>
  );
}
