"use client";
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [names, setNames] = useState<string>("");

  const handleName = () => {
    setNames("caglar");
    console.log("event done");
  };

  return (
    <div className="form-wrapper">
      <div className="input-wrapper">
        {/* two way data binding */}
        <input
          placeholder="name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setNames(e.target.value);
          }}
          value={names}
        />
        <div>{names}</div>
        <button onClick={handleName}>click me</button>
      </div>
    </div>
  );
}
