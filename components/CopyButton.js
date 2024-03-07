import { CopyIcon } from "@/Icon/Icon.js";
import { useEffect, useState } from "react";

export default function CopyButton(props) {
  const [tooltipShown, setTooltipShown] = useState(false);

  useEffect(() => {
    if (tooltipShown) {
      const timeout = setTimeout(() => setTooltipShown(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [tooltipShown]);

  return (
    <>
      <button className=' w-6 h-6 text-green-400 '
        onClick={() => {
          if (navigator.clipboard) navigator.clipboard.writeText(props.text);
          setTooltipShown(true);
        }}
      >
        <CopyIcon />
      </button>

      <div
  className={`absolute z-10 bg-gray-900 text-white rounded p-2 text-xs transition-all ease-in-out translate-x-60 shadow-sm shadow-gray-500 ${
    tooltipShown ? "translate-y-6" : "translate-y-10 opacity-0"
  }`}
>
        Copied!
      </div>
    </>
  );
}