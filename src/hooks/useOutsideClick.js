import { useEffect, useRef } from "react";

function UseOutsideClick(close, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) close();
      }
      document.addEventListener("click", handleClick, listenCapturing);
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [close, listenCapturing]
  );
  return ref;
}
export default UseOutsideClick;
