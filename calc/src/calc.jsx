import { useState } from 'react';

export default function Main() {
  const [displayValue, setDisplayValue] = useState('');
  const [answer,setAnswer] = useState(0);
  const handleClick = (event) => {
    const { value } = event.currentTarget;
    if (value == "AC"){
      setDisplayValue('');
      setAnswer(0)
    } else if (value == "="){
      setAnswer(eval(displayValue));
    } else {
      setDisplayValue((prev) => prev + value);
    }
  };
  return (
    <>
      <form>
        <input type="text" readOnly disabled placeholder={displayValue}  className ="display" />
        <input type="text" readOnly disabled value= {answer} className="answer"/> {/* You might want to remove this second input */}
      </form>

      <div className="flex">
        <div className="key-pad">
          <button id="button" value="AC" onClick={handleClick}>AC</button>
          <button id="button" value="+" onClick={handleClick}>+/-</button>
          <button id="button" value="%" onClick={handleClick}>%</button>
          <button id="button" value="/" onClick={handleClick}>÷</button>
          <button id="button" value="7" onClick={handleClick}>7</button>
          <button id="button" value="8" onClick={handleClick}>8</button>
          <button id="button" value="9" onClick={handleClick}>9</button>
          <button id="button" value="*" onClick={handleClick}>×</button>
          <button id="button" value="4" onClick={handleClick}>4</button>
          <button id="button" value="5" onClick={handleClick}>5</button>
          <button id="button" value="6" onClick={handleClick}>6</button>
          <button id="button" value="-" onClick={handleClick}>-</button>
          <button id="button" value="1" onClick={handleClick}>1</button>
          <button id="button" value="2" onClick={handleClick}>2</button>
          <button id="button" value="3" onClick={handleClick}>3</button>
          <button id="button" value="+" onClick={handleClick}>+</button>
          <button id="button" className="zero" value="0" onClick={handleClick}>0</button>
          <button id="button" value="." onClick={handleClick}>.</button>
          <button id="button" value="=" onClick={handleClick}>=</button>
        </div>
      </div>
    </>
  );
}
