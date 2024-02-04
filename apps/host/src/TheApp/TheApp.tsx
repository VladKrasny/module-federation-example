import { useState, Suspense, lazy } from "react";
import { TheButton } from "@mfe/shared-ui";
import { ErrorBoundary } from "react-error-boundary";

const TheRemoteApp = lazy(() => import("remoteApp/TheApp"));

export function TheApp() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <h1>Host</h1>

      <TheButton onClick={increment}>Host count is {count}</TheButton>

      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading Remote App...</div>}>
          <TheRemoteApp />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
