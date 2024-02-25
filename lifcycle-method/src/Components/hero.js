import React from "react";

function hero({ heroname }) {
  if (heroname === "Joker") {
    throw new Error("Not a hero!");
  }
  return <div>{heroname}</div>
}

export default hero;
