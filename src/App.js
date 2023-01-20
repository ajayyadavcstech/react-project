import './App.css';
import React ,{useState} from 'react' 
import Welcome from './Components/welcome/Welcome'  
function App() {
  var [name,setname] = useState("")
  var [welcome,setwelcom] = useState("")
  function fun(){
    var newname = name
    setname("")
    return setwelcom(<Welcome name={newname}/>)
  }
  return (
    <div className="App">
        Enter Your Name : <input type="text" value={name} onChange={(event)=>(setname(event.target.value))}/>
          {/* <br/> */}
          <button onClick={fun}>Login</button>
          <div>{welcome}</div>
          <p>Assignment Done by Shikhar Dheer Srivastava :- 12013515</p>
    </div>
  );
}

export default App;
