import { useCallback, useState } from "react";

/**
 *
 * @description Custom hook that copies text to the clipboard using the `Clipboard API`.
 * 
 * 
 * @typedef {string | null} CopiedValue
 * @typedef {(text: string) => Promise<boolean>} CopyFunction
 * 
 * @returns {[CopiedValue, CopyFunction]}
 * 
 * @example
 * ```jsx
 * 
 * const [copiedText, copyFunction] = useCopyToClipboard()
 * 
 * const handleCopy = async () => {
 *      const copyStatus = await copyFunction("Hello, World!")
 *      if(copyStatus) console.log("Text copied successfully!")
 *      else console.log("Copy failed!")
 * }
 * 
 * <button onClick={handleCopy}>Copy Text</button>
 * ```
 */
export function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState(null);

  /**
   * @description Function that copies text to the clipboard.
   * @type {CopyFunction}
   */
  const copyFunction = useCallback(
    async (text) => {
      if (!navigator.clipboard) {
        // Clipboard API not available
        console.warn("Clipboard API not available");
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);

        return true;
      } catch (error) {
        console.warn("Copy to clipboard failed", error);
        setCopiedText(null);

        return false;
      }
    },
    []
  );

  return [copiedText, copyFunction];
}
