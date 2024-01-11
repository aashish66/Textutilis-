import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [color, setColor] = useState("blue");
  const toogleColor = () => {
    if (color === "primary") {
      setColor("tertiary");
    } else {
      setColor("primary");
    }
  };
  const [mode, setMode] = useState("light");
  const tooglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("This is dark mode", "success");
      document.title = "Darkmode enabled";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("This is light mode", "sucess");
      document.title = "Lightmode enabled";
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar
          title="Navbar"
          home=" Home"
          mode={mode}
          tooglemode={tooglemode}
          color={color}
          toogleColor={toogleColor}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/about"
            element={<About mode={mode} tooglemode={tooglemode} />}
          />
          <Route
            exact
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  heading="Enter your text here"
                  mode={mode}
                  tooglemode={tooglemode}
                  showAlert={showAlert}
                  toogleColor={toogleColor}
                  color={color}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
