import React,{useState} from 'react'


export default function Wordcount() {
    const [text,setText]=useState('Enter Paragraph Here');
    const handleChange = (event) => {
        setText(event.target.value);
        }
    const handleClearText = () =>{
      let newtext='';
      setText(newtext);
    }

    const handleUpperCase = () =>{
      let newtext=text.toUpperCase();
      setText(newtext);
    }

    const handleLowerCase = () => {
      let newtext=text.toLowerCase();
      setText(newtext);
    }
  return (
    <>
    <h4>Enter your paragraph below: </h4>
    <div className='container my-3'>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleChange} id="textbox" rows="10"></textarea>
        </div>
        {/* <button type="submit" className="btn btn-primary">Count</button> */}
    </div>
    <button type="button" className="btn btn-dark mx-2" onClick={handleUpperCase}>Convert to Upper Case</button>
    <button type="button" className="btn btn-dark mx-2" onClick={handleLowerCase}>Convert to Lower Case</button>
    <button type="button" className="btn btn-dark" onClick={handleClearText}>Clear Text</button>
    <div className='container my-3'>
    <h4>Summary: </h4>
    <p>{text.split(" ").length} Words </p>
    <p>{text.length} Characters</p>
    </div>
    </>
  )
}
