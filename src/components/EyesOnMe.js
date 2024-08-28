import React from "react";

function EyesOnMe() {
  function focusButton(e) {
    console.log("Good!");
  }

  function blurButton(e) {
    console.log("Hey! Eyes on me!");
  }

  return (
    <button onFocus={focusButton} onBlur={blurButton}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
