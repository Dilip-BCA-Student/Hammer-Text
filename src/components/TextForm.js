import React, { useState } from 'react'

export default function TextForm(props) {
  const handleupClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }

  const handlelwClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  }

  const handleCrText = () =>{
    const newText = '';
    setText(newText);
  }

  const handleCpText = () =>{
    console.log("Copied");
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);

  }

  const handlespText = ()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }



  const [text, setText] = useState('Enter text here...');
  //text = "new text"//Wrong way to change the state
  // setText("new text"); //Right way to change the state.

  return (
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className='container' >{props.headline}</h1>

      <div className="mb-3">
        {/* <label f
        or="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
        <textarea value={text} onChange={handleOnChange}  className="form-control .bg-light text-dark"  style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="exampleFormControlTextarea1" rows="9" ></textarea>
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleupClick}>convert to uppercase</button>

        <button className="btn btn-primary mx-2 my-2" onClick={handlelwClick}>convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCrText}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCpText}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlespText}>Remove space</button>

      </div>
      <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1> Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </div>
  )



}
