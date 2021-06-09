import React, { lazy, memo, Suspense } from "react";

const Landing = () => {
  const Home = lazy(() => import("./Home.js"));

  return (
    <div>
      <Suspense fallback={<div>Please wait...</div>}>
        <Home />
      </Suspense>
    </div>
  );
};

export default memo(Landing);
