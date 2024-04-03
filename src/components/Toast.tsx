import { useState } from "react";
import ReactDOM from "react-dom/client";

interface ToastProps {
  children: any;
}
const Toast: React.FC<ToastProps> = ({ children }) => {
  return (
    <div className="absolute top-20 left-[50%] translate-x-[-50%] z-20 bg-red-500 rounded-3xl p-2 flex gap-x-2 items-center">
      <span className="bg-red-600 rounded-3xl text-white/65 text-sm font-bold p-2">
        FAILED
      </span>
      <span className="text-white">{children}</span>
    </div>
  );
};
export const useToast = () => {
  const [root, setRoot] = useState<any | null>();
  const [div, setDiv] = useState<any | null>();
  return {
    show: (msg: string) => {
      if (root) {
        return;
      }
      const div = document.createElement("div");
      setDiv(div);
      document.body.appendChild(div);
      const r = ReactDOM.createRoot(div);
      setRoot(r);
      r.render(<Toast>{msg}</Toast>);
    },
    close: () => {
      if (!root) {
        return;
      }
      root.unmount();
      document.body.removeChild(div);
      setRoot(null);
    },
  };
};
