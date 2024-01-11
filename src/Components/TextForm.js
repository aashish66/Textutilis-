import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");

  const buttononClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Uppercase Clicked!", "Success");
  };
  const onchangeHandler = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  };
  const buttonlowCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("LowerCase Clicked", "Success");
  };
  const buttonDel = () => {
    setText("");
    props.showAlert("Deleted", "Successfully");
  };

  // extra space
  const removeSpace = () => {
    let newtext = text.split(/[ ]+ /);
    setText(newtext.join(" "));
    props.showAlert("ExtraSpace Removed", "Success");
  };
  // handle copy
  const handleCopy = () => {
    var text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied", "Successfully");
  };
  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onchangeHandler}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="my-box"
            rows="8"
          ></textarea>
        </div>
        <button
          type="btn"
          className={`btn btn-${
            props.color === "primary" ? "danger" : "primary"
          } mx-2`}
          onClick={buttononClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="btn"
          className={`btn btn-${
            props.color === "primary" ? "danger" : "primary"
          } mx-2`}
          onClick={buttonlowCase}
        >
          Convert to Lowercase
        </button>

        <button
          type="btn"
          className={`btn btn-${
            props.color === "primary" ? "danger" : "primary"
          } mx-2`}
          onClick={removeSpace}
        >
          Remove Extra Space
        </button>
        <button
          type="btn"
          className={`btn btn-${
            props.color === "primary" ? "danger" : "primary"
          } mx-2`}
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button type="btn" className="btn btn-danger mx-2" onClick={buttonDel}>
          Erase
        </button>
      </div>
      <div
        className="summary my-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Summary</h2>
        <h6>
          Words:{text.split(" ").length - 1} & Character:{text.length}
        </h6>
        {/* <h6>Total no of letters: {text.length}</h>
        <h6>Total no of words: {text.split(" ").length}</h6> */}
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
