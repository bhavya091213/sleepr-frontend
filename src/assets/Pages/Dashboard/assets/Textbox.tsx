import { useState } from "react";

export const Textbox = () => {
  const [val, setVal] = useState("");

  const handleOnClick = () => {
    if (val === "") {
      console.log("no val");
      return;
    }
    setVal("");
    // TODO: store val in db
    console.log("stored val");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col w-full items-center justify-center gap-4 pt-4">
        <textarea
          className="w-[85%] min-h-[200px] border-2 rounded-3xl p-6 resize-none bg-quinary text-secondary"
          name="postContent"
          placeholder="What's on your mind?"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button
          className="bg-tertiary hover:bg-secondary hover:shadow-sm hover:shadow-secondary rounded-3xl px-6 py-3 font-bold text-darkest transition-all"
          onClick={handleOnClick}
        >
          submit
        </button>
      </div>
    </div>
  );
};
