import { useState, useRef, useEffect } from "react";

export default function ActionMenu({ itemId, onAccept, onReject }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Đóng popup khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef} >
      <button
        onClick={() => setOpen(!open)}
        className="border p-1 rounded hover:bg-gray-100"
        style={{position: 'relative'}}
      >
        <i class="bi bi-three-dots-vertical"></i>
      </button>

      {open && (
       <div className="right-0 mt-2 bg-white shadow-lg rounded border w-[220px] z-50" style={{position: 'absolute'}}>
          <div
            onClick={() => {
              setOpen(false);
              onAccept(itemId);
            }}
            className=" px-4 py-2 border-r hover:bg-green-100 items-center justify-center gap-2 text-green-600 font-medium"
            style={{border: 'none', fontSize:'10px', minWidth: '108px'}}
          >
            ✅ Chấp nhận
          </div>
          <div
            onClick={() => {
              setOpen(false);
              onReject(itemId);
            }}
            style={{border: 'none', fontSize:'10px', minWidth: '108px'}}
            className=" px-4 py-2 hover:bg-red-100 items-center justify-center gap-2 text-red-600 font-medium"
          >
            ❌ Từ chối
          </div>
        </div>
      )}
    </div>
  );
}