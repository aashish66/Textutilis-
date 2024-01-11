import React from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [setbtn, setmyBtn] = useState("Enable dark mode");
  // let toogleBtn = () => {
  //   if (myStyle.color === "black") {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "2 px solid white",
  //     });
  //     setmyBtn("Enable Light mode");
  //   } else {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });

  //     setmyBtn("Enable dark mode");
  //   }
  // };
  return (
    <div
      className="container my-3"
      style={{ color: props.mode === "dark" ? "light" : "dark" }}
    >
      <h1>About Us</h1>
      <h3 className="my-3">
        Welcome to TextUtilis, the ultimate web app that simplifies text
        manipulation tasks with just a few clicks. Whether you're a writer,
        editor, or anyone dealing with text, TextUtilis provides essential tools
        to enhance and manage your content effortlessly.
      </h3>{" "}
      <ul>
        <h5> Key Functions:</h5>
        <li>
          {" "}
          <b className="my-2"> Uppercase Converter:</b> Transform your text into
          bold, attention-grabbing uppercase letters. Ideal for headings,
          titles, or making a statement
        </li>
        <li>
          <b className="my-2"> Lowercase Converter:</b> Need a more subtle
          approach? Convert your text to lowercase for a clean and uniform
          appearance.
        </li>
        <li>
          <b>Space Eliminator:</b> Say goodbye to messy spacing! TextUtilis
          efficiently removes extra spaces, ensuring your text is neat and
          well-organized.
        </li>
        <li>
          <b>Copy Text:</b> Easily copy the manipulated text to your clipboard
          with a single click. Quick and convenient for seamless integration
          into your documents, emails, or social media posts.
        </li>
      </ul>
      <ul>
        <h5> How It Works:</h5>
        <li>
          <b>Input Text:</b> Paste or type your text into the TextUtilis editor.
        </li>
        <li>
          {" "}
          <b> Choose Function:</b> Select the desired function from the menu -
          Uppercase, Lowercase, Remove Spaces, or Copy Text.
        </li>
        <li>
          {" "}
          <b> Click and Apply:</b> Execute the chosen function with a click, and
          instantly see the transformation in the preview.
        </li>
        <li>
          {" "}
          <b>Copy or Save:</b> Copy the modified text to your clipboard or save
          it for future use
        </li>
      </ul>
      <ul>
        <h5>Why TextUtilis?</h5>
        <li>
          <b>User-Friendly Interface: </b>No need for complex settings.
          TextUtilis keeps it simple for users of all skill levels.
        </li>
        <li>
          <b>Time-Saving Copy Feature: </b>Copy manipulated text instantly,
          saving you valuable time during your workflow.
        </li>
        <li>
          {" "}
          <b>Versatile Application:</b> Whether you're working on a document,
          email, or social media post, TextUtilis is your go-to for text
          enhancements.
        </li>
      </ul>
    </div>
  );
}
