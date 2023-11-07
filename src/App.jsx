import Styles from "./App.module.css"
import Display from "./components/Display"
import ButtonsContainer from "./components/ButtonsContainer"
import "./App.css"

function App() {

  return (
   <div className={Styles.calculator}>
      <Display/>
      <ButtonsContainer/>
   </div>
  )
}

export default App
