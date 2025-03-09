"use client";
import { ChangeEvent, useState, useEffect } from "react";
import Example from "./component/exampl-component/Example";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");

  const handleGuest = () => {
    setName("caglar");
    setSurname("bora");
    console.log("event done");
  };
  useEffect(() => {
    console.log(name);
  }, [name, surname]); //dept list bos ise 1 kere calisir "[] => dept list"

  return (
    <div className="form-wrapper">
      <Link href={"/about-us"}>About-US</Link>
      <div className="input-wrapper">
        {/* two way data binding */}
        <input
          placeholder="name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          placeholder="surname"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSurname(e.target.value);
          }}
          value={surname}
        />
        <div>{name}</div>
        <button onClick={handleGuest}>click me</button>
      </div>

      <Example
        name={name}
        surname={surname}
        onClick={(message: string) => alert(message)}
      />
    </div>
  );
}
