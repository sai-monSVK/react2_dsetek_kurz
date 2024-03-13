import './App.css'
import React, {useState} from "react"


const App = () => {

const [firstName, setFirstName] = useState("")

  const procesForm = (e) => {
    e.preventDefault();
    if (firstName) {
      console.log(firstName);
    } else {
      console.log('Nebolo nic vyplnene');
    }
  }
  
  return (
    <div className="section-form">
      <form onSubmit={procesForm}>
        <input 
          type="text" 
          name="userName" 
          id="userName" 
          placeholder="Meno" 
          value={firstName}
          onChange={(event)=> setFirstName(event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App