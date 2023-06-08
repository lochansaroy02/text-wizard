import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";



function App() {

  let [mode, setMode] = useState('light'); //will tell whether dark mode is enable or not 
  const [alert, setAlert] = useState(null);


  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const darkMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }
  return (
    <>

      <Navbar
        title="Text"
        mode={mode}
        darkMode={darkMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the text" />
      </div>
    </>
  );
}

export default App;
