import { useState } from "react";
import Feedback from "./components/Feedback";
import "./App.css";
import Descriptions from "./components/Descriptions";
import Options from "./components/Options";

function App() {
  const FeedbackTypes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  return (
    <>
      <Descriptions />
      <Options />
      <Feedback FeedbackTypes={FeedbackTypes} />
    </>
  );
}

export default App;
