import Styles from "./App.module.css"
import Display from "./components/Display"
import ButtonsContainer from "./components/ButtonsContainer"
import "./App.css"
import { useState } from "react"

function App() {

  const [calval, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText ==='C') {
      setCalval("")
    } else if (buttonText === '=') {
      const result = eval(calval);
      setCalval(result);
    } else {
      const newDisplayvalue = calval + buttonText;
      setCalval(newDisplayvalue)
    }
  }
  return (
   <div className={Styles.calculator}>
      <Display calval={calval}/>
      <ButtonsContainer onButtonClick={onButtonClick}/>
   </div>
  )
}

export default App
