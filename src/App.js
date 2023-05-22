import React, { Component, useState } from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import FunctionClick from "./components/FunctionClick";
//import StyleSheet from "./components/StyleSheet";
import Button from "./components/Button";
import PrimaryButton from "./components/PrimaryButton";
import TertiaryButton from "./components/TertiaryButton";
import UseState from "./components/Ignore/UseState";
import { AUseState } from "./components/Ignore/AUseState";
function App() {
  // class App extends Component {
  //   render() {

  // function onClick() {
  //   console.log("Secondary Button Clicked");
  // }
  // function tBonClick() {
  //   console.log("Tertiary Button clicked");
  // }

  return (
    <div className="App">
      <AUseState />
      {/* <TertiaryButton
          title="TertiaryButton"
          className="tertiary"
          clickMe={tBonClick}
        />
        <PrimaryButton
          title="Primary Button"
          onClick={onClick}
          Primary="primary"
        ></PrimaryButton>
        <Button type="Secondary" onClick={onClick} title="secondary">
          Secondary
        </Button>
        <StyleSheet primary={true} />
        <FunctionClick />
        <Message></Message>
        <Greet name="Shruthi" firstName="Shruthi Hulivana">
          <p> This is Shruthi children</p>
        </Greet>
        <Greet
          name="Mahesh"
          firstName="Mahesh Kumar"
          lastName="Mandya NIngappa"
        />
        <Greet name="Sanjana" lastName="Mahesh">
          <button>Action</button>
        </Greet>
        <Greet name="Pranav" lastName="Mahesh">
          <p>Hello world!</p>
        </Greet>
        <Welcome name="Bruce" heroname="Spiderman" />
        <Welcome name="Diana" heroname="Princess" />
        <Hello /> */}
    </div>
  );
}

export default App;
