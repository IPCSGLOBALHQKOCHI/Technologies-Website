import React from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
const Modal = ({ isOpen, onClose, type, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#000000] bg-[radial-gradient(100%_80%_at_0%_50%,#010741_0%,rgba(2,6,52,0)_100%)] p-10 rounded-lg shadow-lg w-96 transform transition-all scale-100 opacity-100">
        <div className="flex flex-col items-center">
          {type === "success" ? (
            <div className="text-[#FFFFFF] text-4xl"><TiTick className="w-8 h-12"/></div>
          ) : (
            <div className="text-[#FFFFFF] text-4xl"><RxCross2 className="w-8 h-10"/></div>
          )}
          <h2 className="text-xl font-semibold mt-2 text-[#FFFFFF]">
            {type === "success" ? "Received" : "Error!"}
          </h2>
          <p className="text-[#FFFFFF] text-center mt-2">{message}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="w-44 text-center mt-4 bg-[#003ad6] text-white py-2 rounded-lg "
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
