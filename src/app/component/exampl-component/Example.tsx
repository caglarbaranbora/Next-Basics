"use client";

import { useEffect } from "react";

// type securty with interface usage
interface ExampleProps {
  name: string;
  surname: string;
  onClick?: (message: string) => void;
}

export default function Example(props: ExampleProps) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      Hello, {props.name} {props.surname}
      <button
        onClick={() =>
          props.onClick
            ? props.onClick(`Hello ${(props.name, props.surname)}`)
            : null
        }
      >
        say hi
      </button>
    </div>
  );
}
