import React from 'react';

function ConfirmDialog({ show, title, message, onConfirm, onCancel, type = "success" }) {
  if (!show) return null;

  const colors = {
    success: "bg-green-500",
    danger: "bg-red-500",
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className={`text-xl font-bold mb-2 ${colors[type]} text-white px-4 py-1 rounded-lg`}>
          {title}
        </h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-lg text-white ${type === "danger" ? "bg-red-500" : "bg-green-500"} hover:brightness-110 transition`}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
