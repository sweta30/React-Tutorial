import React, {useState} from 'react'





export default function Signup() {
  const handleClick = () =>{
    console.log("This was clicked");
    alert("it is pleasure to have you onboard : " + text.padStart("Strong"));
  }
  const handleChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('Learner');

  const [customstyle, setCustomstyle] = useState({
    color: 'dark',
    backgroundColor: 'white'
  });

  const handleModeChange = () => {
    if(customstyle.backgroundColor==='white')
    {
      setCustomstyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setTBtnext("Enable Light Mode")
    }
    else{
      setCustomstyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setTBtnext("Enable Dark Mode")
    }
  }

  const [btntext, setTBtnext] = useState('Enable Dark Mode');
  

  return (
  <>
  <div className="container my-5" style={customstyle}>
  <form>
    <center><h2>Welcome to our page {text} !!</h2></center>
    <h4>Enter Credential Below: </h4>
    <div className="row mb-3 my-5">
      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input type="email" className="form-control" id="inputEmail3" value={text} onChange={handleChange}/>
      </div>
    </div>
    <div className="row mb-3 my-3">
      <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
      <div className="col-sm-10 my-3">
        <input type="password" className="form-control" id="inputPassword3"/>
      </div>
    </div>
    <button type="submit" className="btn btn-primary my-5 mx-3" onClick={handleClick}>Sign in</button>
    <button type="button" className="btn btn-primary my-5" onClick={handleModeChange}>{btntext}</button>
  </form>
  </div>
  </>
  )
}
