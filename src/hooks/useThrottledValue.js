import { useState, useEffect, useRef } from "react";

export function useThrottledValue(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      const timeSinceLastExecution = Date.now() - lastExecuted.current;

      if (timeSinceLastExecution >= delay) {
        setThrottledValue(value);
        lastExecuted.current = Date.now();
      }
    }, delay - (Date.now() - lastExecuted.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
}