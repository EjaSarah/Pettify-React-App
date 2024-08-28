import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // This ref will hold the div element that will be appended to the modal root
  const elRef = useRef(null);

  if (!elRef.current) {
    // Create a new div element if it hasn't been created yet
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // Cleanup: remove the div element from the modal root when the component unmounts
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  // Use createPortal to render children into the div element in the modal root
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
