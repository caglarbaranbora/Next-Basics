"use client";
import { ChangeEvent, useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");

  const handleName = () => {
    setName("caglar");
    console.log(name);
    console.log("event done");
  };

  useEffect(() => {
    console.log(name);
  }, [name]); //dept list bos ise 1 kere calisir "[] => dept list"

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
