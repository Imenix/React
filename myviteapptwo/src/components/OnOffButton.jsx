import { useState } from "react";
import "./OnOffButton.css";

const OnOffButton = () => {
  const ON_STATE = "on",
    OFF_STATE = "off";

  const ON_TEXT = "ON",
    OFF_TEXT = "OFF";

  const { state, setState } = useState(ON_STATE);
  const { text, setText } = useState(ON_TEXT);

  const swtichState = () => {
    setState(state === ON_STATE ? OFF_STATE : ON_STATE);
  };

  const switchText = () => {
    setText(text === ON_TEXT ? OFF_TEXT : ON_TEXT);
  };
  return (
    <div className={"button-container" + state}>
      <button onClick={switchState}>{switchText}</button>
    </div>
  );
};
export default OnOffButton;
