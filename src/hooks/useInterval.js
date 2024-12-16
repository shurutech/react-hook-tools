import { useEffect, useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * @description Custom hook that creates an interval that invokes a callback function at a specified delay using the `setInterval` API.
 * 
 * 
 * @param {() => void} callback The function to be invoked at each interval.
 * @param {number | null} delay The time, in milliseconds, between each invocation of the callback. Use null to clear the interval.
 *
 * @returns {void} This hook does not return anything.
 * 
 * @example
 * ```jsx
 * const [count, setCount] = useState(0)
 * const counter = () => {
 *  setCount(x => x + 1)
 * }
 * // Increment the count every 2 seconds
 * useInterval(counter, 2000)
 * ```
 */
export function useInterval(callback, delay) {
  const savedCallback = useRef(callback)

    // Remember the latest callback if it changes.
    useIsomorphicLayoutEffect(() => {
      savedCallback.current = callback;
    }, [callback]); 

  useEffect(() => {
    if (delay === null) {
      return
    }

    const id = setInterval(() => {
      savedCallback.current()
    }, delay)

    return () => {
      clearInterval(id)
    }
  }, [delay])
}