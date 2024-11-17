import { useState } from "react";

function Main() {
  const strength = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: '!@#$%^&*()_-+="<>/,.?',
  };

  const [passLength, setPassLength] = useState(8);
  const [generatedPass, setGeneratedPass] = useState("");
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  function handleChange(e) {
    setOptions({ ...options, [e.target.name]: !options[e.target.name] });
    setGeneratedPass("");
  }

  function generateStrongPass() {
    let passStrength = "";

    for (let x in options) {
      passStrength += options[x] ? strength[x] : "";
    }

    let output = "";
    for (let i = 0; i < passLength; i++) {
      output += passStrength[Math.floor(Math.random() * passStrength.length)];
    }
    setGeneratedPass(output);
  }

  return (
    <div className="passwordGenerate">
      <h1>Password Generator</h1>

      <div className="options">
        <label htmlFor="">
          <input
            type="checkbox"
            name="uppercase"
            checked={options.uppercase}
            onChange={handleChange}
          />
          <span>Uppercase Letters</span>
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="lowercase"
            checked={options.lowercase}
            onChange={handleChange}
          />
          <span>Lowercase Letters</span>
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="numbers"
            checked={options.numbers}
            onChange={handleChange}
          />
          <span>Numbers</span>
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="symbols"
            checked={options.symbols}
            onChange={handleChange}
          />
          <span>Symbols</span>
        </label>
      </div>

      <div className="inputs">
        <input
          type="number"
          placeholder="Password Length"
          value={passLength}
          onChange={(e) => {
            setPassLength(e.target.value);
            setGeneratedPass("");
          }}
        />
        <input
          type="text"
          readOnly
          placeholder="Generated Password"
          value={generatedPass}
        />
      </div>

      <div className="buttons">
        <button onClick={generateStrongPass}>Generate Password</button>
        <button>Copy Password</button>
      </div>
    </div>
  );
}
export default Main;
