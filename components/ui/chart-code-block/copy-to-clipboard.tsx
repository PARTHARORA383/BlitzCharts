import { useState } from "react";

export const CopyToClipboard = ({code ,position , width ,height}:{code : string , position ? : string , width ? : string , height ?: string}) => {
  const [isCopied, setIsCopied] = useState<true | false>(false)


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(!isCopied);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return <div>
    <div className={`absolute z-50 ${position ?? "top-4 right-8"}`}>
      <div className="relative inline-block group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className={` ${width  ?? "w-5 " } ${height ?? "h-5"} fill-current cursor-pointer
               ${isCopied ? "text-neutral-100" : "text-neutral-400 "}`}
          onClick={handleCopy}
        >
          <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z" />
        </svg>

        <div className="absolute top-8 -right-3 mb-2  px-6 py-1 rounded bg-neutral-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ">
          {isCopied ? "Copied!" : "Copy to clipboard"}
        </div>
      </div>
    </div>
  </div>
}