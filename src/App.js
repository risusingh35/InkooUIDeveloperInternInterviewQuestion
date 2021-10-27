import "./styles.css";
import React from "react";
import Question from "./inkoop.PNG";

export default function App() {
  return (
    <div className="App">
      <h1>Inkoo UI Developer Intern Interview Question</h1>
      <img src={Question} value="inkoop" alt="" />
      <p>
        Write the code for below image only use css and html,
        <li>While changing width or height of any div css will not changed</li>
      </p>
      <div class="box">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    </div>
  );
}
