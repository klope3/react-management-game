import { ReactNode } from "react";
import "./Modal.css";

type ModalProps = {
  children: ReactNode;
  xButtonFunction?: () => void;
};

export function Modal({ children, xButtonFunction }: ModalProps) {
  return (
    <div className="modal-bg">
      <div className="modal">
        {children}
        {xButtonFunction && (
          <button onClick={xButtonFunction} className="modal-x">
            X
          </button>
        )}
      </div>
    </div>
  );
}
