import React, { useState } from "react";
export default function TextForm(props) {
    const [text, setText] = useState(" ");


    const handleUPClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase ","success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowerCase ","success")
    }

    const handleClear = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared ","warning")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handelCopy = (event) => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard  ","success")
    }

    const extraSpaces = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra spaces removed  ","success")
    }
    const handleSelectAll = (event) => {
        event.text.select();
    }

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        <h1>{props.heading}</h1>
                    </label>
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUPClick}>Uppercase</button>
                <button className="btn btn-primary  mx-3" onClick={handleLowClick}>Lowercase</button>
                <button className="btn btn-primary  mx-3" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary  mx-3" onClick={handelCopy}>Copy</button>
                <button className="btn btn-primary  mx-3" onClick={extraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary  mx-3" onClick={handleSelectAll}>select all </button>
            </div>
            <div className="container">
                <h1>text </h1>
                <p my-2><ui>
                    <li>Words: {text.split(" ").length}</li>
                    <li>Charecters: {text.length} </li>
                    <li>Minuts to read : {text.split(" ").length * 0.008} </li>
                </ui></p>
                <h2>Preview</h2>
                {/* <p>{result}</p> */}
            </div>
        </>
    );
}
