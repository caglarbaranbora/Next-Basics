"use client";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");

  const handleName = () => {
    setName("caglar");
    console.log("event done");
  };

  return (
    <div className="form-wrapper">
      <div className="input-wrapper">
        {/* two way data binding */}
        <input
          placeholder="name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <div>{name}</div>
        <button onClick={handleName}>click me</button>
      </div>
    </div>
  );
}
