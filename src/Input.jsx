import React, { useState } from "react";
import money from "./money.png";
import data from "./Data.jsx";

function Input() {
  const [meme, setmeme] = useState({
    toptext: "",
    bottomtext: "",
    ranimage: "https://i.imgflip.com/1bij.jpg",
  });

  const [alldata, setalldata] = useState(data);

  const choosesomething = () => {
    const ran = Math.floor(Math.random() * alldata.data.memes.length);
    var iimage = alldata.data.memes[ran].url;

    setmeme((prev) => {
      return {
        ...prev,
        ranimage: iimage,
      };
    });
  };

  function prevent(e) {
    e.preventDefault();
  }

  function handler(event) {
    setmeme((data) => {
      return {
        ...data,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <main>
      <div className="form">
        <input
          onChange={handler}
          value={meme.toptext}
          type="text"
          placeholder="Top text"
          className="form--input"
          name="toptext"
        />
        <input
          onChange={handler}
          value={meme.bottomtext}
          name="bottomtext"
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button className="form--button" onClick={choosesomething}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.ranimage} className="meme--image" />
        <h2 className="meme--text top">{meme.toptext}</h2>
        <h2 className="meme--text bottom">{meme.bottomtext}</h2>
      </div>
    </main>
  );
}

export default Input;
