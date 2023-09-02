/* eslint-disable react/jsx-no-undef */
import "./App.css";
import React, { useState } from "react";

function App() {
  const [curr, setcurr] = useState("");
  const [update, setupdate] = useState([]);

  function ck(e) {
    setcurr(e.target.value);
  }

  function submit() {
    setupdate([...update, curr]);
    console.log("list item ", { item: update, key: Date.now });
    setcurr("");
  }

  function deldata(i) {
    const updatedlist = update.filter((elem, id) => {
      return i != id;
    });
    setupdate(updatedlist);
  }

  return (
    <>
      <div className="header">
        <h2>LODO LIST</h2>
      </div>
      <br></br>
      <div className="Todo">
        <div className="box">
          <input type="text" class="ip" value={curr} onChange={ck}></input>
          <button className="btn" onClick={submit}>
            Add
          </button>
        </div>

        <ol>
          {update != [] &&
            update.map((data, i) => {
              return (
                <li key={i}>
                  <div>{data}</div>
                  <button onClick={() => deldata(i)}>delete</button>
                </li>
              );
            })}
        </ol>
      </div>
    </>
  );
}

export default App;
