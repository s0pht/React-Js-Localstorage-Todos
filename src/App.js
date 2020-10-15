import React, {useState} from 'react';

import './App.css';
import Main from "./main_screen";
import Welcome from "./welcome_screen"

function App() {
 // erstes feld für den Namen, alles dahinter für die Tasks
  
  
const bool = () => {
    if(localStorage.getItem("name") !== null) {
      return true
    } else {
      return false
    }
  }



  const checkName = () => {
    if (localStorage.getItem("name") == ""){
      return false
    } else {
      return true
    }
  }

  const [loggedIn,setLoggedIn] = useState(checkName);
  

  // ab hier beginnt der eigentliche code

  if (loggedIn === false){
    return (

      <Welcome login={setLoggedIn}  />
    ) 
    
  }else {
    

      return (
    <div className="App">
      <Main name={localStorage.getItem("name")} lift={setLoggedIn}/> 
    </div>
  );
    }

  
}

export default App;