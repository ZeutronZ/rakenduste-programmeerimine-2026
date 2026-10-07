"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="interactive-control">
      <output className="count" aria-live="polite">{count}</output>
      <button className="button" onClick={() => setCount((value) => value + 1)}>
        Increase count
      </button>
    </div>
  );
}
