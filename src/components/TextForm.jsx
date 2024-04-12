import React, { useState } from "react";

function TextForm(props) {
  const [mystyle, setMyStyle] = useState({});

  const handleClick = (e) => {
    console.log("uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    console.log("on change");
    setText(e.target.value);
  };

  const flipText = () => {
    const flipTable = {
      a: "ɐ",
      b: "q",
      c: "ɔ",
      d: "p",
      e: "ǝ",
      f: "ɟ",
      g: "ƃ",
      h: "ɥ",
      i: "ᴉ",
      j: "ɾ",
      k: "ʞ",
      l: "l",
      m: "ɯ",
      n: "u",
      o: "o",
      p: "d",
      q: "b",
      r: "ɹ",
      s: "s",
      t: "ʇ",
      u: "n",
      v: "ʌ",
      w: "ʍ",
      x: "x",
      y: "ʎ",
      z: "z",
      A: "∀",
      B: "𐐒",
      C: "Ↄ",
      D: "ᗡ",
      E: "Ǝ",
      F: "Ⅎ",
      G: "⅁",
      H: "H",
      I: "I",
      J: "ſ",
      K: "ʞ",
      L: "˥",
      M: "W",
      N: "N",
      O: "O",
      P: "Ԁ",
      Q: "Ό",
      R: "ᴚ",
      S: "S",
      T: "⊥",
      U: "∩",
      V: "Λ",
      W: "M",
      X: "X",
      Y: "⅄",
      Z: "Z",
      " ": " ",
    };

    const flippedText = text
      .split("")
      .map((char) => flipTable[char] || char)
      .reverse()
      .join("");

    setText(flippedText);
  };

  const clearText = () => {
    setText("");
  };

  const copyText = () => {
    var text = document.getElementById("mybox");
    text.select();
    // console.log(text);
    // console.log(text.value)
    navigator.clipboard.writeText(text.value);
  };


  const [text, setText] = useState("Enter your text here");

  return (
    <div className={`container flex flex-col items-center text-${props.modde==="light"?"black":"white"} `}>
      <div className="p-8">
        <h1 className="text-3xl mb-2  ">Enter your text below</h1>

        <textarea
          className={`form-control border border-blue-600  w-full md:w-96 h-32 md:h-48 lg:w-[900px] sm:w-[400px] bg-${props.modde==="light"?"white":"black"} text-${props.modde==="light"?"black":"white"} `}
          id="mybox"
          value={text}
          onChange={handleOnChange}
          // rows="12"
          // cols="90"
        ></textarea>

        <div className={`flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 max-w-fit md:flex-wrap text-${props.modde==="light"?"black":"white"}`}>
          <button
            type="button"
            onClick={handleClick}
            className={`rounded-md  bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:outline outline-2  `}
          >
            Convert to Upper Case
          </button>

          <button
            type="button"
            onClick={() => {
              console.log("lowercase clicked");
              let newText = text.toLowerCase();
              setText(newText);
            }}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:outline outline-2"
          >
            Convert to lower Case
          </button>

          <button
            type="button"
            onClick={flipText}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:outline outline-2"
          >
            Convert to Upside down
          </button>

          <button
            type="button"
            onClick={clearText}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:outline outline-2"
          >
            Clear Text
          </button>

          <button
            type="button"
            onClick={copyText}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:outline outline-2"
          >
            Copy
          </button>
        </div>

        <div className="contaier mt-4 text-lg">
          <h1 className="text-3xl">Your text summary</h1>
          <p className="mt-2">
            {text.split(" ").length} words, {text.length} characters
          </p>
          <hr />
          <h2 className="font-medium">Preview</h2>
          <p className="text-base">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default TextForm;
