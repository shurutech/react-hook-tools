import { useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

/**
 * @description Custom hook that handles timeouts in React components using the setTimeout API.
 * 
 * 
 * @param {() => void} callback The function to be executed when the timeout elapses.
 * @param {number | null} delay The duration (in milliseconds) for the timeout. Set to null to clear the timeout.
 *
 * @returns {void} This hook does not return anything.
 * 
 * @example
 * ```jsx
 * const [visible, setVisible] = useState(true)
 * const hide = () => {
 *  setVisible(false)
 * }
 * useTimeout(hide, 5000)
 * ```
 */
export function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]); 

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay]);
}
