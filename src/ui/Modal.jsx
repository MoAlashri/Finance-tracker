import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  return createPortal(
    // 1. الخلفية المظلمة (تغطي الشاشة بالكامل وتتوسط محتواها)
    <div 
      className="fixed inset-0 bg-red-100 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} 
    >
      {/* 2. صندوق الـ Modal نفسه */}
      <div 
        className="bg-white rounded-md w-64 h-32 p-4" // قمت بتعديل العرض ليكون منطقياً (w-64)
        onClick={(e) => e.stopPropagation()} // منع الإغلاق عند الضغط داخل الصندوق
      >
        {children}
      </div>
    </div>,
    document.body
  );
}